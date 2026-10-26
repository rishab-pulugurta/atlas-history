/* Atlas — interactive world history & general knowledge explorer */
(() => {
const ENT = window.ATLAS_ENTITIES, BASE_EVENTS = window.ATLAS_EVENTS, ROUTES = window.ATLAS_ROUTES;
const LAYERS = window.ATLAS_LAYERS, ERAS = window.ATLAS_ERAS, REGIONS = window.ATLAS_REGIONS;
const CHAINS = window.ATLAS_CHAINS, STORIES = window.ATLAS_STORIES, FACTS = window.ATLAS_FACTS;
const FCATS = window.ATLAS_FACT_CATS, CMP = window.ATLAS_COMPARE, SRC = window.ATLAS_SOURCES || { facts: {}, ents: {} };
const COUNTRIES = window.ATLAS_COUNTRIES || [], TOPICS = window.ATLAS_TOPICS || [], BORDERS = window.ATLAS_BORDERS || { features: [] };
const entById = Object.fromEntries(ENT.map(e => [e.id, e]));
const STATES = window.ATLAS_STATES || [], US_BORDERS = window.ATLAS_US_BORDERS || { features: [] }, CFACTS = window.ATLAS_CFACTS || {};
STATES.forEach(st => { st.reg = "na"; st.parent = "usa"; });
const cById = Object.fromEntries([...COUNTRIES, ...STATES].map(c => [c.id, c]));
// Timeline supplements (js/data/tl_*.js) extend country/state timelines.
Object.entries(window.ATLAS_TL_PLUS || {}).forEach(([id, rows]) => { const c = cById[id]; if (c) { const have = new Set(c.tl.map(r => r[0] + "|" + r[1])); rows.forEach(r => { if (!have.has(r[0] + "|" + r[1])) c.tl.push(r); }); c.tl.sort((x, y) => x[0] - y[0]); } });
Object.entries(window.ATLAS_PEOPLE_PLUS || {}).forEach(([id, txt]) => { const c = cById[id]; if (c && !c.people) c.people = txt; });
const CF_CATS = { war: "Wars & conflicts", gov: "Government & politics", inv: "Inventions & firsts", biz: "Business & economy", ppl: "People", crime: "Crime & scandal", niche: "Niche & surprising" };
const CF_LIST = [];
Object.entries(CFACTS).forEach(([cid, list]) => list.forEach(([cat, text], i) => CF_LIST.push({ id: `cf-${cid}-${i}`, c: "country", cid, cat, text })));
const cfById = Object.fromEntries(CF_LIST.map(f => [f.id, f]));
const FACT_SRC2 = window.ATLAS_FACT_SRC2 || {};
const factSrc = f => SRC.facts[f.id] || FACT_SRC2[f.id];
const layerById = Object.fromEntries(LAYERS.map(l => [l.id, l]));
const fcatById = Object.fromEntries(FCATS.map(c => [c.id, c]));
const MIN_Y = -10000, MAX_Y = 2025;

const SECTIONS = [
  ["origins", "Origins & predecessors"], ["geography", "Geography"], ["politics", "Political history"],
  ["economy", "Economy & trade"], ["society", "Society & everyday life"], ["religion", "Religion & mythology"],
  ["ideas", "Philosophy & political thought"], ["science", "Science & inventions"], ["literature", "Literature & storytelling"],
  ["food", "Food & agriculture"], ["language", "Language & writing"], ["art", "Art & architecture"],
  ["people", "Influential people"], ["legacy", "Why it matters today"], ["fun", "Interesting connections"],
  ["debates", "Sources & debates"]
];
const REG_COLORS = { me: "#e0a458", eu: "#d98880", sa: "#f7dc6f", ea: "#ec7063", sp: "#48c9b0", af: "#82e0aa", na: "#7fb3d5", la: "#c39bd3" };
const EV_LABEL = { documented: "Well documented", mixed: "Partly documented", archaeological: "Mostly archaeological", oral: "Oral tradition & archaeology" };
const LCODE = { p: "political", r: "religion", w: "warfare", t: "trade", s: "science", l: "language", f: "food", h: "people", e: "environment", i: "philosophy" };
const KINDS = [["person", "People"], ["faith", "Religions"], ["work", "Books & works"], ["food", "Food & drink"], ["invention", "Inventions"], ["culture", "Art, music & culture"]];
const KIND_NAME = Object.fromEntries(KINDS);
const REGION_INTRO = {
  me: "The Fertile Crescent, Anatolia, Persia, Arabia, the Levant and the Caucasus: where farming, cities, writing and the Abrahamic religions began, and where Persian, Greek, Roman, Arab and Ottoman empires met.",
  eu: "From Greek city-states and Rome through medieval kingdoms, the Renaissance, empires, revolutions and world wars, to today's European Union, Russia and Ukraine.",
  sa: "The Indian subcontinent and Central Asia: Indus cities, Vedic culture, Buddhism and Jainism, Mauryan, Gupta and Mughal empires, Silk Road cities like Samarkand, and the modern states born from Partition and the Soviet collapse.",
  ea: "China, Korea, Japan, Mongolia and Taiwan: dynasties linked by Chinese characters, Confucianism and Buddhism, the Mongol Empire, and today's economic and cultural powerhouses.",
  sp: "Mainland and island Southeast Asia, Australia and the Pacific: Angkor, Srivijaya and Majapahit, Polynesian navigators, Aboriginal Australia's 65,000-year history, colonial spice trades, and modern ASEAN.",
  af: "Fifty-four countries and far more histories: Egypt and Kush, Aksum, Mali and Songhai, Great Zimbabwe, the Swahili coast, Benin and Kongo, the slave trade, colonial partition, independence, and Africa's young, fast-growing present.",
  na: "Indigenous North America (Cahokia, the Puebloans, the Haudenosaunee), the Caribbean's Taíno and plantation societies, Mexico, and the United States and Canada.",
  la: "Mesoamerica's Olmec and Maya, the Andes' Caral and Inca, Amazonia, Spanish and Portuguese colonies, the wars of independence, and today's Latin America."
};
const COUNTRY_SRC = { are: "History of the United Arab Emirates", mdv: "History of the Maldives", gbr: "History of the United Kingdom", nld: "History of the Netherlands", vat: "History of Vatican City", cze: "History of the Czech lands", cod: "History of the Democratic Republic of the Congo", cog: "History of the Republic of the Congo", caf: "History of the Central African Republic", civ: "History of Ivory Coast", gmb: "History of the Gambia", cpv: "History of Cape Verde", com: "History of the Comoros", phl: "History of the Philippines", mhl: "History of the Marshall Islands", fsm: "History of the Federated States of Micronesia", usa: "History of the United States", dom: "History of the Dominican Republic", bhs: "History of the Bahamas" };
const BORDER_OWNER = { grl: "dnk", pri: "usa", ncl: "fra", flk: "gbr", atf: "fra" };
// Long-lived entries change names over time; show the name that fits the selected year.
const ERA_NAMES = {
  spain: [[1479, 1898, "Spanish Empire"], [1899, 2025, "Spain"]],
  germany: [[962, 1806, "Holy Roman Empire"], [1807, 1870, "German states"], [1871, 1918, "German Empire"], [1919, 1932, "Weimar Germany"], [1933, 1945, "Nazi Germany"], [1946, 1990, "East & West Germany"], [1991, 2025, "Germany"]],
  netherlands: [[1581, 1795, "Dutch Republic"], [1796, 2025, "Netherlands"]],
  "italy-ren": [[1300, 1860, "Italian states"], [1861, 1921, "Kingdom of Italy"], [1922, 1943, "Fascist Italy"], [1944, 2025, "Italy"]],
  france: [[987, 1791, "Kingdom of France"], [1792, 1803, "French Republic"], [1804, 1814, "French Empire"], [1815, 1847, "Kingdom of France"], [1848, 1851, "Second Republic"], [1852, 1870, "Second French Empire"], [1871, 2025, "France"]],
  russia: [[882, 1239, "Kievan Rus'"], [1240, 1546, "Grand Duchy of Moscow"], [1547, 1720, "Tsardom of Russia"], [1721, 1917, "Russian Empire"]],
  balkans: [[1918, 1991, "Yugoslavia"], [1992, 2025, "Former Yugoslav states"]],
  british: [[1600, 1706, "English Empire"], [1707, 1997, "British Empire"]],
  "japan-shogun": [[1185, 1333, "Kamakura Japan"], [1336, 1573, "Ashikaga Japan"], [1574, 1602, "Japan (unification wars)"], [1603, 1868, "Tokugawa Japan"]],
  "ethiopia-sol": [[1270, 1973, "Ethiopian Empire"], [1974, 1974, "Ethiopia"]],
  mughal: [[1526, 1707, "Mughal Empire"], [1708, 1857, "Mughal Empire (declining)"]]
};
const nameAt = (e, y) => (ERA_NAMES[e.id] || []).find(([a, b]) => y >= a && y <= b)?.[2] || e.name;
const slug = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
TOPICS.forEach(t => { t.id = slug(t.n); });
const tById = Object.fromEntries(TOPICS.map(t => [t.id, t]));

// ---------- derived events: base + country timelines + encyclopedia ----------
const distKmRaw = (a, b, c, d) => { const toR = Math.PI / 180, h = Math.sin((c - a) * toR / 2) ** 2 + Math.cos(a * toR) * Math.cos(c * toR) * Math.sin((d - b) * toR / 2) ** 2; return 12742 * Math.asin(Math.sqrt(h)); };
const words = s => new Set(String(s).toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/).filter(w => w.length > 3));
const hashN = s => { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) | 0; return Math.abs(h); };
const EVENTS = BASE_EVENTS.map(ev => ({ ...ev, kind: "event", ctys: [] }));
[...COUNTRIES, ...STATES].forEach(c => c.tl.forEach(([y, text, code]) => {
  if (y < MIN_Y || y > MAX_Y) return;
  const w = words(text);
  const dup = EVENTS.find(ev => ev.kind === "event" && ev.r === c.reg && Math.abs(ev.y - y) <= 2 && [...words(ev.t)].filter(x => w.has(x)).length >= 2 && distKmRaw(ev.lat, ev.lng, c.lat, c.lng) < 1500);
  if (dup) { if (!dup.ctys.includes(c.id)) dup.ctys.push(c.id); return; }
  const h = hashN(c.id + y + text);
  EVENTS.push({ y, t: text, l: LCODE[code || "p"], r: c.reg, lat: c.lat + (h % 100) / 100 * 1.2 - .6, lng: c.lng + ((h >> 8) % 100) / 100 * 1.2 - .6, d: "", kind: "country", ctys: [c.id], e: [] });
}));
TOPICS.forEach(t => EVENTS.push({ dupOnMap: EVENTS.some(ev => ev.kind === "event" && Math.abs(ev.y - t.y) <= 15 && distKmRaw(ev.lat, ev.lng, t.lat, t.lng) < 80), y: t.y, y2: t.y2, t: t.n, l: t.l, r: t.reg, lat: t.lat, lng: t.lng, d: t.d, kind: "topic", topic: t.id, ctys: t.c || [], e: t.e || [] }));
EVENTS.forEach((ev, i) => ev.idx = i);

// ---------- storage ----------
const load = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const S = {
  year: -500,
  layers: new Set(load("atlas.layers", ["political", "people", "religion", "philosophy", "trade", "science", "language", "food"])),
  showTopics: load("atlas.showTopics", true), showCountryEv: load("atlas.showCountryEv", true), modern: load("atlas.modern", false),
  saved: load("atlas.saved", []), seen: new Set(load("atlas.seen", [])), notes: load("atlas.notes", {}),
  factCat: "all", factMode: "cards", factQ: "",
  chain: CHAINS[0].id, chainNode: 0, story: STORIES[0].id, storyCh: 0, depth: "guided",
  country: null, region: "me", cQuery: "",
  encKind: "all", encRegion: "all", encEra: "all", encQ: "",
  cmpA: "e:rome-emp", cmpB: "e:han",
  playing: null, drawerStack: []
};
const persist = () => {
  save("atlas.layers", [...S.layers]); save("atlas.saved", S.saved); save("atlas.seen", [...S.seen]); save("atlas.notes", S.notes);
  save("atlas.showTopics", S.showTopics); save("atlas.showCountryEv", S.showCountryEv); save("atlas.modern", S.modern);
  renderLibCount();
};
const markSeen = key => { if (!S.seen.has(key)) { S.seen.add(key); persist(); } };
const isSaved = key => S.saved.includes(key);
const toggleSave = key => {
  S.saved = isSaved(key) ? S.saved.filter(k => k !== key) : [key, ...S.saved];
  persist(); toast(isSaved(key) ? "Saved to Library" : "Removed from Library");
  return isSaved(key);
};

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmtYear = y => y < 0 ? `${Math.abs(y).toLocaleString()} BCE` : y === 0 ? "1 CE" : `${y} CE`;
const fmtShort = y => y < 0 ? `${Math.abs(y).toLocaleString()} BCE` : `${y}`;
const fmtRange = (a, b) => `${fmtShort(a)}${a >= 0 && a < 1000 ? " CE" : ""} – ${b >= 2025 ? "present" : fmtShort(b) + (a < 0 && b > 0 ? " CE" : "")}`;
const topicDates = t => t.k === "person" && t.y2 ? `${fmtShort(t.y)}–${fmtShort(t.y2)}` : `c. ${fmtYear(t.y)}`;
function parseYear(str) {
  const s = String(str).trim().toLowerCase().replace(/,/g, "");
  const m = s.match(/(-?\d+)\s*(bce|bc|b\.c\.|ce|ad|a\.d\.)?/);
  if (!m) return null;
  let y = parseInt(m[1], 10);
  if (m[2] && m[2].startsWith("b")) y = -Math.abs(y);
  return Math.max(MIN_Y, Math.min(MAX_Y, y));
}
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 1600); }
const eraFor = y => ERAS.find(e => y >= e.a && y < e.b) || ERAS[ERAS.length - 1];
const windowFor = y => y < -3000 ? 600 : y < -1000 ? 120 : y < 0 ? 60 : y < 1000 ? 50 : y < 1500 ? 30 : y < 1800 ? 20 : y < 1900 ? 10 : 5;
const activeEnts = y => ENT.filter(e => y >= e.start && y <= e.end);
const evVisibleAt = (ev, y, w) => Math.abs(ev.y - y) <= w || (ev.y2 && y >= ev.y && y <= ev.y2);
const nearEvents = (y, w = windowFor(y)) => EVENTS.filter(ev => evVisibleAt(ev, y, w));
const refName = id => entById[id]?.name || cById[id]?.n || id;
const refKey = (id, preferCountry) => preferCountry && cById[id] ? "country:" + id : entById[id] ? "ent:" + id : cById[id] ? "country:" + id : null;
const chip = (key, label, extra = "") => key ? `<button class="chip" data-open="${key}" ${extra}>${esc(label)}</button>` : "";
const srcLink = s => Array.isArray(s) ? { label: s[0], url: s[1] }
  : s.startsWith("wikt:") ? { label: `Etymology: "${s.slice(5)}" (Wiktionary)`, url: "https://en.wiktionary.org/wiki/" + encodeURIComponent(s.slice(5)) + "#English" }
  : { label: s + " (Wikipedia)", url: "https://en.wikipedia.org/wiki/" + encodeURIComponent(s.replace(/ /g, "_")) };
