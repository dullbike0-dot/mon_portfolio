/* ==========================================================================
   DONNÉES DU PORTFOLIO
   ========================================================================== */

const THEMES = {

  // 01. À PROPOS
  aboutme: {
    label: '01 — About me',
    type:  'aboutme',
  },

  // 02. COURT-MÉTRAGE
  courtmetrage: {
    label: '02 — Court-métrage',
    type:  'courtmetrage',
    films: [
      {
        id:       'amour',
        title:    "L'amour seul",
        subtitle: 'Campagne de sensibilisation · 22 min',
        text:     "L'amour seul est un court-métrage effectué pour le concours Chouette Awards organisé par l'Efrei, Ce court-métrage dénonce et sensibilise au danger des IA dans les relations, ce projet ambitieux a était réalisé en un mois avec un Iphone 14,",
        skills:   ['Prise de vue','Lumière','Prise de son','Mixage audio','Colorimétrie','Montage','Motion Design'],
        timeline: ['Synopsis','Script','Storyboard','Casting','Repérage','Tournage','Montage'],
      },
      {
        id:       'deuil',
        title:    'Le deuil',
        subtitle: 'Fiction · En cours',
        text:     "Ce nouveau court-métrage sera une série d'épisodes abordant les différentes étapes du deuil. j'aimerais avec ce court-métrage montrer l'importance du deuil, et la diversité des types de deuil, et surtout que tout le monde passe par là et qu'il n'y a pas d'échappatoire.",
        episodes: [
          { num: 1, name: 'Le déni' },
          { num: 2, name: 'le marchandage' },
          { num: 3, name: 'La colère' },
          { num: 4, name: 'La dépression' },
          { num: 5, name: "L'acceptation" },
        ],
      }
    ],
  },

  // 03. MUSIQUE
  musique: {
    label: '03 — Musique',
    type:  'musique',
    desc:  "Première création lors d'un essai sur le logiciel Waveform, Pour créer cela j'ai pris plusieurs samples libre de droit trouvé sur internet et mis ensemble afin de créer l'ambience souhaité.",
  },

  // 04. BLENDER
  blender: {
    label: '04 — Blender',
    type:  'blender',
    entrainements: {
      title: 'Tutoriels & Entraînements',
      text:  "J'ai étudié de façon autodidacte plusieurs tutoriels m'amenant à apprendre les bases de la modélisation, du shading, du rigging et de l'animation 3D avec Blender.",
      vids:  ['Blender/chateau.mp4', 'Blender/citrouille.mp4', 'Blender/Main_render.mp4', 'Blender/fusee.mp4'],
    },
    projet1: {
      title: 'Ma première création perso',
      text:  "Animation de spider-man, cette animation m'a permis d'apprendre les principes de timing et d'arc de l'animation, ce premier gros projet m'a permis d'apprendre le rigging de personnage et comment utiliser la caméra ainsi que les lumières",
      vids:  ['https://www.youtube.com/embed/ypUs9nX7gtE'],
    },
    projet2: {
      title: 'Promotion Marketing',
      text:  "Courte animation mettant en scène une bouteille de lait, afin de faire la promotion d'une nouvelle gamme de lait, cette animation a était réalisé pour un exercice de création de stratégie digitale. Le titre a était réalisé grâce à After Effects.",
      vids:  ['Blender/Bottle Milk_1.mp4'],
    },
  },

  // 05. DESSIN / KRITA
  krita: {
    label: '05 — Dessin',
    type:  'krita',
    traditionnel: {
      title: 'Dessin traditionnel',
      text:  'Mes créations réalisées sur supports physiques : papier, crayon, feutre ou peinture.',
      images: ['dessin/Croquis_1.jpg','dessin/Awesome.jpg','dessin/Donald.jpg','dessin/Granny.jpg','dessin/hammerdinger.jpg','dessin/hamster.jpg','dessin/joker croquis.png','dessin/mec avec ver.png','dessin/Rabbit.jpg'],
    },
    numerique: {
      title: 'Dessin numérique',
      text:  'Mes illustrations numériques réalisées principalement sur Krita.',
      images: ['dessin/histoire j-o.png','dessin/monopoly.png','dessin/lifeline.png','dessin/panda.png','dessin/STITCH.png'],
    },
    animation: {
      entrainements: {
        title: 'Entraînements',
        text:  "Série de courts exercices d'animation frame-by-frame pour maîtriser les fondamentaux.",
        vids:  ['Animation/balle entrainement 1.mp4','Animation/balle entrainement 2.mp4','Animation/cool cube anim smear.mp4','Animation/cube.mp4','Animation/marche entrainement.mp4','Animation/bpnhomme tombe entrainement.mp4'],
      },
      petitfilm: {
        title: "L'animation depuis petit",
        text:  "L'animation est apparue très tôt dans mes passions, ma première grosse animation a été réalisée en 3ème.",
        // CORRIGÉ : extension .mp4 minuscule pour compatibilité navigateur
        vids: ['Animation/animation_3eme_pingouin.mp4'],
      },
      ecogestion: {
        title: 'Vidéo Éco-gestion',
        text:  'Animation pédagogique de 3 minutes commandée par un lycée.',
        vids: ['Animation/Animation_Eco_gestion.mp4'],
      },
    },
  },

  // 06. PHOTOSHOP
  photoshop: {
    label: '06 — Photoshop',
    type:  'photoshop',
    intro: 'Voici mes affiches réalisées avec Photoshop, la première a été réalisée dans une optique de magazine tandis que les deux autres étaient pour un public cinématographique.',
    projects: [
      { title: 'Campagne Mode',          type: 'Retouche & Direction', desc: 'Post-production complète de 30 visuels.' },
      { title: 'Compositing "Dystopia"', type: 'Manipulation photo',   desc: 'Série de 8 compositions surréalistes.' },
      { title: 'Packshots Produit',      type: 'E-commerce',           desc: 'Détourage et mise en scène de 120 produits.' },
      { title: 'Templates Réseaux',      type: 'Social Media',         desc: 'Kit de 40 templates PSD réutilisables.' },
    ],
  },

  // 07. EDUPYTHON
  edupython: {
    label: '07 — Edupython',
    type:  'edupython',
    intro: 'Projets pédagogiques et outils construits autour de Python.',
    projects: [
      { name: 'Générateur de quiz',   type: 'Automatisation',      desc: 'Script Python qui génère des QCM.', tags:['Python','PDF','Pédagogie'] },
      { name: 'Bot Discord Scolaire', type: 'Développement',       desc: 'Assistant Discord pour classes en ligne.', tags:['Discord.py','API','Bot']  },
      { name: 'Dashboard résultats',  type: 'Data & Design',       desc: 'Tableau de bord interactif.', tags:['Matplotlib','Pandas','CSV'] },
      { name: 'Notebooks pédago',     type: 'Contenu pédagogique', desc: 'Série de notebooks Jupyter.', tags:['Jupyter','Tutoriel','Enfants'] },
    ],
  },
};

