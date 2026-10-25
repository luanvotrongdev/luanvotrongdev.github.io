// SceneAssets.js — geometry and textures shared by every wall and marker, plus disposal helpers.
const THREE = window.THREE;

export class SceneAssets {
  constructor() {
    this.plyTexture = makePlyTexture();
    this.holdGeo = new THREE.SphereGeometry(0.11, 20, 14);
    this.holdGeo.scale(1, 1, 0.55);
    this.ringGeo = new THREE.TorusGeometry(0.19, 0.022, 8, 40);
    this.shared = new Set([this.holdGeo, this.ringGeo]);
  }

  // Free GPU resources of an object tree, keeping the shared geometry and base texture alive
  disposeTree(obj) {
    obj.traverse(n => {
      if (n.geometry && !this.shared.has(n.geometry)) n.geometry.dispose();
      if (n.material) {
        if (n.material.map && n.material.map !== this.plyTexture) n.material.map.dispose();
        n.material.dispose();
      }
    });
  }
}

// Plywood texture with a staggered T-nut grid (1 tile = 1 m)
function makePlyTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(0,0,0,.10)'; g.lineWidth = 2; g.strokeRect(0, 0, 256, 256);
  g.fillStyle = 'rgba(40,30,20,.45)';
  for (let r = 0; r < 5; r++) for (let k = 0; k < 5; k++) {
    const x = (k + 0.5 + (r % 2 ? 0.5 : 0)) * 51.2 % 256, y = (r + 0.5) * 51.2;
    g.beginPath(); g.arc(x, y, 3.2, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}
