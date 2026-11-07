"use strict";

/* =====================================================
   1. GAME DATA  (add your own items here!)
   ===================================================== */

const SKINS = ['#ffe0d0', '#f6c9a8', '#e0a67c', '#b9794f', '#8a5434'];

const HAIR_COLORS = [
  { name: 'Blonde', c: '#f5d36b' },
  { name: 'Brown',  c: '#6b3f26' },
  { name: 'Black',  c: '#2a2230' },
  { name: 'Pink',   c: '#ff7eb6' },
  { name: 'Purple', c: '#a66cff' },
  { name: 'Blue',   c: '#59a9ff' },
  { name: 'Red',    c: '#c8362f' }
];

const HAIRS = [
  { name: 'Long Straight', type: 'long' },
  { name: 'Ponytail',      type: 'pony' },
  { name: 'Bob',           type: 'bob' },
  { name: 'Bun',           type: 'bun' },
  { name: 'Pigtails',      type: 'pigtails' },
  { name: 'Wavy',          type: 'wavy' },
  { name: 'Pixie',         type: 'pixie' }
];

const DRESSES = [
  { name: 'Princess Gown',  type: 'gown',     c: '#ff8fc7', c2: '#ffd1ea' },
  { name: 'Lavender Gown',  type: 'gown',     c: '#b78cff', c2: '#e6d8ff' },
  { name: 'Pink Mini',      type: 'mini',     c: '#ff6fae', c2: '#ffffff' },
  { name: 'Mint Mini',      type: 'mini',     c: '#7fdcc0', c2: '#d6fff1' },
  { name: 'Red Carpet',     type: 'long',     c: '#e8355a', c2: '#ffd1da' },
  { name: 'Sky Evening',    type: 'long',     c: '#6fb4ff', c2: '#dbeeff' },
  { name: 'Ballerina',      type: 'tutu',     c: '#ffb3d9', c2: '#ff7eb6' },
  { name: 'Sunny Casual',   type: 'casual',   c: '#ffd166', c2: '#ff8fab' },
  { name: 'Cool Jumpsuit',  type: 'jumpsuit', c: '#9d7bff', c2: '#ffd1ea' }
];

const SHOES = [
  { name: 'Pink Heels',   type: 'heel',    c: '#ff4fa0' },
  { name: 'Gold Heels',   type: 'heel',    c: '#f2c14e' },
  { name: 'Purple Flats', type: 'flat',    c: '#9d7bff' },
  { name: 'White Boots',  type: 'boot',    c: '#ffffff' },
  { name: 'Red Boots',    type: 'boot',    c: '#d93a52' },
  { name: 'Sneakers',     type: 'sneaker', c: '#7fdcc0' }
];

const ACCESSORIES = [
  { id: 'crown',     name: 'Crown',      icon: '👑' },
  { id: 'bow',       name: 'Hair Bow',   icon: '🎀' },
  { id: 'glasses',   name: 'Sunglasses', icon: '🕶️' },
  { id: 'necklace',  name: 'Necklace',   icon: '📿' },
  { id: 'earrings',  name: 'Earrings',   icon: '💎' },
  { id: 'purse',     name: 'Handbag',    icon: '👜' }
];

const MAKEUPS = [
  { name: 'Natural',      lip: '#e98c9b', blush: '#ffb3b3', shadow: '#d9b8a0' },
  { name: 'Pink Glam',    lip: '#ff3d8b', blush: '#ff8fb8', shadow: '#ff9ccc' },
  { name: 'Berry',        lip: '#b5124f', blush: '#e6608f', shadow: '#9b4f8f' },
  { name: 'Coral',        lip: '#ff6f5e', blush: '#ffa07a', shadow: '#ffb38a' },
  { name: 'Purple Night', lip: '#8e3fb8', blush: '#d28cff', shadow: '#7b5cff' },
  { name: 'Bare',         lip: '#d98a8a', blush: null,      shadow: null }
];

