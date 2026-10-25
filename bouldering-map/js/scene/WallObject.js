// WallObject.js — one wall in the 3D scene: a flat plywood plane (the climbing face) with a
// black back. Placed at [x, y, z], turned by `yaw`, leaning by `tilt`.
import { r3 } from '../utils.js';

const THREE = window.THREE;

export class WallObject {
  constructor(wall, assets, selected) {
    this.id = wall.id;
    this.assets = assets;
    this.group = new THREE.Group();
    this.group.position.set(wall.pos[0], wall.pos[1], wall.pos[2]);
    this.group.rotation.y = THREE.MathUtils.degToRad(wall.yaw);

    const a = THREE.MathUtils.degToRad(wall.tilt);
    const dir = new THREE.Vector3(0, Math.cos(a), Math.sin(a)); // up the wall, leaning toward the climber
    const tex = assets.plyTexture.clone(); tex.needsUpdate = true; tex.repeat.set(wall.width, wall.height);
    this.face = new THREE.Mesh(
      new THREE.PlaneGeometry(wall.width, wall.height),
      new THREE.MeshLambertMaterial({ color: wall.tint, map: tex, side: THREE.FrontSide, emissive: selected ? 0x4a2a00 : 0x000000 })
    );
    this.face.position.copy(dir).multiplyScalar(wall.height / 2);
    this.face.rotation.x = a;
    this.face.userData = { wallId: wall.id, len: wall.height, width: wall.width };
    this.face.add(new THREE.LineSegments(new THREE.EdgesGeometry(this.face.geometry), new THREE.LineBasicMaterial({ color: selected ? 0xf0a04b : 0x6b5537 })));

    // Black back: taps on it select the wall but never place a hold
    this.back = new THREE.Mesh(this.face.geometry, new THREE.MeshLambertMaterial({ color: 0x111111, side: THREE.BackSide }));
    this.back.userData = { wallId: wall.id, back: true };
    this.face.add(this.back);
    this.group.add(this.face);
  }

  // World position and surface normal of a wall-local point (u across from center, v up from the bottom edge)
  placement(u, v) {
    const { len, width } = this.face.userData;
    const cu = Math.min(width / 2 - 0.05, Math.max(-width / 2 + 0.05, u));
    const cv = Math.min(len - 0.05, Math.max(0.05, v));
    return {
      pos: this.face.localToWorld(new THREE.Vector3(cu, cv - len / 2, 0)),
      normal: new THREE.Vector3(0, 0, 1).transformDirection(this.face.matrixWorld)
    };
  }

  // Wall-local coordinates of a world point, plus its distance from the surface (used to migrate v1 data)
  nearestLocal(point) {
    const { len, width } = this.face.userData;
    const l = this.face.worldToLocal(point.clone());
    const out = Math.max(0, Math.abs(l.x) - width / 2) + Math.max(0, Math.abs(l.y) - len / 2);
    return { d: Math.abs(l.z) + out, u: r3(l.x), v: r3(l.y + len / 2) };
  }

  // World position of the wall's middle: where the camera looks when focusing the wall
  center() {
    return this.face.getWorldPosition(new THREE.Vector3());
  }

  // Direction the wall faces on the floor plane
  front() {
    return new THREE.Vector3(0, 0, 1).applyQuaternion(this.group.quaternion);
  }

  dispose() {
    this.assets.disposeTree(this.group);
    if (this.group.parent) this.group.parent.remove(this.group);
  }
}
