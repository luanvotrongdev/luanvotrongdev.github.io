// GymScene.js — Three.js rendering: renderer, camera, room, walls, problem markers,
// raycast picking and camera moves. Reads `state`, never changes it.
// THREE and THREE.OrbitControls come from the classic <script> tags in index.html.
import { state, inFilter } from '../state.js';
import { r3 } from '../utils.js';
import { SceneAssets } from './SceneAssets.js';
import { Room } from './Room.js';
import { WallObject } from './WallObject.js';
import { ProblemMarker } from './ProblemMarker.js';

const THREE = window.THREE;
export const HOME = { cam: new THREE.Vector3(0, 4.2, 9.5), target: new THREE.Vector3(0, 1.8, -2.5) };

export class GymScene {
  constructor(viewport) {
    this.viewport = viewport;
    this.assets = new SceneAssets();
    this.walls = new Map();    // wall id -> WallObject
    this.markers = [];         // ProblemMarker[]
    this.tween = null;
    this.tapHandler = () => {};
    this.rightTapHandler = () => {};

    this.initStage();
    this.initTapDetection();
    this.room = new Room(this.stage);
    this.room.resize(state.gymWidth, state.gymDepth);
    this.wallRoot = new THREE.Group(); this.stage.add(this.wallRoot);
    this.markerRoot = new THREE.Group(); this.stage.add(this.markerRoot);

    new ResizeObserver(() => this.resize()).observe(viewport);
    this.resize();
    this.loop();
  }

  // ---- Setup: renderer, camera, controls, lights, themed background
  initStage() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.viewport.prepend(this.renderer.domElement);