const BACKGROUNDS = [
  { name: 'Pink Sky',    c1: '#ffd6ec', c2: '#ffb3dc', decor: 'hearts' },
  { name: 'Lavender',    c1: '#e9dcff', c2: '#c7a8ff', decor: 'stars' },
  { name: 'Mint Garden', c1: '#d8fff0', c2: '#a6ecd0', decor: 'dots' },
  { name: 'Sunset',      c1: '#ffe3a8', c2: '#ff9ccc', decor: 'dots' },
  { name: 'Night Glam',  c1: '#3b2a6e', c2: '#8a4fd1', decor: 'stars' },
  { name: 'Runway',      c1: '#fff5fb', c2: '#ffd9ee', decor: 'runway' }
];

const TABS = [
  { id: 'dress',       label: '👗 Dresses' },
  { id: 'hair',        label: '💇‍♀️ Hair' },
  { id: 'shoes',       label: '👠 Shoes' },
  { id: 'accessories', label: '💎 Accessories' },
  { id: 'makeup',      label: '💄 Makeup' },
  { id: 'bg',          label: '🌸 Backgrounds' }
];

/* =====================================================
   2. DRAWING THE DOLL (everything is SVG)
   Each function returns a string of SVG shapes.
   ===================================================== */

function bgSvg(bg, id) {
  const spots = [[40, 60], [250, 90], [60, 200], [260, 260], [30, 360], [270, 400], [220, 40], [80, 120]];
  let decor = '';

  spots.forEach((p, i) => {
    const s = 0.8 + (i % 3) * 0.4;
    const t = `transform="translate(${p[0]} ${p[1]}) scale(${s})"`;
    if (bg.decor === 'hearts') {
      decor += `<path d="M0 -4 C -8 -12 -14 0 0 10 C 14 0 8 -12 0 -4 Z" ${t} fill="#fff" opacity=".65"/>`;
    } else if (bg.decor === 'stars') {
      decor += `<path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" ${t} fill="#fff" opacity=".8"/>`;
    } else if (bg.decor === 'dots') {
      decor += `<circle r="6" ${t} fill="#fff" opacity=".5"/>`;
    }
  });

  if (bg.decor === 'runway') {
    decor += '<path d="M150 0 L50 520 L250 520 Z" fill="#fff" opacity=".45"/>';
  }

  return `<defs>
      <linearGradient id="${id}-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${bg.c1}"/>
        <stop offset="1" stop-color="${bg.c2}"/>
      </linearGradient>
    </defs>
    <rect width="300" height="520" fill="url(#${id}-bg)"/>
    ${decor}
    <rect y="480" width="300" height="40" fill="#fff" opacity=".35"/>
    <ellipse cx="150" cy="488" rx="72" ry="8" fill="#000" opacity=".12"/>`;
}

function hairBack(type, c) {
  const cap = `<ellipse cx="150" cy="92" rx="44" ry="48" fill="${c}"/>`;
  switch (type) {
    case 'long':
      return cap + `<path d="M106 100 Q104 52 150 50 Q196 52 194 100 L204 340 Q150 352 96 340 Z" fill="${c}"/>`;
    case 'pony':
      return cap + `<path d="M190 70 Q256 80 244 150 Q240 220 214 252 Q224 170 192 110 Z" fill="${c}"/>
                    <circle cx="192" cy="82" r="6" fill="#ff4fa0"/>`;
    case 'bob':
      return cap + `<path d="M104 95 Q104 50 150 48 Q196 50 196 95 L204 190 Q150 206 96 190 Z" fill="${c}"/>`;
    case 'bun':
      return cap + `<circle cx="150" cy="38" r="22" fill="${c}"/>`;
    case 'pigtails':
      return cap + `<path d="M110 85 Q66 100 76 195 Q92 150 112 120 Z" fill="${c}"/>
                    <path d="M190 85 Q234 100 224 195 Q208 150 188 120 Z" fill="${c}"/>
                    <circle cx="108" cy="92" r="6" fill="#ff4fa0"/><circle cx="192" cy="92" r="6" fill="#ff4fa0"/>`;
    case 'wavy':
      return cap + `<path d="M104 95 Q102 50 150 48 Q198 50 196 95 Q214 130 200 170 Q216 210 196 250 Q210 290 190 320 Q150 335 110 320 Q90 290 104 250 Q84 210 100 170 Q86 130 104 95 Z" fill="${c}"/>`;
    default: // pixie
      return cap;
  }
}

