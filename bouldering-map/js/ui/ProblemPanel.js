// =====================================================================
// ProblemPanel.js — Challenges (課題) edit
// Placing problem markers on walls, editing color / grade / number,
// deleting, the grade filter, the problem list and the View-mode info card.
// =====================================================================
import { GRADES, TAPES, gradeLabel, tape } from '../config.js';
import { state, snapshot, save, selectedProblem, nextNumber, inFilter, wallName, shortName } from '../state.js';
import { $, esc, uid } from '../utils.js';

export class ProblemPanel {
  constructor(app) {
    this.app = app;
    const gradeOpts = GRADES.map(g => `<option value="${g.v}">${g.l}</option>`).join('');
    $('grade').innerHTML = gradeOpts;
    $('fmin').innerHTML = gradeOpts;
    $('fmax').innerHTML = gradeOpts;
    $('swatches').innerHTML = TAPES.map(t =>
      `<button class="sw" data-c="${t.id}" style="background:${t.hex}" aria-label="${t.ja} ${t.id}" title="${t.ja}"></button>`).join('');

    $('swatches').addEventListener('click', e => { const b = e.target.closest('.sw'); if (b) this.updateField('color', b.dataset.c); });
    $('grade').addEventListener('change', e => this.updateField('grade', +e.target.value));
    $('no').addEventListener('change', e => this.updateField('no', Math.max(1, parseInt(e.target.value, 10) || 1)));
    $('deselect').addEventListener('click', () => this.select(null));
    $('del').addEventListener('click', () => this.deleteSelected());
    $('fmin').addEventListener('change', () => this.setFilter());
    $('fmax').addEventListener('change', () => this.setFilter());
    $('list').addEventListener('click', e => {
      const b = e.target.closest('.item'); if (!b) return;
      const p = state.problems.find(x => x.id === b.dataset.id);
      this.select(p.id);
      this.app.scene.focusProblem(p);
    });
  }

  // Called for taps in View and Problems mode. `hit` comes from scene.pick(ev, true).
  onTap(hit) {
    if (!hit) { this.select(null); return; }
    if (hit.type === 'problem') { this.select(hit.id === state.selectedId ? null : hit.id); return; }
    if (hit.type === 'back' || state.mode !== 'edit' || state.selectedId) { this.select(null); return; } // first tap just closes the current edit
    snapshot();
    state.problems.push({
      id: uid(), no: state.next.no, grade: state.next.grade, color: state.next.color,
      wall: hit.wallId, u: hit.u, v: hit.v
    });
    state.next.no = nextNumber();
    save();
    this.app.scene.rebuildMarkers();
    this.app.renderAll();
  }

  select(id) {
    state.selectedId = id;
    this.app.scene.rebuildMarkers();
    this.app.renderAll();
  }

  deleteSelected() { this.deleteById(state.selectedId); }

  deleteById(id) {
    const p = state.problems.find(x => x.id === id); if (!p) return;
    snapshot();
    state.problems = state.problems.filter(x => x !== p);
    if (state.selectedId === id) state.selectedId = null;
    save();
    this.app.scene.rebuildMarkers();
    this.app.renderAll();
  }

  // When a problem is selected the controls edit it; otherwise they set up the next placement
  updateField(key, val) {
    const sel = selectedProblem();
    if (sel) { snapshot(); sel[key] = val; save(); this.app.scene.rebuildMarkers(); }
    else state.next[key] = val;
    this.app.renderAll();
  }

  setFilter() {
    let a = +$('fmin').value, b = +$('fmax').value;
    if (a > b) [a, b] = [b, a];
    state.filter = { min: a, max: b };
    this.app.scene.rebuildMarkers();
    this.app.renderAll();
  }

  hint() {
    if (!state.walls.length) return 'このジムにはまだ壁がありません · 壁モードで追加してください';
    if (state.mode === 'edit') {
      return selectedProblem()
        ? 'パネルで色・グレード・番号を変更 · 何もない壁をタップで完了'
        : '壁をタップして配置 · ドラッグで回転 · マーカーをタップで編集';
    }
    return 'ドラッグで回転 · ピンチまたはスクロールでズーム · マーカーをタップで詳細';
  }

  render() {
    const sel = selectedProblem();

    // Editor card
    const src = sel || state.next;
    [...$('swatches').children].forEach(b => b.setAttribute('aria-pressed', b.dataset.c === src.color));
    $('grade').value = src.grade;
    $('no').value = src.no;
    $('editCard').classList.toggle('editing', !!sel);
    $('editTitle').textContent = sel ? `#${sel.no} を編集` : '新規マーカー';
    $('editMeta').textContent = sel ? shortName(wallName(sel.wall)) : `${tape(src.color).ja} · ${gradeLabel(src.grade)}`;
    $('selActions').hidden = !sel;

    // View-mode info card
    $('infoSec').hidden = state.mode !== 'view' || !sel;
    if (sel) {
      $('infoTitle').textContent = `#${sel.no}  ${gradeLabel(sel.grade)}`;
      $('infoMeta').textContent = `${tape(sel.color).ja}テープ`;
      $('infoWall').textContent = wallName(sel.wall);
    }

    // Filter + list
    $('fmin').value = state.filter.min;
    $('fmax').value = state.filter.max;
    const shown = state.problems.filter(inFilter).length;
    $('listLabel').textContent = `課題 · ${state.problems.length}件中${shown}件を表示`;
    const sorted = [...state.problems].sort((a, b) => a.no - b.no);
    $('list').innerHTML = sorted.length ? sorted.map(p => `
      <button class="item${inFilter(p) ? '' : ' dim'}" data-id="${p.id}" aria-current="${p.id === state.selectedId}">
        <span class="dot" style="background:${tape(p.color).hex}"></span>
        <span class="num">#${p.no}</span>
        <span class="wallname">${esc(wallName(p.wall))}</span>
        <span class="num">${gradeLabel(p.grade)}</span>
      </button>`).join('') : `<div class="empty">課題はまだありません。課題モードに切り替えて壁をタップしてください。</div>`;
  }
}
