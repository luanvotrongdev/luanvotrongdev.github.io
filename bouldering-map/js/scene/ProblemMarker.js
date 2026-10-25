// ProblemMarker.js — one problem in the 3D scene: a tape-colored hold, an optional
// "12 · 3級" label and a selection ring, oriented to the wall surface.
import { tape, gradeLabel } from '../config.js';

const THREE = window.THREE;
const Z = new THREE.Vector3(0, 0, 1);

export class ProblemMarker {
  // placement: { pos, normal } from WallObject.placement
  // look: { faded, showLabel, selected }
  constructor(problem, placement, look, assets) {
    this.assets = assets;
    const { pos, normal } = placement;
    this.root = new THREE.Group();
    this.root.position.copy(pos);
    const q = new THREE.Quaternion().setFromUnitVectors(Z, normal);

    this.hold = new THREE.Mesh(assets.holdGeo, new THREE.MeshLambertMaterial({
      color: tape(problem.color).hex, transparent: look.faded, opacity: look.faded ? 0.2 : 1
    }));
    this.hold.quaternion.copy(q);
    this.hold.position.addScaledVector(normal, 0.03);
    this.hold.userData.problemId = problem.id;
    this.root.add(this.hold);

    if (look.showLabel) {
      const label = makeLabelSprite(`${problem.no} · ${gradeLabel(problem.grade)}`);
      label.position.copy(normal).multiplyScalar(0.3).add(new THREE.Vector3(0, 0.12, 0));
      this.root.add(label);
    }
    if (look.selected) {
      const ring = new THREE.Mesh(assets.ringGeo, new THREE.MeshBasicMaterial({ color: 0xf0a04b }));
      ring.quaternion.copy(q);
      ring.position.addScaledVector(normal, 0.04);
      this.root.add(ring);
    }
  }

  dispose() {
    this.assets.disposeTree(this.root);
    if (this.root.parent) this.root.parent.remove(this.root);
  }
}

// Floating "12 · 3級" label
function makeLabelSprite(text) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 96;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(20,22,26,.86)';
  const r = 40;
  g.beginPath(); g.moveTo(r, 8); g.arcTo(248, 8, 248, 88, r); g.arcTo(248, 88, 8, 88, r); g.arcTo(8, 88, 8, 8, r); g.arcTo(8, 8, 248, 8, r); g.fill();
  g.fillStyle = '#fff'; g.font = '600 44px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 128, 50);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }));
  s.scale.set(0.5, 0.19, 1);
  return s;
}
