// state.js — the single source of truth, undo history and local persistence
import { DEFAULT_WALLS, DEFAULT_NEXT, SEED_PROBLEMS, STORE_KEY, OLD_KEY, SAMPLE_GYM_NAME, UNSETTED_WIDTH, UNSETTED_DEPTH } from './config.js';
import { clone, uid } from './utils.js';

export const state = {
  gymName: SAMPLE_GYM_NAME,
  gymWidth: UNSETTED_WIDTH,
  gymDepth: UNSETTED_DEPTH,
  mode: 'edit',              // 'view' | 'edit' (challenges) | 'walls'
  walls: clone(DEFAULT_WALLS),
  problems: [],
  selectedId: null,          // selected problem
  wallSel: null,             // selected wall (walls mode)
  next: { ...DEFAULT_NEXT }, // settings for the next placed problem
  filter: { min: -10, max: 4 }
};

// ---- Lookups
export const wallById = id => state.walls.find(w => w.id === id);
export const wallName = id => (wallById(id) || {}).name || id;
export const shortName = name => name.split(' ')[0];
export const selectedProblem = () => state.problems.find(p => p.id === state.selectedId) || null;
export const selectedWall = () => wallById(state.wallSel) || null;
export const inFilter = p => p.grade >= state.filter.min && p.grade <= state.filter.max;
export const nextNumber = () => state.problems.reduce((m, p) => Math.max(m, p.no), 0) + 1;
export const problemsOnWall = wallId => state.problems.filter(p => p.wall === wallId);

// ---- Undo (walls + problems together)
const undoStack = [];
export function snapshot() {
  undoStack.push(JSON.stringify({ gymName: state.gymName, gymWidth: state.gymWidth, gymDepth: state.gymDepth, walls: state.walls, problems: state.problems }));
  if (undoStack.length > 80) undoStack.shift();
}
export const canUndo = () => undoStack.length > 0;
export function popUndo() {
  if (!undoStack.length) return false;
  const s = JSON.parse(undoStack.pop());
  if (s.gymName) state.gymName = s.gymName;
  if (s.gymWidth) state.gymWidth = s.gymWidth;
  if (s.gymDepth) state.gymDepth = s.gymDepth;
  state.walls = s.walls;
  state.problems = s.problems;
  if (!selectedProblem()) state.selectedId = null;
  if (!selectedWall()) state.wallSel = null;
  state.next.no = nextNumber();
  return true;
}

// ---- Persistence (per browser; the real data lives in the exported JSON)
export function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify({ gym: state.gymName, width: state.gymWidth, depth: state.gymDepth, walls: state.walls, problems: state.problems })); } catch (e) { /* storage blocked */ }
}
export function readSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || 'null') || JSON.parse(localStorage.getItem(OLD_KEY) || 'null');
  } catch (e) { return null; }
}
export const seedProblems = () => SEED_PROBLEMS.map(p => ({ id: uid(), ...p }));
