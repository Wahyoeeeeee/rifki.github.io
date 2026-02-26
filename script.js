/* ===================================================
   RIFKI WAHYU HARTADI - CV & PORTFOLIO WEBSITE
   script.js
   =================================================== */

// ===== PORTFOLIO DATA =====
const portfolioData = [
  {
    title: 'Brand Identity - Kafe Modern',
    category: 'Desain',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    desc: 'Proyek ini mencakup pembuatan logo, color palette, typography system, dan guidelines branding untuk sebuah kafe modern. Desain menggabungkan estetika minimalis dengan sentuhan hangat yang mencerminkan karakter kafe.',
    tools: ['Adobe Illustrator', 'Figma', 'Photoshop']
  },
  {
    title: 'Video Campaign - Produk Digital',
    category: 'Video',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    desc: 'Campaign video yang menampilkan fitur-fitur utama aplikasi mobile dengan storytelling yang engaging. Video ini berhasil mencapai 50K+ views dalam minggu pertama dan meningkatkan download 40%.',
    tools: ['After Effects', 'Premiere Pro', 'Canva']
  },
  {
    title: 'UI/UX Design - E-Commerce App',
    category: 'Teknologi',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    desc: 'Redesign complete untuk aplikasi e-commerce dengan fokus pada user experience yang seamless. Melakukan user research, wireframing, prototyping, dan usability testing.',
    tools: ['Figma', 'Adobe XD', 'Miro']
  },
  {
    title: 'Artikel - Panduan Digital Marketing',
    category: 'Tulisan',
    img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop',
    desc: 'Series 10 artikel komprehensif yang membahas berbagai aspek digital marketing dari SEO, social media, hingga content strategy. Artikel mendapat 20K+ pembaca dan di-share 500+ kali.',
    tools: ['Medium', 'Notion', 'Grammarly']
  },
  {
    title: 'Social Media Kit - Startup Tech',
    category: 'Desain',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    desc: 'Paket lengkap template untuk Instagram, LinkedIn, dan Twitter yang mencakup post, story, dan carousel. Desain modular yang mudah di-customize dengan branding startup.',
    tools: ['Canva', 'Figma', 'Photoshop']
  },
  {
    title: 'Landing Page - SaaS Product',
    category: 'Teknologi',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    desc: 'Desain dan development landing page yang fokus pada konversi. Menggunakan React dan Tailwind CSS dengan animasi smooth dan loading time yang optimal. Conversion rate meningkat 35%.',
    tools: ['React', 'Tailwind CSS', 'Figma']
  }
];

// ===== TRANSLATIONS =====
const translations = {
  id: {
    navHome: 'Beranda', navAbout: 'Tentang Saya', navExp: 'Pengalaman',
    navPort: 'Portofolio', navCert: 'Sertifikat', navContact: 'Kontak',
    heroGreeting: 'Halo, Saya',
    heroTagline: 'Mahasiswa Aktif · Content Creator · Desainer Muda',
    heroDesc: 'Mahasiswa yang passionate di bidang desain dan konten digital. Siap berkolaborasi untuk menciptakan karya yang berdampak.',
    heroCta1: 'Lihat Portofolio', heroCta2: 'Unduh CV', heroBadge: 'Open to Work',
    aboutTitle: 'Tentang Saya',
    aboutBio: 'Saya adalah mahasiswa aktif yang passionate di bidang desain grafis, konten digital, dan komunikasi visual. Dengan pengalaman di berbagai organisasi dan proyek freelance, saya terus mengembangkan kemampuan untuk menciptakan karya yang berkesan dan berdampak.',
    aboutUnivLabel: 'Universitas', aboutUnivVal: 'Universitas Indonesia',
    aboutMajorLabel: 'Jurusan', aboutMajorVal: 'Ilmu Komunikasi',
    aboutSemLabel: 'Semester', aboutSemVal: 'Semester 6 · Angkatan 2022',
    aboutLocLabel: 'Lokasi', aboutLocVal: 'Jakarta, Indonesia',
    aboutStatusLabel: 'Status', aboutStatusVal: 'Aktif Kuliah',
    aboutSoftTitle: 'Soft Skills', aboutHardTitle: 'Hard Skills',
    expTitle: 'Pengalaman', portTitle: 'Portofolio',
    certTitle: 'Sertifikat & Penghargaan',
    contactTitle: 'Hubungi Saya',
    contactSub: 'Mari berkolaborasi atau sekadar ngobrol!',
    contactGetInTouch: 'Mari Terhubung', contactConnect: 'Temukan Saya Di',
    labelName: 'Nama Lengkap', labelEmail: 'Email',
    labelSubject: 'Subjek', labelMessage: 'Pesan',
    submitBtn: 'Kirim Pesan',
    filterAll: 'Semua', filterDesign: 'Desain', filterVideo: 'Video',
    filterWriting: 'Tulisan', filterTech: 'Teknologi',
    loadingText: 'Memuat portfolio...',
    formSuccess: '✓ Pesan berhasil dikirim! Saya akan segera menghubungi kamu.',
    sending: 'Mengirim...'
  },
  en: {
    navHome: 'Home', navAbout: 'About', navExp: 'Experience',
    navPort: 'Portfolio', navCert: 'Certificates', navContact: 'Contact',
    heroGreeting: "Hello, I'm",
    heroTagline: 'Active Student · Content Creator · Young Designer',
    heroDesc: 'A student passionate about design and digital content. Ready to collaborate to create impactful work.',
    heroCta1: 'View Portfolio', heroCta2: 'Download CV', heroBadge: 'Open to Work',
    aboutTitle: 'About Me',
    aboutBio: 'I am an active student passionate in graphic design, digital content, and visual communication. With experience in various organizations and freelance projects, I continuously develop my skills to create memorable and impactful work.',
    aboutUnivLabel: 'University', aboutUnivVal: 'University of Indonesia',
    aboutMajorLabel: 'Major', aboutMajorVal: 'Communication Studies',
    aboutSemLabel: 'Semester', aboutSemVal: 'Semester 6 · Class of 2022',
    aboutLocLabel: 'Location', aboutLocVal: 'Jakarta, Indonesia',
    aboutStatusLabel: 'Status', aboutStatusVal: 'Active Student',
    aboutSoftTitle: 'Soft Skills', aboutHardTitle: 'Hard Skills',
    expTitle: 'Experience', portTitle: 'Portfolio',
    certTitle: 'Certificates & Awards',
    contactTitle: 'Contact Me',
    contactSub: "Let's collaborate or just have a chat!",
    contactGetInTouch: 'Get in Touch', contactConnect: 'Find Me On',
    labelName: 'Full Name', labelEmail: 'Email',
    labelSubject: 'Subject', labelMessage: 'Message',
    submitBtn: 'Send Message',
    filterAll: 'All', filterDesign: 'Design', filterVideo: 'Video',
    filterWriting: 'Writing', filterTech: 'Technology',
    loadingText: 'Loading portfolio...',
    formSuccess: '✓ Message sent! I will contact you soon.',
    sending: 'Sending...'
  }
};

