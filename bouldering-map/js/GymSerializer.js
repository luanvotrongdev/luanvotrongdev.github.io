// GymSerializer.js — turns the gym state into the .json file format and back.
// Accepts v2 data ({gym, width, depth, walls, problems} with wall-local u/v) and v1 data
// (problems with world pos only). Walls are built first so v1 positions can be converted.
import { DATA_VERSION, DEFAULT_WALLS, LIMITS, UNSETTED_DEPTH, UNSETTED_WIDTH, gradeLabel, tape } from './config.js';
import { state, wallById, selectedWall, nextNumber } from './state.js';
import { clone, uid, r3, clamp } from './utils.js';

export const roomSize = (v, fallback) => clamp(+v || fallback, ...LIMITS.room);

export class GymSerializer {
  constructor(scene) {
    this.scene = scene;
  }

  export() {
    return JSON.stringify({
      format: 'boulder-map',
      version: DATA_VERSION,
      gym: state.gymName,
      width: state.gymWidth,
      depth: state.gymDepth,
      exportedAt: new Date().toISOString().slice(0, 10),
      walls: state.walls,
      problems: [...state.problems].sort((a, b) => a.no - b.no).map(p => {
        const w = this.scene.problemWorld(p);
        return {
          id: p.id, no: p.no, grade: p.grade, gradeLabel: gradeLabel(p.grade), color: p.color,
          wall: p.wall, u: p.u, v: p.v,
          // world-space copy for convenience; a viewer can also recompute it from the walls
          pos: w ? w.pos.toArray().map(r3) : null,
          normal: w ? w.normal.toArray().map(r3) : null
        };
      })
    }, null, 2);
  }

  // Replaces the gym in `state` with the data; returns how many problems were kept
  load(d) {
    let legacy = { segs: {}, groups: {} };
    if (Array.isArray(d.walls)) {
      const v = this.validWalls(d.walls);
      state.walls = v.walls;
      legacy = v.legacy;
    } else if (!state.walls.length) state.walls = clone(DEFAULT_WALLS);
    if (typeof d.gym === 'string' && d.gym.trim()) state.gymName = d.gym.trim();
    if (!Array.isArray(d)) {
      state.gymWidth = roomSize(d.width, UNSETTED_WIDTH);
      state.gymDepth = roomSize(d.depth, UNSETTED_DEPTH);
    }
    this.scene.buildWalls();
    const list = Array.isArray(d) ? d : (d.problems || []);
    state.problems = this.normalizeProblems(list, legacy);
    state.selectedId = null;
    if (!selectedWall()) state.wallSel = null;
    state.next.no = nextNumber();
    return { got: state.problems.length, total: list.length };
  }

  // Walls in the current format ({pos: [x,y,z], tilt, height}) pass through. Older walls
  // (a `profile` of sections) are split into one stacked wall per section; `legacy` records
  // where each old section went so problems can follow.
  validWalls(list) {
    const walls = [];
    const legacy = { segs: {}, groups: {} };   // segs: "wall:seg" -> new id; groups: old id -> new ids
    list.filter(w => w && w.id && Array.isArray(w.pos)).forEach(w => {
      const id = String(w.id);
      const name = String(w.name || w.id);
      const yaw = +w.yaw || 0;
      const width = clamp(+w.width || 3, ...LIMITS.wallWidth);
      const tint = /^#[0-9a-f]{6}$/i.test(w.tint) ? w.tint : '#dcc6a0';
      const px = clamp(+w.pos[0] || 0, ...LIMITS.wallPos);
      const base = (+w.pos[w.pos.length === 3 ? 2 : 1] || 0);
      const pz = clamp(base, ...LIMITS.wallPos);

      if (Array.isArray(w.profile) && w.profile.length) {
        const yawRad = yaw * Math.PI / 180;
        let y = 0, out = 0;   // height and horizontal reach (along the facing direction) of the section start
        legacy.groups[id] = [];
        w.profile.forEach((s, i) => {
          const len = clamp(+s.len || 1, ...LIMITS.wallHeight);
          const tilt = clamp(+s.a || 0, ...LIMITS.tilt);
          const nid = i === 0 ? id : `${id}-${i + 1}`;
          walls.push({
            id: nid, name: i === 0 ? name : `${name} ${i + 1}`,
            pos: [r3(px + out * Math.sin(yawRad)), r3(y), r3(pz + out * Math.cos(yawRad))],
            yaw, tilt, width, height: len, tint
          });
          legacy.segs[`${id}:${i}`] = nid;
          legacy.groups[id].push(nid);
          const a = tilt * Math.PI / 180;
          y += len * Math.cos(a); out += len * Math.sin(a);
        });
      } else {
        walls.push({
          id, name, pos: [px, clamp(w.pos.length === 3 ? +w.pos[1] || 0 : 0, ...LIMITS.wallY), pz],
          yaw, tilt: clamp(+w.tilt || 0, ...LIMITS.tilt), width,
          height: clamp(+w.height || 3, ...LIMITS.wallHeight), tint
        });
      }
    });
    return { walls, legacy };
  }

  normalizeProblems(list, legacy) {
    const out = [];
    list.forEach(p => {
      if (!p) return;
      let wall = legacy.segs[`${p.wall}:${p.seg}`] || p.wall;
      let loc = (Number.isFinite(p.u) && Number.isFinite(p.v) && wallById(wall)) ? { wall, u: p.u, v: p.v } : null;
      if (!loc && Array.isArray(p.pos)) loc = this.scene.nearestWall(legacy.groups[p.wall] || [p.wall], p.pos);
      if (!loc || !wallById(loc.wall)) return;
      out.push({ id: p.id || uid(), no: +p.no || 1, grade: +p.grade || -5, color: tape(p.color).id, ...loc });
    });
    return out;
  }
}
