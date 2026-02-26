/* ===================================================
   RIFKI WAHYU HARTADI - CV & PORTFOLIO WEBSITE
   script.js
   =================================================== */

// ===================================================
// PORTFOLIO DATA
// ✅ AMAN: Ubah semua nilai di dalam setiap objek
// ⚠️  HATI-HATI: Jangan ubah URUTAN array — index (0,1,2,3,4,5) harus cocok
//              dengan openModal(n) di HTML. Index 0 = card pertama di HTML
// ⚠️  HATI-HATI: Saat tambah item baru, tambahkan di akhir array
//              lalu tambahkan juga card baru di HTML dengan openModal(6), openModal(7), dst
// ===================================================
const portfolioData = [
  {
    title: 'Brand Identity - Kafe Modern',    // ✅ AMAN: Ganti judul
    category: 'Desain',                        // ✅ AMAN: Ganti kategori (tampil di modal)
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop', // ✅ AMAN: Ganti URL gambar
    desc: 'Proyek ini mencakup pembuatan logo, color palette, typography system, dan guidelines branding untuk sebuah kafe modern. Desain menggabungkan estetika minimalis dengan sentuhan hangat yang mencerminkan karakter kafe.', // ✅ AMAN: Ganti deskripsi
    tools: ['Adobe Illustrator', 'Figma', 'Photoshop'] // ✅ AMAN: Ganti/tambah/kurang tools
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

// ===================================================
// TRANSLATIONS
// ✅ AMAN: Ubah semua NILAI (teks) di dalam objek id{} dan en{}
// 🚫 JANGAN UBAH: Nama KEY (mis. navHome, heroGreeting, dll)
//                 Key dipakai oleh fungsi toggleLanguage() dengan t.namaKey
//                 Kalau key dihapus/diganti nama, toggle bahasa AKAN ERROR
// 🚫 JANGAN UBAH: Key "id" dan "en" di root object
//                 Dipakai oleh state currentLang untuk akses translations
// ⚠️  HATI-HATI: Setiap key yang ada di "id" HARUS ada juga di "en"
//                Kalau satu key hilang di "en", toggle ke English akan error (undefined)
// ===================================================
const translations = {
  id: {
    // ✅ AMAN: Ubah semua nilai teks di bawah
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
    // ✅ AMAN: Ubah semua nilai teks di bawah (versi English)
    // 🚫 JANGAN HAPUS key apapun dari sini
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

// ===================================================
// STATE VARIABLES
// 🚫 JANGAN UBAH: drawerOpen & progressAnimated — state tracker, jangan dimodif manual
// ⚠️  HATI-HATI: currentLang — ubah ke 'en' jika mau default bahasa Inggris
// ⚠️  HATI-HATI: currentTheme — ubah ke 'dark' jika mau default dark mode
//                (jika ubah ke 'dark', tambahkan juga class "dark" ke tag <html> di HTML)
// ===================================================
let currentLang = 'id';   // ⚠️ Ubah ke 'en' untuk default English
let currentTheme = 'light'; // ⚠️ Ubah ke 'dark' untuk default dark mode
let drawerOpen = false;     // 🚫 JANGAN UBAH
let progressAnimated = false; // 🚫 JANGAN UBAH

// ===================================================
// LOADING SCREEN
// ✅ AMAN: Ubah angka 2500 untuk durasi loading screen (ms)
// ✅ AMAN: Ubah angka 500 untuk durasi fade out loading screen (ms)
// 🚫 JANGAN UBAH: id="loading-screen" selector
// ===================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    ls.style.opacity = '0';
    setTimeout(() => {
      ls.style.display = 'none';
      initAnimations();
    }, 500); // ✅ AMAN: Ubah durasi fade out (ms)
  }, 2500); // ✅ AMAN: Ubah durasi loading screen tampil (ms)
});