/* ==========================================================================
   CASCADE — Médias qui tombent en fond
   ========================================================================== */

const CASCADE_MEDIA = [
  // Dessins
  { type: 'img', src: 'dessin/Awesome.jpg' },
  { type: 'img', src: 'dessin/Donald.jpg' },
  { type: 'img', src: 'dessin/Granny.jpg' },
  { type: 'img', src: 'dessin/hammerdinger.jpg' },
  { type: 'img', src: 'dessin/hamster.jpg' },
  { type: 'img', src: 'dessin/Rabbit.jpg' },
  { type: 'img', src: 'dessin/STITCH.png' },
  { type: 'img', src: 'dessin/panda.png' },
  { type: 'img', src: 'dessin/monopoly.png' },
  { type: 'img', src: 'dessin/joker croquis.png' },
  // Affiches
  { type: 'img', src: 'Affiche/affiche_1.jpg' },
  { type: 'img', src: 'Affiche/affiche_2.jpg' },
  { type: 'img', src: 'Affiche/affiche_3.jpg' },
  // Vidéos (petites, silencieuses)
  { type: 'vid', src: 'Animation/balle entrainement 1.mp4' },
  { type: 'vid', src: 'Animation/cool cube anim smear.mp4' },
  { type: 'vid', src: 'Animation/cube.mp4' },
  { type: 'vid', src: 'Blender/chateau.mp4' },
  { type: 'vid', src: 'Blender/citrouille.mp4' },
  { type: 'vid', src: 'Blender/Main_render.mp4' },
];

function initCascade() {
  // Ne pas lancer si préférence "réduire les animations"
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const container = document.getElementById('cascadeContainer');
  const COUNT = 14; // Nombre d'éléments simultanés
  const COLS = 7;   // Colonnes de chute

  // Mélange aléatoire du tableau
  const shuffled = [...CASCADE_MEDIA].sort(() => Math.random() - 0.5);

  for (let i = 0; i < COUNT; i++) {
    const media = shuffled[i % shuffled.length];
    const el = document.createElement('div');
    el.className = 'cascade-item';

    // Taille variée entre 120px et 200px
    const size = 120 + Math.floor(Math.random() * 80);
    const aspectRatio = media.type === 'img' ? (0.7 + Math.random() * 0.6) : (16/9);
    const w = size;
    const h = Math.round(size / aspectRatio);

    el.style.width = w + 'px';
    el.style.height = h + 'px';

    // Répartition en colonnes + décalage aléatoire
    const colW = window.innerWidth / COLS;
    const left = (i % COLS) * colW + Math.random() * colW * 0.5;
    el.style.left = left + 'px';

    // Rotation légère
    const tilt = (Math.random() - 0.5) * 10;
    el.style.setProperty('--tilt', tilt + 'deg');

    // Opacité subtile (effet fantôme)
    const maxOp = 0.07 + Math.random() * 0.09;
    el.style.setProperty('--max-op', maxOp);

    // Durée et délai variés pour décalage naturel
    const duration = 12 + Math.random() * 14; // entre 12 et 26s
    const delay = -(Math.random() * duration); // délai négatif = déjà en cours
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';

    if (media.type === 'img') {
      const img = document.createElement('img');
      img.src = media.src;
      img.alt = '';
      img.loading = 'lazy';
      el.appendChild(img);
    } else {
      const vid = document.createElement('video');
      vid.muted = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.autoplay = true;
      const src = document.createElement('source');
      src.src = media.src;
      src.type = 'video/mp4';
      vid.appendChild(src);
      el.appendChild(vid);
    }

    container.appendChild(el);
  }
}