    this.stage = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.05, 100);
    this.camera.position.copy(HOME.cam);
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.copy(HOME.target);
    this.controls.enableDamping = true;
    this.controls.maxPolarAngle = Math.PI * 0.62;
    this.controls.minDistance = 1.5;
    this.controls.maxDistance = 24;
    this.controls.update();
    this.controls.addEventListener('start', () => { this.tween = null; });

    this.stage.add(new THREE.HemisphereLight(0xffffff, 0x6b7280, 0.85));
    const sun = new THREE.DirectionalLight(0xffffff, 0.55);
    sun.position.set(4, 9, 6);
    this.stage.add(sun);

    // Background follows the page theme (--scene token)
    const applyTheme = () => {
      const c = getComputedStyle(document.documentElement).getPropertyValue('--scene').trim() || '#e6e3dc';
      this.stage.background = new THREE.Color(c);
    };
    applyTheme();
    try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme); } catch (e) { /* old browser */ }
    new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  // Tap = pointer up within 6px of pointer down (anything more is an orbit drag)
  initTapDetection() {
    let down = null;
    const el = this.renderer.domElement;
    el.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, b: e.button }; });
    el.addEventListener('pointerup', e => {
      if (!down || (down.b !== 0 && down.b !== 2)) { down = null; return; }
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y), b = down.b;
      down = null;
      if (moved <= 6) (b === 0 ? this.tapHandler : this.rightTapHandler)(e); // right drag is a pan
    });
    el.addEventListener('contextmenu', e => e.preventDefault());
  }

  onTap(fn) { this.tapHandler = fn; }
  onRightTap(fn) { this.rightTapHandler = fn; }

  // ---- Room + walls
  buildWalls() {
    this.room.resize(state.gymWidth, state.gymDepth);
    this.walls.forEach(w => w.dispose());
    this.walls.clear();
    state.walls.forEach(data => {
      const wall = new WallObject(data, this.assets, state.mode === 'walls' && data.id === state.wallSel);
      this.wallRoot.add(wall.group);
      this.walls.set(data.id, wall);
    });
    this.stage.updateMatrixWorld(true);
  }

  // ---- Problem markers
  rebuildMarkers() {
    this.markers.forEach(m => m.dispose());
    this.markers = [];
    const wallsMode = state.mode === 'walls';
    state.problems.forEach(p => {
      const placement = this.problemWorld(p); if (!placement) return;
      const marker = new ProblemMarker(p, placement, {
        faded: !inFilter(p) || (wallsMode && p.wall !== state.wallSel),
        showLabel: inFilter(p) && !wallsMode,
        selected: p.id === state.selectedId && !wallsMode
      }, this.assets);
      this.markerRoot.add(marker.root);
      this.markers.push(marker);
    });
  }

  // ---- Coordinate conversion (wall-local <-> world)
  problemWorld(p) {
    const wall = this.walls.get(p.wall);
    return wall ? wall.placement(p.u, p.v) : null;
  }
  // Closest of the given walls to a world point, as { wall (id), u, v } (used to migrate v1 data)
  nearestWall(wallIds, posArr) {
    const pt = new THREE.Vector3(...posArr);
    let best = null;
    wallIds.forEach(id => {
      const wall = this.walls.get(id); if (!wall) return;
      const l = wall.nearestLocal(pt);
      if (!best || l.d < best.d) best = { d: l.d, wall: id, u: l.u, v: l.v };
    });
    return best && { wall: best.wall, u: best.u, v: best.v };
  }

  rayFromEvent(ev) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((ev.clientX - rect.left) / rect.width) * 2 - 1, -((ev.clientY - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    return ray;
  }

  // ---- Picking: a problem hold (when withHolds) or a wall section under the pointer
  pick(ev, withHolds) {
    const ray = this.rayFromEvent(ev);
    if (withHolds) {
      const hh = ray.intersectObjects(this.markers.map(m => m.hold), false);
      if (hh.length) return { type: 'problem', id: hh[0].object.userData.problemId };
    }
    const faces = [...this.walls.values()].flatMap(w => [w.face, w.back]);
    const wh = ray.intersectObjects(faces, false);
    if (!wh.length) return null;
    const h = wh[0];
    if (h.object.userData.back) return { type: 'back', wallId: h.object.userData.wallId };
    const l = h.object.worldToLocal(h.point.clone());
    return { type: 'wall', wallId: h.object.userData.wallId, u: r3(l.x), v: r3(l.y + h.object.userData.len / 2) };
  }

  // ---- Camera moves
  flyTo(target, cam) { this.tween = { target: target.clone(), cam: cam.clone() }; }
  goHome() { this.flyTo(HOME.target, HOME.cam); }
  lookTarget() { return this.controls.target.clone(); }

  focusWall(id) {
    const wall = this.walls.get(id); if (!wall) return;
    const c = wall.center();
    this.flyTo(c, c.clone().addScaledVector(wall.front(), 6.5).add(new THREE.Vector3(0, 0.6, 0)));
  }
  focusProblem(p) {
    const w = this.problemWorld(p); if (!w) return;
    const horiz = new THREE.Vector3(w.normal.x, 0, w.normal.z);
    if (horiz.lengthSq() < 0.05) horiz.copy(this.walls.get(p.wall).front()); // roofs face down
    horiz.normalize();
    const cam = w.pos.clone().addScaledVector(horiz, 3.2);
    cam.y = Math.max(1.4, w.pos.y - 0.4);
    this.flyTo(w.pos, cam);
  }

  // ---- Resize + render loop
  resize() {
    const w = this.viewport.clientWidth, h = this.viewport.clientHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / Math.max(h, 1);
    this.camera.updateProjectionMatrix();
  }

  loop() {
    requestAnimationFrame(() => this.loop());
    if (this.tween) {
      this.controls.target.lerp(this.tween.target, 0.12);
      this.camera.position.lerp(this.tween.cam, 0.12);
      if (this.camera.position.distanceTo(this.tween.cam) < 0.01) this.tween = null;
    }
    this.controls.update();
    if (this.camera.position.y < 0.3) this.camera.position.y = 0.3;
    this.renderer.render(this.stage, this.camera);
  }
}
