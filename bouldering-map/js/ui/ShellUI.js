// ShellUI.js — the panel chrome: mode tabs, which sections are visible, hint line, undo button.
import { state, canUndo } from '../state.js';
import { $ } from '../utils.js';

export class ShellUI {
  constructor(app) {
    this.app = app;
    this.modeButtons = [...document.querySelectorAll('.seg button[data-mode]')];
    this.modeButtons.forEach(b => b.addEventListener('click', () => app.setMode(b.dataset.mode)));
    $('undo').addEventListener('click', () => app.undo());
  }

  render() {
    const m = state.mode;
    if (document.activeElement !== $('gymName')) $('gymName').value = state.gymName;
    document.title = `${state.gymName} · Boulder Map Editor`;
    this.modeButtons.forEach(b => b.setAttribute('aria-pressed', b.dataset.mode === m));
    $('editor').hidden = m !== 'edit';
    $('wallSec').hidden = m !== 'walls';
    $('filterSec').hidden = m === 'walls';
    $('listSec').hidden = m === 'walls';
    $('hint').textContent = m === 'walls' ? this.app.walls.hint() : this.app.problems.hint();
    $('undo').disabled = !canUndo();
  }
}