// ===================================================
// SCROLL EVENTS
// 🚫 JANGAN UBAH: id selector ("scroll-progress", "navbar", "scroll-top-btn")
// ✅ AMAN: Ubah angka 20 (threshold scroll untuk efek navbar)
// ✅ AMAN: Ubah angka 300 (threshold scroll untuk tampilkan tombol scroll-top)
// ===================================================
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;

  // Update scroll progress bar
  document.getElementById('scroll-progress').style.width = (scrolled / total * 100) + '%';

  // Efek navbar saat scroll
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', scrolled > 20); // ✅ AMAN: Ubah angka 20

  // Tampilkan tombol scroll to top
  document.getElementById('scroll-top-btn').classList.toggle('visible', scrolled > 300); // ✅ AMAN: Ubah angka 300

  updateActiveNav();
  animateProgressBars();
});

// ===================================================
// UPDATE ACTIVE NAV
// 🚫 JANGAN UBAH: array sections — harus cocok dengan id section di HTML
// ✅ AMAN: Ubah angka 100 (offset pixel dari atas viewport untuk deteksi section aktif)
// ===================================================
function updateActiveNav() {
  const sections = ['home', 'about', 'experience', 'portfolio', 'certificates', 'contact'];
  // 🚫 JANGAN UBAH nama-nama di array sections — harus cocok persis dengan id section di HTML
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) { // ✅ AMAN: Ubah angka 100
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const navEl = document.getElementById('nav-' + id);
        if (navEl) navEl.classList.add('active');
        break;
      }
    }
  }
}

// ===================================================
// SCROLL TO SECTION
// 🚫 JANGAN UBAH: nama fungsi "scrollToSection" — dipanggil dari banyak onclick di HTML
// ✅ AMAN: Ubah angka 80 (offset dari atas, sebaiknya = tinggi navbar)
// ===================================================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; // ✅ AMAN: Ubah sesuai tinggi navbar (default navbar height = 72px)
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: 'smooth'
    });
  }
}

// ===================================================
// THEME TOGGLE
// 🚫 JANGAN UBAH: nama fungsi "toggleTheme" — dipanggil onclick di HTML
// 🚫 JANGAN UBAH: id="theme-icon-moon" & id="theme-icon-sun"
// 🚫 JANGAN UBAH: class "dark" yang di-toggle ke <html>
// ===================================================
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark'); // 🚫 JANGAN UBAH: class "dark" harus cocok CSS .dark{}
  document.getElementById('theme-icon-moon').style.display = currentTheme === 'light' ? 'block' : 'none';
  document.getElementById('theme-icon-sun').style.display = currentTheme === 'dark' ? 'block' : 'none';
}

// ===================================================
// LANGUAGE TOGGLE
// 🚫 JANGAN UBAH: nama fungsi "toggleLanguage" — dipanggil onclick di HTML
// 🚫 JANGAN UBAH: semua getElementById di dalam fungsi ini — harus cocok id di HTML
// ✅ AMAN: Jika tambah/kurang section, tambahkan/hapus getElementById yang sesuai
// ===================================================
function toggleLanguage() {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  const t = translations[currentLang];

  // Update tombol bahasa
  document.getElementById('lang-btn').textContent = currentLang.toUpperCase();
  document.getElementById('lang-btn-mobile').textContent = currentLang.toUpperCase();

  // Update navbar links
  document.getElementById('nav-home').textContent = t.navHome;
  document.getElementById('nav-about').textContent = t.navAbout;
  document.getElementById('nav-experience').textContent = t.navExp;
  document.getElementById('nav-portfolio').textContent = t.navPort;
  document.getElementById('nav-certificates').textContent = t.navCert;
  document.getElementById('nav-contact').textContent = t.navContact;

  // Update hero section
  document.getElementById('hero-greeting').textContent = t.heroGreeting;
  document.getElementById('hero-tagline').textContent = t.heroTagline;
  document.getElementById('hero-desc').textContent = t.heroDesc;
  document.getElementById('hero-cta1').innerHTML =
    t.heroCta1 + ' <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>';
  document.getElementById('hero-cta2').innerHTML =
    '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> ' + t.heroCta2;
  document.getElementById('hero-badge').textContent = t.heroBadge;

  // Update about section
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

  // Update section titles
  document.getElementById('exp-title').textContent = t.expTitle;
  document.getElementById('port-title').textContent = t.portTitle;
  document.getElementById('cert-title').textContent = t.certTitle;
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('contact-sub').textContent = t.contactSub;
  document.getElementById('contact-get-in-touch').textContent = t.contactGetInTouch;
  document.getElementById('contact-connect').textContent = t.contactConnect;

  // Update form labels
  document.getElementById('label-name').textContent = t.labelName;
  document.getElementById('label-email').textContent = t.labelEmail;
  document.getElementById('label-subject').textContent = t.labelSubject;
  document.getElementById('label-message').textContent = t.labelMessage;
  document.getElementById('submit-btn').innerHTML =
    t.submitBtn + ' <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';

  // Update filter buttons
  document.getElementById('filter-all').textContent = t.filterAll;
  document.getElementById('filter-design').textContent = t.filterDesign;
  document.getElementById('filter-video').textContent = t.filterVideo;
  document.getElementById('filter-writing').textContent = t.filterWriting;
  document.getElementById('filter-tech').textContent = t.filterTech;

  // Update mobile drawer nav
  document.querySelectorAll('.drawer-nav .nav-link').forEach((btn, i) => {
    // 🚫 JANGAN UBAH urutan keys — harus cocok urutan tombol di drawer HTML
    const keys = ['navHome', 'navAbout', 'navExp', 'navPort', 'navCert', 'navContact'];
    btn.textContent = t[keys[i]];
  });
}