function hairFront(type, c) {
  if (type === 'pixie') {
    return `<path d="M104 96 Q106 46 150 44 Q194 46 196 96 Q176 68 150 66 Q126 68 104 96 Z" fill="${c}"/>`;
  }
  return `<path d="M106 110 Q106 58 150 56 Q194 58 194 110 Q176 82 156 74 Q140 98 112 114 Z" fill="${c}"/>`;
}

function bodySvg(skin) {
  return `<rect x="140" y="148" width="20" height="30" fill="${skin}"/>
    <path d="M120 172 Q150 160 180 172 L176 240 L124 240 Z" fill="${skin}"/>
    <g stroke="${skin}" stroke-linecap="round" fill="none">
      <path d="M120 180 L98 290" stroke-width="12"/>
      <path d="M180 180 L202 290" stroke-width="12"/>
      <path d="M137 235 L136 462" stroke-width="17"/>
      <path d="M163 235 L164 462" stroke-width="17"/>
    </g>
    <circle cx="97" cy="294" r="8" fill="${skin}"/>
    <circle cx="203" cy="294" r="8" fill="${skin}"/>`;
}

function shoeSvg(s) {
  let out = '';
  [136, 164].forEach(x => {
    if (s.type === 'heel') {
      out += `<path d="M${x - 10} 456 h20 l2 14 h-26 z" fill="${s.c}"/>
              <rect x="${x + 6}" y="470" width="4" height="10" fill="${s.c}"/>`;
    } else if (s.type === 'flat') {
      out += `<ellipse cx="${x}" cy="467" rx="13" ry="7" fill="${s.c}"/>`;
    } else if (s.type === 'boot') {
      out += `<rect x="${x - 10}" y="426" width="20" height="44" rx="6" fill="${s.c}" stroke="#d9c3e6" stroke-width="1"/>
              <rect x="${x - 12}" y="466" width="26" height="11" rx="4" fill="${s.c}" stroke="#d9c3e6" stroke-width="1"/>`;
    } else {
      out += `<ellipse cx="${x}" cy="466" rx="14" ry="8" fill="${s.c}"/>
              <rect x="${x - 14}" y="471" width="28" height="5" rx="2" fill="#fff"/>`;
    }
  });
  return out;
}

