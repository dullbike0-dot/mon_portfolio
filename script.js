/* ==========================================================================
   DONNÉES (TON CONTENU EST ICI)
   C'est ici que tu dois modifier les textes, les titres et ajouter tes projets.
   Chaque clé (ex: 'aboutme', 'courtmetrage') correspond au 'data-theme' dans ton HTML.
   ========================================================================== */

const THEMES = {

  // 01. À PROPOS
  aboutme: {
    label: '01 — About me', // Titre affiché en haut de la modale
    type:  'aboutme',       // Permet au script de savoir comment l'afficher
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
    // NOTE : Pour changer le son, va plus bas dans la fonction renderMusique() 
    // et modifie 'chill_things.wav' par le nom de ton fichier audio.
  },

  // 04. BLENDER
// 04. BLENDER
  blender: {
    label: '04 — Blender',
    type:  'blender',
    entrainements: {
      title: 'Tutoriels & Entraînements',
      text:  "J'ai étudié de façon autodidacte plusieurs tutoriels m'amenant à apprendre les bases de la modélisation, du shading, du rigging et de l'animation 3D avec Blender.",
      vids:  ['Blender/chateau.mp4', 'Blender/citrouille.mp4', 'Blender/main render.mp4','Blender/fusée.mp4'], // Remplace par tes vidéos
    },
    projet1: {
      title: 'Ma première création perso',
      text:  "Animation de spider-man, cette animation m'a permis d'apprendre les principes de timing et d'arc de l'animation, ce premier gros projet m'a permis d'apprendre le rigging de personnage et comment utiliser la caméra ainsi que les lumières",
      vids:  ['Blender/spider_man.mp4'], // Ta vidéo centrée ici
    },
    projet2: {
      title: 'Promotion Marketing',
      text:  "Courte animation mettant en scène une bouteille de lait, afin de faire la promotion d'une nouvelle gamme de lait, cette animation a était réalisé pour un exercice de création de stratégie digitale. Le titre a était réalisé grâce à After Effects.",
      vids:  ['Blender/Bottle Milk_1.mp4'], // Ta deuxième vidéo centrée ici
    },
  },

  // 05. KRITA
  // 05. DESSIN (anciennement Krita)
  krita: {
    label: '05 — Dessin',
    type:  'krita',
    traditionnel: {
      title: 'Dessin traditionnel',
      text:  'Mes créations réalisées sur supports physiques : papier, crayon, feutre ou peinture.',
      images: ['dessin/croquis_1.jpg', 'dessin/Awesome.jpg', 'dessin/Donald.jpg','dessin/Granny.jpg','dessin/hammerdinger.jpg','dessin/hamster.jpg','dessin/joker croquis.png','dessin/mec avec ver.png','dessin/Rabbit.jpg'], // Hauteurs d'images fictives
    },
    numerique: {
      title: 'Dessin numérique',
      text:  'Mes illustrations numériques réalisées principalement sur Krita.',
      images: ['dessin/histoire j-o.png', 'dessin/monopoly.png','dessin/lifeline.png','dessin/panda.png','dessin/stitch.png'], 
    },
    animation: {
      entrainements: {
        title: 'Entraînements',
        text:  'Série de courts exercices d\'animation frame-by-frame...',
        vids:  ['Animation/balle entrainement 1.MKV', 'Animation/balle entrainement 2.MKV', 'Animation/cool cube anim smear.MKV', 'Animation/cube.MKV', 'Animation/crane.MKV', 'Animation/marche entrainement.MKV', 'Animation/bonhomme entrainement.MKV', 'Animation/bpnhomme tombe entrainement.MKV'],
      },
      petitfilm: {
        title: "L'animation depuis petit",
        text:  "l'animation est apparu très tôt dans mes passions, ma première grosse animation a était réalisé en 3ème",
        vids: ['Animation/animation_3eme_pingouin.mp4'],
      },
      ecogestion: {
        title: 'Vidéo Éco-gestion',
        text:  'Animation pédagogique de 3 minutes commandée par un lycée...',
        vids: ['Animation/Animation_Eco_gestion.MOV'],
      },
    },
  },

  // 06. PHOTOSHOP
  photoshop: {
    label: '06 — Photoshop',
    type:  'photoshop',
    intro: 'Voici mes affiches réalisés avec Photoshop, la première a était réalisé dans une optique de magazine tandis que les deux autres étaient pour un public cinématographique.',
    projects: [
      { title: 'Campagne Mode',          type: 'Retouche & Direction', desc: 'Post-production complète de 30 visuels...' },
      { title: 'Compositing "Dystopia"', type: 'Manipulation photo',   desc: 'Série de 8 compositions surréalistes...' },
      { title: 'Packshots Produit',      type: 'E-commerce',           desc: 'Détourage et mise en scène de 120 produits...' },
      { title: 'Templates Réseaux',      type: 'Social Media',         desc: 'Kit de 40 templates PSD réutilisables...' },
    ],
  },

  // 07. EDUPYTHON
  edupython: {
    label: '07 — Edupython',
    type:  'edupython',
    intro: 'Projets pédagogiques et outils construits autour de Python...',
    projects: [
      { name: 'Générateur de quiz',   type: 'Automatisation',      desc: 'Script Python qui génère des QCM...', tags:['Python','PDF','Pédagogie'] },
      { name: 'Bot Discord Scolaire', type: 'Développement',       desc: 'Assistant Discord pour classes en ligne...', tags:['Discord.py','API','Bot']  },
      { name: 'Dashboard résultats',  type: 'Data & Design',       desc: 'Tableau de bord interactif...', tags:['Matplotlib','Pandas','CSV'] },
      { name: 'Notebooks pédago',     type: 'Contenu pédagogique', desc: 'Série de notebooks Jupyter...', tags:['Jupyter','Tutoriel','Enfants'] },
    ],
  },
};

