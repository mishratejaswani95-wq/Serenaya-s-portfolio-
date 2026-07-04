/* =========================
   GLOBAL SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".art-card, .music-card, .writing-card, .motion-card"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

/* =========================
   SMOOTH SCROLL NAVIGATION
========================= */

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* =========================
   ART STUDIO FILTER + LIGHTBOX
========================= */

const artButtons = document.querySelectorAll(".filter-btn");
const artCards = document.querySelectorAll(".art-card");

artButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    artButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    artCards.forEach(card => {
      card.style.display =
        filter === "all" || card.classList.contains(filter)
          ? "block"
          : "none";
    });
  });
});

function openLightbox(card) {
  const img = card.querySelector("img").src;
  document.getElementById("lightbox-img").src = img;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* =========================
   MOTION STUDIO FILTER
========================= */

const motionButtons = document.querySelectorAll(".motion-btn");
const motionCards = document.querySelectorAll(".motion-card");

motionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    motionButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    motionCards.forEach(card => {
      card.style.display =
        filter === "all" || card.classList.contains(filter)
          ? "block"
          : "none";
    });
  });
});

/* =========================
   MUSIC PLAYER SYSTEM (REAL AUDIO)
========================= */

let currentAudio = null;

const musicCards = document.querySelectorAll(".music-card");

musicCards.forEach(card => {
  card.addEventListener("click", () => {
    const audioSrc = card.dataset.audio;

    if (!audioSrc) return;

    // stop previous audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(audioSrc);
    currentAudio.play();

    musicCards.forEach(c => c.classList.remove("playing"));
    card.classList.add("playing");
  });
});

/* =========================
   VIDEO MODAL (MOTION STUDIO)
========================= */

function openVideo(card) {
  const videoSrc = card.dataset.video;

  const modal = document.createElement("div");
  modal.id = "video-modal";

  modal.innerHTML = `
    <div class="video-box">
      <video controls autoplay>
        <source src="${videoSrc}" type="video/mp4">
      </video>
      <span class="close-btn" onclick="closeVideo()">✕</span>
    </div>
  `;

  document.body.appendChild(modal);
}

function closeVideo() {
  document.getElementById("video-modal")?.remove();
}

/* =========================
   CONTACT FORM HANDLER
========================= */

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value;
    const email = form.querySelector("input[name='email']").value;
    const message = form.querySelector("textarea").value;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully ✨");
    form.reset();
  });
}

/* =========================
   GLASSY CURSOR + TRAIL EFFECT
========================= */

// Main cursor
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

// Trail elements
const trailCount = 12;
const trails = [];

for (let i = 0; i < trailCount; i++) {
  const t = document.createElement("div");
  t.className = "cursor-trail";
  document.body.appendChild(t);
  trails.push({ el: t, x: 0, y: 0 });
}

let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

function animateTrail() {
  let x = mouseX;
  let y = mouseY;

  trails.forEach((trail, i) => {
    trail.x += (x - trail.x) * 0.25;
    trail.y += (y - trail.y) * 0.25;

    trail.el.style.transform = `translate(${trail.x}px, ${trail.y}px)`;

    x = trail.x;
    y = trail.y;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();