// ===== STATE =====
let currentLang = 'id';
let currentTheme = 'light';
let drawerOpen = false;
let progressAnimated = false;

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    ls.style.opacity = '0';
    setTimeout(() => {
      ls.style.display = 'none';
      initAnimations();
    }, 500);
  }, 2500);
});

// ===== SCROLL EVENTS =====
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;

  // Scroll progress bar
  document.getElementById('scroll-progress').style.width = (scrolled / total * 100) + '%';

  // Navbar style
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', scrolled > 20);

  // Scroll to top button
  document.getElementById('scroll-top-btn').classList.toggle('visible', scrolled > 300);

  updateActiveNav();
  animateProgressBars();
});

// ===== ACTIVE NAV ON SCROLL =====
function updateActiveNav() {
  const sections = ['home', 'about', 'experience', 'portfolio', 'certificates', 'contact'];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const navEl = document.getElementById('nav-' + id);
        if (navEl) navEl.classList.add('active');
        break;
      }
    }
  }
}

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: 'smooth'
    });
  }
}

// ===== THEME TOGGLE =====
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark');
  document.getElementById('theme-icon-moon').style.display = currentTheme === 'light' ? 'block' : 'none';
  document.getElementById('theme-icon-sun').style.display = currentTheme === 'dark' ? 'block' : 'none';
}