// Lance la cascade au chargement
document.addEventListener('DOMContentLoaded', initCascade);

/* ==========================================================================
   ÉTAT DU SITE & RÉFÉRENCES DOM
   ========================================================================== */
let currentTheme = null;
let currentView  = 'root';
let activeTab    = 'traditionnel';

const overlay    = document.getElementById('modal-overlay');
const modal      = document.getElementById('modal');
const modalLabel = document.getElementById('modal-label');
const modalBody  = document.getElementById('modal-body');
const closeBtn   = document.getElementById('modal-close');

/* ==========================================================================
   CURSEUR PERSONNALISÉ
   ========================================================================== */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

// Masquer le curseur custom sur mobile/touch
if (window.matchMedia('(pointer: coarse)').matches) {
  document.documentElement.style.cursor = 'auto';
  document.body.style.cursor = 'auto';
  if (cursorDot)  cursorDot.style.display  = 'none';
  if (cursorRing) cursorRing.style.display = 'none';
} else {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';
  });

  (function animRing() {
    ringX += (mouseX - ringX) * 0.13;
    ringY += (mouseY - ringY) * 0.13;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animRing);
  })();
}

function bindCursor(scope = document) {
  scope.querySelectorAll('a, button, .bubble, .cm-card, .carousel-item, .action-btn, .vid-ph, .tab-btn, .proj-card, .ep-box, .tag, img').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
bindCursor();

/* ==========================================================================
   GESTION DE LA MODALE
   ========================================================================== */
function openModal(themeKey) {
  currentTheme = themeKey;
  currentView  = 'root';
  renderModal();
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  // Focus dans la modale pour accessibilité clavier
  setTimeout(() => {
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) firstFocusable.focus();
  }, 100);
  modalBody.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  currentTheme = null;
  document.body.style.overflow = '';
}

function setView(view) {
  currentView = view;
  renderModal();
  modalBody.scrollTop = 0;
}

/* ==========================================================================
   GENERATEURS DE CONTENU
   ========================================================================== */

function renderModal() {
  const theme = THEMES[currentTheme];
  if (!theme) return;

  modalLabel.textContent = theme.label;
  renderBackBtn(currentView !== 'root');

  switch (theme.type) {
    case 'aboutme':      renderAboutme();          break;
    case 'courtmetrage': renderCourtMetrage(theme); break;
    case 'musique':      renderMusique(theme);      break;
    case 'blender':      renderBlender(theme);      break;
    case 'krita':        renderKrita(theme);        break;
    case 'photoshop':    renderPhotoshop(theme);    break;
    case 'edupython':    renderEdupython(theme);    break;
  }
  bindCursor(modalBody);
}

function renderBackBtn(show) {
  modal.querySelector('.back-btn')?.remove();
  if (!show) return;
  const navLeft = document.getElementById('modal-label').parentElement;
  const btn = document.createElement('button');
  btn.className = 'back-btn';
  btn.setAttribute('aria-label', 'Retour au menu précédent');
  btn.innerHTML = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
    <path d="M8 5.5H3M3 5.5L5.5 3M3 5.5L5.5 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> Retour`;
  btn.addEventListener('click', () => setView('root'));
  navLeft.prepend(btn);
  bindCursor(navLeft);
}

// ---- ABOUT ME ----
function renderAboutme() {
  modalBody.innerHTML = `
    <h2 class="m-title">About me</h2>
    <p class="m-text">Bonjour, je suis Antoine Lavigne, étudiant en Communication Digitale à Bordeaux. Passionné par la création sous toutes ses formes — du cinéma à l'animation, de la 3D au dessin — je construis un univers visuel cohérent et personnel à travers mes projets.</p>
  `;
}

// ---- COURT-MÉTRAGE ----
function renderCourtMetrage(theme) {
  if (currentView === 'root')            renderCMMenu(theme);
  else if (currentView === 'film-amour') renderFilmAmour(theme.films[0]);
  else if (currentView === 'film-deuil') renderFilmDeuil(theme.films[1]);
}