function dressSvg(d) {
  const c = d.c, c2 = d.c2;
  const dots = pts => pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="${c2}" opacity=".85"/>`).join('');

  switch (d.type) {
    case 'gown':
      return `<path d="M122 172 Q150 164 178 172 L174 232 L246 448 Q150 476 54 448 L126 232 Z" fill="${c}"/>
              <rect x="124" y="226" width="52" height="10" rx="4" fill="${c2}"/>`
              + dots([[110, 330], [190, 350], [150, 400], [90, 420], [210, 420], [150, 310]]);
    case 'mini':
      return `<path d="M122 172 Q150 164 178 172 L175 228 L214 345 Q150 360 86 345 L125 228 Z" fill="${c}"/>
              <rect x="124" y="224" width="52" height="9" rx="4" fill="${c2}"/>`
              + dots([[120, 300], [180, 300], [150, 330]]);
    case 'long':
      return `<path d="M124 172 Q150 164 176 172 L173 238 L190 452 Q150 464 110 452 L127 238 Z" fill="${c}"/>
              <rect x="125" y="228" width="50" height="9" rx="4" fill="${c2}"/>
              <path d="M150 300 L150 450" stroke="${c2}" stroke-width="2" opacity=".6"/>`;
    case 'tutu':
      return `<path d="M124 172 Q150 164 176 172 L174 232 L126 232 Z" fill="${c}"/>
              <ellipse cx="150" cy="252" rx="76" ry="26" fill="${c2}"/>
              <ellipse cx="150" cy="243" rx="64" ry="20" fill="${c}"/>
              <ellipse cx="150" cy="236" rx="50" ry="12" fill="${c2}" opacity=".6"/>`;
    case 'casual':
      return `<path d="M124 172 Q150 164 176 172 L178 232 L122 232 Z" fill="${c2}"/>
              <path d="M122 230 L178 230 L202 332 L98 332 Z" fill="${c}"/>`
              + dots([[125, 270], [175, 270], [150, 300]]);
    default: // jumpsuit
      return `<path d="M124 172 Q150 164 176 172 L174 235 L186 422 L156 422 L150 310 L144 422 L114 422 L126 235 Z" fill="${c}"/>
              <rect x="125" y="226" width="50" height="9" rx="4" fill="${c2}"/>`;
  }
}

function faceSvg(skin, mk) {
  const blush = mk.blush
    ? `<circle cx="122" cy="128" r="9" fill="${mk.blush}" opacity=".55"/><circle cx="178" cy="128" r="9" fill="${mk.blush}" opacity=".55"/>`
    : '';
  const shadow = mk.shadow
    ? `<ellipse cx="136" cy="101" rx="12" ry="6" fill="${mk.shadow}" opacity=".6"/><ellipse cx="164" cy="101" rx="12" ry="6" fill="${mk.shadow}" opacity=".6"/>`
    : '';
  return `<ellipse cx="112" cy="112" rx="5" ry="8" fill="${skin}"/>
    <ellipse cx="188" cy="112" rx="5" ry="8" fill="${skin}"/>
    <ellipse cx="150" cy="110" rx="38" ry="44" fill="${skin}"/>
    ${blush}${shadow}
    <ellipse cx="136" cy="108" rx="8" ry="6" fill="#fff"/>
    <ellipse cx="164" cy="108" rx="8" ry="6" fill="#fff"/>
    <circle cx="136" cy="108" r="4.5" fill="#4a7bd6"/><circle cx="164" cy="108" r="4.5" fill="#4a7bd6"/>
    <circle cx="136" cy="108" r="2" fill="#1d1d3a"/><circle cx="164" cy="108" r="2" fill="#1d1d3a"/>
    <circle cx="134.5" cy="106.5" r="1.3" fill="#fff"/><circle cx="162.5" cy="106.5" r="1.3" fill="#fff"/>
    <path d="M127 105 Q136 99 145 105 M155 105 Q164 99 173 105" stroke="#2a2230" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M126 94 Q136 89 146 93 M154 93 Q164 89 174 94" stroke="#5a3a2a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M150 118 q-3 5 0 6" stroke="#000" stroke-opacity=".2" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M141 133 Q146 130 150 133 Q154 130 159 133 Q150 143 141 133 Z" fill="${mk.lip}"/>`;
}

