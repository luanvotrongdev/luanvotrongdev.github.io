// =====================================================================
// WallPanel.js — Wall edit
// Selecting walls, editing position / tilt / facing / size / color,
// adding (also stacked on top of another wall) and deleting walls.
// =====================================================================
import { WALL_TINTS, LIMITS, kindOf } from '../config.js';
import { state, snapshot, save, selectedWall, selectedProblem, problemsOnWall } from '../state.js';
import { $, esc, uid, r3, readNum } from '../utils.js';

const THREE = window.THREE;

export class WallPanel {
  constructor(app) {
    this.app = app;
    this.delArmed = false;   // delete needs a second tap
    this.editArmed = true;   // one undo step per field-editing session

    $('wallChips').addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) this.select(b.dataset.wall, true); });
    $('wallForm').addEventListener('focusin', () => { this.editArmed = true; });

    // Live field edits
    const field = (id, apply) => $(id).addEventListener('input', e => { this.beginEdit(); apply(selectedWall(), e.target); this.changed(false); });
    field('wName',   (w, el) => { w.name = el.value || '壁'; });
    field('wX',      (w, el) => { w.pos[0] = readNum(el, LIMITS.wallPos, w.pos[0]); });
    field('wY',      (w, el) => { w.pos[1] = readNum(el, LIMITS.wallY, w.pos[1]); });
    field('wZ',      (w, el) => { w.pos[2] = readNum(el, LIMITS.wallPos, w.pos[2]); });
    field('wTilt',   (w, el) => { w.tilt = readNum(el, LIMITS.tilt, w.tilt); });
    field('wYaw',    (w, el) => { w.yaw = readNum(el, LIMITS.yaw, w.yaw); });
    field('wWidth',  (w, el) => { w.width = readNum(el, LIMITS.wallWidth, w.width); });
    field('wHeight', (w, el) => { w.height = readNum(el, LIMITS.wallHeight, w.height); });
    field('wTint',   (w, el) => { w.tint = el.value; });

    $('stackWall').addEventListener('click', () => this.stackWall());
    $('addLeft').addEventListener('click', () => this.addBeside(-1));
    $('addRight').addEventListener('click', () => this.addBeside(1));
    $('delWall').addEventListener('click', () => this.deleteWall());
    $('addWall').addEventListener('click', () => this.addWall());
  }

  // Called for taps in Walls mode. `hit` comes from scene.pick(ev, false).
  onTap(hit) { this.select(hit ? hit.wallId : null); }

  select(id, fly) {
    state.wallSel = id;
    this.delArmed = false;
    this.app.scene.buildWalls();
    this.app.scene.rebuildMarkers();
    this.app.renderAll();
    this.renderForm();
    if (id && fly) this.app.scene.focusWall(id);
  }

  reset() { this.delArmed = false; this.editArmed = true; }

  hint() {
    return state.wallSel
      ? 'パネルで選択中の壁を編集、端に壁を追加、または別の壁をタップ'
      : '壁をタップして選択、または新しい壁を追加';
  }

  // ---- Structural edits
  addWall() {
    snapshot();
    const t = this.app.scene.lookTarget();
    const w = {
      id: 'wall-' + uid(),
      name: `壁 ${state.walls.length + 1}`,
      pos: [r3(t.x), 0, r3(t.z)], yaw: 0, tilt: 10, width: 3, height: 4,
      tint: WALL_TINTS[state.walls.length % WALL_TINTS.length]
    };
    this.addAndSelect(w);
  }

  // New wall right next to the selected one, same facing, tilt and size (dir: -1 left, 1 right as seen from the front)
  addBeside(dir) {
    const base = selectedWall(); snapshot();
    const yaw = THREE.MathUtils.degToRad(base.yaw), d = dir * base.width;
    this.addAndSelect({
      ...base, pos: [r3(base.pos[0] + d * Math.cos(yaw)), base.pos[1], r3(base.pos[2] - d * Math.sin(yaw))],
      id: 'wall-' + uid(), name: `${base.name.split(' ')[0]} ${state.walls.length + 1}`
    });
  }

  // New wall whose bottom edge meets the top edge of the selected one (own tilt, same facing and width)
  stackWall() {
    const base = selectedWall(); snapshot();
    const a = THREE.MathUtils.degToRad(base.tilt), yaw = THREE.MathUtils.degToRad(base.yaw);
    const reach = base.height * Math.sin(a);
    const w = {
      id: 'wall-' + uid(),
      name: `${base.name.split(' ')[0]} ${state.walls.length + 1}`,
      pos: [r3(base.pos[0] + reach * Math.sin(yaw)), r3(base.pos[1] + base.height * Math.cos(a)), r3(base.pos[2] + reach * Math.cos(yaw))],
      yaw: base.yaw, tilt: Math.min(LIMITS.tilt[1], base.tilt + 20), width: base.width, height: 2, tint: base.tint
    };
    this.addAndSelect(w);
  }

  addAndSelect(w) {
    state.walls.push(w);
    save();
    this.select(w.id, true);
    $('wName').focus();
    $('wName').select();
  }

  deleteWall() {
    if (!this.delArmed) { this.delArmed = true; this.renderForm(); return; }
    const w = selectedWall(); snapshot();
    state.walls = state.walls.filter(x => x !== w);
    state.problems = state.problems.filter(p => p.wall !== w.id);
    if (state.selectedId && !selectedProblem()) state.selectedId = null;
    state.wallSel = null;
    this.delArmed = false;
    save();
    this.app.scene.buildWalls();
    this.app.scene.rebuildMarkers();
    this.app.renderAll();
    this.renderForm();
  }

  // ---- Helpers
  beginEdit() { if (this.editArmed) { snapshot(); this.editArmed = false; } }

  changed(rebuildForm) {
    if (!selectedWall()) return;
    save();
    this.app.scene.buildWalls();
    this.app.scene.rebuildMarkers();
    this.app.renderAll();
    if (rebuildForm) this.renderForm();
  }

  wallStats(w) {
    const a = THREE.MathUtils.degToRad(w.tilt);
    const top = w.pos[1] + w.height * Math.cos(a), reach = w.height * Math.sin(a);
    const n = problemsOnWall(w.id).length;
    return `${kindOf(w.tilt)} · 上端 ${top.toFixed(1)} m · 張り出し ${reach.toFixed(1)} m · 課題 ${n}件`;
  }

  // ---- Rendering
  // render(): cheap parts that are safe to refresh while typing (chips, stats)
  render() {
    $('wallChips').innerHTML = state.walls.map(w => `
      <button class="chip" data-wall="${w.id}" aria-pressed="${w.id === state.wallSel}">
        <span class="dot" style="background:${w.tint}"></span>${esc(w.name)}
      </button>`).join('');
    const w = selectedWall();
    if (w) $('wallMeta').textContent = this.wallStats(w);
  }

  // renderForm(): rebuilds the inputs; only call on selection or structural changes (it resets focus)
  renderForm() {
    const w = selectedWall();
    $('wallForm').hidden = !w;
    if (!w) return;
    this.fillFields(w);
  }

  fillFields(w) {
    $('wName').value = w.name;
    $('wX').value = w.pos[0];
    $('wY').value = w.pos[1];
    $('wZ').value = w.pos[2];
    $('wTilt').value = w.tilt;
    $('wYaw').value = w.yaw;
    $('wWidth').value = w.width;
    $('wHeight').value = w.height;
    $('wTint').value = w.tint;
    $('wallMeta').textContent = this.wallStats(w);
    const dw = $('delWall');
    const n = problemsOnWall(w.id).length;
    dw.classList.toggle('armed', this.delArmed);
    dw.textContent = this.delArmed ? (n ? `壁と課題${n}件を削除しますか？` : 'もう一度タップで削除') : '壁を削除';
  }
}
