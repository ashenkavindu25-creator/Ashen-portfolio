/* Dynamic Typewriter Effect for Hero Title */
const roles = [
  "UI/UX Designer",
  "AI Designer",
  "Product Designer",
  "Motion Specialist",
  "Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriter");
const typingSpeed = 100;
const eraseSpeed = 50;
const delayNext = 2000;

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? eraseSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = delayNext;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

/* Projects data (local images from the assets folder, links to Behance) */

const projects = [
  {
    title: "FanBudget App",
    cat: "mobile",
    year: "2026",
    role: "UI/UX & Mobile Design",
    desc: "A modern personal finance & budget tracking application for fans and creators.",
    tags: ["Mobile", "Figma", "UX Research"],
    image: "assets/fanbudget.jpg",
    colors: ["#7c5cff", "#00d4ff"],
    link: "https://www.behance.net/ashenui"
  },
  {
    title: "Zulu Courier Dashboard",
    cat: "dashboard",
    year: "2026",
    role: "Product Design",
    desc: "Logistics & parcel dispatch control panel with real-time tracking metrics.",
    tags: ["Dashboard", "SaaS", "Data Viz"],
    image: "assets/zulu-courier.jpg",
    colors: ["#ff8a00", "#ff5ca8"],
    link: "https://www.behance.net/ashenui"
  },
  {
    title: "Toner Connect Platform",
    cat: "dashboard",
    year: "2025",
    role: "Web UI/UX",
    desc: "B2B supply chain management interface for printer toner & hardware distribution.",
    tags: ["Web", "B2B", "Design System"],
    image: "assets/toner-connect.jpg",
    colors: ["#00c896", "#00d4ff"],
    link: "https://www.behance.net/ashenui"
  },
  {
    title: "CINEsync.io Platform",
    cat: "landing",
    year: "2025",
    role: "UI/UX & Web Design",
    desc: "Film production workflow tool allowing media teams to collaborate seamlessly.",
    tags: ["SaaS", "Collaboration", "Dark UI"],
    image: "assets/cinesync.jpg",
    colors: ["#ff5c5c", "#ffb347"],
    link: "https://www.behance.net/ashenui"
  },
  {
    title: "MO Marketplace App",
    cat: "mobile",
    year: "2025",
    role: "Mobile Product Design",
    desc: "E-commerce mobile experience with instant payments and curated recommendations.",
    tags: ["E-Commerce", "Mobile App", "Prototyping"],
    image: "assets/mo-marketplace.jpg",
    colors: ["#5c7cff", "#a35cff"],
    link: "https://www.behance.net/ashenui"
  },
  {
    title: "Mindada Experience Design",
    cat: "landing",
    year: "2024",
    role: "UX Research & Web UI",
    desc: "Digital agency showcase website designed with interactive storytelling elements.",
    tags: ["Branding", "Interaction", "Web"],
    image: "assets/mindada.jpg",
    colors: ["#1fd1f9", "#b621fe"],
    link: "https://www.behance.net/ashenui"
  }
  
];

/* Render "My Work" - one card group per category */
const categories = [
  { key: 'mobile',    title: 'Mobile apps',      icon: 'i-mobile',  thumb: 'is-mobile',
    blurb: 'App flows designed for thumbs, from onboarding to payments.' },
  { key: 'landing',   title: 'Landing pages',    icon: 'i-landing', thumb: 'is-landing',
    blurb: 'Story-led pages that explain a product and move people to act.' },
  { key: 'dashboard', title: 'Dashboard design', icon: 'i-dash',    thumb: 'is-dash',
    blurb: 'Dense data made calm, with clear cards, charts and controls.' }
];

const frameFor = {
  mobile:    () => '<span class="phone-notch"></span>',
  landing:   () => '<div class="browser-bar"><i></i><i></i><i></i><span>behance.net/ashenui</span></div>',
  dashboard: () => ''
};

const cardHTML = (p, c) => `
  <a href="${p.link}" target="_blank" rel="noopener" class="card reveal hoverable" data-cat="${p.cat}">
    <div class="thumb ${c.thumb}" data-title="${p.title}" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
      <img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy"
           onerror="this.style.display='none';this.parentElement.classList.add('no-img')" />
      <div class="thumb-overlay"></div>
      ${frameFor[p.cat]()}
    </div>
    <div class="info">
      <div class="meta"><span>${p.role}</span><span>${p.year}</span></div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="chips">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <span class="arrow">View project on Behance ↗</span>
    </div>
  </a>`;

