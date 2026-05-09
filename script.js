/* ==========================================================================
   DONNÉES (THEMES)
   ========================================================================== */

const THEMES = {
  aboutme: {
    label: '01 — About me',
    type: 'aboutme',
  },

  courtmetrage: {
    label: '02 — Court-métrage',
    type: 'courtmetrage',
    films: [
      {
        id: 'amour',
        title: "L'amour seul",
        subtitle: 'Campagne de sensibilisation · 22 min',
        text: "L'amour seul dénonce et sensibilise au danger des IA dans les relations. Réalisé en un mois avec un iPhone 14.",
        skills: ['Prise de vue','Montage','Motion Design'],
        timeline: ['Synopsis','Script','Storyboard','Tournage','Montage'],
      },
      {
        id: 'deuil',
        title: 'Le deuil',
        subtitle: 'Fiction · En cours',
        text: "Série d'épisodes abordant les différentes étapes du deuil.",
        episodes: [
          { num: 1, name: 'Le déni' },
          { num: 2, name: 'Le marchandage' },
          { num: 3, name: 'La colère' },
          { num: 4, name: 'La dépression' },
          { num: 5, name: "L'acceptation" },
        ],
      }
    ],
  },

  musique: {
    label: '03 — Musique',
    type: 'musique',
    desc: "Création d'ambiance réalisée sur Waveform avec des samples libres de droits.",
  },

  blender: {
    label: '04 — Blender',
    type: 'blender',
    entrainements: {
      title: 'Tutoriels & Entraînements',
      text: "Apprentissage autodidacte de la modélisation et de l'animation 3D.",
      vids: ['Blender/chateau.mp4', 'Blender/citrouille.mp4', 'Blender/Main_render.mp4','Blender/fusee.mp4'],
    },
    projet1: {
      title: 'Ma première création perso',
      text: "Animation de Spider-Man : apprentissage du rigging et du timing.",
      vids: ['https://www.youtube.com/embed/ypUs9nX7gtE'],
    },
    projet2: {
      title: 'Promotion Marketing',
      text: "Animation publicitaire pour une gamme de lait.",
      vids: ['Blender/Bottle_Milk_1.mp4'],
    },
  },

  krita: {
    label: '05 — Dessin',
    type: 'krita',
    traditionnel: {
      title: 'Dessin traditionnel',
      text: 'Créations sur supports physiques.',
      images: ['dessin/Croquis_1.jpg', 'dessin/Awesome.jpg', 'dessin/Donald.jpg','dessin/Granny.jpg','dessin/hammerdinger.jpg','dessin/hamster.jpg','dessin/joker_croquis.png','dessin/mec_avec_ver.png','dessin/Rabbit.jpg'],
    },
    numerique: {
      title: 'Dessin numérique',
      text: 'Illustrations réalisées sur Krita.',
      images: ['dessin/histoire_j-o.png', 'dessin/monopoly.png','dessin/lifeline.png','dessin/panda.png','dessin/STITCH.png'], 
    },
    animation: {
      entrainements: {
        title: 'Entraînements',
        text: 'Exercices d\'animation frame-by-frame.',
        vids: ['Animation/balle_entrainement_1.mp4', 'Animation/balle_entrainement_2.mp4', 'Animation/cool_cube_anim_smear.mp4', 'Animation/cube.mp4', 'Animation/marche_entrainement.mp4', 'Animation/bonhomme_tombe_entrainement.mp4'],
      },
      petitfilm: {
        title: "L'animation depuis petit",
        text: "Ma première grosse animation réalisée en 3ème.",
        vids: ['Animation/animation_3eme_pingouin.MP4'],
      },
      ecogestion: {
        title: 'Vidéo Éco-gestion',
        text: 'Animation pédagogique commandée par un lycée.',
        vids: ['Animation/Animation_Eco_gestion.mp4'],
      },
    },
  },

  photoshop: {
    label: '06 — Photoshop',
    type: 'photoshop',
    intro: 'Affiches et visuels publicitaires.',
    projects: [
      { title: 'Campagne Mode', type: 'Retouche', desc: 'Post-production visuelle.' },
    ],
  },
};

/* ==========================================================================
   LOGIQUE DU CURSEUR ET MODALE
   ========================================================================== */

let currentTheme = null;
let currentView  = 'root';
let activeTab    = 'traditionnel';

