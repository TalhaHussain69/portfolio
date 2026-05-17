// ── Custom Cursor ──
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{ mx=e.clientX;my=e.clientY; cursor.style.left=mx+'px';cursor.style.top=my+'px'; });
  (function animRing(){ rx+=(mx-rx)*.12;ry+=(my-ry)*.12; ring.style.left=rx+'px';ring.style.top=ry+'px'; requestAnimationFrame(animRing); })();

  // ── Navbar scroll ──
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll',()=>{ nav.classList.toggle('scrolled',scrollY>50); });

  // ── Hamburger ──
  const ham  = document.getElementById('ham');
  const mob  = document.getElementById('mobileMenu');
  ham.addEventListener('click',()=>{ ham.classList.toggle('active'); mob.classList.toggle('open'); });
  document.querySelectorAll('.mob-link').forEach(l=>l.addEventListener('click',()=>{ ham.classList.remove('active'); mob.classList.remove('open'); }));

  // ── Scroll reveal ──
  const revEls = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } }); },{threshold:.12});
  revEls.forEach(el=>obs.observe(el));

  // ── Contact form → WhatsApp ──
  document.getElementById('sendBtn').addEventListener('click',()=>{
    const name = document.getElementById('name').value.trim();
    const email= document.getElementById('email').value.trim();
    const msg  = document.getElementById('message').value.trim();
    if(!name||!msg){ alert('Please fill in your name and message.'); return; }
    const text = encodeURIComponent(`Hi Talha! I'm ${name}${email?' ('+email+')':''}.\n\n${msg}`);
    window.open(`https://wa.me/923203232069?text=${text}`,'_blank');
    document.getElementById('formMsg').style.display='block';
  });

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll',()=>{
    let cur='';
    sections.forEach(s=>{ if(scrollY >= s.offsetTop-120) cur=s.id; });
    document.querySelectorAll('.nav-links a').forEach(a=>{
      a.style.color = a.getAttribute('href')==='#'+cur ? 'var(--accent)' : '';
    });
  });