const readMore = list => list?.length ? `<div class="sources"><b>Read more</b>${list.map(srcLink).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : "";
const entSrc = e => e.src || SRC.ents[e.id];
const countrySrc = c => COUNTRY_SRC[c.id] || "History of " + c.n;

// Non-linear timeline: more slider room for recent, denser history.
const SEG = [[-10000, 0], [-3000, 90], [-1000, 230], [0, 400], [1000, 570], [1500, 710], [1800, 840], [2025, 1000]];
function s2y(s) {
  for (let i = 1; i < SEG.length; i++) if (s <= SEG[i][1]) { const [y0, s0] = SEG[i - 1], [y1, s1] = SEG[i]; return Math.round(y0 + (s - s0) / (s1 - s0) * (y1 - y0)); }
  return MAX_Y;
}
function y2s(y) {
  for (let i = 1; i < SEG.length; i++) if (y <= SEG[i][0]) { const [y0, s0] = SEG[i - 1], [y1, s1] = SEG[i]; return s0 + (y - y0) / (y1 - y0) * (s1 - s0); }
  return 1000;
}

// ---------- geometry: which modern country is at this point? ----------
const FEATS = BORDERS.features.map(f => {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  let minX = 999, minY = 999, maxX = -999, maxY = -999;
  polys.forEach(p => p[0].forEach(([x, y]) => { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }));
  return { id: BORDER_OWNER[f.properties.id] || f.properties.id, polys, bb: [minX, minY, maxX, maxY], f };
});
const toFeat = (f, id) => {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  let minX = 999, minY = 999, maxX = -999, maxY = -999;
  polys.forEach(p => p[0].forEach(([x, y]) => { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }));
  return { id, polys, bb: [minX, minY, maxX, maxY], f };
};
const US_FEATS = US_BORDERS.features.filter(f => cById[f.properties.id]).map(f => toFeat(f, f.properties.id));
function stateAt(lat, lng) {
  for (const f of US_FEATS) {
    if (lng < f.bb[0] || lng > f.bb[2] || lat < f.bb[1] || lat > f.bb[3]) continue;
    if (f.polys.some(p => inRing(lng, lat, p[0]))) return f.id;
  }
  return null;
}
function inRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}
function countryAt(lat, lng) {
  lng = ((lng + 540) % 360) - 180;
  for (const c of TINY) if (Math.hypot(c.lat - lat, c.lng - lng) < 0.35) return c.id;
  for (const f of FEATS) {
    if (lng < f.bb[0] || lng > f.bb[2] || lat < f.bb[1] || lat > f.bb[3]) continue;
    if (f.polys.some(p => inRing(lng, lat, p[0]) && !p.slice(1).some(h => inRing(lng, lat, h)))) return cById[f.id] ? f.id : null;
  }
  // tiny states without polygons: nearest capital within ~60 km
  let best = null, bd = 0.6;
  COUNTRIES.forEach(c => { const d = Math.hypot(c.lat - lat, c.lng - lng); if (d < bd) { bd = d; best = c.id; } });
  return best;
}
const TINY = (() => { const have = new Set(FEATS.map(f => f.id)); return COUNTRIES.filter(c => !have.has(c.id)); })();
const distKm = (a, b, c, d) => { const R = 6371, toR = Math.PI / 180, dLat = (c - a) * toR, dLng = (d - b) * toR; const h = Math.sin(dLat / 2) ** 2 + Math.cos(a * toR) * Math.cos(c * toR) * Math.sin(dLng / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); };

// ---------- routing between views ----------
const maps = {};
function showView(v, opts = {}) {
  document.querySelectorAll("#nav button").forEach(b => b.classList.toggle("active", b.dataset.view === v));
  document.querySelectorAll(".view").forEach(el => el.classList.toggle("active", el.id === "view-" + v));
  if (v === "explore" && maps.main) maps.main.invalidateSize({ animate: false });
  const hash = "#" + v + (v === "countries" && S.country ? "/" + S.country : "");
  if (!opts.fromHistory && location.hash !== hash) history.pushState(null, "", hash);
  ({ discover: renderDiscover, connections: renderChains, stories: renderStories, compare: renderCompare, library: renderLibrary, ask: renderAskIntro, countries: renderCountries, encyclopedia: renderEncyclopedia }[v] || (() => {}))();
  setTimeout(() => Object.values(maps).forEach(m => m.invalidateSize()), 60);
  syncChatSoon();
}
function syncChatSoon() { clearTimeout(syncChatSoon._t); syncChatSoon._t = setTimeout(() => window.__renderChat && window.__renderChat(), 150); }
function openRef(key) {
  const i = key.indexOf(":"), type = key.slice(0, i), id = key.slice(i + 1);
  if (type === "ent") { openProfile(id); }
  else if (type === "country") { openCountry(id); }
  else if (type === "factcat") { S.factCat = id; S.factMode = "cards"; S.factQ = ""; $("#factSearch").value = ""; showView("discover"); }
  else if (type === "enckind") { S.encKind = id; S.encQ = ""; S.encRegion = "all"; S.encEra = "all"; showView("encyclopedia"); }
  else if (type === "quiz") { S.factCat = "country"; S.factCountry = id; S.factMode = "flash"; S.factQ = ""; $("#factSearch").value = ""; showView("discover"); }
  else if (type === "region") { S.country = null; S.region = id; showView("countries"); }
  else if (type === "topic") { openTopic(id); }
  else if (type === "chain") { S.chain = id; S.chainNode = 0; showView("connections"); }
  else if (type === "story") { S.story = id; S.storyCh = 0; showView("stories"); }
  else if (type === "fact") { S.factCat = "all"; S.factQ = ""; $("#factSearch").value = ""; showView("discover"); setTimeout(() => { const el = document.querySelector(`[data-fact="${id}"]`); if (el) { el.classList.add("open"); el.scrollIntoView({ block: "center" }); markSeen(key); } }, 60); }
  else if (type === "year") { showView("explore"); S.drawerStack = []; setYear(parseInt(id, 10)); renderMoment(); }
  else if (type === "event") { showView("explore"); focusEvent(EVENTS[+id]); }
}
document.addEventListener("click", e => {
  const a = e.target.closest("[data-open]");
  if (a) { e.preventDefault(); e.stopPropagation(); openRef(a.dataset.open); }
});

// =====================================================================
// WORLD EXPLORER
// =====================================================================
const map = L.map("map", { worldCopyJump: true, minZoom: 2, zoomControl: true }).setView([30, 45], 3);
maps.main = map;
const tileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}";
const tileOpts = { attribution: "Tiles &copy; Esri", maxZoom: 16 };
const labelUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}";
// Inside claude.ai the page can't load outside images, so draw the base map from bundled borders.
const IN_CLAUDE = typeof window.claude?.use === "function";
function addBase(m) {
  const vec = () => L.geoJSON(BORDERS, { style: { fillColor: "#262c33", fillOpacity: 1, color: "#3a434d", weight: .6 }, interactive: false }).addTo(m).bringToBack();
  if (IN_CLAUDE) { vec(); return; }
  let errs = 0, switched = false;
  const t = L.tileLayer(tileUrl, tileOpts).addTo(m);
  t.on("tileerror", () => { if (++errs >= 3 && !switched) { switched = true; m.removeLayer(t); vec(); } });
}
addBase(map);
const modernLabels = L.tileLayer(labelUrl, { maxZoom: 16, pane: "shadowPane", opacity: .8 });
const modernBorders = L.geoJSON(BORDERS, { style: { color: "#9aa3ad", weight: .8, opacity: .6, fill: false }, interactive: false });
if (S.modern) { if (!IN_CLAUDE) modernLabels.addTo(map); modernBorders.addTo(map); }
map.on("popupopen", e => e.popup.getElement().querySelectorAll("[data-open]").forEach(b => b.onclick = ev => { ev.preventDefault(); openRef(b.dataset.open); }));
const civG = L.layerGroup().addTo(map), rtG = L.layerGroup().addTo(map), evG = L.layerGroup().addTo(map), hlG = L.layerGroup().addTo(map);
map.on("click", e => placeAt(e.latlng.lat, e.latlng.lng));
document.addEventListener("click", e => { const t = e.target.closest("[data-ent-open]"); if (t) { e.stopPropagation(); openProfile(t.dataset.entOpen); } }, true);

const evShown = ev => S.layers.has(ev.l) && (ev.kind !== "topic" || S.showTopics) && (ev.kind !== "country" || S.showCountryEv);
function renderLayers() {
  const counts = {};
  nearEvents(S.year).filter(ev => (ev.kind !== "topic" || S.showTopics) && (ev.kind !== "country" || S.showCountryEv)).forEach(ev => counts[ev.l] = (counts[ev.l] || 0) + 1);
  counts.political = (counts.political || 0) + activeEnts(S.year).length;
  counts.trade = (counts.trade || 0) + ROUTES.filter(r => S.year >= r.a && S.year <= r.b).length;
  $("#layers").innerHTML = `<h4>Map layers</h4>` + LAYERS.map(l => `
    <label class="layer"><input type="checkbox" data-layer="${l.id}" ${S.layers.has(l.id) ? "checked" : ""}>
    <span class="sw" style="background:${l.color}"></span>${l.name}<span class="cnt">${counts[l.id] || ""}</span></label>`).join("") +
    `<div style="margin-top:8px" class="chips"><button class="chip" id="allLayers">All</button><button class="chip" id="noLayers">None</button></div>
     <h4 style="margin-top:16px">Show on map</h4>
     <label class="layer"><input type="checkbox" id="tgTopics" ${S.showTopics ? "checked" : ""}><span class="sw" style="background:#fff"></span>People, books & ideas</label>
     <label class="layer"><input type="checkbox" id="tgCountry" ${S.showCountryEv ? "checked" : ""}><span class="sw" style="background:#9aa3ad"></span>Country timelines</label>
     <label class="layer"><input type="checkbox" id="modernToggle" ${S.modern ? "checked" : ""}><span class="sw" style="background:#ccc"></span>Today's borders & names</label>
     <p class="muted small" style="margin-top:14px;line-height:1.5"><b style="color:var(--text)">Tip:</b> click anywhere on the map to see what was there in ${fmtYear(S.year)} and that country's history. ← → keys move through time.</p>
     <p class="muted small" style="line-height:1.5">Circles mark rough centers of power, not borders. Dashed/dotted outlines = known mainly from archaeology or oral tradition — not 'empty' land.</p>`;
  $("#layers").querySelectorAll("input[data-layer]").forEach(cb => cb.onchange = () => { cb.checked ? S.layers.add(cb.dataset.layer) : S.layers.delete(cb.dataset.layer); persist(); renderMap(); });
  $("#tgTopics").onchange = e => { S.showTopics = e.target.checked; persist(); renderMap(); };
  $("#tgCountry").onchange = e => { S.showCountryEv = e.target.checked; persist(); renderMap(); };
  $("#modernToggle").onchange = e => {
    S.modern = e.target.checked; persist();
    if (S.modern) { if (!IN_CLAUDE) modernLabels.addTo(map); modernBorders.addTo(map); } else { map.removeLayer(modernLabels); map.removeLayer(modernBorders); }
  };
  $("#allLayers").onclick = () => { LAYERS.forEach(l => S.layers.add(l.id)); persist(); renderMap(); };
  $("#noLayers").onclick = () => { S.layers.clear(); persist(); renderMap(); };
}

function renderLegend() {
  $("#legend").innerHTML = `<b style="color:var(--text)">How much we know</b>
    <div class="row"><span class="ln" style="border-top-style:solid"></span>Well / partly documented</div>
    <div class="row"><span class="ln" style="border-top-style:dashed"></span>Mostly archaeological</div>
    <div class="row"><span class="ln" style="border-top-style:dotted"></span>Oral tradition & archaeology</div>
    <div class="row" style="margin-top:4px"><span class="dotk" style="background:#e0a458;border:2px solid #0b0e11"></span>Event
      <span class="dotk" style="background:#e0a458;border:2px solid #fff;margin-left:8px"></span>Person / work
      <span class="dotk sm" style="background:#9aa3ad;margin-left:8px"></span>Country timeline</div>`;
}

function evPopup(ev) {
  const lc = layerById[ev.l]?.color || "#ccc";
  const t = ev.topic ? tById[ev.topic] : null;
  const links = [...(ev.e || []).map(id => chip(refKey(id), refName(id))), ...(ev.ctys || []).map(id => chip("country:" + id, cById[id]?.n + " history →"))].join(" ");
  const label = t ? (t.role || KIND_NAME[t.k]) : ev.kind === "country" ? "Country timeline" : layerById[ev.l].name;
  return `<div class="tag" style="color:${lc};border-color:${lc}">${esc(label)}</div>
    <h5 style="margin-top:6px">${esc(ev.t)}</h5><div class="muted small">${t ? topicDates(t) : fmtYear(ev.y)} · ${REGIONS[ev.r]}</div>
    ${ev.d ? `<p>${esc(ev.d)}</p>` : ""}${t?.today ? `<p class="small"><b style="color:var(--accent)">Today:</b> ${esc(t.today)}</p>` : ""}
    <div class="chips">${t ? chip("topic:" + t.id, "Open in Encyclopedia") : ""}${links}</div>`;
}
function renderMap() {
  civG.clearLayers(); evG.clearLayers(); rtG.clearLayers();
  const y = S.year;
  if (S.layers.has("political")) {
    activeEnts(y).sort((a, b) => b.r - a.r).forEach(e => {
      const col = REG_COLORS[e.reg] || "#e0a458";
      const dash = e.ev === "archaeological" ? "8 6" : e.ev === "oral" ? "2 6" : null;
      L.circle([e.lat, e.lng], { radius: e.r * 1000, color: col, weight: 1.5, dashArray: dash, fillColor: col, fillOpacity: e.ev === "documented" ? 0.14 : 0.07, interactive: false })
        .bindTooltip(`<span data-ent-open="${e.id}" data-r="${e.r}" title="Open profile: ${esc(e.name)}">${esc(nameAt(e, y))}</span>`, { permanent: true, direction: "center", className: "civ-label", interactive: true }).addTo(civG);
    });
  }
  if (S.layers.has("trade")) {
    ROUTES.filter(r => y >= r.a && y <= r.b).forEach(r => {
      L.polyline(r.path, { color: r.color, weight: 3, opacity: .8, dashArray: "6 6", bubblingMouseEvents: false })
        .bindPopup(`<h5>${esc(r.name)}</h5><div class="muted small">${fmtRange(r.a, r.b)}</div><p>${esc(r.d)}</p>`).addTo(rtG);
    });
  }
  nearEvents(y).filter(evShown).filter(ev => !ev.dupOnMap).forEach(ev => {
    const lc = layerById[ev.l]?.color || "#ccc";
    const style = ev.kind === "topic" ? { radius: 6, color: "#fff", weight: 2 } : ev.kind === "country" ? { radius: 4.5, color: "#0b0e11", weight: 1 } : { radius: 7, color: "#0b0e11", weight: 2 };
    const m = L.circleMarker([ev.lat, ev.lng], { ...style, fillColor: lc, fillOpacity: ev.kind === "country" ? .85 : 1, bubblingMouseEvents: false })
      .bindPopup(() => evPopup(ev), { maxWidth: 320 }).bindTooltip(ev.t, { direction: "top", offset: [0, -6] });
    m._evIdx = ev.idx; m.addTo(evG);
  });
  renderLayers();
  declutterLabels();
}
// Hide labels that collide with a bigger empire's label; recheck after zoom or pan.
function declutterLabels() {
  clearTimeout(declutterLabels._t);
  declutterLabels._t = setTimeout(() => {
    const box = document.getElementById("map").getBoundingClientRect();
    const els = [...document.querySelectorAll("#map .civ-label")].map(el => ({ el, r: +(el.querySelector("[data-r]")?.dataset.r || 0) })).sort((a, b) => b.r - a.r);
    els.forEach(({ el }) => { el.style.visibility = "visible"; });
    const placed = [];
    for (const { el } of els) {
      const b = el.getBoundingClientRect(), pad = 2;
      if (!b.width || b.right < box.left || b.left > box.right || b.bottom < box.top || b.top > box.bottom) continue;
      const hit = placed.some(p => b.left < p.right + pad && b.right > p.left - pad && b.top < p.bottom + pad && b.bottom > p.top - pad);
      if (hit) el.style.visibility = "hidden"; else placed.push(b);
    }
  }, 80);
}
map.on("zoomend moveend", declutterLabels);

function setYear(y, opts = {}) {
  S.year = Math.max(MIN_Y, Math.min(MAX_Y, Math.round(y)));
  $("#yearBig").textContent = fmtYear(S.year);
  if (!opts.fromSlider) $("#slider").value = y2s(S.year);
  const era = eraFor(S.year);
  $("#eraSummary").innerHTML = `<b>${era.n}</b> · ${era.s}`;
  renderMap();
  const top = S.drawerStack[S.drawerStack.length - 1];
  if (!top || top.type === "moment") renderMoment(true);
  else if (top.type === "place") placeAt(top.lat, top.lng, true);
}

function renderTicks() {
  const ticks = [-10000, -3000, -1000, -500, 1, 500, 1000, 1500, 1800, 1900, 2025];
  $("#ticks").innerHTML = ticks.map(t => `<span style="left:${y2s(t) / 10}%" data-y="${t}">${t < 0 ? Math.abs(t) + " BCE" : t}</span>`).join("");
  $("#ticks").querySelectorAll("span").forEach(s => s.onclick = () => setYear(+s.dataset.y));
  const jumps = [["3000 BCE", -3000], ["500 BCE", -500], ["1 CE", 1], ["800", 800], ["1200", 1200], ["1500", 1500], ["1750", 1750], ["1900", 1900], ["1945", 1945], ["Today", 2025]];
  $("#eraChips").innerHTML = jumps.map(([n, y]) => `<button class="chip" data-y="${y}">${n}</button>`).join("");
  $("#eraChips").querySelectorAll("button").forEach(b => b.onclick = () => setYear(+b.dataset.y));
}
$("#slider").addEventListener("input", e => setYear(s2y(+e.target.value), { fromSlider: true }));
$("#yearInput").addEventListener("keydown", e => {
  if (e.key === "Enter") { const y = parseYear(e.target.value); if (y !== null) { setYear(y); e.target.value = ""; } else toast("Try '500 BCE' or '1453'"); }
});
$("#playBtn").addEventListener("click", () => {
  if (S.playing) { clearInterval(S.playing); S.playing = null; $("#playBtn").textContent = "▶"; return; }
  $("#playBtn").textContent = "❚❚";
  S.playing = setInterval(() => {
    const y = S.year, step = y < -3000 ? 50 : y < -1000 ? 10 : y < 1000 ? 5 : y < 1800 ? 3 : 1;
    if (y >= MAX_Y) { $("#playBtn").click(); return; }
    setYear(y + step);
  }, 160);
});
document.addEventListener("keydown", e => {
  if (!$("#view-explore").classList.contains("active") || ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") { const s = +$("#slider").value + (e.key === "ArrowRight" ? 5 : -5); setYear(s2y(Math.max(0, Math.min(1000, s)))); }
});

// ---------- drawer helpers ----------
function evCard(ev) {
  const lc = layerById[ev.l]?.color || "#ccc";
  const t = ev.topic ? tById[ev.topic] : null;
  const who = ev.kind === "country" ? ev.ctys.map(id => cById[id]?.n).join(", ") : t ? (t.role || KIND_NAME[t.k]) : layerById[ev.l].name;
  return `<div class="ev" data-ev="${ev.idx}"><div class="meta"><span class="dotk sm" style="background:${lc}"></span>${t ? topicDates(t) : fmtYear(ev.y)} · ${esc(who)}</div>
    <div class="t">${esc(ev.t)}</div>${ev.d ? `<div class="x">${esc(ev.d)}</div>` : ""}</div>`;
}
function focusEvent(ev) {
  if (!ev) return;
  if (!S.layers.has(ev.l)) { S.layers.add(ev.l); persist(); }
  if (ev.kind === "topic" && !S.showTopics) { S.showTopics = true; persist(); }
  if (ev.kind === "country" && !S.showCountryEv) { S.showCountryEv = true; persist(); }
  if (!evVisibleAt(ev, S.year, windowFor(S.year))) setYear(ev.y); else renderMap();
  map.flyTo([ev.lat, ev.lng], Math.max(map.getZoom(), 5), { duration: .7 });
  setTimeout(() => evG.eachLayer(m => { if (m._evIdx === ev.idx) m.openPopup(); }), 800);
}
function bindDrawer() {
  const d = $("#drawer");
  d.querySelectorAll("[data-ent]").forEach(el => el.onclick = () => openProfile(el.dataset.ent));
  d.querySelectorAll("[data-ev]").forEach(el => el.onclick = () => focusEvent(EVENTS[+el.dataset.ev]));
  d.querySelectorAll("[data-more]").forEach(b => b.onclick = () => { b.previousElementSibling.classList.remove("hidden"); b.remove(); });
  const back = d.querySelector(".back");
  if (back) back.onclick = () => {
    S.drawerStack.pop(); hlG.clearLayers();
    const top = S.drawerStack[S.drawerStack.length - 1];
    if (!top || top.type === "moment") renderMoment(true);
    else if (top.type === "ent") openProfile(top.id, true);
    else if (top.type === "place") placeAt(top.lat, top.lng, true);
  };
}
const collapsible = (items, n = 4) => items.length <= n + 1 ? items.join("") :
  items.slice(0, n).join("") + `<div class="hidden">${items.slice(n).join("")}</div><button class="btn sm more" data-more>Show ${items.length - n} more</button>`;

// ---------- drawer: the moment ("What else was happening?") ----------
function renderMoment(replace) {
  const y = S.year, w = windowFor(y);
  if (!replace || !S.drawerStack.length) S.drawerStack = [{ type: "moment" }];
  const byReg = {};
  const bucket = r => byReg[r] = byReg[r] || { ents: [], people: [], evs: [] };
  activeEnts(y).forEach(e => bucket(e.reg).ents.push(e));
  nearEvents(y, w).forEach(ev => {
    const t = ev.topic && tById[ev.topic];
    if (t && t.k === "person") bucket(ev.r).people.push(t);
    else bucket(ev.r).evs.push(ev);
  });
  const era = eraFor(y);
  const order = { event: 0, topic: 1, country: 2 };
  $("#drawer").innerHTML = `
    ${S.drawerStack.length > 1 ? `<button class="back">← Back</button>` : ""}
    <div class="d-sub">${era.n}</div>
    <h2 class="d-title">The world around ${fmtYear(y)}</h2>
    <p class="muted small">What was happening everywhere, give or take ${w} years. Click a civilization for its profile, a person or event to see it on the map — or click anywhere on the map.</p>
    <div class="d-actions"><button class="btn sm" id="saveYear">${isSaved("year:" + y) ? "★ Saved moment" : "☆ Save this moment"}</button></div>
    ${Object.keys(REGIONS).filter(r => byReg[r]).map(r => {
      const b = byReg[r];
      b.evs.sort((a, c) => order[a.kind] - order[c.kind] || a.y - c.y);
      return `<div class="region-h"><a data-open="region:${r}">${REGIONS[r]} →</a></div>
      ${b.ents.map(e => `<div class="civrow" data-ent="${e.id}"><span class="sw" style="background:${REG_COLORS[e.reg]}"></span>${esc(nameAt(e, y))}<span class="yrs">${fmtRange(e.start, e.end)}</span></div>`).join("")}
      ${b.people.length ? `<div class="people-row"><span class="muted small">People alive:</span> ${b.people.map(t => chip("topic:" + t.id, t.n, `title="${esc(t.role || "")}"`)).join("")}</div>` : ""}
      ${collapsible(b.evs.map(evCard))}`;
    }).join("") || `<p class="muted">Little is recorded in Atlas for this exact moment yet.</p>`}
    ${coverageNote(byReg)}`;
  $("#saveYear").onclick = () => { toggleSave("year:" + y); renderMoment(true); };
  bindDrawer();
}
function coverageNote(byReg) {
  const missing = Object.keys(REGIONS).filter(r => !byReg[r]);
  if (!missing.length) return "";
  return `<p class="muted small" style="margin-top:18px;border-top:1px solid var(--line);padding-top:10px">Coverage gap: nothing in Atlas yet for ${missing.map(r => REGIONS[r]).join(", ")} at this exact date. People lived there — sparse coverage often reflects missing written records, not missing people. Click a spot on the map to read that country's full history.</p>`;
}