function renderCMMenu(theme) {
  const cardsHtml = theme.films.map((film, i) => `
    <div class="cm-card" data-view="film-${film.id}" role="button" tabindex="0" aria-label="Explorer ${film.title}">
      <div class="cm-card-idx">${String(i+1).padStart(2,'0')}</div>
      <div class="cm-card-title">${film.title}</div>
      <div class="cm-card-sub">${film.subtitle}</div>
      <div class="cm-card-text">${film.text}</div>
      <div class="cm-card-arrow" aria-hidden="true">Explorer →</div>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <h2 class="m-title">Court-métrage</h2>
    <p class="m-text">Deux projets audiovisuels aux genres distincts, de la campagne de sensibilisation à la fiction sérielle.</p>
    <div class="cm-grid" style="margin-top:28px;">${cardsHtml}</div>
  `;

  modalBody.querySelectorAll('.cm-card').forEach(card => {
    card.addEventListener('click', () => setView(card.dataset.view));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setView(card.dataset.view); }
    });
  });
  bindCursor(modalBody);
}

function renderFilmAmour(film) {
  const mesImages = ['Affiche/affiche_2.jpg', 'Affiche/affiche_3.jpg'];
  const postersHtml = mesImages.map(src =>
    `<img src="${src}" alt="Affiche du film L'amour seul" loading="lazy"
          onclick="openImgLightbox('${src}')"
          style="width:220px;aspect-ratio:2/3;object-fit:cover;border-radius:12px;border:1.5px solid var(--black-mid);cursor:zoom-in;">`
  ).join('');

  const tlHtml = film.timeline.map((step, i) => {
    const last = i === film.timeline.length - 1;
    return `<div class="tl-step">
      <div class="tl-dot">${String(i+1).padStart(2,'0')}</div>
      <div class="tl-label">${step}</div>
    </div>${!last ? '<div class="tl-line"></div>' : ''}`;
  }).join('');

  modalBody.innerHTML = `
    <h2 class="m-title">${film.title}</h2>
    <div class="film-2col">
      <p class="m-text" style="max-width:none;">${film.text}</p>
      <img src="image_contexte.webp" style="width:100%;height:190px;object-fit:cover;border-radius:16px;" alt="Image contexte du film" loading="lazy">
    </div>
    <h3 class="m-subtitle">Étapes de production</h3>
    <div class="timeline" role="list" aria-label="Étapes de production">${tlHtml}</div>
    <h3 class="m-subtitle">Affiches</h3>
    <div class="poster-grid" style="display:flex;justify-content:center;gap:24px;flex-wrap:wrap;margin-top:16px;">
      ${postersHtml}
    </div>
    <hr class="m-divider">
    <h3 class="m-subtitle">Visionnage</h3>
    <div style="margin-top:14px;border-radius:16px;overflow:hidden;border:1.5px solid var(--black-mid);aspect-ratio:16/9;">
      <iframe
        width="100%" height="100%"
        src="https://www.youtube.com/embed/u4rRYzAzJNQ?rel=0&enablejsapi=1"
        title="L'amour seul — Court-métrage complet"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
  `;
  bindCursor(modalBody);
}