// ===================================================
// MOBILE DRAWER TOGGLE
// 🚫 JANGAN UBAH: nama fungsi "toggleDrawer" — dipanggil onclick di HTML
// 🚫 JANGAN UBAH: id="mobile-drawer" & id="overlay"
// 🚫 JANGAN UBAH: class "open" dan "show" — harus cocok CSS selector
// ===================================================
function toggleDrawer() {
  drawerOpen = !drawerOpen;
  document.getElementById('mobile-drawer').classList.toggle('open', drawerOpen);   // 🚫 class "open" harus cocok CSS
  document.getElementById('overlay').classList.toggle('show', drawerOpen);         // 🚫 class "show" harus cocok CSS
}

// ===================================================
// PORTFOLIO FILTER
// 🚫 JANGAN UBAH: nama fungsi "filterPortfolio" — dipanggil onclick di HTML
// 🚫 JANGAN UBAH: selector '.filter-btn' & '.portfolio-card' — harus cocok class di HTML
// ✅ AMAN: Ubah animasi fadeInUp jika ingin animasi filter berbeda
// ===================================================
function filterPortfolio(filter) {
  // Toggle class active pada tombol filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter); // 🚫 class "active" harus cocok CSS
  });

  // Show/hide card berdasarkan data-category
  document.querySelectorAll('.portfolio-card').forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.style.display = match ? 'block' : 'none';
    if (match) {
      card.style.animation = 'none';
      card.offsetHeight; // force reflow — 🚫 JANGAN HAPUS baris ini
      card.style.animation = 'fadeInUp 0.4s ease forwards'; // ✅ AMAN: Ubah durasi animasi
    }
  });
}

// ===================================================
// MODAL
// 🚫 JANGAN UBAH: nama fungsi "openModal" & "closeModal" — dipanggil dari HTML
// 🚫 JANGAN UBAH: semua getElementById di dalam fungsi ini
// 🚫 JANGAN UBAH: id="modal" & class "open" — harus cocok CSS
// ===================================================
function openModal(index) {
  const d = portfolioData[index]; // 🚫 JANGAN UBAH: index harus cocok dengan openModal(n) di HTML
  document.getElementById('modal-title').textContent = d.title;
  document.getElementById('modal-img').src = d.img;
  document.getElementById('modal-badge').textContent = d.category;
  document.getElementById('modal-desc').textContent = d.desc;
  document.getElementById('modal-tools').innerHTML = d.tools
    .map(t => `<span class="badge" style="background:var(--muted);color:var(--foreground)">${t}</span>`)
    .join('');
  document.getElementById('modal').classList.add('open'); // 🚫 class "open" harus cocok CSS
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal saat klik backdrop
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal(); // Klik di luar konten modal = tutup modal
});