// ===== LANGUAGE TOGGLE =====
function toggleLanguage() {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  const t = translations[currentLang];

  // Lang buttons
  document.getElementById('lang-btn').textContent = currentLang.toUpperCase();
  document.getElementById('lang-btn-mobile').textContent = currentLang.toUpperCase();

  // Navbar links
  document.getElementById('nav-home').textContent = t.navHome;
  document.getElementById('nav-about').textContent = t.navAbout;
  document.getElementById('nav-experience').textContent = t.navExp;
  document.getElementById('nav-portfolio').textContent = t.navPort;
  document.getElementById('nav-certificates').textContent = t.navCert;
  document.getElementById('nav-contact').textContent = t.navContact;

  // Hero
  document.getElementById('hero-greeting').textContent = t.heroGreeting;
  document.getElementById('hero-tagline').textContent = t.heroTagline;
  document.getElementById('hero-desc').textContent = t.heroDesc;
  document.getElementById('hero-cta1').innerHTML =
    t.heroCta1 + ' <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>';
  document.getElementById('hero-cta2').innerHTML =
    '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> ' + t.heroCta2;
  document.getElementById('hero-badge').textContent = t.heroBadge;

  // About
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-bio').textContent = t.aboutBio;
  document.getElementById('about-univ-label').textContent = t.aboutUnivLabel;
  document.getElementById('about-univ-val').textContent = t.aboutUnivVal;
  document.getElementById('about-major-label').textContent = t.aboutMajorLabel;
  document.getElementById('about-major-val').textContent = t.aboutMajorVal;
  document.getElementById('about-sem-label').textContent = t.aboutSemLabel;
  document.getElementById('about-sem-val').textContent = t.aboutSemVal;
  document.getElementById('about-loc-label').textContent = t.aboutLocLabel;
  document.getElementById('about-loc-val').textContent = t.aboutLocVal;
  document.getElementById('about-status-label').textContent = t.aboutStatusLabel;
  document.getElementById('about-status-val').textContent = t.aboutStatusVal;
  document.getElementById('about-softskills-title').textContent = t.aboutSoftTitle;
  document.getElementById('about-hardskills-title').textContent = t.aboutHardTitle;

  // Section titles
  document.getElementById('exp-title').textContent = t.expTitle;
  document.getElementById('port-title').textContent = t.portTitle;
  document.getElementById('cert-title').textContent = t.certTitle;
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('contact-sub').textContent = t.contactSub;
  document.getElementById('contact-get-in-touch').textContent = t.contactGetInTouch;
  document.getElementById('contact-connect').textContent = t.contactConnect;

  // Form labels
  document.getElementById('label-name').textContent = t.labelName;
  document.getElementById('label-email').textContent = t.labelEmail;
  document.getElementById('label-subject').textContent = t.labelSubject;
  document.getElementById('label-message').textContent = t.labelMessage;
  document.getElementById('submit-btn').innerHTML =
    t.submitBtn + ' <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';

  // Filter buttons
  document.getElementById('filter-all').textContent = t.filterAll;
  document.getElementById('filter-design').textContent = t.filterDesign;
  document.getElementById('filter-video').textContent = t.filterVideo;
  document.getElementById('filter-writing').textContent = t.filterWriting;
  document.getElementById('filter-tech').textContent = t.filterTech;

  // Mobile drawer nav links
  document.querySelectorAll('.drawer-nav .nav-link').forEach((btn, i) => {
    const keys = ['navHome', 'navAbout', 'navExp', 'navPort', 'navCert', 'navContact'];
    btn.textContent = t[keys[i]];
  });
}

// ===== MOBILE DRAWER =====
function toggleDrawer() {
  drawerOpen = !drawerOpen;
  document.getElementById('mobile-drawer').classList.toggle('open', drawerOpen);
  document.getElementById('overlay').classList.toggle('show', drawerOpen);
}

// ===== PORTFOLIO FILTER =====
function filterPortfolio(filter) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  document.querySelectorAll('.portfolio-card').forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.style.display = match ? 'block' : 'none';
    if (match) {
      card.style.animation = 'none';
      card.offsetHeight; // reflow
      card.style.animation = 'fadeInUp 0.4s ease forwards';
    }
  });
}

// ===== MODAL =====
function openModal(index) {
  const d = portfolioData[index];
  document.getElementById('modal-title').textContent = d.title;
  document.getElementById('modal-img').src = d.img;
  document.getElementById('modal-badge').textContent = d.category;
  document.getElementById('modal-desc').textContent = d.desc;
  document.getElementById('modal-tools').innerHTML = d.tools
    .map(t => `<span class="badge" style="background:var(--muted);color:var(--foreground)">${t}</span>`)
    .join('');
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// ===== CONTACT FORM =====
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const t = translations[currentLang];

  btn.disabled = true;
  btn.innerHTML = `
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
      style="animation:spin 1s linear infinite">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
    </svg> ${t.sending}`;

  setTimeout(() => {
    const successEl = document.getElementById('form-success');
    successEl.textContent = t.formSuccess;
    successEl.style.display = 'block';
    e.target.reset();
    btn.disabled = false;
    btn.innerHTML = t.submitBtn +
      ' <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    setTimeout(() => { successEl.style.display = 'none'; }, 5000);
  }, 1500);
});

// ===== RESPONSIVE HANDLER =====
function handleResize() {
  const hamburger = document.getElementById('hamburger');
  const desktopNav = document.getElementById('desktop-nav');

  if (window.innerWidth < 768) {
    hamburger.style.display = 'flex';
    desktopNav.style.display = 'none';
  } else {
    hamburger.style.display = 'none';
    desktopNav.style.display = 'flex';
    if (drawerOpen) toggleDrawer();
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// ===== PROGRESS BARS ANIMATION =====
function animateProgressBars() {
  if (progressAnimated) return;
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    progressAnimated = true;
    document.querySelectorAll('.progress-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }
}

// ===== GSAP SCROLL ANIMATIONS =====
function initAnimations() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.fade-in').forEach(el => {
      const delay = parseFloat(el.dataset.delay || 0);
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });
  } else {
    // Fallback: just show all elements
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }
}

// ===== WHATSAPP BUTTON =====
document.getElementById('whatsapp-btn').addEventListener('click', () => {
  window.open('https://wa.me/6281234567890', '_blank');
});

// ===== SCROLL TO TOP =====
document.getElementById('scroll-top-btn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});