function accessoriesSvg(list) {
  let out = '';
  if (list.includes('purse')) {
    out += `<path d="M196 296 Q206 270 216 296" stroke="#8e44ad" stroke-width="3" fill="none"/>
            <rect x="188" y="296" width="36" height="28" rx="6" fill="#b78cff"/>
            <circle cx="206" cy="306" r="3" fill="#ffd166"/>`;
  }
  if (list.includes('necklace')) {
    out += `<path d="M132 166 Q150 198 168 166" stroke="#ffd166" stroke-width="3" fill="none"/>
            <circle cx="150" cy="190" r="5" fill="#ff4fa0"/>`;
  }
  if (list.includes('earrings')) {
    out += `<circle cx="112" cy="126" r="3.5" fill="#ffd166"/><circle cx="112" cy="135" r="3" fill="#ff4fa0"/>
            <circle cx="188" cy="126" r="3.5" fill="#ffd166"/><circle cx="188" cy="135" r="3" fill="#ff4fa0"/>`;
  }
  if (list.includes('glasses')) {
    out += `<circle cx="136" cy="108" r="12" fill="#ff78be" fill-opacity=".4" stroke="#3a2a4a" stroke-width="2.5"/>
            <circle cx="164" cy="108" r="12" fill="#ff78be" fill-opacity=".4" stroke="#3a2a4a" stroke-width="2.5"/>
            <path d="M148 108 L152 108" stroke="#3a2a4a" stroke-width="2.5"/>`;
  }
  if (list.includes('bow')) {
    out += `<path d="M186 66 L164 52 L164 80 Z" fill="#ff4fa0"/>
            <path d="M186 66 L208 52 L208 80 Z" fill="#ff4fa0"/>
            <circle cx="186" cy="66" r="6" fill="#ff8fc7"/>`;
  }
  if (list.includes('crown')) {
    out += `<path d="M124 62 L130 38 L141 54 L150 32 L159 54 L170 38 L176 62 Z" fill="#ffd166" stroke="#e0a526" stroke-width="2"/>
            <circle cx="150" cy="50" r="3" fill="#ff4fa0"/><circle cx="133" cy="54" r="2.2" fill="#9d7bff"/><circle cx="167" cy="54" r="2.2" fill="#9d7bff"/>`;
  }
  return out;
}

/* Builds the whole doll picture. "id" keeps gradient ids unique. */
function buildDollSvg(s, id) {
  const skin = SKINS[s.skin];
  const hairC = HAIR_COLORS[s.hairColor].c;
  const hair = HAIRS[s.hair].type;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 520" width="300" height="520" class="doll-svg">`
    + bgSvg(BACKGROUNDS[s.bg], id)
    + hairBack(hair, hairC)
    + bodySvg(skin)
    + shoeSvg(SHOES[s.shoes])
    + dressSvg(DRESSES[s.dress])
    + faceSvg(skin, MAKEUPS[s.makeup])
    + hairFront(hair, hairC)
    + accessoriesSvg(s.accessories)
    + `</svg>`;
}

/* =====================================================
   3. GAME STATE
   ===================================================== */

const DEFAULT_STATE = {
  dress: 0, hair: 0, hairColor: 0, shoes: 0,
  accessories: [], makeup: 1, skin: 1, bg: 0
};

let state = copyState(DEFAULT_STATE);
let currentTab = 'dress';

function copyState(s) {
  return Object.assign({}, s, { accessories: s.accessories.slice() });
}

function rand(n) { return Math.floor(Math.random() * n); }

function randomState(skin) {
  return {
    dress: rand(DRESSES.length),
    hair: rand(HAIRS.length),
    hairColor: rand(HAIR_COLORS.length),
    shoes: rand(SHOES.length),
    accessories: ACCESSORIES.filter(() => Math.random() < 0.4).map(a => a.id),
    makeup: rand(MAKEUPS.length),
    skin: skin,
    bg: rand(BACKGROUNDS.length)
  };
}

/* =====================================================
   4. PAGE ELEMENTS
   ===================================================== */

const homeScreen = document.getElementById('home');
const gameScreen = document.getElementById('game');
const stage = document.getElementById('stage');
const tabsBox = document.getElementById('tabs');
const panel = document.getElementById('panel');
const favList = document.getElementById('favList');
const toastBox = document.getElementById('toast');

/* =====================================================
   5. RENDERING
   ===================================================== */