/* ==========================================================================
   ÉTAT DU SITE & RÉFÉRENCES DOM
   Ne touche à cette partie que si tu sais ce que tu fais !
   ========================================================================== */
let currentTheme = null;
let currentView  = 'root';
let activeTab    = 'dessin';

const overlay    = document.getElementById('modal-overlay');
const modal      = document.getElementById('modal');
const modalLabel = document.getElementById('modal-label');
const modalBody  = document.getElementById('modal-body');
const closeBtn   = document.getElementById('modal-close');

/* ==========================================================================
   GESTION DU CURSEUR (Le point et le cercle qui suit la souris)
   ========================================================================== */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

// Animation fluide du cercle (lag magnétique)
(function animRing() {
  ringX += (mouseX - ringX) * 0.13;
  ringY += (mouseY - ringY) * 0.13;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animRing);
})();

// Détecte quand la souris passe sur un élément cliquable pour agrandir le curseur
function bindCursor(scope = document) {
  scope.querySelectorAll('a, button, .bubble, .cm-card, .carousel-item, .action-btn, .vid-ph, .tab-btn, .proj-card, .ep-box, .tag, img').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
bindCursor();

/* ==========================================================================
   GESTION DE LA MODALE (Ouverture, Fermeture, Navigation interne)
   ========================================================================== */
function openModal(themeKey) {
  currentTheme = themeKey;
  currentView  = 'root';
  renderModal(); // Construit le contenu HTML avant d'ouvrir
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  modalBody.scrollTop = 0;
}

function closeModal() {
  // On a supprimé la sécurité qui coupait la musique ici
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  currentTheme = null;
}

function setView(view) {
  currentView = view;
  renderModal();
  modalBody.scrollTop = 0;
}

/* ==========================================================================
   GÉNÉRATEURS DE CONTENU (RENDU HTML)
   C'est ici que tes données (THEMES) sont transformées en code HTML et
   injectées dans la modale.
   Si tu veux ajouter de VRAIES IMAGES, c'est ici qu'il faut remplacer 
   les `<div class="img-ph">` par des `<img src="...">`.
   ========================================================================== */

function renderModal() {
  const theme = THEMES[currentTheme];
  if (!theme) return;

  modalLabel.textContent = theme.label;
  renderBackBtn(currentView !== 'root');

  // Redirige vers la bonne fonction selon le type de la bulle
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
  btn.innerHTML = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path d="M8 5.5H3M3 5.5L5.5 3M3 5.5L5.5 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> Retour`;
  btn.addEventListener('click', () => setView('root'));
  navLeft.prepend(btn);
  bindCursor(navLeft);
}

// ---- SECTION: ABOUT ME ----
function renderAboutme() {
  // AJOUTE TON TEXTE DE PRÉSENTATION ICI
  modalBody.innerHTML = `
    <h2 class="m-title">About me</h2>
    <p class="m-text">Bonjour, je suis Antoine Lavigne...</p>
  `;
}

// ---- SECTION: COURT METRAGE ----
function renderCourtMetrage(theme) {
  if (currentView === 'root')         renderCMMenu(theme);
  else if (currentView === 'film-amour') renderFilmAmour(theme.films[0]);
  else if (currentView === 'film-deuil') renderFilmDeuil(theme.films[1]);
}

function renderCMMenu(theme) {
  const cardsHtml = theme.films.map((film, i) => `
    <div class="cm-card" data-view="film-${film.id}">
      <div class="cm-card-idx">${String(i+1).padStart(2,'0')}</div>
      <div class="cm-card-title">${film.title}</div>
      <div class="cm-card-sub">${film.subtitle}</div>
      <div class="cm-card-text">${film.text}</div>
      <div class="cm-card-arrow">Explorer →</div>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <h2 class="m-title">Court-métrage</h2>
    <p class="m-text">Deux projets audiovisuels aux genres distincts, de la campagne de sensibilisation à la fiction sérielle.</p>
    <div class="cm-grid" style="margin-top:28px;">${cardsHtml}</div>
  `;

  modalBody.querySelectorAll('.cm-card').forEach(card => {
    card.addEventListener('click', () => setView(card.dataset.view));
  });
  bindCursor(modalBody);
}

function renderFilmAmour(film) {
  // 1. Génération du HTML pour les affiches
  const mesImages = ['Affiche/affiche_2.jpg', 'Affiche/affiche_3.jpg'];
  const postersHtml = mesImages.map(src => 
    `<img src="${src}" 
          alt="Affiche" 
          onclick="openImgLightbox('${src}')"
          style="width: 220px; aspect-ratio: 2/3; object-fit: cover; border-radius: 12px; border: 1.5px solid var(--black-mid); cursor: zoom-in;">`
  ).join('');
  
  // 2. Génération du HTML pour la timeline (étapes de production)
  const tlHtml = film.timeline.map((step, i) => {
    const last = i === film.timeline.length - 1;
    return `<div class="tl-step">
      <div class="tl-dot">${String(i+1).padStart(2,'0')}</div>
      <div class="tl-label">${step}</div>
    </div>${!last ? '<div class="tl-line"></div>' : ''}`;
  }).join('');

  // 3. Assemblage du contenu final
  modalBody.innerHTML = `
    <h2 class="m-title">${film.title}</h2> 

    <div class="film-2col">
      <p class="m-text" style="max-width:none;">${film.text}</p>
      <img src="image_contexte.webp" style="width:100%; height:190px; object-fit:cover; border-radius:16px;">
    </div>

    <h3 class="m-subtitle">Étapes de production</h3>
    <div class="timeline">${tlHtml}</div>

    <h3 class="m-subtitle">Affiches</h3>
    <div class="poster-grid" style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-top: 16px;">
      ${postersHtml}
    </div>

    <hr class="m-divider">

    <h3 class="m-subtitle">Visionnage</h3>
    <div style="margin-top:14px; border-radius:16px; overflow:hidden; border: 1.5px solid var(--black-mid); aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/u4rRYzAzJNQ?rel=0&enablejsapi=1" 
        title="L'amour seul - Court-métrage" 
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
    <div class="ep-box">
      <div class="ep-num">Ép.${ep.num}</div>
      <div class="ep-name">${ep.name}</div>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <h2 class="m-title">${film.title}</h2>
    <p class="m-text">${film.text}</p>

    <hr class="m-divider">
    <h3 class="m-subtitle">Structure sérielle — 5 épisodes</h3>
    <div class="ep-schema">${epHtml}</div>

    <hr class="m-divider">
    <h3 class="m-subtitle">Épisode 1 — ${film.episodes[0].name}</h3>
    <p class="m-text" style="margin-bottom:0;">Le premier épisode met en scène un jeune homme incarnant tous les codes et clichés de la masculinité hétérosexuelle. Lorsque naît en lui une attirance pour les hommes, ses certitudes vacillent. Perdu face à ce bouleversement, il tente d’abord de fuir et de nier ses sentiments. Mais, malgré la peur de cette nouvelle réalité, il finira par accepter pleinement qui il est réellement.</p>
    <a href="Script_le_deni.pdf" download="Script_le_deni_.pdf" class="action-btn" style="text-decoration: none;">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1v8M4 6l3 3 3-3M2 12h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Télécharger le script de l'épisode 1
    </a>
  `;
  bindCursor(modalBody);
}

// ---- SECTION: MUSIQUE ----
function renderMusique(theme) {
  modalBody.innerHTML = `
    <div class="music-player">
      <div class="music-art" id="music-art">
        <div class="music-art-rings">
          <div class="art-ring" style="width:150px;height:150px;animation-delay:0s;"></div>
          <div class="art-ring" style="width:210px;height:210px;animation-delay:.7s;"></div>
          <div class="art-ring" style="width:270px;height:270px;animation-delay:1.4s;"></div>
        </div>
        <div class="music-art-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M10 7v14l12-7-12-7z" fill="var(--hat)"/></svg>
        </div>
      </div>

      <div style="text-align:center;margin-top:22px;">
        <div class="music-track-title">Chill Things</div>
        <div class="music-track-artist">Antoine Lavigne</div>
      </div>

      <div class="music-progress-wrap">
        <div class="music-progress-bar" id="prog-bar"><div class="music-progress-fill" id="prog-fill" style="width:0%;"></div></div>
        <div class="music-time"><span id="time-cur">0:00</span><span id="time-dur">—</span></div>
      </div>

      <div class="music-controls">
        <button class="music-btn" id="seek-back" title="−10s">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11a7 7 0 1 1 .6 2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M4 7v4h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="music-btn play-pause" id="play-btn">
          <svg id="play-icon" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M7 5l12 6-12 6V5z" fill="currentColor"/></svg>
        </button>
        <button class="music-btn" id="seek-fwd" title="+10s">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M18 11a7 7 0 1 0-.6 2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M18 7v4h-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="music-volume" style="margin-top:20px;">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="opacity:.35;flex-shrink:0;">
          <path d="M2 5h3l4-3v10L5 9H2V5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="M10 4.5a3 3 0 0 1 0 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <input type="range" id="vol-slider" min="0" max="1" step="0.01" value="1" class="vol-range">
      </div>
    </div>
    <p class="m-text" style="margin-top:12px;">${theme.desc}</p>
  `;

  // ---- 1. GESTION DE L'AUDIO GLOBAL ----
  let audio = document.getElementById('global-audio');
  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'global-audio';
    audio.src = 'chill.wav'; // Chemin de ton fichier audio
    audio.preload = 'auto';
    audio.loop = true;
    audio.style.display = 'none';
    document.body.appendChild(audio);
  }

  // ---- 2. RÉCUPÉRATION DES BOUTONS (Modale & Mini-lecteur) ----
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
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  };

  // ---- 3. SYNCHRONISATION VISUELLE INITIALE ----
  if (!audio.paused) {
    playIco.innerHTML = SVG_PAUSE;
    artEl.classList.add('playing');
  }
  if (audio.duration) {
    timeDur.textContent = fmt(audio.duration);
    progFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
    timeCur.textContent  = fmt(audio.currentTime);
  }
  volSlider.value = audio.volume;

  // ---- 4. LA MAGIE DE LA SYNCHRONISATION (Événements audio natifs) ----
  
  // Quand la musique se lance (peu importe le bouton cliqué)
  audio.onplay = () => {
    if (document.getElementById('play-icon')) {
      document.getElementById('play-icon').innerHTML = SVG_PAUSE;
      document.getElementById('music-art').classList.add('playing');
    }
    if (miniPlayer) {
      miniPlayer.classList.add('visible');
      miniPlayer.classList.remove('paused');
      if (mpIcon) mpIcon.innerHTML = MP_PAUSE;
    }
  };

  // Quand la musique est en pause (peu importe le bouton cliqué)
  audio.onpause = () => {
    if (document.getElementById('play-icon')) {
      document.getElementById('play-icon').innerHTML = SVG_PLAY;
      document.getElementById('music-art').classList.remove('playing');
    }
    if (miniPlayer) {
      miniPlayer.classList.add('paused');
      if (mpIcon) mpIcon.innerHTML = MP_PLAY;
    }
  };

  audio.onloadedmetadata = () => { if (document.getElementById('time-dur')) timeDur.textContent = fmt(audio.duration); };
  
  audio.ontimeupdate = () => {
    if (!document.getElementById('prog-fill') || !audio.duration) return;
    progFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
    timeCur.textContent  = fmt(audio.currentTime);
  };

  // ---- 5. ACTIONS DES BOUTONS ----
  playBtn.onclick = () => { audio.paused ? audio.play() : audio.pause(); };
  progBar.onclick = e => { if (audio.duration) audio.currentTime = ((e.clientX - progBar.getBoundingClientRect().left) / progBar.getBoundingClientRect().width) * audio.duration; };
  seekBack.onclick = () => { audio.currentTime = Math.max(0, audio.currentTime - 10); };
  seekFwd.onclick  = () => { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10); };
  volSlider.oninput = () => { audio.volume = parseFloat(volSlider.value); };

  // Actions depuis le mini-lecteur
  if (mpPlayPause) {
    mpPlayPause.onclick = () => { audio.paused ? audio.play() : audio.pause(); };
  }
  
  // Fermer / Couper complètement la musique depuis le mini-lecteur
  if (mpClose) {
    mpClose.onclick = () => {
      audio.pause();
      audio.currentTime = 0; // Rembobine à zéro
      miniPlayer.classList.remove('visible');
    };
  }

  bindCursor(modalBody);
}
function renderBlender(theme) {
  // 1. Outil pour générer le carrousel
  const renderCarousel = (section) => {
    const vidsHTML = section.vids.map(v => `
      <div class="carousel-item" style="width:240px; flex-shrink: 0; scroll-snap-align: start;">
        <video muted loop playsinline 
               onmouseover="this.play()" 
               onmouseout="this.pause()" 
               onclick="openVideoLightbox('${v}')" 
               style="width:100%; border-radius:14px; border: 1.5px solid var(--black-mid); cursor:pointer; display: block;">
          <source src="${v}" type="video/mp4">
        </video>
      </div>
    `).join('');
      
    return `
      <div class="carousel-section">
        <h3 class="m-subtitle">${section.title}</h3>
        <p class="m-text" style="margin-bottom: 20px;">${section.text}</p>
        <div class="carousel-wrapper">
          <button class="car-nav prev" aria-label="Précédent" onclick="this.nextElementSibling.scrollBy({left: -255, behavior: 'smooth'})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="carousel">
            ${vidsHTML}
          </div>
          <button class="car-nav next" aria-label="Suivant" onclick="this.previousElementSibling.scrollBy({left: 255, behavior: 'smooth'})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    `;
  };

  // 2. Outil pour générer les vidéos larges et centrées
  const renderLargeVideo = (section) => {
    const videoSrc = section.vids[0] || ""; 
    return `
      <h3 class="m-subtitle" style="margin-top:40px; text-align:center;">${section.title}</h3>
      <p class="m-text" style="margin: 0 auto 20px; text-align:center;">${section.text}</p>
      <div style="width:100%; max-width:700px; margin: 0 auto; border-radius:16px; overflow:hidden; border: 2px solid var(--fire); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
        <video controls playsinline style="width:100%; display:block; background:#000;">
          <source src="${videoSrc}" type="video/mp4">
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    `;
  };

  // 3. Assemblage final
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

function renderKrita(theme) {
  if (activeTab === 'dessin') activeTab = 'traditionnel';

  // --- GALERIES IMAGES ---
  const galleryTrad = theme.traditionnel.images.map(src =>
    `<img src="${src}" style="width:100%; border-radius:12px; margin-bottom:12px; border: 1.5px solid var(--black-mid);" alt="Dessin">`
  ).join('');

  const galleryNum = theme.numerique.images.map(src =>
    `<img src="${src}" style="width:100%; border-radius:12px; margin-bottom:12px; border: 1.5px solid var(--black-mid);" alt="Dessin">`
  ).join('');

  // --- LOGIQUE ANIMATION ---
  
  // 1. Fonction pour le carrousel (Entraînements)
const renderCarousel = (section) => {
  // Dans la fonction renderCarousel (script.js)
  const vidsHTML = section.vids.map(v => `
    <div class="carousel-item" style="width:240px; flex-shrink: 0; scroll-snap-align: start;">
      <video muted loop playsinline 
             onmouseover="this.play()" 
             onmouseout="this.pause()" 
             onclick="openVideoLightbox('${v}')" 
            style="width:100%; border-radius:14px; border: 1.5px solid var(--black-mid); cursor:pointer; display: block;">
        <source src="${v}" type="video/mp4">
      </video>
    </div>
` ).join('');
    
    return `
      <div class="carousel-section">
        <h3 class="m-subtitle">${section.title}</h3>
        <p class="m-text" style="margin-bottom: 20px;">${section.text}</p>
        
        <div class="carousel-wrapper">
          <button class="car-nav prev" aria-label="Précédent" onclick="this.nextElementSibling.scrollBy({left: -255, behavior: 'smooth'})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div class="carousel">
            ${vidsHTML}
          </div>

          <button class="car-nav next" aria-label="Suivant" onclick="this.previousElementSibling.scrollBy({left: 255, behavior: 'smooth'})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    `;
  };
  // 2. Fonction pour le lecteur LARGE et CENTRÉ (Projets)
  const renderLargeVideo = (section) => {
    const videoSrc = section.vids[0] || ""; // On prend la première vidéo du tableau
    return `
      <h3 class="m-subtitle" style="margin-top:40px; text-align:center;">${section.title}</h3>
      <p class="m-text" style="margin: 0 auto 20px; text-align:center;">${section.text}</p>
      <div style="width:100%; max-width:700px; margin: 0 auto; border-radius:16px; overflow:hidden; border: 2px solid var(--fire); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
        <video controls playsinline style="width:100%; display:block; background:#000;">
          <source src="${videoSrc}" type="video/mp4">
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    `;
  };

  const animationContent = `
    ${renderCarousel(theme.animation.entrainements)}
    <hr class="m-divider">
    ${renderLargeVideo(theme.animation.petitfilm)}
    <hr class="m-divider">
    ${renderLargeVideo(theme.animation.ecogestion)}
  `;

  // --- ASSEMBLAGE FINAL ---
  modalBody.innerHTML = `
    <div class="tabs-bar">
      <button class="tab-btn ${activeTab==='traditionnel'?'active':''}" data-tab="traditionnel">Traditionnel</button>
      <button class="tab-btn ${activeTab==='numerique'?'active':''}" data-tab="numerique">Numérique</button>
      <button class="tab-btn ${activeTab==='animation'?'active':''}" data-tab="animation">Animation</button>
    </div>

    <div class="tab-pane ${activeTab==='traditionnel'?'active':''}" id="tab-traditionnel">
      <h2 class="m-title">${theme.traditionnel.title}</h2>
      <p class="m-text">${theme.traditionnel.text}</p>
      <div class="gallery-grid">${galleryTrad}</div>
    </div>

    <div class="tab-pane ${activeTab==='numerique'?'active':''}" id="tab-numerique">
      <h2 class="m-title">${theme.numerique.title}</h2>
      <p class="m-text">${theme.numerique.text}</p>
      <div class="gallery-grid">${galleryNum}</div>
    </div>

    <div class="tab-pane ${activeTab==='animation'?'active':''}" id="tab-animation">
      <h2 class="m-title">Animation</h2>
      ${animationContent}
    </div>
  `;

  modalBody.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      renderKrita(theme); // On relance le rendu pour mettre à jour l'affichage
    });
  });
  bindCursor(modalBody);
}

