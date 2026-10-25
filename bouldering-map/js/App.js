// App.js — wires the scene and the UI panels together: boot, mode switching, undo, keyboard.
// Panels and the scene talk to each other only through this object.
import { state, readSaved, seedProblems, nextNumber, popUndo, save } from './state.js';
import { GymScene } from './scene/GymScene.js';
import { GymSerializer } from './GymSerializer.js';
import { ShellUI } from './ui/ShellUI.js';
import { CameraHud } from './ui/CameraHud.js';
import { ProblemPanel } from './ui/ProblemPanel.js';
import { WallPanel } from './ui/WallPanel.js';
import { FileDialogs } from './ui/FileDialogs.js';
import { $ } from './utils.js';

export class App {
  constructor() {
    this.scene = new GymScene($('viewport'));
    this.serializer = new GymSerializer(this.scene);
    this.shell = new ShellUI(this);
    this.hud = new CameraHud(this);
    this.problems = new ProblemPanel(this);
    this.walls = new WallPanel(this);
    this.files = new FileDialogs(this);

    // Taps on the 3D view go to the active editor
    this.scene.onTap(ev => {
      if (state.mode === 'walls') this.walls.onTap(this.scene.pick(ev, false));
      else this.problems.onTap(this.scene.pick(ev, true));
    });
    // Right click on a hold deletes it (Problems mode)
    this.scene.onRightTap(ev => {
      if (state.mode !== 'edit') return;
      const hit = this.scene.pick(ev, true);
      if (hit && hit.type === 'problem') this.problems.deleteById(hit.id);
    });
    document.addEventListener('keydown', e => this.onKey(e));
    this.boot();
  }

  // Saved data (v2 or migrated v1) or the sample gym
  boot() {
    const saved = readSaved();
    if (saved) this.serializer.load(saved);
    else { this.scene.buildWalls(); state.problems = seedProblems(); state.next.no = nextNumber(); }
    if (!state.walls.length) state.mode = 'walls'; // an empty gym starts in Walls mode
    this.scene.rebuildMarkers();
    this.renderAll();
    this.walls.renderForm();
  }

  // Refresh every panel from state (safe while typing: doesn't rebuild the wall form inputs)
  renderAll() {
    this.shell.render();
    this.problems.render();
    this.walls.render();
    this.hud.render();
  }

  // After undo / import, when walls and problems were swapped out wholesale
  afterDataReplaced() {
    this.walls.reset();
    this.scene.buildWalls();
    this.scene.rebuildMarkers();
    this.renderAll();
    this.walls.renderForm();
  }

  setMode(mode) {
    state.mode = mode;
    this.afterDataReplaced(); // wall highlight and marker labels depend on the mode
  }

  undo() {
    if (popUndo()) { save(); this.afterDataReplaced(); }
  }

  onKey(e) {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !typing) { e.preventDefault(); this.undo(); }
    else if ((e.key === 'Delete' || e.key === 'Backspace') && !typing && state.mode === 'edit') this.problems.deleteSelected();
    else if (e.key === 'Escape') {
      if (this.files.isOpen()) this.files.close();
      else if (state.mode === 'walls') this.walls.select(null);
      else this.problems.select(null);
    }
  }
}