function renderFilmDeuil(film) {
  const epHtml = film.episodes.map(ep => `
    <div class="ep-box" role="listitem">
      <div class="ep-num">Ép.${ep.num}</div>
      <div class="ep-name">${ep.name}</div>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <h2 class="m-title">${film.title}</h2>
    <p class="m-text">${film.text}</p>
    <hr class="m-divider">
    <h3 class="m-subtitle">Structure sérielle — 5 épisodes</h3>
    <div class="ep-schema" role="list" aria-label="Les 5 épisodes">${epHtml}</div>
    <hr class="m-divider">
    <h3 class="m-subtitle">Épisode 1 — ${film.episodes[0].name}</h3>
    <p class="m-text" style="margin-bottom:0;">Le premier épisode met en scène un jeune homme incarnant tous les codes et clichés de la masculinité hétérosexuelle. Lorsque naît en lui une attirance pour les hommes, ses certitudes vacillent. Perdu face à ce bouleversement, il tente d'abord de fuir et de nier ses sentiments. Mais, malgré la peur de cette nouvelle réalité, il finira par accepter pleinement qui il est réellement.</p>
    <a href="Script_le_deni.pdf" download="Script_le_deni.pdf" class="action-btn" style="text-decoration:none;display:inline-flex;align-items:center;gap:10px;margin-top:20px;" aria-label="Télécharger le script de l'épisode 1 Le déni">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 1v8M4 6l3 3 3-3M2 12h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Télécharger le script de l'épisode 1
    </a>
  `;
  bindCursor(modalBody);
}

// ---- MUSIQUE ----
function renderMusique(theme) {
  modalBody.innerHTML = `
    <div class="music-player">
      <div class="music-art" id="music-art" role="img" aria-label="Artwork du morceau Chill Things">
        <div class="music-art-rings" aria-hidden="true">
          <div class="art-ring" style="width:150px;height:150px;animation-delay:0s;"></div>
          <div class="art-ring" style="width:210px;height:210px;animation-delay:.7s;"></div>
          <div class="art-ring" style="width:270px;height:270px;animation-delay:1.4s;"></div>
        </div>
        <div class="music-art-center" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M10 7v14l12-7-12-7z" fill="var(--hat)"/></svg>
        </div>
      </div>
      <div style="text-align:center;margin-top:22px;">
        <div class="music-track-title">Chill Things</div>
        <div class="music-track-artist">Antoine Lavigne</div>
      </div>
      <div class="music-progress-wrap">
        <div class="music-progress-bar" id="prog-bar" role="progressbar" aria-label="Progression du morceau" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
          <div class="music-progress-fill" id="prog-fill" style="width:0%;"></div>
        </div>
        <div class="music-time" aria-hidden="true"><span id="time-cur">0:00</span><span id="time-dur">—</span></div>
      </div>
      <div class="music-controls" role="group" aria-label="Contrôles du lecteur">
        <button class="music-btn" id="seek-back" aria-label="Reculer de 10 secondes">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M4 11a7 7 0 1 1 .6 2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M4 7v4h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="music-btn play-pause" id="play-btn" aria-label="Lecture / Pause">
          <svg id="play-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M7 5l12 6-12 6V5z" fill="currentColor"/></svg>
        </button>
        <button class="music-btn" id="seek-fwd" aria-label="Avancer de 10 secondes">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M18 11a7 7 0 1 0-.6 2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M18 7v4h-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="music-volume" style="margin-top:20px;">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="opacity:.35;flex-shrink:0;" aria-hidden="true">
          <path d="M2 5h3l4-3v10L5 9H2V5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="M10 4.5a3 3 0 0 1 0 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <input type="range" id="vol-slider" min="0" max="1" step="0.01" value="1" class="vol-range" aria-label="Volume">
      </div>
    </div>
    <p class="m-text" style="margin-top:12px;">${theme.desc}</p>
  `;

  // Audio global
  let audio = document.getElementById('global-audio');
  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'global-audio';
    audio.src = 'chill.mp3';
    audio.preload = 'auto';
    audio.loop = true;
    audio.style.display = 'none';
    document.body.appendChild(audio);
  }

  const playBtn   = document.getElementById('play-btn');
  const playIco   = document.getElementById('play-icon');
  const progFill  = document.getElementById('prog-fill');
  const progBar   = document.getElementById('prog-bar');
  const timeCur   = document.getElementById('time-cur');
  const timeDur   = document.getElementById('time-dur');
  const seekBack  = document.getElementById('seek-back');
  const seekFwd   = document.getElementById('seek-fwd');
  const volSlider = document.getElementById('vol-slider');
  const artEl     = document.getElementById('music-art');
  const miniPlayer  = document.getElementById('mini-player');
  const mpPlayPause = document.getElementById('mp-playpause');
  const mpIcon      = document.getElementById('mp-icon');
  const mpClose     = document.getElementById('mp-close');

  const SVG_PLAY  = '<path d="M7 5l12 6-12 6V5z" fill="currentColor"/>';
  const SVG_PAUSE = '<rect x="4" y="4" width="5" height="14" rx="1.5" fill="currentColor"/><rect x="13" y="4" width="5" height="14" rx="1.5" fill="currentColor"/>';
  const MP_PLAY   = '<path d="M4 2.5l7 4.5-7 4.5v-9z" fill="currentColor"/>';
  const MP_PAUSE  = '<rect x="3" y="3" width="3" height="8" rx="1" fill="currentColor"/><rect x="8" y="3" width="3" height="8" rx="1" fill="currentColor"/>';

  const fmt = s => {
    if (!isFinite(s) || isNaN(s)) return '—';
    return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
  };

  if (!audio.paused) {
    playIco.innerHTML = SVG_PAUSE;
    artEl.classList.add('playing');
    playBtn.setAttribute('aria-label', 'Pause');
  }
  if (audio.duration) {
    timeDur.textContent = fmt(audio.duration);
    progFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
    timeCur.textContent  = fmt(audio.currentTime);
  }
  volSlider.value = audio.volume;

  audio.onplay = () => {
    if (document.getElementById('play-icon')) {
      document.getElementById('play-icon').innerHTML = SVG_PAUSE;
      document.getElementById('music-art')?.classList.add('playing');
      document.getElementById('play-btn')?.setAttribute('aria-label', 'Pause');
    }
    if (miniPlayer) {
      miniPlayer.classList.add('visible');
      miniPlayer.classList.remove('paused');
      if (mpIcon) mpIcon.innerHTML = MP_PAUSE;
      mpPlayPause?.setAttribute('aria-label', 'Pause');
    }
  };

  audio.onpause = () => {
    if (document.getElementById('play-icon')) {
      document.getElementById('play-icon').innerHTML = SVG_PLAY;
      document.getElementById('music-art')?.classList.remove('playing');
      document.getElementById('play-btn')?.setAttribute('aria-label', 'Lecture');
    }
    if (miniPlayer) {
      miniPlayer.classList.add('paused');
      if (mpIcon) mpIcon.innerHTML = MP_PLAY;
      mpPlayPause?.setAttribute('aria-label', 'Lecture');
    }
  };

  audio.onloadedmetadata = () => { if (document.getElementById('time-dur')) timeDur.textContent = fmt(audio.duration); };

  audio.ontimeupdate = () => {
    if (!document.getElementById('prog-fill') || !audio.duration) return;
    const pct = (audio.currentTime / audio.duration * 100);
    progFill.style.width = pct + '%';
    progBar.setAttribute('aria-valuenow', Math.round(pct));
    timeCur.textContent = fmt(audio.currentTime);
  };

  playBtn.onclick = () => { audio.paused ? audio.play() : audio.pause(); };

  progBar.onclick = e => {
    if (audio.duration) {
      const rect = progBar.getBoundingClientRect();
      audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
    }
  };

  // Permettre navigation clavier sur la barre de progression
  progBar.setAttribute('tabindex', '0');
  progBar.addEventListener('keydown', e => {
    if (!audio.duration) return;
    if (e.key === 'ArrowRight') audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    if (e.key === 'ArrowLeft')  audio.currentTime = Math.max(0, audio.currentTime - 5);
  });

  seekBack.onclick = () => { audio.currentTime = Math.max(0, audio.currentTime - 10); };
  seekFwd.onclick  = () => { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10); };
  volSlider.oninput = () => { audio.volume = parseFloat(volSlider.value); };

  if (mpPlayPause) mpPlayPause.onclick = () => { audio.paused ? audio.play() : audio.pause(); };
  if (mpClose) {
    mpClose.onclick = () => {
      audio.pause();
      audio.currentTime = 0;
      miniPlayer.classList.remove('visible');
    };
  }

  bindCursor(modalBody);
}