// ===================================================
// CONTACT FORM SUBMIT
// 🚫 JANGAN UBAH: id="contact-form" selector — harus cocok HTML
// 🚫 JANGAN UBAH: id="submit-btn" & id="form-success" selector
// ✅ AMAN: Ubah angka 1500 (delay simulasi kirim pesan, ms)
// ✅ AMAN: Ubah angka 5000 (durasi pesan sukses tampil, ms)
// ⚠️  HATI-HATI: Form ini hanya simulasi! Untuk email asli, integrasikan dengan EmailJS / backend
// ===================================================
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
    setTimeout(() => { successEl.style.display = 'none'; }, 5000); // ✅ AMAN: Ubah durasi pesan sukses tampil
  }, 1500); // ✅ AMAN: Ubah delay simulasi kirim (ms)
});

// ===================================================
// RESPONSIVE HANDLER
// ⚠️  HATI-HATI: Angka 768 (breakpoint mobile) HARUS sama dengan @media (max-width: 768px) di CSS
//               Kalau diubah di sini, HARUS ubah juga di style.css
// 🚫 JANGAN UBAH: id="hamburger" & id="desktop-nav" selector
// ===================================================
function handleResize() {
  const hamburger = document.getElementById('hamburger');
  const desktopNav = document.getElementById('desktop-nav');

  if (window.innerWidth < 768) { // ⚠️ Angka ini harus cocok @media CSS
    hamburger.style.display = 'flex';
    desktopNav.style.display = 'none';
  } else {
    hamburger.style.display = 'none';
    desktopNav.style.display = 'flex';
    if (drawerOpen) toggleDrawer(); // Auto tutup drawer kalau resize ke desktop
  }
}

window.addEventListener('resize', handleResize);
handleResize(); // Jalankan sekali saat pertama load

// ===================================================
// PROGRESS BARS ANIMATION
// ✅ AMAN: Ubah angka 0.8 (0–1, persentase viewport dari atas untuk trigger animasi)
//          Semakin kecil = animasi trigger lebih awal, semakin besar = lebih terlambat
// 🚫 JANGAN UBAH: selector '.progress-bar-fill' & 'data-width'
// ===================================================
function animateProgressBars() {
  if (progressAnimated) return; // Animasi hanya sekali
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) { // ✅ AMAN: Ubah angka 0.8
    progressAnimated = true;
    document.querySelectorAll('.progress-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%'; // Baca data-width dari HTML
    });
  }
}

// ===================================================
// GSAP SCROLL ANIMATIONS
// 🚫 JANGAN UBAH: selector '.fade-in' — harus cocok class di HTML & CSS
// ✅ AMAN: Ubah nilai animasi GSAP di bawah
//   - opacity awal  : 0 → 1 (dari tidak terlihat ke terlihat)
//   - y awal        : 30 (piksel, gerak dari bawah ke atas)
//   - duration      : 0.7 (detik, durasi animasi)
//   - start         : 'top 85%' (trigger saat elemen 85% dari atas viewport)
// ===================================================
function initAnimations() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.fade-in').forEach(el => {
      const delay = parseFloat(el.dataset.delay || 0); // Baca data-delay dari HTML
      gsap.fromTo(el,
        { opacity: 0, y: 30 },   // ✅ AMAN: Ubah nilai awal animasi
        {
          opacity: 1, y: 0,
          duration: 0.7,           // ✅ AMAN: Ubah durasi animasi (detik)
          delay,
          ease: 'power2.out',      // ✅ AMAN: Ubah easing ('power1', 'power3', 'elastic', dll)
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',      // ✅ AMAN: Ubah trigger point
            once: true             // ✅ AMAN: Ubah ke false jika ingin animasi berulang saat scroll bolak-balik
          }
        }
      );
    });
  } else {
    // Fallback jika GSAP tidak berhasil dimuat
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }
}

// ===================================================
// WHATSAPP FLOATING BUTTON
// 🚫 JANGAN UBAH: id="whatsapp-btn" selector
// ✅ AMAN: Ganti nomor WA di URL wa.me/62... (format: 62 + nomor tanpa 0 di depan)
// ===================================================
document.getElementById('whatsapp-btn').addEventListener('click', () => {
  window.open('https://wa.me/6281234567890', '_blank'); // ✅ AMAN: Ganti nomor WA
});

// ===================================================
// SCROLL TO TOP BUTTON
// 🚫 JANGAN UBAH: id="scroll-top-btn" selector — CSS juga pakai id ini
// ===================================================
document.getElementById('scroll-top-btn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});