const overlay    = document.getElementById('modal-overlay');
const modal      = document.getElementById('modal');
const modalLabel = document.getElementById('modal-label');
const modalBody  = document.getElementById('modal-body');
const closeBtn   = document.getElementById('modal-close');

// --- CURSEUR ---
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px'; cursorDot.style.top = mouseY + 'px';
});

(function animRing() {
  ringX += (mouseX - ringX) * 0.13; ringY += (mouseY - ringY) * 0.13;
  cursorRing.style.left = ringX + 'px'; cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animRing);
})();

function bindCursor(scope = document) {
  scope.querySelectorAll('a, button, .bubble, .cm-card, .carousel-item, img, video').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
bindCursor();

// --- NAVIGATION MODALE ---
function openModal(themeKey) {
  currentTheme = themeKey; currentView = 'root';
  renderModal();
  overlay.classList.add('open');
}

function closeModal() { overlay.classList.remove('open'); currentTheme = null; }

function setView(view) { currentView = view; renderModal(); modalBody.scrollTop = 0; }

/* ==========================================================================
   FONCTIONS DE RENDU (CONTENU)
   ========================================================================== */

function renderModal() {
  const theme = THEMES[currentTheme];
  if (!theme) return;
  modalLabel.textContent = theme.label;
  
  // Bouton retour
  modal.querySelector('.back-btn')?.remove();
  if (currentView !== 'root') {
    const btn = document.createElement('button');
    btn.className = 'back-btn';
    btn.innerHTML = `← Retour`;
    btn.onclick = () => setView('root');
    modalLabel.parentElement.prepend(btn);
  }

  switch (theme.type) {
    case 'aboutme':     renderAboutme(); break;
    case 'courtmetrage': renderCourtMetrage(theme); break;
    case 'musique':     renderMusique(theme); break;
    case 'blender':     renderBlender(theme); break;
    case 'krita':       renderKrita(theme); break;
    case 'photoshop':   renderPhotoshop(theme); break;
  }
  bindCursor(modalBody);
}

// --- RENDU BLENDER & ANIMATION (CAROUSEL) ---
function renderCarousel(section) {
  const vidsHTML = section.vids.map(v => `
    <div class="carousel-item">
      <video muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()" onclick="openVideoLightbox('${v}')">
        <source src="${v}">
      </video>
    </div>`).join('');
  return `<div class="carousel-section">
            <h3 class="m-subtitle">${section.title}</h3>
            <div class="carousel-wrapper">
                <button class="car-nav prev" onclick="this.nextElementSibling.scrollBy({left: -255, behavior: 'smooth'})">‹</button>
                <div class="carousel">${vidsHTML}</div>
                <button class="car-nav next" onclick="this.previousElementSibling.scrollBy({left: 255, behavior: 'smooth'})">›</button>
            </div>
          </div>`;
}

function renderBlender(theme) {
  modalBody.innerHTML = `
    <h2 class="m-title">Blender</h2>
    ${renderCarousel(theme.entrainements)}
  `;
}

function renderKrita(theme) {
  modalBody.innerHTML = `
    <div class="tabs-bar">
        <button class="tab-btn ${activeTab==='traditionnel'?'active':''}" onclick="activeTab='traditionnel';renderKrita(THEMES.krita)">Traditionnel</button>
        <button class="tab-btn ${activeTab==='animation'?'active':''}" onclick="activeTab='animation';renderKrita(THEMES.krita)">Animation</button>
    </div>
    <div class="tab-content">
        ${activeTab === 'animation' ? renderCarousel(theme.animation.entrainements) : '<p>Galerie photo en cours...</p>'}
    </div>`;
}

// --- EVENEMENTS ---
document.querySelectorAll('.bubble').forEach(b => b.onclick = () => openModal(b.dataset.theme));
closeBtn.onclick = closeModal;

function openVideoLightbox(src) {
  const lb = document.getElementById('video-lightbox');
  const vid = document.getElementById('lightbox-video-player');
  vid.src = src;
  vid.load();
  lb.classList.add('open');
}

function closeVideoLightbox() {
  const lb = document.getElementById('video-lightbox');
  document.getElementById('lightbox-video-player').pause();
  lb.classList.remove('open');
}
window.closeVideoLightbox = closeVideoLightbox; // Pour le clic exterieur