// ---------- drawer: clicked place ----------
function placeAt(lat, lng, fromStack) {
  const cid = countryAt(lat, lng), c = cById[cid];
  const y = S.year;
  const here = activeEnts(y).filter(e => distKm(lat, lng, e.lat, e.lng) <= e.r * 1.1).sort((a, b) => a.r - b.r);
  if (!c && !here.length) { toast("Open ocean — try clicking on land"); return; }
  if (!fromStack) S.drawerStack.push({ type: "place", lat, lng });
  hlG.clearLayers();
  if (cid) FEATS.filter(f => f.id === cid).forEach(f => L.geoJSON(f.f, { style: { color: "#fff", weight: 2, fillOpacity: .06 }, interactive: false }).addTo(hlG));
  L.circleMarker([lat, lng], { radius: 5, color: "#fff", fillColor: "#e0a458", fillOpacity: 1, interactive: false }).addTo(hlG);
  const sid = cid === "usa" ? stateAt(lat, lng) : null, st = sid && cById[sid];
  const tl = c ? c.tl.slice().sort((a, b) => a[0] - b[0]) : [];
  const nearestIdx = tl.length ? tl.reduce((bi, row, i) => Math.abs(row[0] - y) < Math.abs(tl[bi][0] - y) ? i : bi, 0) : -1;
  $("#drawer").innerHTML = `
    <button class="back">← Back</button>
    <div class="d-sub">${fmtYear(y)}${c ? " · " + REGIONS[c.reg] : ""}</div>
    <h2 class="d-title">${c ? esc(c.n) : "This place"}</h2>
    <div class="d-modern">📍 ${lat.toFixed(1)}°, ${lng.toFixed(1)}° ${c ? "· today's country" : ""}</div>
    <div class="d-sec"><h4>What was here in ${fmtYear(y)}</h4>
      ${here.length ? here.map(e => `<div class="civrow" data-ent="${e.id}"><span class="sw" style="background:${REG_COLORS[e.reg]}"></span>${esc(nameAt(e, y))}<span class="yrs">${fmtRange(e.start, e.end)}</span></div>`).join("")
      : `<p class="muted small">${y >= 1700 && c ? `Atlas has no deep profile covering this spot in ${fmtYear(y)} — see ${esc(c.n)}'s timeline below for what was happening.` : `No major state in Atlas covers this exact spot in ${fmtYear(y)}. That often means smaller societies, nomadic peoples or regions with few written records — see the land's history below.`}</p>`}</div>
    ${c ? `<p style="line-height:1.6">${esc(c.sum)}</p>
      <div class="d-actions"><button class="btn sm primary" data-open="country:${c.id}">Full history of ${esc(c.n)} →</button>${st ? `<button class="btn sm primary" data-open="country:${st.id}">${esc(st.n)} (state) →</button>` : ""}</div>
      ${st ? `<div class="d-sec"><h4>${esc(st.n)}</h4><p class="small" style="line-height:1.55">${esc(st.sum)}</p></div>` : ""}
      ${CFACTS[c.id] ? `<div class="d-sec"><h4>Did you know? (${esc(c.n)})</h4>${CFACTS[c.id].slice(0, 3).map(([cat, t]) => `<p class="small" style="margin:4px 0;line-height:1.5"><span class="tag">${CF_CATS[cat]}</span> ${esc(t)}</p>`).join("")}</div>` : ""}
      <div class="d-sec"><h4>Timeline <span class="muted small">(closest to ${fmtYear(y)} highlighted — click a date to jump)</span></h4>
        <div class="tl-list">${tl.map((row, i) => `<div class="tl-item ${i === nearestIdx ? "on" : ""}" data-year="${row[0]}"><span class="ty">${row[0] < MIN_Y ? "deep past" : fmtShort(row[0])}</span><span>${esc(row[1])}</span></div>`).join("")}</div></div>` : ""}`;
  $("#drawer").querySelectorAll("[data-year]").forEach(el => el.onclick = () => setYear(+el.dataset.year));
  bindDrawer();
  const on = $("#drawer .tl-item.on"); if (on) on.scrollIntoView({ block: "nearest" });
  syncChatSoon();
}

// ---------- drawer: civilization profile ----------
function topicsFor(e) {
  const linked = TOPICS.filter(t => (t.e || []).includes(e.id));
  const also = TOPICS.filter(t => !linked.includes(t) && t.reg === e.reg && (t.y2 || t.y) >= e.start && t.y <= e.end).slice(0, 10);
  return { linked, also };
}
const topicChips = list => list.map(t => chip("topic:" + t.id, t.n, `title="${esc((t.role || KIND_NAME[t.k]) + " · " + topicDates(t))}"`)).join("");
function groupedTopics(list) {
  return KINDS.map(([k, name]) => { const xs = list.filter(t => t.k === k); return xs.length ? `<div class="kgroup"><span class="muted small">${name}:</span> ${topicChips(xs)}</div>` : ""; }).join("");
}
function openProfile(id, fromBack) {
  const e = entById[id]; if (!e) return;
  if (!$("#view-explore").classList.contains("active")) showView("explore");
  if (!fromBack) S.drawerStack.push({ type: "ent", id });
  markSeen("ent:" + id);
  if (S.year < e.start || S.year > e.end) setYear(Math.round((Math.max(e.start, MIN_Y) + Math.min(e.end, 2025)) / 2));
  hlG.clearLayers();
  L.circle([e.lat, e.lng], { radius: e.r * 1000, color: "#fff", weight: 2, fill: false, interactive: false }).addTo(hlG);
  map.flyTo([e.lat, e.lng], e.r > 1500 ? 3 : e.r > 600 ? 4 : 5, { duration: .8 });
  const secs = SECTIONS.filter(([k]) => e.s[k]);
  const key = "ent:" + id;
  const coexist = ENT.filter(o => o.id !== id && o.start <= e.end && o.end >= e.start && !e.rel.includes(o.id) && o.reg !== e.reg).slice(0, 10);
  const evs = EVENTS.filter(ev => ev.kind === "event" && (ev.e || []).includes(id)).sort((a, b) => a.y - b.y);
  const { linked, also } = topicsFor(e);
  const lands = COUNTRIES.filter(c => c.ent.includes(id));
  $("#drawer").innerHTML = `
    <button class="back">← Back</button>
    <h2 class="d-title">${esc(e.name)}</h2>
    <div class="d-sub">${fmtRange(e.start, e.end)}</div>
    <div class="d-modern">📍 Today: ${esc(e.modern)} · <span class="tag">${EV_LABEL[e.ev]}</span></div>
    <p style="line-height:1.6">${esc(e.sum)}</p>
    <div class="d-actions">
      <button class="btn sm" id="pSave">${isSaved(key) ? "★ Saved" : "☆ Save"}</button>
      <button class="btn sm" id="pMoment">What else was happening?</button>
      <button class="btn sm" id="pCompare">Compare…</button>
    </div>
    ${lands.length ? `<div class="d-sec"><h4>Modern countries on this land</h4><div class="chips">${lands.map(c => chip("country:" + c.id, c.n + " →")).join("")}</div></div>` : ""}
    <div class="toc">${secs.map(([k, n]) => `<a data-sec="${k}">${n}</a>`).join("")}${linked.length || also.length ? `<a data-sec="people-works">People & works</a>` : ""}</div>
    ${e.places?.length ? `<div class="d-sec"><h4>Places then & now</h4><table class="places">${e.places.map((p, i) => `<tr data-pl="${i}"><td>${esc(p[0])}</td><td class="muted">${esc(p[1])}</td></tr>`).join("")}</table></div>` : ""}
    ${secs.map(([k, n]) => `<div class="d-sec" id="sec-${k}"><h4>${n}</h4><p>${esc(e.s[k])}</p></div>`).join("")}
    ${linked.length || also.length ? `<div class="d-sec" id="sec-people-works"><h4>People, books, faiths, food & culture</h4>${groupedTopics(linked)}${also.length ? `<div class="muted small" style="margin-top:8px">Also in this region and era:</div>${groupedTopics(also)}` : ""}</div>` : ""}
    ${evs.length ? `<div class="d-sec"><h4>Timeline</h4>${evs.map(evCard).join("")}</div>` : ""}
    ${e.rel.length ? `<div class="d-sec"><h4>Connected to</h4><div class="chips">${e.rel.map(r => chip(refKey(r), refName(r))).join("")}</div></div>` : ""}
    ${coexist.length ? `<div class="d-sec"><h4>Meanwhile elsewhere</h4><div class="chips">${coexist.map(o => `<button class="chip" data-ent="${o.id}">${esc(o.name)}</button>`).join("")}</div></div>` : ""}
    ${entSrc(e) ? `<div class="d-sec"><h4>Sources & further reading</h4>${readMore([entSrc(e)])}</div>` : ""}
    <div class="d-sec"><h4>Your notes</h4><textarea class="note-box" id="pNote" placeholder="Write what you want to remember…">${esc(S.notes[key] || "")}</textarea></div>`;
  $("#pSave").onclick = () => { $("#pSave").textContent = toggleSave(key) ? "★ Saved" : "☆ Save"; };
  $("#pMoment").onclick = () => { S.drawerStack.push({ type: "moment" }); renderMoment(true); };
  $("#pCompare").onclick = () => { S.cmpA = "e:" + id; if (S.cmpB === S.cmpA) S.cmpB = id === "han" ? "e:rome-emp" : "e:han"; showView("compare"); };
  $("#pNote").oninput = ev => { S.notes[key] = ev.target.value; persist(); };
  $("#drawer").querySelectorAll("[data-sec]").forEach(a => a.onclick = () => document.getElementById("sec-" + a.dataset.sec).scrollIntoView({ behavior: "smooth" }));
  $("#drawer").querySelectorAll("[data-pl]").forEach(tr => tr.onclick = () => {
    const p = e.places[+tr.dataset.pl];
    hlG.clearLayers();
    L.circleMarker([p[2], p[3]], { radius: 9, color: "#fff", fillColor: "#e0a458", fillOpacity: 1 }).bindPopup(`<h5>${esc(p[0])}</h5>Today: ${esc(p[1])}`).addTo(hlG).openPopup();
    map.flyTo([p[2], p[3]], 7);
  });
  $("#drawer").scrollTop = 0;
  bindDrawer();
  syncChatSoon();
}

