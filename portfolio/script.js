/* ---------- data ---------- */
const skills = [
  { group: 'Languages & OOP', accent: 'acc', items: ['Java (OOP)','Python','JavaScript / TypeScript','C++','Bash / Shell','HTML'] },
  { group: 'Backend & APIs', accent: 'acc2', items: ['Spring Boot','Apache Camel','REST API Design','Node.js / Express','Microservices','Batch Processing'] },
  { group: 'Frontend', accent: 'warn', items: ['React','Redux','Context API','Angular'] },
  { group: 'Testing & Quality', accent: 'pink', items: ['Automated Testing','Jest','TDD','Debugging','Production Support'] },
  { group: 'Cloud & DevOps', accent: 'acc', items: ['AWS (EC2, S3, IAM, CloudWatch)','CI/CD','GitHub Actions','Docker','Jenkins','Azure'] },
  { group: 'Tools & Practices', accent: 'acc2', items: ['Git & GitHub','Agile / Scrum','Figma','Swagger','MySQL'] },
];

const experience = [
  { role:'Full-stack Software Engineer', org:'Inokrit Solution', loc:'India', date:'Jun 2022 — Jul 2024', accent:'acc',
    points:[
      'Designed 8 object-oriented Java backend services with Spring Boot and Apache Camel to process 1,000+ daily payment and order transactions, integrating payment web services and reducing data discrepancies by ~30%.',
      'Refactored an insurance portal (policy & payments) in a compliance-driven environment applying SSDLC practices, cutting code redundancy by 40% (SonarQube) and improving JUnit coverage by 10%.',
      'Built full-stack React front-end components integrated with Java backend payment APIs, surfacing real-time payment and claims data and reducing routine support calls by 30%.',
      'Troubleshot production defects and built CI/CD pipelines (GitHub Actions, AWS EC2/S3/CloudWatch), cutting deployment time from 2 hours to 30 minutes.',
      'Collaborated with product management across Agile Scrum ceremonies, improving estimation accuracy and reducing sprint spillover by ~25%.',
    ]},
  { role:'Frontend Developer', org:'Tekno Point', loc:'India', date:'Oct 2021 — Apr 2022', accent:'warn',
    points:[
      'Resolved 30+ recurring production UI issues across Agile sprint cycles with developers and QA, reducing customer support tickets by 65% and reporting status to stakeholders.',
      'Designed dashboard views surfacing the most-requested coverage and claims information, cutting routine support calls by 30% and improving customer self-service satisfaction.',
    ]},
  { role:'Trainee Software Developer', org:'Kings Crown Solution LLP', loc:'India', date:'Jul 2020 — Sep 2021', accent:'acc2',
    points:[
      'Built full-stack REST APIs and front-end components in JavaScript and Node.js applying service-oriented architecture, with MySQL on the backend.',
      'Learned and applied software development best practices under senior guidance; documented technical specifications and system configurations to support knowledge transfer.',
    ]},
];

const projects = [
  { name:'Self-Sovereign ID Backend on Blockchain', org:'Western New England University', accent:'acc',
    desc:'Architected scalable Python backend services on Linux using service-oriented architecture across the full SDLC in a distributed system; delivered secure, fault-tolerant identity verification across distributed healthcare nodes with full audit logging and secure development practices.',
    tags:['Python','Linux','SOA','Blockchain','SSDLC'] },
  { name:'Full-Stack Expenses Analytics App', org:'Western New England University', accent:'acc2',
    desc:'Built a full-stack web app with Python, Node.js/Express, and React on Linux, with RESTful endpoints, SQL-backed financial storage, and automated test suites (80%+ coverage, TDD); implemented reporting enabling sub-second search across 12+ months of data.',
    tags:['React','Node.js','Python','Jest','TDD'] },
];

/* ---------- render ---------- */
const cmap = { acc:'#5ccfe6', acc2:'#bae67e', warn:'#ffae57', pink:'#f78c6c' };

document.getElementById('skill-grid').innerHTML = skills.map(s => `
  <div class="reveal bg-panel border border-line rounded-lg p-5 hover:border-${s.accent}/50 transition-colors">
    <div class="font-mono text-sm font-bold" style="color:${cmap[s.accent]}">${s.group}</div>
    <div class="mt-3 flex flex-wrap gap-2">
      ${s.items.map(i=>`<span class="font-mono text-xs text-sub bg-ink border border-line rounded px-2 py-1">${i}</span>`).join('')}
    </div>
  </div>`).join('');