function renderStage() {
  stage.innerHTML = buildDollSvg(state, 'main');
  stage.classList.remove('pop');
  void stage.offsetWidth;          // restarts the animation
  stage.classList.add('pop');
}

function renderTabs() {
  tabsBox.innerHTML = TABS.map(t =>
    `<button class="tab ${t.id === currentTab ? 'active' : ''}" data-tab="${t.id}">${t.label}</button>`
  ).join('');
}

/* Small preview pictures for the wardrobe cards */
function thumbDress(d) {
  return `<svg viewBox="50 160 200 330">${dressSvg(d)}</svg>`;
}
function thumbShoes(s) {
  return `<svg viewBox="100 410 100 80">${shoeSvg(s)}</svg>`;
}
function thumbHair(h) {
  const c = HAIR_COLORS[state.hairColor].c;
  return `<svg viewBox="70 20 160 190">${hairBack(h.type, c)}
    <ellipse cx="150" cy="110" rx="38" ry="44" fill="${SKINS[state.skin]}"/>${hairFront(h.type, c)}</svg>`;
}

function gridHtml(key, list, thumbFn, isActive) {
  const cards = list.map((item, i) => {
    const active = isActive ? isActive(item) : state[key] === i;
    return `<button class="item ${active ? 'active' : ''}" data-key="${key}" data-index="${i}">
              ${thumbFn(item)}<span>${item.name}</span></button>`;
  }).join('');
  return `<div class="grid">${cards}</div>`;
}

function swatchesHtml(key, colors, selected) {
  return '<div class="swatches">' + colors.map((c, i) =>
    `<button class="swatch ${i === selected ? 'active' : ''}" data-key="${key}" data-index="${i}" style="background:${c}" aria-label="color ${i + 1}"></button>`
  ).join('') + '</div>';
}

function renderPanel() {
  let html = '';

  if (currentTab === 'dress') {
    html = gridHtml('dress', DRESSES, thumbDress);
  } else if (currentTab === 'hair') {
    html = '<div class="section-title">Hair color</div>'
         + swatchesHtml('hairColor', HAIR_COLORS.map(h => h.c), state.hairColor)
         + '<div class="section-title">Hairstyle</div>'
         + gridHtml('hair', HAIRS, thumbHair);
  } else if (currentTab === 'shoes') {
    html = gridHtml('shoes', SHOES, thumbShoes);
  } else if (currentTab === 'accessories') {
    html = gridHtml('accessories', ACCESSORIES,
             a => `<div class="emoji">${a.icon}</div>`,
             a => state.accessories.includes(a.id))
         + '<button class="btn small ghost clear-btn" data-action="clearAcc">Remove all</button>';
  } else if (currentTab === 'makeup') {
    html = '<div class="section-title">Skin tone</div>'
         + swatchesHtml('skin', SKINS, state.skin)
         + '<div class="section-title">Makeup style</div>'
         + gridHtml('makeup', MAKEUPS, m =>
             `<div class="mk"><i style="background:${m.lip}"></i><i style="background:${m.blush || '#eee'}"></i><i style="background:${m.shadow || '#eee'}"></i></div>`);
  } else {
    html = gridHtml('bg', BACKGROUNDS, b =>
             `<div class="bgthumb" style="background:linear-gradient(${b.c1},${b.c2})"></div>`);
  }

  panel.innerHTML = html;
}

function update() {
  renderStage();
  renderPanel();
}

/* =====================================================
   6. CLICK HANDLERS
   ===================================================== */

tabsBox.addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  currentTab = btn.dataset.tab;
  renderTabs();
  renderPanel();
  panel.scrollTop = 0;
});

panel.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.dataset.action === 'clearAcc') {
    state.accessories = [];
  } else {
    const key = btn.dataset.key;
    const index = Number(btn.dataset.index);

    if (key === 'accessories') {
      const id = ACCESSORIES[index].id;
      if (state.accessories.includes(id)) {
        state.accessories = state.accessories.filter(a => a !== id);
      } else {
        state.accessories.push(id);
      }
    } else {
      state[key] = index;
    }
  }
  update();
});