// =====================================================================
// COUNTRIES & REGIONS
// =====================================================================
let countryLayer = null;
function countryMap() {
  if (maps.countryMap) return maps.countryMap;
  const m = miniMap("countryMap");
  m.setView([20, 15], 2);
  countryLayer = L.geoJSON(BORDERS, {
    style: () => ({ color: "#5d6873", weight: .7, fillColor: "#2a333d", fillOpacity: .35 }),
    onEachFeature: (f, layer) => {
      const id = BORDER_OWNER[f.properties.id] || f.properties.id;
      layer.on("click", () => cById[id] && openCountry(id));
      layer.bindTooltip(cById[id]?.n || f.properties.name, { sticky: true });
    }
  }).addTo(m);
  m._states = L.geoJSON(US_BORDERS, {
    style: () => ({ color: "#7fb3d5", weight: .7, fillColor: "#2a333d", fillOpacity: .2 }),
    onEachFeature: (f, layer) => { layer.on("click", () => cById[f.properties.id] && openCountry(f.properties.id)); layer.bindTooltip(f.properties.name, { sticky: true }); }
  });
  const have = new Set(FEATS.map(f => f.id));
  COUNTRIES.filter(c => !have.has(c.id)).forEach(c => L.circleMarker([c.lat, c.lng], { radius: 4, color: "#9aa3ad", weight: 1, fillColor: "#2a333d", fillOpacity: 1 })
    .bindTooltip(c.n).on("click", () => openCountry(c.id)).addTo(m));
  return m;
}
function styleCountries(sel, linked, regionSet) {
  countryLayer.setStyle(f => {
    const id = BORDER_OWNER[f.properties.id] || f.properties.id;
    if (id === sel) return { color: "#fff", weight: 2, fillColor: "#e0a458", fillOpacity: .7 };
    if (linked.has(id)) return { color: "#48c9b0", weight: 1.2, fillColor: "#48c9b0", fillOpacity: .35 };
    if (regionSet && regionSet.has(id)) return { color: "#9aa3ad", weight: 1, fillColor: REG_COLORS[S.region], fillOpacity: .3 };
    return { color: "#5d6873", weight: .7, fillColor: "#2a333d", fillOpacity: .35 };
  });
}
function openCountry(id) {
  if (!cById[id]) return;
  S.country = id; S.region = cById[id].reg;
  showView("countries");
}
const ALIAS = { usa: "usa", us: "usa", america: "usa", "united states": "usa", uk: "gbr", britain: "gbr", england: "gbr", scotland: "gbr", wales: "gbr", "great britain": "gbr", burma: "mmr", ivory: "civ", "ivory coast": "civ", czech: "cze", "czech republic": "cze", holland: "nld", persia: "irn", siam: "tha", ceylon: "lka", congo: "cod", drc: "cod", zaire: "cod", uae: "are", emirates: "are", korea: "kor", kor: "kor", "south korea": "kor", dprk: "prk", swaziland: "swz", macedonia: "mkd", "east timor": "tls", "cape verde": "cpv", russia: "rus", ussr: "rus", vatican: "vat", turkey: "tur", turkiye: "tur" };
const matchCountry = (c, q) => !q || c.n.toLowerCase().includes(q) || ALIAS[q] === c.id || Object.entries(ALIAS).some(([k, v]) => v === c.id && k.startsWith(q) && q.length >= 2);
function bestCountry(q) {
  q = q.toLowerCase().trim(); if (!q) return null;
  if (ALIAS[q]) return ALIAS[q];
  const all = [...COUNTRIES, ...STATES];
  return (all.find(c => c.n.toLowerCase() === q) || all.find(c => c.n.toLowerCase().startsWith(q)) || all.find(c => matchCountry(c, q)))?.id;
}
function renderCountryList() {
  const q = S.cQuery.toLowerCase().trim();
  const list = $("#countryList");
  const hadFocus = document.activeElement?.id === "cSearch";
  list.innerHTML = `<h3>Countries & regions</h3>
    <input id="cSearch" class="side-search" placeholder="Search ${COUNTRIES.length} countries…" value="${esc(S.cQuery)}">
    ${Object.keys(REGIONS).map(r => {
      const cs = COUNTRIES.filter(c => c.reg === r && matchCountry(c, q)).sort((a, b) => a.n.localeCompare(b.n));
      if (q && !cs.length) return "";
      return `<div class="item region-item ${!S.country && S.region === r ? "active" : ""}" data-region="${r}"><div class="t">${REGIONS[r]}</div><div class="s">${cs.length} countries · overview & timeline</div></div>
        <div class="clist">${cs.map(c => `<a class="citem ${S.country === c.id ? "active" : ""}" data-c="${c.id}">${esc(c.n)}${S.seen.has("country:" + c.id) ? ' <span class="seen-dot">✓</span>' : ""}</a>`).join("")}</div>
        ${r === "na" ? (() => { const ss = STATES.filter(x => !q || x.n.toLowerCase().includes(q)).sort((a, b) => a.n.localeCompare(b.n)); return ss.length ? `<div class="sub-h">US states (${ss.length})</div><div class="clist">${ss.map(x => `<a class="citem ${S.country === x.id ? "active" : ""}" data-c="${x.id}">${esc(x.n)}${S.seen.has("country:" + x.id) ? ' <span class="seen-dot">✓</span>' : ""}</a>`).join("")}</div>` : ""; })() : ""}`;
    }).join("")}`;
  const inp = list.querySelector("#cSearch");
  inp.oninput = e => { S.cQuery = e.target.value; renderCountryList(); };
  inp.onkeydown = e => { if (e.key === "Enter") { const id = bestCountry(S.cQuery); if (id) openCountry(id); } };
  if (hadFocus) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
  list.querySelectorAll("[data-c]").forEach(a => a.onclick = () => openCountry(a.dataset.c));
  list.querySelectorAll("[data-region]").forEach(a => a.onclick = () => { S.country = null; S.region = a.dataset.region; showView("countries"); });
  const act = list.querySelector(".citem.active, .region-item.active");
  if (act && !hadFocus) act.scrollIntoView({ block: "nearest" });
}
function renderCountries() {
  renderCountryList();
  const m = countryMap();
  const showStates = S.country && (S.country === "usa" || cById[S.country]?.parent === "usa");
  if (showStates) { m._states.addTo(m); m._states.setStyle(f => f.properties.id === S.country ? { color: "#fff", weight: 2, fillColor: "#e0a458", fillOpacity: .7 } : { color: "#7fb3d5", weight: .7, fillColor: "#2a333d", fillOpacity: .2 }); }
  else m.removeLayer(m._states);
  if (m._links) m.removeLayer(m._links);
  m._links = L.layerGroup().addTo(m);
  if (S.country) renderCountryPage(m); else renderRegionPage(m);
}
function renderCountryPage(m) {
  const c = cById[S.country], key = "country:" + c.id;
  markSeen(key);
  const linkIds = new Set(c.links.map(([id]) => id).filter(id => cById[id]));
  styleCountries(c.id, linkIds);
  c.links.forEach(([id, rel]) => {
    const o = cById[id] || entById[id]; if (!o) return;
    L.polyline([[c.lat, c.lng], [o.lat, o.lng]], { color: "#48c9b0", weight: 2, opacity: .8, dashArray: "4 6" }).bindTooltip(`${c.n} ↔ ${o.n || o.name}: ${rel}`, { sticky: true }).addTo(m._links);
  });
  const pts = [[c.lat, c.lng], ...c.links.map(([id]) => cById[id] || entById[id]).filter(Boolean).map(o => [o.lat, o.lng])];
  const feat = c.parent ? US_FEATS.filter(f => f.id === c.id) : FEATS.filter(f => f.id === c.id);
  setTimeout(() => {
    m.invalidateSize();
    const b = L.latLngBounds(pts);
    if (feat.length) b.extend(L.geoJSON(feat.map(f => f.f)).getBounds());
    m.fitBounds(b.pad(0.15), { maxZoom: 5 });
  }, 80);
  const tl = c.tl.slice().sort((a, b) => a[0] - b[0]);
  const topics = TOPICS.filter(t => (t.c || []).includes(c.id));
  const ents = c.ent.map(id => entById[id]).filter(Boolean);
  const sources = [...new Set([countrySrc(c), ...ents.map(entSrc).filter(Boolean)])];
  const sec = (title, body) => body ? `<div class="d-sec"><h4>${title}</h4><p>${esc(body)}</p></div>` : "";
  $("#countryBody").innerHTML = `
    <div class="c-head"><div><div class="d-sub"><a data-open="region:${c.reg}">${REGIONS[c.reg]}</a>${c.parent ? ` › <a data-open="country:usa">United States</a> › state` : ""}</div><h2 style="margin:2px 0 4px">${esc(c.n)}</h2></div>
      <div class="chips"><button class="btn sm" id="ctSave">${isSaved(key) ? "★ Saved" : "☆ Save"}</button><button class="btn sm" id="ctCompare">Compare…</button></div></div>
    <p class="lead">${esc(c.sum)}</p>
    ${ents.length ? `<div class="chips" style="margin:8px 0 14px"><span class="muted small">Deep profiles:</span> ${ents.map(e => chip("ent:" + e.id, e.name)).join("")}</div>` : ""}
    ${c.id === "usa" ? `<div class="d-sec"><h4>Explore by state</h4><div class="chips">${STATES.slice().sort((a, b) => a.n.localeCompare(b.n)).map(x => chip("country:" + x.id, x.n)).join("")}</div></div>` : ""}
    ${factBank(c)}
    <div class="cols2">
      <div>
        <div class="d-sec"><h4>Timeline — from earliest history to today</h4>
          <div class="tl-list big">${tl.map(([y, t, code]) => `<div class="tl-item" data-y="${y}" title="Open the world in ${fmtYear(Math.max(y, MIN_Y))}"><span class="ty">${y < MIN_Y ? "deep past" : fmtShort(y)}</span><span><span class="dotk sm" style="background:${layerById[LCODE[code || "p"]].color}"></span> ${esc(t)}</span></div>`).join("")}</div>
          <p class="muted small">Click any date to open the World Explorer at that moment.</p></div>
        ${sec("Influential people", c.people)}
        ${sec("Books, arts & culture", c.culture)}
        ${sec("Food & drink", c.food)}
      </div>
      <div>
        ${sec("Crime & scandal", c.crime)}
        ${sec("Today", c.today)}
        ${sec("Fun fact", c.fun)}
        <div class="d-sec"><h4>Connections to other countries</h4>${c.links.map(([id, rel]) => `<div class="linkrow">${chip(refKey(id, true), refName(id))}<span class="muted small">${esc(rel)}</span></div>`).join("") || `<p class="muted small">—</p>`}</div>
        ${topics.length ? `<div class="d-sec"><h4>From the Encyclopedia</h4>${groupedTopics(topics)}</div>` : ""}
        <div class="d-sec"><h4>Sources & further reading</h4>${readMore(sources)}</div>
        <div class="d-sec"><h4>Your notes</h4><textarea class="note-box" id="ctNote" placeholder="Write what you want to remember…">${esc(S.notes[key] || "")}</textarea></div>
      </div>
    </div>`;
  $("#countryBody").scrollTop = 0;
  if (window.innerWidth <= 900) $("#view-countries").scrollTop = 0;
  $("#countryBody").querySelectorAll("[data-y]").forEach(el => el.onclick = () => {
    const y = +el.dataset.y; showView("explore"); S.drawerStack = [{ type: "moment" }]; setYear(Math.max(MIN_Y, y)); map.flyTo([c.lat, c.lng], 5); placeAt(c.lat, c.lng);
  });
  $("#ctSave").onclick = () => { $("#ctSave").textContent = toggleSave(key) ? "★ Saved" : "☆ Save"; };
  $("#ctCompare").onclick = () => { S.cmpA = "c:" + c.id; if (S.cmpB === S.cmpA) S.cmpB = "c:usa"; showView("compare"); };
  $("#ctNote").oninput = ev => { S.notes[key] = ev.target.value; persist(); };
}
function factBank(c) {
  const list = CFACTS[c.id]; if (!list?.length) return "";
  const cats = Object.keys(CF_CATS).filter(k => list.some(f => f[0] === k));
  return `<div class="d-sec factbank"><h4>Fact bank — ${list.length} things to know about ${esc(c.n)}</h4>
    <div class="chips fb-filter"><button class="chip active" data-fb="all">All</button>${cats.map(k => `<button class="chip" data-fb="${k}">${CF_CATS[k]} (${list.filter(f => f[0] === k).length})</button>`).join("")}
    <button class="chip" data-open="quiz:${c.id}">🃏 Quiz me on ${esc(c.n)}</button></div>
    <div class="fb-list">${list.map(([k, t]) => `<div class="fb-item" data-k="${k}"><span class="tag">${CF_CATS[k]}</span> ${esc(t)}</div>`).join("")}</div></div>`;
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-fb]"); if (!b) return;
  const box = b.closest(".factbank");
  box.querySelectorAll("[data-fb]").forEach(x => x.classList.toggle("active", x === b));
  box.querySelectorAll(".fb-item").forEach(it => it.classList.toggle("hidden", b.dataset.fb !== "all" && it.dataset.k !== b.dataset.fb));
});
function renderRegionPage(m) {
  const r = S.region;
  const cs = COUNTRIES.filter(c => c.reg === r).sort((a, b) => a.n.localeCompare(b.n));
  styleCountries(null, new Set(), new Set(cs.map(c => c.id)));
  setTimeout(() => { m.invalidateSize(); m.fitBounds(L.latLngBounds(cs.map(c => [c.lat, c.lng])).pad(0.1), { maxZoom: 4 }); }, 80);
  const ents = ENT.filter(e => e.reg === r).sort((a, b) => a.start - b.start);
  const minY = -3500, span = y2s(MAX_Y) - y2s(minY);
  const pos = y => (y2s(Math.max(minY, y)) - y2s(minY)) / span * 100;
  const topics = TOPICS.filter(t => t.reg === r).sort((a, b) => a.y - b.y);
  const axis = [-3000, -1000, 1, 1000, 1500, 1800, 2025];
  $("#countryBody").innerHTML = `
    <h2 style="margin:0 0 6px">${REGIONS[r]}</h2>
    <p class="lead">${esc(REGION_INTRO[r])}</p>
    <div class="d-sec"><h4>Who ruled here, when — civilizations & states through time</h4>
      <div class="gantt">
        <div class="g-axis">${axis.map(y => `<span style="left:${pos(y)}%">${fmtShort(y)}</span>`).join("")}</div>
        ${ents.map(e => `<div class="g-row" data-open="ent:${e.id}" title="${esc(e.name)} · ${fmtRange(e.start, e.end)}"><span class="g-label">${esc(e.name)}</span><span class="g-track"><span class="g-bar ${e.ev}" style="left:${pos(e.start)}%;width:${Math.max(.8, pos(e.end) - pos(e.start))}%;background:${REG_COLORS[r]}"></span></span></div>`).join("")}
      </div><p class="muted small">The scale stretches recent centuries (like the main timeline). Click a row for the full profile.</p></div>
    <div class="d-sec"><h4>Countries (${cs.length}) — click one, or click it on the map</h4><div class="chips">${cs.map(c => chip("country:" + c.id, c.n + (S.seen.has("country:" + c.id) ? " ✓" : ""))).join("")}</div></div>
    ${r === "na" ? `<div class="d-sec"><h4>US states (${STATES.length})</h4><div class="chips">${STATES.slice().sort((a, b) => a.n.localeCompare(b.n)).map(x => chip("country:" + x.id, x.n)).join("")}</div></div>` : ""}
    <div class="d-sec"><h4>People, faiths, books, food & culture from this region</h4>${groupedTopics(topics)}</div>`;
  $("#countryBody").scrollTop = 0;
}

