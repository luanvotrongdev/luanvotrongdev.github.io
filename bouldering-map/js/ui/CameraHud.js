// CameraHud.js — camera buttons over the 3D view (Overview + one per wall).
import { state, shortName } from '../state.js';
import { $, esc } from '../utils.js';

export class CameraHud {
  constructor(app) {
    this.app = app;
    $('hud').addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (!b.dataset.wall) { app.scene.goHome(); return; }
      app.scene.focusWall(b.dataset.wall);
      if (state.mode === 'walls') app.walls.select(b.dataset.wall, false);
    });
  }

  render() {
    $('hud').innerHTML = `<button class="pill" data-home="1">全体</button>` +
      state.walls.map(w => `<button class="pill" data-wall="${w.id}">${esc(shortName(w.name))}</button>`).join('');
  }
}