// --- script.js ---

function renderPhotoshop(theme) {
  modalBody.innerHTML = `
    <h2 class="m-title">Photoshop</h2>
    <p class="m-text">${theme.intro}</p>
    <h3 class="m-subtitle">Galerie de travaux</h3>
    <div class="poster-grid">
      <img src="Affiche/affiche_1.jpg" class="img-ph" alt="Affiche 1" onclick="openImgLightbox(this.src)" style="height:195px; object-fit:cover; opacity:1; border:none; cursor: zoom-in;">
      <img src="Affiche/affiche_2.jpg" class="img-ph" alt="Affiche 2" onclick="openImgLightbox(this.src)" style="height:195px; object-fit:cover; opacity:1; border:none; cursor: zoom-in;">
      <img src="Affiche/affiche_3.jpg" class="img-ph" alt="Affiche 3" onclick="openImgLightbox(this.src)" style="height:195px; object-fit:cover; opacity:1; border:none; cursor: zoom-in;">
    </div>
  `;
  bindCursor(modalBody);
}

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
   UTILITAIRES ET ÉVÉNEMENTS GLOBAUX
   ========================================================================== */
function openLightbox(title) {
  // Gère l'ouverture des vidéos en plein écran
  // (Logique conservée telle quelle)
}

function playIcon(size = 'normal') {
  // SVG de l'icône lecture
  const s = size === 'large' ? 60 : 44;
  const i = size === 'large' ? 22 : 15;
  return `<div class="play-icon" style="width:${s}px;height:${s}px;">
    <svg width="${i}" height="${i}" viewBox="0 0 ${i} ${i}" fill="none">
      <path d="${size==='large'?'M5 3.5l14 7.5-14 7.5V3.5z':'M4 3l9 4.5L4 12V3z'}" fill="var(--fire)"/>
    </svg>
  </div>`;
}