// =====================================================================
// ENCYCLOPEDIA
// =====================================================================
function openTopic(id) {
  const t = tById[id]; if (!t) return;
  S.encKind = "all"; S.encRegion = "all"; S.encEra = "all"; S.encQ = t.n;
  showView("encyclopedia");
  S.lastTopic = id;
  setTimeout(() => { const el = document.querySelector(`[data-topic="${id}"]`); if (el) { el.classList.add("open"); el.scrollIntoView({ block: "center" }); markSeen("topic:" + id); } }, 50);
}
function topicCard(t) {
  const key = "topic:" + t.id, lc = layerById[t.l]?.color || "#ccc";
  const ev = EVENTS.find(e => e.topic === t.id);
  return `<div class="card" data-topic="${t.id}">
    <button class="star ${isSaved(key) ? "on" : ""}" data-star="${key}" title="Save">${isSaved(key) ? "★" : "☆"}</button>
    ${S.seen.has(key) ? `<span class="seen">✓ read</span>` : ""}
    <div class="cat" style="color:${lc}">${esc(t.role || KIND_NAME[t.k])} · ${REGIONS[t.reg]}</div>
    <h3>${esc(t.n)}</h3><div class="muted small" style="margin-top:-2px">${topicDates(t)}</div>
    <p class="hook" style="margin-top:6px">${esc(t.d)}</p>
    <div class="body"><p style="margin:0 0 8px">${esc(t.d)}</p>${t.today ? `<p style="margin:0 0 8px"><b style="color:var(--accent)">Where you see it today:</b> ${esc(t.today)}</p>` : ""}
      <div class="chips">${t.y >= MIN_Y ? chip("event:" + ev.idx, "📍 Show on map in " + fmtYear(t.y)) : ""}${(t.c || []).map(id => chip("country:" + id, cById[id]?.n)).join("")}${(t.e || []).map(id => chip("ent:" + id, entById[id]?.name)).join("")}</div>
      ${readMore([t.src])}</div></div>`;
}
function renderEncyclopedia() {
  $("#encSearch").value = S.encQ;
  $("#encRegion").innerHTML = `<option value="all">All regions</option>` + Object.entries(REGIONS).map(([k, n]) => `<option value="${k}" ${S.encRegion === k ? "selected" : ""}>${n}</option>`).join("");
  $("#encEra").innerHTML = `<option value="all">All eras</option>` + ERAS.map((e, i) => `<option value="${i}" ${String(S.encEra) === String(i) ? "selected" : ""}>${e.n}</option>`).join("");
  const counts = {}; TOPICS.forEach(t => counts[t.k] = (counts[t.k] || 0) + 1);
  $("#encKinds").innerHTML = [["all", `All (${TOPICS.length})`], ...KINDS.map(([k, n]) => [k, `${n} (${counts[k] || 0})`])].map(([k, n]) => `<button class="chip ${S.encKind === k ? "active" : ""}" data-k="${k}">${n}</button>`).join("");
  $("#encKinds").querySelectorAll("[data-k]").forEach(b => b.onclick = () => { S.encKind = b.dataset.k; renderEncyclopedia(); });
  renderEncGrid();
}
const textMatch = (txt, q) => q.length <= 4 ? new RegExp("\\b" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(txt) : txt.toLowerCase().includes(q);
function renderEncGrid() {
  const q = S.encQ.toLowerCase().trim();
  const era = S.encEra === "all" ? null : ERAS[+S.encEra];
  const list = TOPICS.filter(t => (S.encKind === "all" || t.k === S.encKind) && (S.encRegion === "all" || t.reg === S.encRegion) &&
    (!era || ((t.y2 || t.y) >= era.a && t.y < era.b)) &&
    (!q || textMatch(t.n + " " + t.d + " " + (t.today || "") + " " + (t.role || "") + " " + (t.c || []).map(id => cById[id]?.n).join(" "), q))).sort((a, b) => a.y - b.y);
  $("#encCount").innerHTML = `${list.length} entr${list.length === 1 ? "y" : "ies"}, oldest first · click a card to expand${q || S.encKind !== "all" || S.encRegion !== "all" || S.encEra !== "all" ? ` · <a href="#" id="encClear">clear filters</a>` : ""}`;
  $("#encGrid").innerHTML = list.map(topicCard).join("") || `<p class="muted">Nothing matches — try clearing a filter.</p>`;
  const cl = $("#encClear"); if (cl) cl.onclick = e => { e.preventDefault(); S.encQ = ""; S.encKind = "all"; S.encRegion = "all"; S.encEra = "all"; renderEncyclopedia(); };
}
$("#encSearch").addEventListener("input", e => { S.encQ = e.target.value; renderEncGrid(); });
$("#encRegion").addEventListener("change", e => { S.encRegion = e.target.value; renderEncGrid(); });
$("#encEra").addEventListener("change", e => { S.encEra = e.target.value; renderEncGrid(); });
$("#encGrid").addEventListener("click", e => {
  if (e.target.closest("[data-star],[data-open],button,a")) return;
  const card = e.target.closest(".card"); if (!card) return;
  card.classList.toggle("open");
  if (card.classList.contains("open")) { markSeen("topic:" + card.dataset.topic); S.lastTopic = card.dataset.topic; }
});

// =====================================================================
// DISCOVER (general knowledge)
// =====================================================================
function dayHash() { const d = new Date(); return d.getFullYear() * 400 + d.getMonth() * 32 + d.getDate(); }
function cfCard(f, flash) {
  const c = cById[f.cid], key = "fact:" + f.id;
  return `<div class="card ${flash ? "flashcard" : ""}" data-fact="${f.id}">
    <button class="star ${isSaved(key) ? "on" : ""}" data-star="${key}" title="Save">${isSaved(key) ? "★" : "☆"}</button>
    ${S.seen.has(key) ? `<span class="seen">✓ read</span>` : ""}
    <div class="cat" style="color:${REG_COLORS[c.reg]}">${esc(c.n)} · ${CF_CATS[f.cat]}</div>
    ${flash ? `<h3>${esc(c.n)}: ${CF_CATS[f.cat].toLowerCase()}</h3><p class="hook">What do you think it is? Reveal to see.</p>` : `<p class="cf-text">${esc(f.text)}</p>`}
    <div class="body">${flash ? `<p style="margin:0 0 8px">${esc(f.text)}</p>` : ""}<div class="go"><button class="chip" data-open="country:${c.id}">${esc(c.n)} history →</button></div></div></div>`;
}
function factCard(f, open) {
  if (f.c === "country") return cfCard(f);
  const cat = fcatById[f.c], key = "fact:" + f.id;
  return `<div class="card ${open ? "open" : ""}" data-fact="${f.id}">
    <button class="star ${isSaved(key) ? "on" : ""}" data-star="${key}" title="Save">${isSaved(key) ? "★" : "☆"}</button>
    ${S.seen.has(key) ? `<span class="seen">✓ read</span>` : ""}
    <div class="cat" style="color:${cat.color}">${cat.name}</div>
    <h3>${esc(f.t)}</h3><p class="hook">${esc(f.h)}</p>
    <div class="body">${esc(f.b)}${readMore(factSrc(f))}${f.go ? `<div class="go"><button class="chip" data-open="${f.go}">Explore in Atlas →</button></div>` : ""}</div></div>`;
}
function filteredFacts() {
  const q = S.factQ.toLowerCase().trim();
  if (S.factCat === "country") return CF_LIST.filter(f => (!S.factCountry || S.factCountry === "all" || f.cid === S.factCountry) && (!q || (f.text + " " + cById[f.cid].n).toLowerCase().includes(q)));
  return FACTS.filter(f => (S.factCat === "all" || S.factCat === "unread" && !S.seen.has("fact:" + f.id) || f.c === S.factCat) &&
    (!q || (f.t + " " + f.h + " " + f.b).toLowerCase().includes(q)));
}
function renderDiscover() {
  const f = FACTS[dayHash() % FACTS.length];
  $("#fotd").innerHTML = `<div class="kicker">Fact of the day · ${fcatById[f.c].name}</div><h2>${esc(f.t)}</h2><p>${esc(f.b)}</p>${readMore(factSrc(f))}
    <div style="margin-top:10px" class="chips"><button class="chip" data-star="fact:${f.id}">${isSaved("fact:" + f.id) ? "★ Saved" : "☆ Save"}</button>${f.go ? `<button class="chip" data-open="${f.go}">Explore in Atlas →</button>` : ""}</div>`;
  markSeen("fact:" + f.id);
  const counts = {}; FACTS.forEach(x => counts[x.c] = (counts[x.c] || 0) + 1);
  const unread = FACTS.filter(x => !S.seen.has("fact:" + x.id)).length;
  $("#factCountry").innerHTML = `<option value="all">Facts by country: all ${CF_LIST.length}</option>` + [...COUNTRIES, ...STATES].filter(c => CFACTS[c.id]).sort((a, b) => a.n.localeCompare(b.n)).map(c => `<option value="${c.id}" ${S.factCountry === c.id ? "selected" : ""}>${esc(c.n)} (${CFACTS[c.id].length})</option>`).join("");
  $("#factCountry").classList.toggle("on", S.factCat === "country");
  $("#factCats").innerHTML = [["all", `All (${FACTS.length})`], ["unread", `Unread (${unread})`], ["country", `🌍 Country facts (${CF_LIST.length})`], ...FCATS.map(c => [c.id, `${c.name} (${counts[c.id] || 0})`])]
    .map(([id, n]) => `<button class="chip ${S.factCat === id ? "active" : ""}" data-cat="${id}">${fcatById[id] ? `<span class="dot" style="background:${fcatById[id].color}"></span>` : ""}${n}</button>`).join("");
  $("#factCats").querySelectorAll("[data-cat]").forEach(b => b.onclick = () => { S.factCat = b.dataset.cat; renderDiscover(); });
  document.querySelectorAll("#factMode button").forEach(b => b.classList.toggle("active", b.dataset.mode === S.factMode));
  S.factMode === "flash" ? renderFlash() : renderFactGrid();
}
function renderFactGrid() {
  const list = filteredFacts();
  $("#factGrid").className = "grid";
  $("#factGrid").innerHTML = list.map(f => factCard(f)).join("") || `<p class="muted">No facts match.</p>`;
}
function renderFlash() {
  const list = filteredFacts();
  const pool = list.filter(f => !S.seen.has("fact:" + f.id));
  const src = pool.length ? pool : list;
  const f = src[Math.floor(Math.random() * src.length)];
  $("#factGrid").className = "";
  if (!f) { $("#factGrid").innerHTML = `<p class="muted">No facts match.</p>`; return; }
  $("#factGrid").innerHTML = `<div class="flash"><p class="muted small">${pool.length} unread in this set · Guess the story before revealing.</p>
    ${f.c === "country" ? cfCard(f, true) : factCard(f).replace('class="card ', 'class="card flashcard ')}
    <div class="flash-actions"><button class="btn primary" id="reveal">Reveal</button><button class="btn" id="nextFlash">Next →</button></div></div>`;
  const card = $("#factGrid .card");
  $("#reveal").onclick = () => { card.classList.add("open"); markSeen("fact:" + f.id); $("#reveal").classList.add("hidden"); };
  $("#nextFlash").onclick = renderFlash;
}
$("#factGrid").addEventListener("click", e => {
  if (e.target.closest("[data-star],[data-open],button,a")) return;
  const card = e.target.closest(".card"); if (!card || card.classList.contains("flashcard")) return;
  card.classList.toggle("open");
  if (card.classList.contains("open")) { markSeen("fact:" + card.dataset.fact); S.lastFact = card.dataset.fact; }
});
document.addEventListener("click", e => {
  const s = e.target.closest("[data-star]"); if (!s) return;
  e.stopPropagation();
  const on = toggleSave(s.dataset.star);
  if (s.classList.contains("star")) { s.classList.toggle("on", on); s.textContent = on ? "★" : "☆"; }
  else if (!s.closest("#libraryBody")) s.textContent = on ? "★ Saved" : "☆ Save";
});
$("#factCountry").addEventListener("change", e => { S.factCountry = e.target.value; S.factCat = "country"; renderDiscover(); });
$("#factSearch").addEventListener("input", e => { S.factQ = e.target.value; S.factMode === "flash" ? renderFlash() : renderFactGrid(); });
document.querySelectorAll("#factMode button").forEach(b => b.onclick = () => { S.factMode = b.dataset.mode; renderDiscover(); });
$("#surpriseBtn").onclick = () => {
  const pool = FACTS.filter(f => !S.seen.has("fact:" + f.id));
  const src = pool.length ? pool : FACTS;
  const f = src[Math.floor(Math.random() * src.length)];
  S.factMode = "cards"; S.factCat = "all"; S.factQ = ""; $("#factSearch").value = "";
  renderDiscover();
  const el = document.querySelector(`[data-fact="${f.id}"]`);
  if (!el) return;
  el.classList.add("open"); markSeen("fact:" + f.id); el.scrollIntoView({ behavior: "smooth", block: "center" });
};

// =====================================================================
// CONNECTIONS
// =====================================================================
function miniMap(id) {
  if (maps[id]) return maps[id];
  const m = L.map(id, { worldCopyJump: true, minZoom: 2 }).setView([30, 40], 2);
  addBase(m);
  m._g = L.layerGroup().addTo(m);
  maps[id] = m; return m;
}
function numIcon(n, on) { return L.divIcon({ className: "", html: `<div class="num-icon ${on ? "on" : ""}">${n}</div>`, iconSize: [24, 24], iconAnchor: [12, 12] }); }

function renderChains() {
  $("#chainList").innerHTML = `<h3>Connections</h3><p class="muted small">Follow ideas, foods, scripts and institutions across places and centuries. For links between countries, open any country in the Countries tab.</p>` +
    CHAINS.map(c => `<div class="item ${c.id === S.chain ? "active" : ""}" data-c="${c.id}"><div class="t">${esc(c.name)}</div><div class="s"><span class="tag">${c.cat}</span> ${esc(c.sum)}</div></div>`).join("");
  $("#chainList").querySelectorAll("[data-c]").forEach(el => el.onclick = () => { S.chain = el.dataset.c; S.chainNode = 0; renderChains(); });
  const c = CHAINS.find(x => x.id === S.chain), key = "chain:" + c.id;
  markSeen(key);
  const m = miniMap("chainMap"); m._g.clearLayers();
  const pts = c.nodes.map(n => [n.lat, n.lng]);
  L.polyline(pts, { color: "#e0a458", weight: 3, opacity: .7, dashArray: "8 6" }).addTo(m._g);
  c.nodes.forEach((n, i) => L.marker([n.lat, n.lng], { icon: numIcon(i + 1, i === S.chainNode) }).on("click", () => { S.chainNode = i; renderChains(); }).bindTooltip(n.l).addTo(m._g));
  const n = c.nodes[S.chainNode];
  setTimeout(() => { m.invalidateSize(); if (S.chainNode === 0) m.fitBounds(L.latLngBounds(pts).pad(0.25), { maxZoom: 5 }); else m.flyTo([n.lat, n.lng], Math.max(3, Math.min(m.getZoom(), 5)), { duration: .6 }); }, 60);
  const cty = countryAt(n.lat, n.lng);
  $("#chainBody").innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><h2 style="margin:0;flex:1">${esc(c.name)}</h2>
      <button class="btn sm" id="cSave">${isSaved(key) ? "★ Saved" : "☆ Save"}</button></div>
    <div class="flow">${c.nodes.map((x, i) => `${i ? `<div class="edge"><span>${esc(x.rel)}</span><span class="arr">→</span></div>` : ""}
      <div class="node ${i === S.chainNode ? "on" : ""}" data-n="${i}"><div class="n">${i + 1}</div><div class="l">${esc(x.l)}</div><div class="y">${fmtYear(x.y)}</div></div>`).join("")}</div>
    <div class="detail"><div class="muted small">${S.chainNode ? `${esc(c.nodes[S.chainNode - 1].l)} → <b>${esc(n.rel)}</b> → ${esc(n.l)}` : "Origin"}</div>
      <h3>${esc(n.l)} · ${fmtYear(n.y)}</h3><p style="margin:4px 0 8px">${esc(n.t)}</p>
      <div class="chips">${S.chainNode > 0 ? `<button class="btn sm" id="cPrev">← Previous</button>` : ""}${S.chainNode < c.nodes.length - 1 ? `<button class="btn sm primary" id="cNext">Next step →</button>` : ""}
      ${chip("year:" + n.y, "See the world in " + fmtYear(n.y) + " →")}${cty ? chip("country:" + cty, cById[cty].n + " history →") : ""}</div></div>
    ${c.debate ? `<div class="detail"><b style="color:var(--accent)">What historians debate</b><p style="margin:4px 0 0">${esc(c.debate)}</p></div>` : ""}`;
  $("#chainBody").querySelectorAll("[data-n]").forEach(el => el.onclick = () => { S.chainNode = +el.dataset.n; renderChains(); });
  if ($("#cPrev")) $("#cPrev").onclick = () => { S.chainNode--; renderChains(); };
  if ($("#cNext")) $("#cNext").onclick = () => { S.chainNode++; renderChains(); };
  $("#cSave").onclick = () => { $("#cSave").textContent = toggleSave(key) ? "★ Saved" : "☆ Save"; };
}

// =====================================================================
// STORIES
// =====================================================================
function storyLinks(ch) {
  const cid = countryAt(ch.lat, ch.lng);
  const civs = ENT.filter(e => ch.y >= e.start && ch.y <= e.end && distKm(ch.lat, ch.lng, e.lat, e.lng) <= e.r * 1.1).sort((a, b) => a.r - b.r).slice(0, 4);
  const people = TOPICS.filter(t => t.k === "person" && (t.y2 ? ch.y >= t.y - 10 && ch.y <= t.y2 + 10 : Math.abs(t.y - ch.y) <= 30) && distKm(ch.lat, ch.lng, t.lat, t.lng) < 1500).slice(0, 5);
  if (!cid && !civs.length && !people.length) return "";
  return `<div class="chips" style="margin-top:10px"><span class="muted small">Explore:</span>
    ${cid ? chip("country:" + cid, cById[cid].n + " history") : ""}
    ${civs.map(e => chip("ent:" + e.id, nameAt(e, ch.y))).join("")}
    ${people.map(t => chip("topic:" + t.id, t.n)).join("")}</div>`;
}
function renderStories() {
  $("#storyList").innerHTML = `<h3>Stories</h3><p class="muted small">Curated journeys through big historical transformations.</p>` +
    STORIES.map(s => `<div class="item ${s.id === S.story ? "active" : ""}" data-s="${s.id}"><div class="t">${esc(s.name)}</div><div class="s"><span class="tag">${s.cat}</span> ${esc(s.sum)}</div></div>`).join("");
  $("#storyList").querySelectorAll("[data-s]").forEach(el => el.onclick = () => { S.story = el.dataset.s; S.storyCh = 0; renderStories(); });
  const st = STORIES.find(x => x.id === S.story), ch = st.ch[S.storyCh], key = "story:" + st.id;
  markSeen(key);
  const m = miniMap("storyMap"); m._g.clearLayers();
  st.ch.forEach((c, i) => L.marker([c.lat, c.lng], { icon: numIcon(i + 1, i === S.storyCh) }).on("click", () => { S.storyCh = i; renderStories(); }).bindTooltip(c.t).addTo(m._g));
  setTimeout(() => { m.invalidateSize(); m.flyTo([ch.lat, ch.lng], ch.z || 4, { duration: 1 }); }, 60);
  const showDeep = S.depth === "deep", showWhy = S.depth !== "short";
  $("#storyBody").innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <h2 style="margin:0;flex:1">${esc(st.name)}</h2>
      <div class="seg" id="depthSeg">${[["short", "Overview"], ["guided", "Guided"], ["deep", "Deep dive"]].map(([d, n]) => `<button data-d="${d}" class="${S.depth === d ? "active" : ""}">${n}</button>`).join("")}</div>
      <button class="btn sm" id="sSave">${isSaved(key) ? "★ Saved" : "☆ Save"}</button>
    </div>
    ${S.depth === "short" ? `<div class="detail">${st.ch.map((c, i) => `<p style="margin:6px 0"><b>${i + 1}. ${esc(c.t)}</b> <span class="muted">(${fmtYear(c.y)})</span> — ${esc(c.s.split(". ")[0])}.</p>`).join("")}</div>` : `
    <div class="chips" style="margin:12px 0">${st.ch.map((c, i) => `<button class="chip ${i === S.storyCh ? "active" : ""}" data-ch="${i}">${i + 1}. ${esc(c.t)}</button>`).join("")}</div>
    <div class="detail">
      <div class="muted small">Chapter ${S.storyCh + 1} of ${st.ch.length} · ${fmtYear(ch.y)}</div>
      <h3>${esc(ch.t)}</h3><p>${esc(ch.s)}</p>
      ${showDeep && ch.d ? `<p class="muted" style="border-left:3px solid var(--accent);padding-left:10px">${esc(ch.d)}</p>` : ""}
      ${!showDeep && ch.d ? `<p class="muted small">More detail available in “Deep dive”.</p>` : ""}
      ${showWhy && ch.why ? `<details ${showDeep ? "open" : ""}><summary style="cursor:pointer;color:var(--accent);font-weight:600">Why did this happen?</summary>
        <div class="why"><div><b>Long-term structural factors</b>${esc(ch.why.structural)}</div><div><b>Immediate trigger</b>${esc(ch.why.trigger)}</div>
        <div><b>Individual decisions</b>${esc(ch.why.decisions)}</div><div><b>Disputed interpretations</b>${esc(ch.why.debated)}</div></div></details>` : ""}
      <div class="chips" style="margin-top:12px">
        ${S.storyCh > 0 ? `<button class="btn sm" id="sPrev">← Previous</button>` : ""}
        ${S.storyCh < st.ch.length - 1 ? `<button class="btn sm primary" id="sNext">Next chapter →</button>` : ""}
        ${chip("year:" + ch.y, "Open " + fmtYear(ch.y) + " in World Explorer →")}
      </div>
      ${storyLinks(ch)}
    </div>`}`;
  $("#storyBody").querySelectorAll("[data-ch]").forEach(el => el.onclick = () => { S.storyCh = +el.dataset.ch; renderStories(); });
  $("#storyBody").querySelectorAll("[data-d]").forEach(el => el.onclick = () => { S.depth = el.dataset.d; renderStories(); });
  if ($("#sPrev")) $("#sPrev").onclick = () => { S.storyCh--; renderStories(); };
  if ($("#sNext")) $("#sNext").onclick = () => { S.storyCh++; renderStories(); };
  $("#sSave").onclick = () => { $("#sSave").textContent = toggleSave(key) ? "★ Saved" : "☆ Save"; };
}

// =====================================================================
// COMPARE (civilizations and/or countries)
// =====================================================================
function cmpProfile(ref) {
  const [t, id] = ref.split(":");
  if (t === "c") {
    const c = cById[id]; if (!c) return null;
    const first = Math.min(...c.tl.map(r => r[0]));
    return { name: c.n, key: "country:" + c.id, start: first, end: 2025, rows: { "When": `Earliest history in Atlas: ${first < MIN_Y ? "deep past" : fmtYear(first)} – present`, "Region": REGIONS[c.reg], "Where today": c.n, "Overview": c.sum, "Key moments": c.tl.slice().sort((a, b) => a[0] - b[0]).map(r => `${fmtShort(Math.max(r[0], MIN_Y))}: ${r[1]}`).join(" · "), "Fact bank highlights": (CFACTS[c.id] || []).slice(0, 4).map(f => f[1]).join(" · "), "Influential people": c.people, "Arts & culture": c.culture, "Food & agriculture": c.food, "Why it matters today": c.today, "Interesting connections": c.fun } };
  }
  const e = entById[id]; if (!e) return null;
  const rows = { "When": fmtRange(e.start, e.end), "Region": REGIONS[e.reg], "Where today": e.modern, "Evidence": EV_LABEL[e.ev], "Overview": e.sum };
  SECTIONS.forEach(([k, n]) => { if (e.s[k]) rows[n] = e.s[k]; });
  return { name: e.name, key: "ent:" + e.id, start: e.start, end: e.end, rows };
}
function renderCompare() {
  const opts = sel => `<optgroup label="Civilizations & states">${ENT.slice().sort((a, b) => a.start - b.start).map(e => `<option value="e:${e.id}" ${"e:" + e.id === sel ? "selected" : ""}>${esc(e.name)} (${fmtRange(e.start, e.end)})</option>`).join("")}</optgroup>
    <optgroup label="Countries (history to today)">${COUNTRIES.slice().sort((a, b) => a.n.localeCompare(b.n)).map(c => `<option value="c:${c.id}" ${"c:" + c.id === sel ? "selected" : ""}>${esc(c.n)}</option>`).join("")}</optgroup>`;
  const A = cmpProfile(S.cmpA) || cmpProfile("e:rome-emp"), B = cmpProfile(S.cmpB) || cmpProfile("e:han");
  const labels = [...new Set([...Object.keys(A.rows), ...Object.keys(B.rows)])];
  const oa = Math.max(A.start, B.start), ob = Math.min(A.end, B.end);
  $("#compareBody").innerHTML = `
    <h1 class="h1">Compare</h1>
    <p class="muted">Pick any two civilizations or countries. Not to rank societies — to see different solutions to similar problems.</p>
    <div class="cmp-pick"><select id="cmpA">${opts(S.cmpA)}</select><span class="muted">vs.</span><select id="cmpB">${opts(S.cmpB)}</select>
      <span class="muted small">${oa <= ob ? `Overlapped ${fmtRange(oa, ob)} — <a href="#" data-open="year:${Math.round((Math.max(oa, MIN_Y) + Math.min(ob, 2025)) / 2)}">see that world</a>` : "Never existed at the same time"}</span></div>
    <table class="cmp"><tr><th></th><th><a href="#" data-open="${A.key}">${esc(A.name)}</a></th><th><a href="#" data-open="${B.key}">${esc(B.name)}</a></th></tr>
      ${labels.map(l => `<tr><td>${esc(l)}</td><td>${esc(A.rows[l] || "—")}</td><td>${esc(B.rows[l] || "—")}</td></tr>`).join("")}</table>
    <div class="detail" style="margin-top:30px"><h3>Curated: ${esc(CMP.title)}</h3>
      <table class="cmp"><tr><th></th><th>${CMP.a}</th><th>${CMP.b}</th></tr>${CMP.rows.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join("")}</table></div>`;
  $("#cmpA").onchange = e => { S.cmpA = e.target.value; renderCompare(); };
  $("#cmpB").onchange = e => { S.cmpB = e.target.value; renderCompare(); };
}

// =====================================================================
// ASK ATLAS
// =====================================================================
const SUGGEST = ["Why did Rome defeat Carthage?", "How did Buddhism reach Japan?", "Where did tomatoes originate?", "What was happening in 200 BCE?",
  "How do airlines make money?", "Korea", "Why do African borders look the way they do?", "What historical events inspired Game of Thrones?"];
function renderAskIntro() {
  $("#askSuggest").innerHTML = SUGGEST.map(s => `<button class="chip">${esc(s)}</button>`).join("");
  $("#askSuggest").querySelectorAll("button").forEach(b => b.onclick = () => { $("#askInput").value = b.textContent; ask(b.textContent); });
}
const STOP = new Set("the and how why did what was were who when where does are for with from that this into about which there their they them has have had its not but you your can history".split(" "));
function searchAll(q) {
  const ws = q.toLowerCase().replace(/[^\w\s-]/g, " ").split(/\s+/).filter(w => w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w) && !["bce", "ce", "bc", "ad"].includes(w));
  if (!ws.length) return [];
  const score = txt => { const t = String(txt).toLowerCase(); return ws.reduce((s, w) => s + (t.includes(w) ? 1 : 0), 0); };
  const out = [];
  COUNTRIES.forEach(c => { const s = score(c.n) * 4 + score(c.sum + " " + c.people + " " + c.culture + " " + c.food); if (s) out.push({ s, kind: "Countries", key: "country:" + c.id, t: c.n, d: c.sum }); });
  ENT.forEach(e => { const s = score(e.name) * 3 + score(e.sum + " " + Object.values(e.s).join(" ")); if (s) out.push({ s, kind: "Civilizations", key: "ent:" + e.id, t: e.name, d: e.sum }); });
  TOPICS.forEach(t => { const s = score(t.n) * 3 + score(t.d + " " + (t.today || "")); if (s) out.push({ s, kind: "Encyclopedia", key: "topic:" + t.id, t: t.n, d: t.d }); });
  FACTS.forEach(f => { const s = score(f.t + " " + f.h) * 2 + score(f.b); if (s) out.push({ s, kind: "Facts", key: "fact:" + f.id, t: f.t, d: f.h }); });
  CF_LIST.forEach(f => { const c = cById[f.cid]; const s = score(c.n) * 2 + score(f.text); if (s > 1 || (s && ws.length === 1)) out.push({ s, kind: "Country facts", key: "country:" + f.cid, t: `${c.n} · ${CF_CATS[f.cat]}`, d: f.text }); });
  STATES.forEach(c => { const s = score(c.n) * 4 + score(c.sum + " " + c.people + " " + (c.crime || "") + " " + c.culture + " " + c.food); if (s) out.push({ s, kind: "US states", key: "country:" + c.id, t: c.n, d: c.sum }); });
  CHAINS.forEach(c => { const s = score(c.name) * 3 + score(c.sum + c.nodes.map(n => n.l + " " + n.t).join(" ")); if (s) out.push({ s, kind: "Connections", key: "chain:" + c.id, t: c.name, d: c.sum }); });
  STORIES.forEach(st => { const s = score(st.name) * 3 + score(st.sum + st.ch.map(c => c.t + " " + c.s).join(" ")); if (s) out.push({ s, kind: "Stories", key: "story:" + st.id, t: st.name, d: st.sum }); });
  EVENTS.filter(ev => ev.kind === "event").forEach(ev => { const s = score(ev.t) * 2 + score(ev.d); if (s) out.push({ s, kind: "Events", key: "event:" + ev.idx, t: `${ev.t} (${fmtYear(ev.y)})`, d: ev.d }); });
  return out.sort((a, b) => b.s - a.s);
}
async function ask(q) {
  q = q.trim(); if (!q) return;
  const results = searchAll(q);
  const yr = q.match(/\b(\d{1,5})\s*(bce|bc|ce|ad)\b/i) || q.match(/\bin (\d{3,4})\b/);
  const groups = {};
  results.slice(0, 30).forEach(r => (groups[r.kind] = groups[r.kind] || []).push(r));
  $("#askResults").innerHTML = (yr ? `<div class="res-group"><button class="btn" data-open="year:${parseYear(yr[0])}">🌍 Show the world in ${fmtYear(parseYear(yr[0]))}</button></div>` : "") +
    (Object.keys(groups).length ? `<h3>From the Atlas library</h3>` + Object.entries(groups).map(([k, items]) => `<div class="res-group"><h4>${k}</h4>${items.slice(0, 5).map(r =>
      `<div class="ev" data-open="${r.key}"><div class="t">${esc(r.t)}</div><div class="x">${esc(String(r.d).slice(0, 180))}${String(r.d).length > 180 ? "…" : ""}</div></div>`).join("")}</div>`).join("")
      : `<p class="muted">Nothing in the local library matches.</p>`);
  $("#askAnswer").innerHTML = `<div class="answer"><span class="typing">Thinking (${esc(providerLabel())})…</span></div>`;
  let text = "";
  try {
    await streamLLM([{ role: "system", content: SYSTEM_PROMPT }, { role: "user", content: q }],
      d => { text += d; $("#askAnswer").innerHTML = `<div class="answer">${md(text.replace(/```places[\s\S]*?(```|$)/, "").trim())}</div>`; },
      st => { if (st && !text) $("#askAnswer").innerHTML = `<div class="answer typing">Loading free model (first time only): ${esc(st)}</div>`; });
    const pm = text.match(/```places\s*([\s\S]*?)```/);
    let places = [];
    try { places = pm ? JSON.parse(pm[1]) : []; } catch {}
    if (places.length) {
      $("#askMap").classList.remove("hidden");
      const m = miniMap("askMap"); m._g.clearLayers();
      places.forEach((p, i) => L.marker([p.lat, p.lng], { icon: numIcon(i + 1) }).bindTooltip(`${esc(p.name)}${p.year != null ? " · " + fmtYear(p.year) : ""}`).addTo(m._g));
      if (places.length > 1) L.polyline(places.map(p => [p.lat, p.lng]), { color: "#e0a458", dashArray: "6 6" }).addTo(m._g);
      setTimeout(() => { m.invalidateSize(); m.fitBounds(L.latLngBounds(places.map(p => [p.lat, p.lng])).pad(0.3), { maxZoom: 6 }); }, 60);
    } else $("#askMap").classList.add("hidden");
  } catch (err) {
    $("#askAnswer").innerHTML = `<div class="answer">${esc(err.message)} <span class="muted">Showing matches from Atlas's own content below.</span></div>`;
    $("#askMap").classList.add("hidden");
  }
}
const SYSTEM_PROMPT = `You are Ask Atlas, a historian and general-knowledge guide inside an interactive world-history atlas for a curious adult learner.
Answer clearly and engagingly. Structure your answer in markdown with these sections when relevant:
### Short answer
### The story (causes: long-term structural factors, immediate triggers, individual decisions)
### Show me the chain (a numbered sequence of historically supported connections, with dates and places)
### What historians debate (uncertainty, competing interpretations, popular myths vs. evidence)
### Why it matters today
Rules: no false precision (use "c." for approximate dates); distinguish documented evidence, interpretation, and popular myth; never invent causal links — say "resembles" vs. "influenced" carefully; mention a surprising connection or fun fact.
Finally, if places are involved, end with a fenced code block labeled places containing a JSON array (max 10) like:
\`\`\`places
[{"name":"Carthage","lat":36.85,"lng":10.32,"year":-146}]
\`\`\`
Order places chronologically if they form a chain. Years are integers, negative for BCE.`;
function md(s) {
  const lines = esc(s).split("\n"); let html = "", inList = false;
  const inline = t => t.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>");
  for (const ln of lines) {
    const li = ln.match(/^\s*(?:[-*]|\d+\.)\s+(.*)/);
    if (li) { if (!inList) { html += "<ul>"; inList = true; } html += `<li>${inline(li[1])}</li>`; continue; }
    if (inList) { html += "</ul>"; inList = false; }
    const h = ln.match(/^#{1,4}\s+(.*)/);
    if (h) html += `<h3>${inline(h[1])}</h3>`; else if (ln.trim()) html += `<p>${inline(ln)}</p>`;
  }
  return html + (inList ? "</ul>" : "");
}
$("#askForm").addEventListener("submit", e => { e.preventDefault(); ask($("#askInput").value); });
$("#settingsBtn").onclick = () => {
  if (IN_CLAUDE) {
    $("#modalCard").innerHTML = `<h3 style="margin-top:0">Who answers your questions?</h3><p>Here on claude.ai, answers come from Claude using your own Claude plan. There's no key to set up. The first question asks your permission once.</p><div class="chips" style="justify-content:flex-end"><button class="btn primary" id="setCancel">Done</button></div>`;
    $("#modal").classList.remove("hidden"); $("#setCancel").onclick = () => $("#modal").classList.add("hidden"); return;
  }
  const c = providerCfg();
  $("#modalCard").innerHTML = `<h3 style="margin-top:0">Who answers your questions?</h3>
    <label>AI provider</label>
    <select id="setProv" style="width:100%">
      <option value="webllm" ${c.provider === "webllm" ? "selected" : ""}>Free — runs in your browser (no key, ~2 GB one-time download)</option>
      <option value="ollama" ${c.provider === "ollama" ? "selected" : ""}>Free — Ollama on this Mac (better answers, needs install)</option>
      <option value="claude" ${c.provider === "claude" ? "selected" : ""}>Claude API (best answers, needs a paid API key)</option>
    </select>
    <div id="pWeb"><label>In-browser model</label><select id="setWeb" style="width:100%">
      ${[["Qwen2.5-3B-Instruct-q4f16_1-MLC", "Qwen 2.5 3B — balanced (recommended, ~2 GB)"], ["Llama-3.2-3B-Instruct-q4f16_1-MLC", "Llama 3.2 3B (~2 GB)"], ["Qwen2.5-1.5B-Instruct-q4f16_1-MLC", "Qwen 2.5 1.5B — fastest, weakest (~1 GB)"], ["Llama-3.1-8B-Instruct-q4f16_1-MLC", "Llama 3.1 8B — smartest, slow (~5 GB)"]].map(([v, n]) => `<option value="${v}" ${c.webModel === v ? "selected" : ""}>${n}</option>`).join("")}</select>
      <p class="muted small">Runs on your Mac's GPU in Chrome. Nothing leaves your computer.</p></div>
    <div id="pOll"><label>Ollama model</label><input id="setOllM" value="${esc(c.ollamaModel)}"><label>Ollama URL</label><input id="setOllU" value="${esc(c.ollamaUrl)}">
      <p class="muted small">Install: <code>brew install ollama</code>, then <code>ollama pull ${esc(c.ollamaModel)}</code> and keep Ollama running.</p></div>
    <div id="pCla"><label>Claude API key</label><input id="setKey" type="password" value="${esc(c.key)}" placeholder="sk-ant-…"><label>Model</label><input id="setModel" value="${esc(c.model)}">
      <p class="muted small">Stored only in this browser and sent directly to api.anthropic.com.</p></div>
    <div class="chips" style="margin-top:14px;justify-content:flex-end"><button class="btn" id="setCancel">Cancel</button><button class="btn primary" id="setSave">Save</button></div>`;
  const sync = () => { const v = $("#setProv").value; $("#pWeb").classList.toggle("hidden", v !== "webllm"); $("#pOll").classList.toggle("hidden", v !== "ollama"); $("#pCla").classList.toggle("hidden", v !== "claude"); };
  $("#setProv").onchange = sync; sync();
  $("#modal").classList.remove("hidden");
  $("#setCancel").onclick = () => $("#modal").classList.add("hidden");
  $("#setSave").onclick = () => {
    save("atlas.provider", $("#setProv").value); save("atlas.webModel", $("#setWeb").value);
    save("atlas.ollamaModel", $("#setOllM").value.trim() || "llama3.1:8b"); save("atlas.ollamaUrl", $("#setOllU").value.trim() || "http://localhost:11434");
    save("atlas.apikey", $("#setKey").value.trim()); save("atlas.model", $("#setModel").value.trim() || "claude-sonnet-5-5");
    $("#modal").classList.add("hidden"); toast("Saved — answering with " + providerLabel()); renderChat();
  };
};
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") $("#modal").classList.add("hidden"); });

// =====================================================================
// LIBRARY & KNOWLEDGE GAPS
// =====================================================================
function describe(key) {
  const i = key.indexOf(":"), type = key.slice(0, i), id = key.slice(i + 1);
  if (type === "fact" && cfById[id]) { const f = cfById[id]; return { kind: "Country fact · " + cById[f.cid].n, t: CF_CATS[f.cat], d: f.text }; }
  if (type === "fact") { const f = FACTS.find(x => x.id === id); return f && { kind: "Fact · " + fcatById[f.c].name, t: f.t, d: f.h }; }
  if (type === "ent") { const e = entById[id]; return e && { kind: "Civilization", t: e.name, d: fmtRange(e.start, e.end) }; }
  if (type === "country") { const c = cById[id]; return c && { kind: c.parent ? "US state" : "Country", t: c.n, d: REGIONS[c.reg] }; }
  if (type === "topic") { const t = tById[id]; return t && { kind: "Encyclopedia · " + (t.role || KIND_NAME[t.k]), t: t.n, d: topicDates(t) }; }
  if (type === "chain") { const c = CHAINS.find(x => x.id === id); return c && { kind: "Connection", t: c.name, d: c.sum }; }
  if (type === "story") { const s = STORIES.find(x => x.id === id); return s && { kind: "Story", t: s.name, d: s.sum }; }
  if (type === "year") return { kind: "Moment", t: "The world in " + fmtYear(+id), d: eraFor(+id).n };
}
function bar(label, n, total, key) {
  const pct = total ? Math.round(n / total * 100) : 0;
  return `<div class="bar ${key ? "clickable" : ""}" ${key ? `data-open="${key}"` : ""}><span>${label}</span><div class="track"><div class="fill" style="width:${pct}%"></div></div><span class="muted small">${n}/${total}</span></div>`;
}
function renderLibrary() {
  const items = S.saved.map(k => ({ k, d: describe(k) })).filter(x => x.d);
  const seenFacts = c => FACTS.filter(f => f.c === c && S.seen.has("fact:" + f.id)).length;
  const regC = r => COUNTRIES.filter(c => c.reg === r);
  const regE = r => ENT.filter(e => e.reg === r);
  const eraEnts = era => ENT.filter(e => e.start < era.b && e.end >= era.a);
  const gaps = [];
  Object.keys(REGIONS).forEach(r => { if (!regC(r).some(c => S.seen.has("country:" + c.id))) gaps.push(`<a href="#" data-open="region:${r}">${REGIONS[r]}</a>`); });
  FCATS.forEach(c => { if (seenFacts(c.id) === 0) gaps.push(`<a href="#" data-open="factcat:${c.id}">${esc(c.name)} facts</a>`); });
  KINDS.forEach(([k, n]) => { if (!TOPICS.some(t => t.k === k && S.seen.has("topic:" + t.id))) gaps.push(`<a href="#" data-open="enckind:${k}">${esc(n)}</a>`); });
  $("#libraryBody").innerHTML = `
    <h1 class="h1">Your Library</h1>
    <p class="muted">Saved topics and notes live in this browser. The knowledge map shows where you haven't explored yet — a discovery aid, not a score. Click a row to explore it.</p>
    <div class="cols">
      <div>
        <h2>Saved (${items.length})</h2>
        ${items.length ? items.map(({ k, d }) => `<div class="lib-item"><div class="grow" data-open="${k}"><span class="tag">${esc(d.kind)}</span><div style="font-weight:600;margin-top:4px">${esc(d.t)}</div><div class="muted small">${esc(d.d)}</div>
          ${S.notes[k] ? `<div class="small" style="margin-top:4px;color:var(--accent)">📝 ${esc(S.notes[k].slice(0, 140))}</div>` : ""}</div>
          <button class="btn sm" data-star="${k}">Remove</button></div>`).join("") : `<p class="muted">Nothing saved yet. Use ☆ on any fact, country, civilization, encyclopedia entry, connection, story or moment.</p>`}
        ${gaps.length ? `<div class="detail"><b style="color:var(--accent)">Suggested next explorations</b><p style="margin:4px 0 0">${gaps.slice(0, 12).join(" · ")}</p></div>` : ""}
      </div>
      <div>
        <h2>Knowledge map</h2>
        <h4 class="muted">Countries explored, by region</h4>
        <div class="bars">${Object.keys(REGIONS).map(r => bar(REGIONS[r], regC(r).filter(c => S.seen.has("country:" + c.id)).length, regC(r).length, "region:" + r)).join("")}</div>
        <h4 class="muted" style="margin-top:18px">Civilizations explored, by region</h4>
        <div class="bars">${Object.keys(REGIONS).map(r => bar(REGIONS[r], regE(r).filter(e => S.seen.has("ent:" + e.id)).length, regE(r).length)).join("")}</div>
        <h4 class="muted" style="margin-top:18px">Civilizations explored, by era</h4>
        <div class="bars">${ERAS.map(era => bar(era.n, eraEnts(era).filter(e => S.seen.has("ent:" + e.id)).length, eraEnts(era).length, "year:" + Math.round((era.a + Math.min(era.b, 2025)) / 2))).join("")}</div>
        <h4 class="muted" style="margin-top:18px">Encyclopedia entries read</h4>
        <div class="bars">${KINDS.map(([k, n]) => bar(n, TOPICS.filter(t => t.k === k && S.seen.has("topic:" + t.id)).length, TOPICS.filter(t => t.k === k).length, "enckind:" + k)).join("")}</div>
        <h4 class="muted" style="margin-top:18px">Country fact banks read, by region</h4>
        <div class="bars">${Object.keys(REGIONS).map(r => { const xs = CF_LIST.filter(f => cById[f.cid].reg === r); return bar(REGIONS[r], xs.filter(f => S.seen.has("fact:" + f.id)).length, xs.length); }).join("")}</div>
        <div class="bars">${bar("US states explored", STATES.filter(x => S.seen.has("country:" + x.id)).length, STATES.length)}</div>
        <h4 class="muted" style="margin-top:18px">Facts read, by topic</h4>
        <div class="bars">${FCATS.map(c => bar(c.name, seenFacts(c.id), FACTS.filter(f => f.c === c.id).length, "factcat:" + c.id)).join("")}</div>
        <div class="chips" style="margin-top:16px"><button class="btn sm" id="exportLib">Export library (JSON)</button><button class="btn sm" id="resetSeen">Reset reading progress</button></div>
      </div>
    </div>`;
  $("#libraryBody").querySelectorAll("[data-star]").forEach(b => b.addEventListener("click", () => setTimeout(renderLibrary, 0)));
  $("#exportLib").onclick = async () => {
    const json = JSON.stringify({ saved: S.saved, notes: S.notes, seen: [...S.seen] }, null, 2);
    if (IN_CLAUDE) {
      const dl = await window.claude.use("downloads");
      if (!dl) { toast("Downloads aren't available here"); return; }
      try { await dl.save({ filename: "atlas-library.json", data: json }); } catch { toast("Download cancelled"); }
      return;
    }
    const blob = new Blob([json], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "atlas-library.json"; a.click();
  };
  $("#resetSeen").onclick = e => {
    const b = e.currentTarget;
    if (b.dataset.armed) { S.seen.clear(); persist(); renderLibrary(); toast("Reading progress reset"); return; }
    b.dataset.armed = "1"; b.textContent = "Click again to reset everything you've read"; setTimeout(() => { if (b.isConnected) { delete b.dataset.armed; b.textContent = "Reset reading progress"; } }, 4000);
  };
}
function renderLibCount() { const el = $("#libCount"); if (el) el.textContent = S.saved.length || ""; }



// ---------- LLM providers: free in-browser (WebLLM), local Ollama, or Claude API ----------
const LLM = { engine: null, engineModel: null, loading: null };
let SAMPLE = null;
if (IN_CLAUDE) window.claude.use("sample").then(sm => { SAMPLE = sm; if (window.__renderChat) window.__renderChat(); }).catch(() => {});
const providerCfg = () => ({ provider: IN_CLAUDE ? "subscription" : load("atlas.provider", "webllm"), webModel: load("atlas.webModel", "Qwen2.5-3B-Instruct-q4f16_1-MLC"),
  ollamaModel: load("atlas.ollamaModel", "llama3.1:8b"), ollamaUrl: load("atlas.ollamaUrl", "http://localhost:11434"), key: load("atlas.apikey", ""), model: load("atlas.model", "claude-sonnet-5-5") });
const providerLabel = () => { const c = providerCfg(); if (c.provider === "subscription") return "Claude (your claude.ai plan)"; return c.provider === "claude" ? (c.key ? "Claude" : "Claude (no key set)") : c.provider === "ollama" ? `Ollama · ${c.ollamaModel}` : "Free in-browser model"; };
async function getWebEngine(onStatus) {
  const { webModel } = providerCfg();
  if (LLM.engine && LLM.engineModel === webModel) return LLM.engine;
  if (!navigator.gpu) throw new Error("This browser doesn't support WebGPU, which the free in-browser model needs. Try Chrome, or switch to Ollama/Claude in ⚙︎.");
  if (!LLM.loading) LLM.loading = (async () => {
    onStatus && onStatus("downloading the AI engine…");
    if (!(await navigator.gpu.requestAdapter())) throw new Error("No usable GPU found for the in-browser model. Switch to Ollama or Claude in ⚙︎.");
    const webllm = await import("https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.79/+esm");
    const eng = await webllm.CreateMLCEngine(webModel, { initProgressCallback: p => onStatus && onStatus(p.text) });
    LLM.engine = eng; LLM.engineModel = webModel; LLM.loading = null; return eng;
  })().catch(e => { LLM.loading = null; throw e; });
  return LLM.loading;
}
// messages: [{role:"system"|"user"|"assistant", content}]
async function streamLLM(messages, onDelta, onStatus) {
  const cfg = providerCfg();
  if (cfg.provider === "subscription") {
    const sm = SAMPLE || await window.claude.use("sample");
    if (!sm) throw new Error("Claude isn't available in this view. Open the page signed in to claude.ai.");
    const system = messages.filter(m => m.role === "system").map(m => m.content).join("\n");
    const turns = messages.filter(m => m.role !== "system").map(m => ({ role: m.role, content: m.content }));
    if (turns.length && system) turns[0] = { role: "user", content: system + "\n\n---\n\n" + turns[0].content };
    let seen = 0;
    try {
      const r = await sm(turns, { cache: false, onText: ({ text }) => { if (text.length > seen) { onDelta(text.slice(seen)); seen = text.length; } } });
      if (r?.text && r.text.length > seen) onDelta(r.text.slice(seen));
    } catch (e) {
      if (e?.text && e.text.length > seen) onDelta(e.text.slice(seen));
      throw new Error(e?.code === "not_granted" ? "Claude access wasn't allowed for this page. You can allow it from the artifact's Permissions menu." : e?.code === "rate_limited" ? "You've hit your Claude usage limit for now — try again later." : (e?.message || "Claude couldn't answer."));
    }
    return;
  }
  if (cfg.provider === "claude") {
    if (!cfg.key) throw new Error("No Claude API key set — add one in ⚙︎, or switch to the free in-browser model.");
    const system = messages.filter(m => m.role === "system").map(m => m.content).join("\n");
    const res = await fetch("https://api.anthropic.com/v1/messages", { method: "POST",
      headers: { "content-type": "application/json", "x-api-key": cfg.key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
      body: JSON.stringify({ model: cfg.model, max_tokens: 1800, stream: true, system, messages: messages.filter(m => m.role !== "system") }) });
    if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err?.error?.message || res.statusText); }
    const reader = res.body.getReader(), dec = new TextDecoder(); let buf = "";
    for (;;) { const { done, value } = await reader.read(); if (done) break; buf += dec.decode(value, { stream: true }); const lines = buf.split("\n"); buf = lines.pop();
      for (const ln of lines) { if (!ln.startsWith("data:")) continue; try { const ev = JSON.parse(ln.slice(5)); if (ev.type === "content_block_delta" && ev.delta?.type === "text_delta") onDelta(ev.delta.text); } catch {} } }
    return;
  }
  if (cfg.provider === "ollama") {
    let res;
    try { res = await fetch(cfg.ollamaUrl.replace(/\/$/, "") + "/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ model: cfg.ollamaModel, messages, stream: true }) }); }
    catch { throw new Error(`Couldn't reach Ollama at ${cfg.ollamaUrl}. Is it installed and running? (brew install ollama && ollama serve, then: ollama pull ${cfg.ollamaModel})`); }
    if (!res.ok) throw new Error(`Ollama error ${res.status}: ${await res.text()}`);
    const reader = res.body.getReader(), dec = new TextDecoder(); let buf = "";
    for (;;) { const { done, value } = await reader.read(); if (done) break; buf += dec.decode(value, { stream: true }); const lines = buf.split("\n"); buf = lines.pop();
      for (const ln of lines) { if (!ln.trim()) continue; try { const j = JSON.parse(ln); if (j.message?.content) onDelta(j.message.content); } catch {} } }
    return;
  }
  const eng = await getWebEngine(onStatus);
  onStatus && onStatus("");
  const stream = await eng.chat.completions.create({ messages, stream: true, temperature: 0.6, max_tokens: 900 });
  for await (const ch of stream) { const d = ch.choices?.[0]?.delta?.content; if (d) onDelta(d); }
}

// =====================================================================
// CONTEXT CHAT ("Ask about this")
// =====================================================================
const CHAT = { open: false, threads: {} };
function chatContext() {
  const view = document.querySelector(".view.active")?.id.replace("view-", "");
  const yr = fmtYear(S.year);
  if (view === "countries" && S.country) {
    const c = cById[S.country];
    const ents = (c.ent || []).map(id => entById[id]).filter(Boolean);
    return { key: "country:" + c.id, label: c.n + (c.parent ? " (US state)" : ""), kind: c.parent ? "US state" : "country",
      data: { name: c.n, region: REGIONS[c.reg], summary: c.sum, timeline: c.tl.map(r => `${fmtYear(Math.max(r[0], MIN_Y))}: ${r[1]}`), people: c.people, culture: c.culture, food: c.food, crime: c.crime, today: c.today, fun: c.fun,
        links: c.links.map(([id, rel]) => `${refName(id)} — ${rel}`), factBank: (CFACTS[c.id] || []).map(([k, t]) => `[${CF_CATS[k]}] ${t}`), deepProfiles: ents.map(e => `${e.name} (${fmtRange(e.start, e.end)}): ${e.sum}`) },
      suggest: [`What are the 5 most important things to know about ${c.n}?`, `What were ${c.n}'s biggest wars and why did they happen?`, `Who are the most influential people from ${c.n}, and why?`, `Tell me some niche or surprising facts about ${c.n}`, `How does ${c.n}'s history shape it today?`, `What scandals or crimes is ${c.n} known for?`] };
  }
  if (view === "countries") {
    const r = S.region;
    return { key: "region:" + r, label: REGIONS[r], kind: "region", data: { region: REGIONS[r], intro: REGION_INTRO[r], countries: COUNTRIES.filter(c => c.reg === r).map(c => c.n), civilizations: ENT.filter(e => e.reg === r).map(e => `${e.name} (${fmtRange(e.start, e.end)})`) },
      suggest: [`Give me a 2-minute history of ${REGIONS[r]}`, `What are the big themes connecting countries in ${REGIONS[r]}?`, `Which country here is most underrated historically?`] };
  }
  if (view === "explore") {
    const top = S.drawerStack[S.drawerStack.length - 1];
    if (top?.type === "ent") {
      const e = entById[top.id];
      return { key: "ent:" + e.id, label: e.name, kind: "civilization", data: { name: e.name, dates: fmtRange(e.start, e.end), modern: e.modern, summary: e.sum, sections: e.s, places: (e.places || []).map(p => `${p[0]} → ${p[1]}`) },
        suggest: [`Why did ${e.name} rise and fall?`, `What did ordinary life look like in ${e.name}?`, `What from ${e.name} survives today?`, `What are historians still debating about ${e.name}?`] };
    }
    if (top?.type === "place") {
      const cid = countryAt(top.lat, top.lng), c = cById[cid];
      const here = activeEnts(S.year).filter(e => distKm(top.lat, top.lng, e.lat, e.lng) <= e.r * 1.1).map(e => e.name);
      return { key: `place:${cid}:${S.year}`, label: `${c ? c.n : "This place"} in ${yr}`, kind: "place and year", data: { place: c?.n, year: yr, statesHere: here, countrySummary: c?.sum, timeline: c?.tl.map(r => `${fmtYear(Math.max(r[0], MIN_Y))}: ${r[1]}`) },
        suggest: [`What was life like here in ${yr}?`, `Who ruled here in ${yr}, and who were their rivals?`, `What happened here just before and after ${yr}?`] };
    }
    const evs = nearEvents(S.year).slice(0, 40).map(ev => `${fmtYear(ev.y)}: ${ev.t}`);
    return { key: "year:" + S.year, label: `The world in ${yr}`, kind: "moment in time", data: { year: yr, era: eraFor(S.year).n, eraSummary: eraFor(S.year).s, activeCivilizations: activeEnts(S.year).map(e => e.name), nearbyEvents: evs },
      suggest: [`What was happening around the world in ${yr}?`, `Which civilizations in ${yr} were in contact with each other?`, `What would a traveler see on a trip across Eurasia in ${yr}?`, `What's the most underrated thing happening in ${yr}?`] };
  }
  if (view === "encyclopedia" && S.lastTopic && tById[S.lastTopic]) {
    const t = tById[S.lastTopic];
    return { key: "topic:" + t.id, label: t.n, kind: KIND_NAME[t.k], data: t, suggest: [`Tell me more about ${t.n}`, `Why does ${t.n} matter today?`, `What myths or misconceptions surround ${t.n}?`] };
  }
  if (view === "discover" && S.lastFact) {
    const f = cfById[S.lastFact] || FACTS.find(x => x.id === S.lastFact);
    if (f) { const title = f.t || `${cById[f.cid].n}: ${CF_CATS[f.cat]}`; return { key: "fact:" + f.id, label: title, kind: "fact", data: f, suggest: ["Tell me more about this", "Is this actually true? What's the evidence?", "What's a related fact I'd find interesting?"] }; }
  }
  if (view === "stories") { const st = STORIES.find(x => x.id === S.story); return { key: "story:" + st.id, label: st.name, kind: "story", data: { story: st.name, chapter: st.ch[S.storyCh] }, suggest: ["Explain this chapter in more depth", "Why did this happen?", "What happened next?"] }; }
  if (view === "connections") { const c = CHAINS.find(x => x.id === S.chain); return { key: "chain:" + c.id, label: c.name, kind: "connection chain", data: c, suggest: ["Walk me through this chain in more detail", "Are any of these links disputed?", "What's a similar connection elsewhere in the world?"] }; }
  return { key: "general", label: "Anything", kind: "general", data: {}, suggest: ["Teach me something surprising about history", "How do airlines make money?", "What's a fun fact about a country I've never heard of?"] };
}
const CHAT_SYSTEM = ctx => `You are Atlas, a friendly expert guide to world history and general knowledge inside an interactive atlas app. The user is curious and wants to build broad general knowledge: history, wars, people, inventions, government, business, crime and scandals, culture, food, niche facts.
The user is currently looking at: ${ctx.kind} — ${ctx.label}.
Here is the Atlas content for it (JSON). Use it as grounding, and go beyond it with your own knowledge when helpful:
${JSON.stringify(ctx.data).slice(0, providerCfg().provider === "webllm" ? 3500 : 9000)}
Style: concise and conversational, use short paragraphs or bullets, include specific names, dates and numbers, and end with one interesting follow-up thread they could pull. Distinguish well-established facts from legends or debated claims. If something in the Atlas content looks wrong, say so politely.`;
function renderChat() {
  const ctx = chatContext();
  CHAT.ctx = ctx;
  $("#chatFabLabel").textContent = ctx.key === "general" ? "Ask Atlas" : "Ask about " + ctx.label;
  if (!CHAT.open) return;
  $("#chatCtx").textContent = ctx.label;
  const th = CHAT.threads[ctx.key] || [];
  $("#chatMsgs").innerHTML = th.length ? th.map(m => `<div class="msg ${m.role === "user" ? "user" : "bot"}">${m.role === "user" ? esc(m.content) : m.html || (m.content ? md(m.content) : `<span class="typing">${esc(m.status || "Thinking…")}</span>`)}</div>`).join("")
    : `<div class="msg bot">Ask me anything about <b>${esc(ctx.label)}</b> — history, wars, people, government, inventions, scandals, culture, or how it connects to the rest of the world.<p class="muted small" style="margin-top:6px">Answering with: <b>${esc(providerLabel())}</b> (change with ⚙︎).${providerCfg().provider === "webllm" && !LLM.engine && !IN_CLAUDE ? " The first answer downloads a ~2 GB model once — after that it runs offline on your Mac." : ""}</p></div>`;
  $("#chatSuggest").innerHTML = th.length ? "" : ctx.suggest.map(q => `<button class="chip" data-q="${esc(q)}">${esc(q)}</button>`).join("");
  $("#chatSuggest").querySelectorAll("[data-q]").forEach(b => b.onclick = () => sendChat(b.dataset.q));
  const box = $("#chatMsgs"); box.scrollTop = box.scrollHeight;
}
async function sendChat(text) {
  text = text.trim(); if (!text) return;
  const ctx = CHAT.ctx || chatContext();
  const th = CHAT.threads[ctx.key] = CHAT.threads[ctx.key] || [];
  th.push({ role: "user", content: text });
  $("#chatInput").value = "";
  const msg = { role: "assistant", content: "" };
  th.push(msg); renderChat();
  const bubble = [...document.querySelectorAll("#chatMsgs .msg.bot")].pop();
  bubble.innerHTML = `<span class="typing">Thinking…</span>`;
  const history = th.filter(m => m !== msg && !m.html && m.content).slice(-10).map(m => ({ role: m.role, content: m.content }));
  try {
    await streamLLM([{ role: "system", content: CHAT_SYSTEM(ctx) }, ...history],
      d => { msg.content += d; const b = [...document.querySelectorAll("#chatMsgs .msg.bot")].pop(); if (b) b.innerHTML = md(msg.content); $("#chatMsgs").scrollTop = $("#chatMsgs").scrollHeight; },
      st => { if (st && !msg.content) { msg.status = "Loading free model (first time only, then it's offline): " + st; const b = [...document.querySelectorAll("#chatMsgs .msg.bot")].pop(); if (b) b.innerHTML = `<span class="typing">${esc(msg.status)}</span>`; } });
    if (!msg.content) msg.content = "(No answer returned.)";
  } catch (err) {
    const local = searchAll(text + " " + (ctx.key === "general" ? "" : ctx.label)).slice(0, 5);
    msg.content = ""; msg.html = `<p>${esc(err.message)}</p>${local.length ? `<p class="muted small">Meanwhile, from Atlas's own content:</p>${local.map(r => `<div class="ev" data-open="${r.key}"><div class="t">${esc(r.t)}</div><div class="x">${esc(String(r.d).slice(0, 160))}</div></div>`).join("")}` : ""}`;
  }
  renderChat();
}
window.__renderChat = renderChat;
$("#chatFab").onclick = () => { CHAT.open = true; $("#chat").classList.remove("hidden"); $("#chatFab").classList.add("hidden"); renderChat(); setTimeout(() => $("#chatInput").focus(), 50); };
$("#chatClose").onclick = () => { CHAT.open = false; $("#chat").classList.add("hidden"); $("#chatFab").classList.remove("hidden"); };
$("#chatClear").onclick = () => { delete CHAT.threads[CHAT.ctx?.key]; renderChat(); };
$("#chatKey").onclick = () => $("#settingsBtn").click();
$("#chatForm").addEventListener("submit", e => { e.preventDefault(); sendChat($("#chatInput").value); });
$("#chatInput").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChat(e.target.value); } });
// keep the chat's context in sync with whatever the user is viewing
const chatSync = () => { clearTimeout(CHAT._t); CHAT._t = setTimeout(renderChat, 120); };
document.addEventListener("click", chatSync, true);
window.addEventListener("hashchange", chatSync);

// ---------- boot ----------
document.querySelectorAll("#nav button").forEach(b => b.onclick = () => showView(b.dataset.view));
renderTicks(); renderLegend(); renderLibCount();
setYear(S.year);
renderMoment();
const [hv, hid] = location.hash.slice(1).split("/");
if (hv === "countries" && hid && cById[hid]) openCountry(hid);
else if (hv && document.getElementById("view-" + hv)) showView(hv);
window.addEventListener("popstate", () => {
  const [v, id] = location.hash.slice(1).split("/");
  if (v === "countries") { S.country = id && cById[id] ? id : null; }
  if (v && document.getElementById("view-" + v)) showView(v, { fromHistory: true });
});
document.addEventListener("keydown", e => { if (e.key === "Escape") { $("#modal").classList.add("hidden"); if (CHAT.open) $("#chatClose").click(); } });
renderChat();
window.ATLAS_DEBUG = { S, EVENTS, setYear, openCountry, openProfile, placeAt, openRef, chatContext };
})();
