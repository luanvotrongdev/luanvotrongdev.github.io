// FileDialogs.js — gym files: new gym, save (download .json), open (file or pasted JSON), gym name.
// The .json file is the user's gym; localStorage only keeps the current one between visits.
import { UNNAMED_GYM, UNSETTED_DEPTH, UNSETTED_WIDTH } from '../config.js';
import { state, snapshot, save, nextNumber } from '../state.js';
import { roomSize } from '../GymSerializer.js';
import { $ } from '../utils.js';

export class FileDialogs {
  constructor(app) {
    this.app = app;

    // Save / open dialog
    $('exportBtn').addEventListener('click', () => this.openModal('export'));
    $('importBtn').addEventListener('click', () => this.openModal('import'));
    $('closeModal').addEventListener('click', () => this.close());
    $('modal').addEventListener('click', e => { if (e.target === $('modal')) this.close(); });
    $('downloadJson').addEventListener('click', () => this.download());
    $('pickFile').addEventListener('change', e => this.readPickedFile(e));
    $('copyJson').addEventListener('click', () => this.copy());
    $('loadJson').addEventListener('click', () => this.importText($('json').value));

    // New gym dialog
    $('newBtn').addEventListener('click', () => {
      $('newModal').hidden = false;
      $('newName').value = '';
      $('newWidth').value = UNSETTED_WIDTH;
      $('newDepth').value = UNSETTED_DEPTH;
      $('newName').focus();
    });
    $('closeNew').addEventListener('click', () => this.close());
    $('newModal').addEventListener('click', e => { if (e.target === $('newModal')) this.close(); });
    $('newBlank').addEventListener('click', () => this.newGym());

    // Gym name
    $('gymName').addEventListener('input', e => {
      state.gymName = e.target.value.trim() || UNNAMED_GYM;
      save();
      document.title = `${state.gymName} · Boulder Map Editor`;
    });
  }

  isOpen() { return !$('modal').hidden || !$('newModal').hidden; }
  close() { $('modal').hidden = true; $('newModal').hidden = true; }

  // ---- New gym
  newGym() {
    snapshot();
    state.gymName = $('newName').value.trim() || UNNAMED_GYM;
    state.gymWidth = roomSize($('newWidth').value, UNSETTED_WIDTH);
    state.gymDepth = roomSize($('newDepth').value, UNSETTED_DEPTH);
    state.walls = [];
    this.app.scene.buildWalls();
    state.problems = [];
    state.selectedId = null;
    state.wallSel = null;
    state.next.no = nextNumber();
    state.mode = 'walls';
    save();
    this.close();
    this.app.afterDataReplaced();
  }

  // ---- Save
  fileName() {
    const slug = state.gymName.toLowerCase().normalize('NFKC').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'gym';
    return `${slug}-${new Date().toISOString().slice(0, 10)}.json`;
  }

  download() {
    const url = URL.createObjectURL(new Blob([this.app.serializer.export()], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url; a.download = this.fileName();
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('modalMsg').textContent = `Saved as ${a.download}.`;
  }

  // ---- Open
  importText(text) {
    try {
      const d = JSON.parse(text);
      if (!d || (!Array.isArray(d) && !Array.isArray(d.problems) && !Array.isArray(d.walls))) {
        throw new Error('this file has no "walls" or "problems". Choose a file saved from Boulder Map Editor.');
      }
      snapshot();
      if (!Array.isArray(d) && !d.gym) state.gymName = UNNAMED_GYM;
      const r = this.app.serializer.load(d);
      if (!state.walls.length) state.mode = 'walls';
      save();
      this.app.afterDataReplaced();
      $('modalMsg').textContent = `Opened “${state.gymName}”: ${state.walls.length} walls, ${r.got} problem${r.got === 1 ? '' : 's'}` +
        (r.got < r.total ? ` (skipped ${r.total - r.got} on unknown walls).` : '.');
    } catch (err) {
      $('modalMsg').textContent = `Could not open it: ${err.message}`;
    }
  }

  readPickedFile(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => this.importText(String(reader.result));
    reader.onerror = () => { $('modalMsg').textContent = 'Could not read that file. Try choosing it again.'; };
    reader.readAsText(f);
    e.target.value = ''; // allow choosing the same file again
  }

  // ---- Dialog
  openModal(mode) {
    const exp = mode === 'export';
    $('modal').hidden = false;
    $('modalTitle').textContent = exp ? 'Save gym' : 'Open gym';
    $('json').value = exp ? this.app.serializer.export() : '';
    $('json').readOnly = exp;
    $('downloadJson').hidden = !exp;
    $('pickLabel').hidden = exp;
    $('loadJson').hidden = exp;
    $('copyJson').hidden = !exp;
    $('modalMsg').textContent = exp
      ? 'Keep this file to reopen or share your gym later.'
      : 'Opening a gym replaces the one in this browser. Undo brings it back.';
    (exp ? $('downloadJson') : $('pickFile')).focus();
  }

  copy() {
    const ta = $('json');
    const fallback = () => { ta.focus(); ta.select(); $('modalMsg').textContent = 'Selected. Press Ctrl/Cmd+C to copy.'; };
    try { navigator.clipboard.writeText(ta.value).then(() => { $('modalMsg').textContent = 'Copied to clipboard.'; }, fallback); }
    catch (e) { fallback(); }
  }
}