document.getElementById('timeline').insertAdjacentHTML('beforeend', experience.map(e => `
  <div class="tl-item relative pl-8 pb-10 last:pb-0">
    <div class="tl-dot absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 bg-ink" style="border-color:${cmap[e.accent]};color:${cmap[e.accent]}"></div>
    <div class="tl-card">
      <div class="font-mono text-xs text-sub">${e.date}</div>
      <h3 class="font-mono text-lg font-bold mt-1">${e.role} <span class="text-sub font-normal">@ ${e.org}</span></h3>
      <div class="font-mono text-xs text-sub">${e.loc}</div>
      <ul class="mt-3 space-y-2 text-sub text-sm leading-relaxed">
        ${e.points.map((p,i)=>`<li class="tl-bullet flex gap-2" style="transition-delay:${0.15 + i*0.08}s"><span style="color:${cmap[e.accent]}">▹</span><span>${p}</span></li>`).join('')}
      </ul>
    </div>
  </div>`).join(''));

document.getElementById('project-grid').innerHTML = projects.map(p => `
  <div class="reveal bg-panel border border-line rounded-lg p-6 hover:border-${p.accent}/50 transition-colors group">
    <div class="flex items-start justify-between">
      <h3 class="font-mono text-base font-bold leading-snug">${p.name}</h3>
      <span class="font-mono text-xs" style="color:${cmap[p.accent]}">●</span>
    </div>
    <div class="font-mono text-xs text-sub mt-1">${p.org}</div>
    <p class="mt-4 text-sub text-sm leading-relaxed">${p.desc}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      ${p.tags.map(t=>`<span class="font-mono text-xs text-sub bg-ink border border-line rounded px-2 py-1">${t}</span>`).join('')}
    </div>
  </div>`).join('');

/* ---------- hero typing ---------- */
(function(){
  const el = document.getElementById('role');
  const phrases = ['Full-stack Software Engineer','Java & Python Developer','Backend & API Engineer','React Front-end Developer'];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){ el.textContent = phrases[0]; return; }
  let p=0,c=0,del=false;
  (function tick(){
    const w=phrases[p];
    el.textContent = del ? w.slice(0,--c) : w.slice(0,++c);
    if(!del && c===w.length){ del=true; return setTimeout(tick,1400); }
    if(del && c===0){ del=false; p=(p+1)%phrases.length; }
    setTimeout(tick, del?45:80);
  })();
})();

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- experience timeline reveal (staggered) ---------- */
(function(){
  const line = document.getElementById('timeline-line');
  const items = Array.from(document.querySelectorAll('.tl-item'));
  const lineObs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ line.classList.add('in'); lineObs.unobserve(e.target); } });
  }, { threshold: 0.05 });
  if (line) lineObs.observe(document.getElementById('timeline'));

  const itemObs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const idx = items.indexOf(e.target);
        setTimeout(()=> e.target.classList.add('in'), Math.max(0, idx) * 180);
        itemObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  items.forEach(el=>itemObs.observe(el));
})();

/* ---------- contact form (Netlify Forms via AJAX) ---------- */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (ev)=>{
  ev.preventDefault();
  status.textContent = 'sending…'; status.style.color = '#8b98a9';
  // Netlify needs a URL-encoded body that includes form-name.
  const data = new FormData(form);
  const body = new URLSearchParams(data).toString();
  try{
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });
    if(res.ok){
      status.textContent = 'Message sent ✓ Thanks — I\u2019ll get back to you.';
      status.style.color = '#bae67e';
      form.reset();
    } else {
      status.innerHTML = 'Something went wrong. Email me directly at <a class="underline" href="mailto:mbagul30@gmail.com">mbagul30@gmail.com</a>.';
      status.style.color = '#ffae57';
    }
  }catch{
    status.innerHTML = 'Network error. Email me directly at <a class="underline" href="mailto:mbagul30@gmail.com">mbagul30@gmail.com</a>.';
    status.style.color = '#ffae57';
  }
});
