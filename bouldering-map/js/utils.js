// utils.js — small shared helpers
export const $ = id => document.getElementById(id);
export const clone = o => JSON.parse(JSON.stringify(o));
export const uid = () => Math.random().toString(36).slice(2, 9);
export const r3 = n => Math.round(n * 1000) / 1000;
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// Parse a number input, clamped to [min, max]; returns fallback while the field is mid-edit ("-", "")
export const readNum = (el, [min, max], fallback) => {
  const v = parseFloat(el.value);
  return Number.isFinite(v) ? clamp(v, min, max) : fallback;
};
