// Room.js — the gym floor and its 1 m grid, sized from the gym's width (x) and depth (z).
import { ROOM } from '../config.js';

const THREE = window.THREE;

export class Room {
  constructor(parent) {
    this.parent = parent;
    this.floor = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshLambertMaterial({ color: ROOM.floorColor }));
    this.floor.rotation.x = -Math.PI / 2;
    parent.add(this.floor);
    this.grid = null;
  }

  resize(width, depth) {
    this.floor.geometry.dispose();
    this.floor.geometry = new THREE.PlaneGeometry(width, depth);
    if (this.grid) { this.parent.remove(this.grid); this.grid.geometry.dispose(); this.grid.material.dispose(); }
    const size = Math.max(width, depth);
    this.grid = new THREE.GridHelper(size, Math.round(size), 0x4a5873, 0x3a4660);
    this.grid.scale.set(width / size, 1, depth / size);
    this.grid.position.y = 0.002;
    this.parent.add(this.grid);
  }
}