document.getElementById('work-groups').innerHTML = categories.map(c => {
  const list = projects.filter(p => p.cat === c.key);
  return `
  <div class="work-group" data-cat="${c.key}">
    <div class="group-head reveal">
      <div class="cat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${c.icon}"/></svg></div>
      <div><h3>${c.title}</h3><p>${c.blurb}</p></div>
      <span class="group-count">${list.length} ${list.length === 1 ? 'project' : 'projects'}</span>
    </div>
    <div class="group-grid ${c.thumb}">${list.map(p => cardHTML(p, c)).join('')}</div>
  </div>`;
}).join('');

/* Custom Pointer Cursor */
const dot = document.querySelector('.cursor'), ring = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
addEventListener('mousemove', e => {
  mx = e.clientX; 
  my = e.clientY; 
  dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
});
(function loop() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
  requestAnimationFrame(loop);
})();

document.querySelectorAll('.hoverable, button, a').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

/* 3D tilt for Project Cards */
document.querySelectorAll('.card').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
  });
  c.addEventListener('mouseleave', () => c.style.transform = '');
});

/* Scroll reveal + counters */
const io = new IntersectionObserver(entries => entries.forEach((en, i) => {
  if (!en.isIntersecting) return;
  setTimeout(() => en.target.classList.add('show'), i * 100);
  const h = en.target.querySelector('[data-count]');
  if (h) {
    const end = +h.dataset.count; 
    let n = 0;
    const t = setInterval(() => {
      n += Math.ceil(end / 40);
      if (n >= end) { n = end; clearInterval(t); }
      h.textContent = n + '+';
    }, 30);
  }
  io.unobserve(en.target);
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Project Category Filtering (shows or hides whole sections) */
document.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active');
  b.classList.add('active');
  document.querySelectorAll('.work-group').forEach(g =>
    g.classList.toggle('hide', b.dataset.filter !== 'all' && g.dataset.cat !== b.dataset.filter));
}));

/* ===== Hire form: opens from the "Hire now" button ===== */
const CONTACT_EMAIL = 'disanayakaaashen@gmail.com';
/* Optional: paste your Formspree form URL here (https://formspree.io/f/xxxxxxxx)
   to send the message by email straight from the page.
   Leave it empty and the form opens the visitor's email app with the message ready. */
const FORM_ENDPOINT = '';

const hireBtn = document.getElementById('hireBtn');
const hireDialog = document.getElementById('hireDialog');
const hireForm = document.getElementById('hireForm');
const hireDone = document.getElementById('hireDone');
const hireError = document.getElementById('hireError');
const hireSubmit = document.getElementById('hireSubmit');

function openHire() {
  hireForm.hidden = false;
  hireDone.hidden = true;
  hireError.hidden = true;
  hireDialog.showModal();
  document.body.classList.add('modal-open');
  hireForm.elements.name.focus();
}
function closeHire() { hireDialog.close(); }

hireDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  ring.classList.remove('hover');
});
/* click on the dark backdrop closes the form */
hireDialog.addEventListener('click', e => { if (e.target === hireDialog) closeHire(); });
document.getElementById('hireClose').addEventListener('click', closeHire);
document.getElementById('hireDoneClose').addEventListener('click', closeHire);

if (hireBtn && typeof hireDialog.showModal === 'function') {
  hireBtn.addEventListener('click', e => { e.preventDefault(); openHire(); });
}

function showDone(title, textNodes) {
  document.getElementById('doneTitle').textContent = title;
  const p = document.getElementById('doneText');
  p.replaceChildren(...textNodes);
  hireForm.hidden = true;
  hireDone.hidden = false;
  hireForm.reset();
}
function emailLink() {
  const a = document.createElement('a');
  a.href = 'mailto:' + CONTACT_EMAIL;
  a.textContent = CONTACT_EMAIL;
  return a;
}

hireForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (!hireForm.reportValidity()) return;
  if (hireForm.elements._gotcha.value) return; /* spam trap */

  const f = hireForm.elements;
  const data = { name: f.name.value.trim(), email: f.email.value.trim(), type: f.type.value, message: f.message.value.trim() };
  const subject = `Project enquiry: ${data.type} from ${data.name}`;
  hireError.hidden = true;

  if (FORM_ENDPOINT) {
    hireSubmit.disabled = true;
    hireSubmit.textContent = 'Sending...';
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, projectType: data.type, message: data.message, _subject: subject })
      });
      if (!res.ok) throw new Error('send failed');
      showDone('Message sent', [document.createTextNode(`Thanks, ${data.name}. I'll reply to ${data.email} soon.`)]);
    } catch (err) {
      hireError.replaceChildren(document.createTextNode("The message didn't send. Try again, or email me at "), emailLink(), document.createTextNode('.'));
      hireError.hidden = false;
    } finally {
      hireSubmit.disabled = false;
      hireSubmit.textContent = 'Send project details';
    }
    return;
  }

  /* No endpoint set: open the visitor's email app with everything filled in */
  const body = `Name: ${data.name}\nEmail: ${data.email}\nProject type: ${data.type}\n\nProject description:\n${data.message}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showDone('Your email is ready', [
    document.createTextNode('Your email app should be open with the project details filled in. Press send there to finish. Nothing opened? Email me directly at '),
    emailLink(),
    document.createTextNode('.')
  ]);
});

/* ===== Journey timeline: work + education, newest first =====
   Add or edit entries here. kind: 'work' or 'edu'. Optional "logo" (image path) replaces the letter tile. */
const journey = [
  {
    kind: 'work',
    org: 'Efito Solutions (Pvt) Ltd',
    meta: 'Full-time · 3 yrs 10 mos',
    logo: '',
    roles: [
      { title: 'UI/UX Engineer', period: 'Feb 2023 - Present', duration: '3 yrs 10 mos', current: true,
        location: 'Homagama, Western Province, Sri Lanka · On-site',
        skills: ['User Experience (UX)', 'Web Interface Design'], more: '+1 skill' },
      { title: 'Associate UI/UX Designer', period: 'Feb 2024 - Jul 2026', duration: '2 yrs 6 mos' },
      { title: 'Trainee UI / UX Designer', period: 'Feb 2023 - Feb 2024', duration: '1 yr 1 mo',
        location: 'Moratuwa, Western Province, Sri Lanka',
        skills: ['HTML5', 'Search Engine Optimization (SEO)'], more: '+6 skills' }
    ]
  },
  {
    kind: 'edu',
    org: 'Institute of Technology, University of Moratuwa',
    meta: 'Education',
    logo: '',
    roles: [
      { title: 'National Diploma in Technology (NDT) - Information Technology' }
    ]
  }
];

const pinIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
const capIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5"/></svg>';

const logoHTML = g => g.logo
  ? `<div class="org-logo"><img src="${g.logo}" alt="${g.org}" onerror="this.parentElement.textContent='${g.org[0]}'"></div>`
  : `<div class="org-logo ${g.kind}">${g.kind === 'edu' ? capIcon : g.org[0]}</div>`;

const roleHTML = (r, g) => `
  <div class="tl-item${r.current ? ' current' : ''}">
    <span class="tl-node"></span>
    <div class="tl-card">
      <div class="tl-top">
        <div>
          <h4>${r.title}</h4>
          ${r.period ? `<p class="tl-date">${r.period}</p>` : ''}
        </div>
        <div class="tl-tags">
          ${r.current ? '<span class="tl-badge"><i></i>Current</span>' : ''}
          ${r.duration ? `<span class="tl-dur">${r.duration}</span>` : ''}
          ${g.kind === 'edu' ? '<span class="tl-edu-tag">Education</span>' : ''}
        </div>
      </div>
      ${r.location ? `<p class="tl-loc">${pinIcon}${r.location}</p>` : ''}
      ${r.skills ? `<div class="tl-skills">${r.skills.map(s => `<span>${s}</span>`).join('')}${r.more ? `<span class="more">${r.more}</span>` : ''}</div>` : ''}
    </div>
  </div>`;

document.getElementById('tlGroups').innerHTML = journey.map(g => `
  <div class="tl-group">
    <div class="tl-item tl-org">
      ${logoHTML(g)}
      <div><h3>${g.org}</h3><p>${g.meta}</p></div>
    </div>
    ${g.roles.map(r => roleHTML(r, g)).join('')}
  </div>`).join('');

/* reveal each entry as it scrolls in */
const tlItems = [...document.querySelectorAll('#timeline .tl-item')];
const tlIO = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); tlIO.unobserve(en.target); }
}), { threshold: 0.15 });
tlItems.forEach(el => tlIO.observe(el));

/* the gradient line fills as you scroll; entries light up when it reaches them */
const timeline = document.getElementById('timeline');
function updateTimeline() {
  const r = timeline.getBoundingClientRect();
  const mark = window.innerHeight * 0.6;
  timeline.style.setProperty('--fill', Math.max(0, Math.min(r.height - 36, mark - r.top - 18)) + 'px');
  tlItems.forEach(el => {
    const dot = el.querySelector('.tl-node, .org-logo');
    el.classList.toggle('active', dot.getBoundingClientRect().top + 14 < mark);
  });
}
let tlTick = false;
window.addEventListener('scroll', () => {
  if (!tlTick) { tlTick = true; requestAnimationFrame(() => { updateTimeline(); tlTick = false; }); }
}, { passive: true });
window.addEventListener('resize', updateTimeline);
updateTimeline();

/* soft spotlight that follows the cursor on each card */
document.querySelectorAll('.tl-card').forEach(card => card.addEventListener('pointermove', e => {
  const b = card.getBoundingClientRect();
  card.style.setProperty('--mx', (e.clientX - b.left) + 'px');
  card.style.setProperty('--my', (e.clientY - b.top) + 'px');
}));
