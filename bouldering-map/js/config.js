// =====================================================================
// config.js — Configuring structure
// Everything that describes the gym and the data format lives here:
// grades, tape colors, default walls, sample problems, storage keys.
// Edit this file to match the real gym; no other module needs changes.
// =====================================================================

// Name used for the built-in sample gym and for new gyms left unnamed
export const SAMPLE_GYM_NAME = 'サンプルジム';
export const UNNAMED_GYM = 'マイジム';
export const UNSETTED_WIDTH = 15;
export const UNSETTED_DEPTH = 10;

// Defaults for the next placed problem
export const DEFAULT_NEXT = { color: 'yellow', grade: -5, no: 1 };


export const STORE_KEY = 'boulder-map-v2';
export const OLD_KEY = 'boulder-map-v1';   // migrated automatically on load
export const DATA_VERSION = 3;

// ---- Grades (段級). Stored as numbers so sorting/filtering is trivial:
//      10級 = -10 … 1級 = -1, 初段 = 1 … 四段 = 4
export const GRADES = [
  ...[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(n => ({ v: -n, l: `${n}級` })),
  { v: 1, l: '初段' }, { v: 2, l: '二段' }, { v: 3, l: '三段' }, { v: 4, l: '四段' }
];
export const gradeLabel = v => (GRADES.find(g => g.v === v) || {}).l || '?';

// ---- Tape colors used by the gym
export const TAPES = [
  { id: 'white',  ja: '白',       hex: '#f2f2ee' },
  { id: 'yellow', ja: '黄',       hex: '#f5d000' },
  { id: 'orange', ja: 'オレンジ', hex: '#ff8a1f' },
  { id: 'pink',   ja: 'ピンク',   hex: '#ff6fae' },
  { id: 'red',    ja: '赤',       hex: '#e0262f' },
  { id: 'purple', ja: '紫',       hex: '#8a3fd1' },
  { id: 'blue',   ja: '青',       hex: '#1f6fe0' },
  { id: 'green',  ja: '緑',       hex: '#22a447' },
  { id: 'black',  ja: '黒',       hex: '#1d1d1f' }
];
export const tape = id => TAPES.find(t => t.id === id) || TAPES[0];

// Default colors offered to newly added walls
export const WALL_TINTS = ['#e8d2ad', '#dcc6a0', '#d4b98e', '#c9ae84', '#e2cba3', '#cfd6dc', '#d9c2c9'];

// ---- Room
export const ROOM = {
  width: UNSETTED_WIDTH,
  depth: UNSETTED_DEPTH,
  floorColor: 0x2f3b52
};

// ---- Value limits used by the editors and the importer
export const LIMITS = {
  room:       [4, 100],
  wallWidth:  [0.5, 20],
  wallHeight: [0.3, 12],
  wallPos:    [-50, 50],
  wallY:      [0, 10],
  yaw:        [-360, 360],
  tilt:       [-45, 90]
};

// ---- Wall data structure: one flat, tiltable plane. Stack walls (raise y) for a wall
//      made of several sections with different lean angles.
// {
//   id:      unique string, referenced by problems
//   name:    display name (first word is used on the camera buttons)
//   pos:     [x, y, z] base-center in meters; y is the height of the bottom edge above the floor
//   yaw:     facing in degrees (0 faces +z, 90 faces +x, -90 faces -x)
//   tilt:    degrees past vertical: < 0 slab, 0 vertical, > 0 overhang, 90 roof
//   width:   meters
//   height:  meters measured along the wall surface
//   tint:    '#rrggbb'
// }
export const DEFAULT_WALLS = [
  { id: 'slab',      name: 'スラブ',          pos: [-4.2, 0, -4.5],    yaw: 0,   tilt: -12, width: 4,   height: 4.2, tint: '#e8d2ad' },
  { id: 'vertical',  name: '垂壁',        pos: [0, 0, -4.5],       yaw: 0,   tilt: 0,   width: 4,   height: 4.3, tint: '#dcc6a0' },
  { id: 'over30',    name: '前傾壁 30°',  pos: [4.4, 0, -4.5],     yaw: 0,   tilt: 0,   width: 4.6, height: 0.6, tint: '#d4b98e' },
  { id: 'over30-2',  name: '前傾壁 30° 上部',   pos: [4.4, 0.6, -4.5],   yaw: 0,   tilt: 30,  width: 4.6, height: 4.2, tint: '#d4b98e' },
  { id: 'cave',      name: 'ケイブ ルーフ',          pos: [-7, 0, 0],         yaw: 90,  tilt: 0,   width: 5,   height: 1.0, tint: '#c9ae84' },
  { id: 'cave-2',    name: 'ケイブ 45°',             pos: [-7, 1, 0],         yaw: 90,  tilt: 45,  width: 5,   height: 2.0, tint: '#c9ae84' },
  { id: 'cave-3',    name: 'ケイブ 屋根',            pos: [-5.586, 2.414, 0], yaw: 90,  tilt: 90,  width: 5,   height: 1.8, tint: '#c9ae84' },
  { id: 'kick15',    name: 'キッカー 緩傾斜',   pos: [7, 0, -0.4],       yaw: -90, tilt: 55,  width: 6,   height: 0.45, tint: '#e2cba3' },
  { id: 'kick15-2',  name: 'キッカー 15°',           pos: [6.631, 0.258, -0.4], yaw: -90, tilt: 15, width: 6,   height: 3.8, tint: '#e2cba3' }
];
export const kindOf = a => (a < -2 ? 'スラブ' : a <= 2 ? '垂壁' : a < 80 ? 'オーバーハング' : 'ルーフ');

// ---- Problem (課題) data structure — stored in wall-local coordinates
// so markers follow their wall when it is moved or reshaped.
// {
//   id, no, grade (number, see GRADES), color (TAPES id),
//   wall: wall id,
//   u: meters across the wall from its center, v: meters up the wall from its bottom edge
// }
export const SEED_PROBLEMS = [
  { wall: 'slab', u: -1.1, v: 0.7,  no: 1, grade: -8, color: 'white' },
  { wall: 'slab', u: 0.8,  v: 0.9,  no: 2, grade: -6, color: 'yellow' },
  { wall: 'vertical', u: -1.2, v: 0.85, no: 3, grade: -5, color: 'green' },
  { wall: 'vertical', u: 0.6,  v: 0.65, no: 4, grade: -3, color: 'blue' },
  { wall: 'over30-2', u: -1.3, v: 0.6,  no: 5, grade: -2, color: 'red' },
  { wall: 'over30-2', u: 1.0,  v: 0.5,  no: 6, grade: 1,  color: 'black' },
  { wall: 'cave', u: -1.2, v: 0.5,  no: 7, grade: -1, color: 'purple' },
  { wall: 'cave-2', u: 1.4,  v: 0.6,  no: 8, grade: 2,  color: 'pink' },
  { wall: 'kick15-2', u: -1.8, v: 0.5,  no: 9, grade: -4, color: 'orange' }
];