document.getElementById('randomBtn').addEventListener('click', () => {
  state = randomState(state.skin);
  update();
  showToast('✨ New random look!');
});

document.getElementById('resetBtn').addEventListener('click', () => {
  state = copyState(DEFAULT_STATE);
  update();
  showToast('🔄 Outfit reset');
});

document.getElementById('saveBtn').addEventListener('click', saveFavorite);
document.getElementById('downloadBtn').addEventListener('click', downloadLook);

document.getElementById('startBtn').addEventListener('click', () => {
  homeScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  update();
  renderFavorites();
  window.scrollTo(0, 0);
});

document.getElementById('homeBtn').addEventListener('click', () => {
  gameScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
});

/* =====================================================
   7. FAVORITE LOOKS (saved in the browser with localStorage)
   ===================================================== */

const STORAGE_KEY = 'pinkFashionStudioFavorites';

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (err) {
    return [];
  }
}

function storeFavorites(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    showToast('Could not save (storage blocked)');
  }
}

function saveFavorite() {
  const list = loadFavorites();
  if (list.length >= 12) {
    showToast('You can keep up to 12 looks. Delete one first!');
    return;
  }
  list.push(copyState(state));
  storeFavorites(list);
  renderFavorites();
  showToast('💖 Look saved!');
}

function renderFavorites() {
  const list = loadFavorites();

  if (list.length === 0) {
    favList.innerHTML = '<p class="fav-empty">No saved looks yet. Press "Save Look" to keep one!</p>';
    return;
  }

  favList.innerHTML = list.map((look, i) => `
    <div class="fav-card">
      ${buildDollSvg(look, 'fav' + i)}
      <div class="row">
        <button class="btn small" data-fav="wear" data-i="${i}">Wear</button>
        <button class="btn small ghost" data-fav="delete" data-i="${i}">✕</button>
      </div>
    </div>`).join('');
}

favList.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const i = Number(btn.dataset.i);
  const list = loadFavorites();

  if (btn.dataset.fav === 'wear') {
    state = copyState(list[i]);
    update();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('👗 Look loaded!');
  } else if (btn.dataset.fav === 'delete') {
    list.splice(i, 1);
    storeFavorites(list);
    renderFavorites();
  }
});

/* =====================================================
   8. DOWNLOAD THE LOOK AS A PNG IMAGE
   ===================================================== */

function downloadLook() {
  const svg = buildDollSvg(state, 'dl');
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  const img = new Image();

  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 1040;
    canvas.getContext('2d').drawImage(img, 0, 0, 600, 1040);

    const link = document.createElement('a');
    link.download = 'my-fashion-look.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('⬇️ Look downloaded!');
  };
  img.onerror = () => showToast('Download failed, please try again');
  img.src = url;
}

/* =====================================================
   9. EXTRAS: toast message + floating hearts
   ===================================================== */

let toastTimer;
function showToast(message) {
  toastBox.textContent = message;
  toastBox.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastBox.classList.remove('show'), 1800);
}

function makeFloaters() {
  const symbols = ['💖', '✨', '💜', '🌸', '⭐'];
  const box = document.getElementById('floaters');
  for (let i = 0; i < 16; i++) {
    const span = document.createElement('span');
    span.textContent = symbols[i % symbols.length];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.fontSize = 14 + Math.random() * 22 + 'px';
    span.style.animationDuration = 10 + Math.random() * 14 + 's';
    span.style.animationDelay = -Math.random() * 20 + 's';
    box.appendChild(span);
  }
}

/* =====================================================
   10. START
   ===================================================== */

makeFloaters();
renderTabs();
document.getElementById('homeDoll').innerHTML = buildDollSvg(randomState(1), 'home');