// Attache le clic sur toutes les bulles pour ouvrir la modale
document.querySelectorAll('.bubble').forEach(b => {
  b.addEventListener('click', () => openModal(b.dataset.theme));
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

// Fermeture avec la touche "Échap"
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const lb = document.getElementById('video-lightbox');
    if (lb?.classList.contains('open')) { lb.classList.remove('open'); return; }
    if (overlay.classList.contains('open')) closeModal();
  }
});

function openImgLightbox(src) {
  const lb = document.getElementById('img-lightbox');
  const lbImg = document.getElementById('img-lightbox-content');
  lbImg.src = src;
  lb.classList.add('open');
}

function closeImgLightbox() {
  document.getElementById('img-lightbox').classList.remove('open');
}

// Gestion de la Lightbox Vidéo
function openVideoLightbox(src) {
  const lightbox = document.getElementById('video-lightbox');
  const videoPlayer = document.getElementById('lightbox-video-player');
  
  videoPlayer.src = src; // On charge la bonne vidéo
  lightbox.classList.add('open'); // On affiche la pop-up
  document.body.style.overflow = 'hidden'; // On bloque le scroll en arrière-plan
}

function closeVideoLightbox() {
  const lightbox = document.getElementById('video-lightbox');
  const videoPlayer = document.getElementById('lightbox-video-player');
  
  videoPlayer.pause(); // On arrête la vidéo
  videoPlayer.src = ""; // On vide la source pour stopper le chargement
  lightbox.classList.remove('open');
  document.body.style.overflow = ''; // On réactive le scroll
}