// ---- BLENDER ----
function renderBlender(theme) {
  const renderCarousel = (section) => {
    const vidsHTML = section.vids.map(v => `
      <div class="carousel-item" style="width:240px;flex-shrink:0;scroll-snap-align:start;">
        <video muted loop playsinline
               aria-label="Vidéo Blender"
               onmouseover="this.play()"
               onmouseout="this.pause()"
               onclick="openVideoLightbox('${v.replace(/'/g,"\\'")}', 'video/mp4')"
               style="width:100%;border-radius:14px;border:1.5px solid var(--black-mid);cursor:pointer;display:block;">
          <source src="${v}" type="video/mp4">
        </video>
      </div>`).join('');

    return `
      <div class="carousel-section">
        <h3 class="m-subtitle">${section.title}</h3>
        <p class="m-text" style="margin-bottom:20px;">${section.text}</p>
        <div class="carousel-wrapper">
          <button class="car-nav prev" aria-label="Vidéo précédente" onclick="this.nextElementSibling.scrollBy({left:-255,behavior:'smooth'})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="carousel" role="list" aria-label="${section.title}">${vidsHTML}</div>
          <button class="car-nav next" aria-label="Vidéo suivante" onclick="this.previousElementSibling.scrollBy({left:255,behavior:'smooth'})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>`;
  };

  const renderLargeVideo = (section) => {
    const videoSrc = section.vids[0] || '';
    const isYouTube = videoSrc.includes('youtube');

    const lecteurHTML = isYouTube
      ? `<div style="aspect-ratio:16/9;"><iframe width="100%" height="100%" src="${videoSrc}?rel=0" title="${section.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
      : `<video controls playsinline style="width:100%;display:block;background:#000;" aria-label="${section.title}">
           <source src="${videoSrc}" type="video/mp4">
           Votre navigateur ne supporte pas la lecture de vidéos.
         </video>`;

    return `
      <h3 class="m-subtitle" style="margin-top:40px;text-align:center;">${section.title}</h3>
      <p class="m-text" style="margin:0 auto 20px;text-align:center;">${section.text}</p>
      <div style="width:100%;max-width:700px;margin:0 auto;border-radius:16px;overflow:hidden;border:2px solid var(--fire);box-shadow:0 10px 30px rgba(0,0,0,0.2);">
        ${lecteurHTML}
      </div>`;
  };

  modalBody.innerHTML = `
    <h2 class="m-title">Blender</h2>
    ${renderCarousel(theme.entrainements)}
    <hr class="m-divider">
    ${renderLargeVideo(theme.projet1)}
    <hr class="m-divider">
    ${renderLargeVideo(theme.projet2)}
  `;
  bindCursor(modalBody);
}

// ---- KRITA / DESSIN ----
function renderKrita(theme) {
  const galleryTrad = theme.traditionnel.images.map(src =>
    `<img src="${src}" loading="lazy" style="width:100%;border-radius:12px;margin-bottom:12px;border:1.5px solid var(--black-mid);cursor:zoom-in;" alt="Dessin traditionnel" onclick="openImgLightbox(this.src)">`
  ).join('');

  const galleryNum = theme.numerique.images.map(src =>
    `<img src="${src}" loading="lazy" style="width:100%;border-radius:12px;margin-bottom:12px;border:1.5px solid var(--black-mid);cursor:zoom-in;" alt="Dessin numérique" onclick="openImgLightbox(this.src)">`
  ).join('');

  const renderCarousel = (section) => {
    const vidsHTML = section.vids.map(v => `
      <div class="carousel-item" style="width:240px;flex-shrink:0;scroll-snap-align:start;">
        <video muted loop playsinline
               aria-label="Vidéo animation"
               onmouseover="this.play()"
               onmouseout="this.pause()"
               onclick="openVideoLightbox('${v.replace(/'/g,"\\'")}', 'video/mp4')"
               style="width:100%;border-radius:14px;border:1.5px solid var(--black-mid);cursor:pointer;display:block;">
          <source src="${v}" type="video/mp4">
        </video>
      </div>`).join('');

    return `
      <div class="carousel-section">
        <h3 class="m-subtitle">${section.title}</h3>
        <p class="m-text" style="margin-bottom:20px;">${section.text}</p>
        <div class="carousel-wrapper">
          <button class="car-nav prev" aria-label="Vidéo précédente" onclick="this.nextElementSibling.scrollBy({left:-255,behavior:'smooth'})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="carousel" role="list">${vidsHTML}</div>
          <button class="car-nav next" aria-label="Vidéo suivante" onclick="this.previousElementSibling.scrollBy({left:255,behavior:'smooth'})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>`;
  };

  // ---- CORRECTION PRINCIPALE : renderLargeVideo pour animation ----
  // On gère les deux grosses vidéos (pingouin .MP4 et Eco-gestion)
  const renderLargeVideoAnim = (section) => {
    const rawSrc = section.vids[0] || '';
    // Forcer l'extension minuscule pour compatibilité MIME
    const videoSrc = rawSrc.replace(/\.MP4$/i, '.mp4');

    return `
      <div style="margin-top:32px;">
        <h3 class="m-subtitle" style="text-align:center;">${section.title}</h3>
        <p class="m-text" style="margin:8px auto 20px;text-align:center;max-width:560px;">${section.text}</p>
        <div style="width:100%;max-width:680px;margin:0 auto;border-radius:16px;overflow:hidden;border:2px solid var(--fire);box-shadow:0 10px 30px rgba(0,0,0,0.18);">
          <video
            controls
            playsinline
            preload="metadata"
            style="width:100%;display:block;background:#000;"
            aria-label="${section.title}">
            <source src="${videoSrc}" type="video/mp4">
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>`;
  };

  const animationContent = `
    ${renderCarousel(theme.animation.entrainements)}
    <hr class="m-divider">
    ${renderLargeVideoAnim(theme.animation.petitfilm)}
    <hr class="m-divider">
    ${renderLargeVideoAnim(theme.animation.ecogestion)}`;

  modalBody.innerHTML = `
    <div class="tabs-bar" role="tablist" aria-label="Catégories de dessin">
      <button class="tab-btn ${activeTab==='traditionnel'?'active':''}" data-tab="traditionnel" role="tab" aria-selected="${activeTab==='traditionnel'}" aria-controls="tab-traditionnel">Traditionnel</button>
      <button class="tab-btn ${activeTab==='numerique'?'active':''}" data-tab="numerique" role="tab" aria-selected="${activeTab==='numerique'}" aria-controls="tab-numerique">Numérique</button>
      <button class="tab-btn ${activeTab==='animation'?'active':''}" data-tab="animation" role="tab" aria-selected="${activeTab==='animation'}" aria-controls="tab-animation">Animation</button>
    </div>
    <div class="tab-pane ${activeTab==='traditionnel'?'active':''}" id="tab-traditionnel" role="tabpanel">
      <h2 class="m-title">${theme.traditionnel.title}</h2>
      <p class="m-text">${theme.traditionnel.text}</p>
      <div class="gallery-grid">${galleryTrad}</div>
    </div>
    <div class="tab-pane ${activeTab==='numerique'?'active':''}" id="tab-numerique" role="tabpanel">
      <h2 class="m-title">${theme.numerique.title}</h2>
      <p class="m-text">${theme.numerique.text}</p>
      <div class="gallery-grid">${galleryNum}</div>
    </div>
    <div class="tab-pane ${activeTab==='animation'?'active':''}" id="tab-animation" role="tabpanel">
      <h2 class="m-title">Animation</h2>
      ${animationContent}
    </div>`;

  modalBody.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      renderKrita(theme);
      modalBody.scrollTop = 0;
    });
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
  });
  bindCursor(modalBody);
}

// ---- PHOTOSHOP ----
function renderPhotoshop(theme) {
  modalBody.innerHTML = `
    <h2 class="m-title">Photoshop</h2>
    <p class="m-text">${theme.intro}</p>
    <h3 class="m-subtitle">Galerie de travaux</h3>
    <div class="poster-grid">
      <img src="Affiche/affiche_1.jpg" loading="lazy" class="img-ph" alt="Affiche Photoshop 1 — style magazine" onclick="openImgLightbox(this.src)" style="height:195px;object-fit:cover;opacity:1;border:none;cursor:zoom-in;">
      <img src="Affiche/affiche_2.jpg" loading="lazy" class="img-ph" alt="Affiche Photoshop 2 — cinéma" onclick="openImgLightbox(this.src)" style="height:195px;object-fit:cover;opacity:1;border:none;cursor:zoom-in;">
      <img src="Affiche/affiche_3.jpg" loading="lazy" class="img-ph" alt="Affiche Photoshop 3 — cinéma" onclick="openImgLightbox(this.src)" style="height:195px;object-fit:cover;opacity:1;border:none;cursor:zoom-in;">
    </div>
  `;
  bindCursor(modalBody);
}

// ---- EDUPYTHON ----
function renderEdupython(theme) {
  const cardsHtml = theme.projects.map((p, i) => `
    <div class="proj-card">
      <div class="proj-card-idx">${String(i+1).padStart(2,'0')}</div>
      <div class="proj-card-name">${p.name}</div>
      <div class="proj-card-type">${p.type}</div>
      <p class="proj-card-desc">${p.desc}</p>
      <div class="proj-card-tags">${p.tags.map(t=>`<span class="proj-card-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <h2 class="m-title">Edupython</h2>
    <p class="m-text">${theme.intro}</p>
    <div class="ps-grid" style="margin-top:28px;">${cardsHtml}</div>
  `;
  bindCursor(modalBody);
}

/* ==========================================================================
   LIGHTBOX VIDÉO — CORRIGÉE
   ========================================================================== */

function openVideoLightbox(src, mimeType = 'video/mp4') {
  const lightbox = document.getElementById('video-lightbox');
  const videoPlayer = document.getElementById('lightbox-video-player');

  // Vider les anciennes sources
  while (videoPlayer.firstChild) videoPlayer.removeChild(videoPlayer.firstChild);

  // Créer une nouvelle source proprement (évite le bug src direct)
  const source = document.createElement('source');
  // Forcer extension minuscule pour compatibilité MIME
  source.src = src.replace(/\.MP4$/i, '.mp4');
  source.type = mimeType;
  videoPlayer.appendChild(source);

  videoPlayer.load();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus sur le bouton fermer pour accessibilité
  setTimeout(() => document.getElementById('lightbox-close-btn')?.focus(), 100);
}

function closeVideoLightbox() {
  const lightbox = document.getElementById('video-lightbox');
  const videoPlayer = document.getElementById('lightbox-video-player');
  videoPlayer.pause();
  while (videoPlayer.firstChild) videoPlayer.removeChild(videoPlayer.firstChild);
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   LIGHTBOX IMAGE
   ========================================================================== */

function openImgLightbox(src) {
  const lb    = document.getElementById('img-lightbox');
  const lbImg = document.getElementById('img-lightbox-content');
  lbImg.src = src;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('img-lightbox-close-btn')?.focus(), 100);
}

function closeImgLightbox() {
  const lb = document.getElementById('img-lightbox');
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   ÉVÉNEMENTS GLOBAUX
   ========================================================================== */

// Clic sur les bulles (maintenant des <button>)
document.querySelectorAll('.bubble').forEach(b => {
  b.addEventListener('click', () => openModal(b.dataset.theme));
});

// Fermeture modale
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

// Fermeture lightboxes
document.getElementById('lightbox-close-btn').addEventListener('click', closeVideoLightbox);
document.getElementById('video-lightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('video-lightbox')) closeVideoLightbox();
});

document.getElementById('img-lightbox-close-btn').addEventListener('click', closeImgLightbox);
document.getElementById('img-lightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('img-lightbox')) closeImgLightbox();
});

// Touche Échap — ferme tout
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const vl = document.getElementById('video-lightbox');
  const il = document.getElementById('img-lightbox');
  if (vl?.classList.contains('open')) { closeVideoLightbox(); return; }
  if (il?.classList.contains('open')) { closeImgLightbox();   return; }
  if (overlay.classList.contains('open')) closeModal();
});

// Trap focus dans la modale (accessibilité)
modal.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
  else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
});
