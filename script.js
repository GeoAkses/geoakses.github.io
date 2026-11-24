/* =========================================================
   GeoAkses Bandung — Landing Page Scripts
   Vanilla JavaScript (tanpa library/framework)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. NAVBAR — Scroll shadow & Mobile toggle
  // ==========================================
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  // ==========================================
  // 2. REVEAL ON SCROLL (Intersection Observer)
  // ==========================================
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ==========================================
  // 3. SIMULASI INTERAKTIF — Data Statis
  // ==========================================
  const kategoriSelect = document.getElementById('simKategori');
  const tujuanSelect = document.getElementById('simTujuan');
  const cariRuteBtn = document.getElementById('simCariRute');
  const resultContainer = document.getElementById('simResult');

  // Data fasilitas statis
  const fasilitasData = {
    perpustakaan: [
      { id: 'perpus-1', nama: 'Perpustakaan Kota Bandung', alamat: 'Jl. Seram No.2, Citarum, Bandung Wetan' },
      { id: 'perpus-2', nama: 'Perpustakaan UNPAD', alamat: 'Jl. Dipati Ukur No.35, Lebakgede, Coblong' },
      { id: 'perpus-3', nama: 'Perpustakaan Bank Indonesia', alamat: 'Jl. Braga No.108, Braga, Sumur Bandung' }
    ],
    rumah_sakit: [
      { id: 'rs-1', nama: 'RSUP Dr. Hasan Sadikin', alamat: 'Jl. Pasteur No.38, Pasteur, Sukajadi' },
      { id: 'rs-2', nama: 'RS Borromeus', alamat: 'Jl. Ir. H. Juanda No.100, Lebakgede, Coblong' },
      { id: 'rs-3', nama: 'RS Al-Islam Bandung', alamat: 'Jl. Soekarno-Hatta No.644, Manjahlega, Rancasari' }
    ],
    taman: [
      { id: 'taman-1', nama: 'Taman Vanda (Taman Lalu Lintas)', alamat: 'Jl. Belitung No.1, Merdeka, Sumur Bandung' },
      { id: 'taman-2', nama: 'Taman Lansia', alamat: 'Jl. Cisangkuy No.3, Citarum, Bandung Wetan' },
      { id: 'taman-3', nama: 'Taman Musik Centrum', alamat: 'Jl. Belitung, Merdeka, Sumur Bandung' }
    ],
    sekolah: [
      { id: 'skl-1', nama: 'SMAN 3 Bandung', alamat: 'Jl. Belitung No.8, Merdeka, Sumur Bandung' },
      { id: 'skl-2', nama: 'SMAN 5 Bandung', alamat: 'Jl. Belitung No.8, Merdeka, Sumur Bandung' },
      { id: 'skl-3', nama: 'SMP Negeri 2 Bandung', alamat: 'Jl. Sumatra No.42, Merdeka, Sumur Bandung' }
    ],
    olahraga: [
      { id: 'olr-1', nama: 'Stadion Siliwangi', alamat: 'Jl. Lombok No.19, Merdeka, Sumur Bandung' },
      { id: 'olr-2', nama: 'GOR Pajajaran', alamat: 'Jl. Pajajaran No.37, Pasir Kaliki, Cicendo' },
      { id: 'olr-3', nama: 'Lapangan Gasibu', alamat: 'Jl. Diponegoro, Citarum, Bandung Wetan' }
    ]
  };

  // Data rute statis (simulasi)
  const ruteData = {
    'perpus-1': {
      nama: 'Perpustakaan Kota Bandung',
      alamat: 'Jl. Seram No.2, Citarum, Bandung Wetan',
      rute: [
        {
          label: 'Opsi 1 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> dari Alun-Alun ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (Cicaheum — Cibeureum) selama ± 10 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Jl. Seram</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke Perpustakaan Kota (± 3 menit)' }
          ]
        },
        {
          label: 'Opsi 2 — Angkot St. Hall - Cicaheum',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> dari Alun-Alun ke <strong>Jl. Asia Afrika</strong> (± 4 menit)' },
            { icon: '🚐', text: 'Naik <strong>Angkot St. Hall - Cicaheum</strong> selama ± 8 menit' },
            { icon: '🚏', text: 'Turun di pertigaan <strong>Jl. Seram</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke Perpustakaan Kota (± 5 menit)' }
          ]
        }
      ]
    },
    'perpus-2': {
      nama: 'Perpustakaan UNPAD',
      alamat: 'Jl. Dipati Ukur No.35, Lebakgede, Coblong',
      rute: [
        {
          label: 'Opsi 1 — Angkot Kalapa - Ledeng',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Jl. Dalem Kaum</strong> (± 5 menit)' },
            { icon: '🚐', text: 'Naik <strong>Angkot Kalapa - Ledeng</strong> selama ± 20 menit' },
            { icon: '🚏', text: 'Turun di depan <strong>Kampus UNPAD Dipati Ukur</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke gedung perpustakaan (± 3 menit)' }
          ]
        }
      ]
    },
    'perpus-3': {
      nama: 'Perpustakaan Bank Indonesia',
      alamat: 'Jl. Braga No.108, Braga, Sumur Bandung',
      rute: [
        {
          label: 'Opsi 1 — Jalan Kaki Langsung',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> dari Alun-Alun menuju <strong>Jl. Braga</strong> (± 10 menit)' },
            { icon: '📍', text: 'Tiba di <strong>Perpustakaan Bank Indonesia</strong>, Jl. Braga No.108' }
          ]
        },
        {
          label: 'Opsi 2 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cicaheum) selama ± 3 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Braga</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke Perpustakaan BI (± 2 menit)' }
          ]
        }
      ]
    },
    'rs-1': {
      nama: 'RSUP Dr. Hasan Sadikin',
      alamat: 'Jl. Pasteur No.38, Pasteur, Sukajadi',
      rute: [
        {
          label: 'Opsi 1 — TMB Koridor 2 + Transit',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cibeureum) selama ± 15 menit' },
            { icon: '🔄', text: '<strong>Transit</strong> di Halte Pasteur ke <strong>TMB Koridor 1</strong>' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 1</strong> selama ± 5 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte RSHS</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke gerbang utama RSHS (± 2 menit)' }
          ]
        },
        {
          label: 'Opsi 2 — Angkot Stasiun Hall - Pasteur',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Jl. Kepatihan</strong> (± 6 menit)' },
            { icon: '🚐', text: 'Naik <strong>Angkot St. Hall - Pasteur</strong> selama ± 20 menit' },
            { icon: '🚏', text: 'Turun di depan <strong>RSUP Hasan Sadikin</strong>' }
          ]
        }
      ]
    },
    'rs-2': {
      nama: 'RS Borromeus',
      alamat: 'Jl. Ir. H. Juanda No.100, Lebakgede, Coblong',
      rute: [
        {
          label: 'Opsi 1 — Angkot Kalapa - Dago',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Jl. Dalem Kaum</strong> (± 5 menit)' },
            { icon: '🚐', text: 'Naik <strong>Angkot Kalapa - Dago</strong> selama ± 15 menit' },
            { icon: '🚏', text: 'Turun di depan <strong>RS Borromeus</strong>, Jl. Ir. H. Juanda' }
          ]
        }
      ]
    },
    'rs-3': {
      nama: 'RS Al-Islam Bandung',
      alamat: 'Jl. Soekarno-Hatta No.644, Manjahlega, Rancasari',
      rute: [
        {
          label: 'Opsi 1 — TMB Koridor 2 + Angkot',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cicaheum) selama ± 20 menit' },
            { icon: '🔄', text: '<strong>Transit</strong> di Halte Cicaheum' },
            { icon: '🚐', text: 'Naik <strong>Angkot Cicaheum - Soekarno-Hatta</strong> selama ± 15 menit' },
            { icon: '🚏', text: 'Turun di depan <strong>RS Al-Islam</strong>' }
          ]
        }
      ]
    },
    'taman-1': {
      nama: 'Taman Vanda (Taman Lalu Lintas)',
      alamat: 'Jl. Belitung No.1, Merdeka, Sumur Bandung',
      rute: [
        {
          label: 'Opsi 1 — Jalan Kaki',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> dari Alun-Alun menuju <strong>Jl. Belitung</strong> (± 15 menit)' },
            { icon: '📍', text: 'Tiba di <strong>Taman Vanda / Taman Lalu Lintas Ade Irma Suryani</strong>' }
          ]
        },
        {
          label: 'Opsi 2 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cicaheum) selama ± 5 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Belitung</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke Taman Vanda (± 2 menit)' }
          ]
        }
      ]
    },
    'taman-2': {
      nama: 'Taman Lansia',
      alamat: 'Jl. Cisangkuy No.3, Citarum, Bandung Wetan',
      rute: [
        {
          label: 'Opsi 1 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cicaheum) selama ± 7 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Cisangkuy</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke Taman Lansia (± 3 menit)' }
          ]
        }
      ]
    },
    'taman-3': {
      nama: 'Taman Musik Centrum',
      alamat: 'Jl. Belitung, Merdeka, Sumur Bandung',
      rute: [
        {
          label: 'Opsi 1 — Jalan Kaki',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> dari Alun-Alun menuju <strong>Jl. Belitung</strong> (± 15 menit)' },
            { icon: '📍', text: 'Tiba di <strong>Taman Musik Centrum</strong>' }
          ]
        }
      ]
    },
    'skl-1': {
      nama: 'SMAN 3 Bandung',
      alamat: 'Jl. Belitung No.8, Merdeka, Sumur Bandung',
      rute: [
        {
          label: 'Opsi 1 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cicaheum) selama ± 5 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Belitung</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke SMAN 3 Bandung (± 3 menit)' }
          ]
        }
      ]
    },
    'skl-2': {
      nama: 'SMAN 5 Bandung',
      alamat: 'Jl. Belitung No.8, Merdeka, Sumur Bandung',
      rute: [
        {
          label: 'Opsi 1 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cicaheum) selama ± 5 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Belitung</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke SMAN 5 Bandung (± 3 menit)' }
          ]
        }
      ]
    },
    'skl-3': {
      nama: 'SMP Negeri 2 Bandung',
      alamat: 'Jl. Sumatra No.42, Merdeka, Sumur Bandung',
      rute: [
        {
          label: 'Opsi 1 — Jalan Kaki',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> dari Alun-Alun ke <strong>Jl. Sumatra</strong> (± 12 menit)' },
            { icon: '📍', text: 'Tiba di <strong>SMP Negeri 2 Bandung</strong>' }
          ]
        }
      ]
    },
    'olr-1': {
      nama: 'Stadion Siliwangi',
      alamat: 'Jl. Lombok No.19, Merdeka, Sumur Bandung',
      rute: [
        {
          label: 'Opsi 1 — Jalan Kaki',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> dari Alun-Alun ke <strong>Jl. Lombok</strong> (± 15 menit)' },
            { icon: '📍', text: 'Tiba di <strong>Stadion Siliwangi</strong>' }
          ]
        },
        {
          label: 'Opsi 2 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cicaheum) selama ± 5 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Lombok</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke Stadion Siliwangi (± 2 menit)' }
          ]
        }
      ]
    },
    'olr-2': {
      nama: 'GOR Pajajaran',
      alamat: 'Jl. Pajajaran No.37, Pasir Kaliki, Cicendo',
      rute: [
        {
          label: 'Opsi 1 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cibeureum) selama ± 10 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Pajajaran</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke GOR Pajajaran (± 3 menit)' }
          ]
        }
      ]
    },
    'olr-3': {
      nama: 'Lapangan Gasibu',
      alamat: 'Jl. Diponegoro, Citarum, Bandung Wetan',
      rute: [
        {
          label: 'Opsi 1 — TMB Koridor 2',
          tag: 'TMB',
          tagClass: 'route-option__tag--tmb',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Halte TMB Alun-Alun</strong> (± 5 menit)' },
            { icon: '🚍', text: 'Naik <strong>TMB Koridor 2</strong> (arah Cicaheum) selama ± 8 menit' },
            { icon: '🚏', text: 'Turun di <strong>Halte Gasibu</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke Lapangan Gasibu (± 2 menit)' }
          ]
        },
        {
          label: 'Opsi 2 — Angkot St. Hall - Cicaheum',
          tag: 'Angkot',
          tagClass: 'route-option__tag--angkot',
          steps: [
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke <strong>Jl. Asia Afrika</strong> (± 4 menit)' },
            { icon: '🚐', text: 'Naik <strong>Angkot St. Hall - Cicaheum</strong> selama ± 10 menit' },
            { icon: '🚏', text: 'Turun di <strong>Jl. Diponegoro (Gasibu)</strong>' },
            { icon: '🚶', text: '<strong>Jalan kaki</strong> ke Lapangan Gasibu (± 3 menit)' }
          ]
        }
      ]
    }
  };

  // Kategori label map
  const kategoriLabels = {
    perpustakaan: '📚 Perpustakaan',
    rumah_sakit: '🏥 Rumah Sakit',
    taman: '🌳 Taman Kota',
    sekolah: '🏫 Sekolah',
    olahraga: '⚽ Tempat Olahraga'
  };

  // Event: Kategori change → populate tujuan
  kategoriSelect.addEventListener('change', () => {
    const kat = kategoriSelect.value;
    tujuanSelect.innerHTML = '';
    cariRuteBtn.disabled = true;

    if (!kat) {
      tujuanSelect.innerHTML = '<option value="">— Pilih kategori terlebih dahulu —</option>';
      tujuanSelect.disabled = true;
      return;
    }

    const items = fasilitasData[kat] || [];
    tujuanSelect.disabled = false;
    tujuanSelect.innerHTML = '<option value="">— Pilih Tujuan —</option>';
    items.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = item.nama;
      tujuanSelect.appendChild(opt);
    });
  });

  // Event: Tujuan change → enable button
  tujuanSelect.addEventListener('change', () => {
    cariRuteBtn.disabled = !tujuanSelect.value;
  });

  // Event: Cari Rute
  cariRuteBtn.addEventListener('click', () => {
    const tujuanId = tujuanSelect.value;
    const katValue = kategoriSelect.value;
    if (!tujuanId || !ruteData[tujuanId]) return;

    const data = ruteData[tujuanId];
    const katLabel = kategoriLabels[katValue] || '';

    let html = `
      <div class="route-header">
        <div class="route-header__icon">${katLabel.split(' ')[0]}</div>
        <div>
          <h3>${data.nama}</h3>
          <p>${data.alamat}</p>
        </div>
      </div>
    `;

    data.rute.forEach(opsi => {
      html += `
        <div class="route-option">
          <div class="route-option__title">
            ${opsi.label}
            <span class="route-option__tag ${opsi.tagClass}">${opsi.tag}</span>
          </div>
          <ul class="route-steps">
      `;
      opsi.steps.forEach(step => {
        html += `
            <li class="route-step">
              <div class="route-step__icon">${step.icon}</div>
              <div class="route-step__text">${step.text}</div>
            </li>
        `;
      });
      html += `
          </ul>
        </div>
      `;
    });

    resultContainer.innerHTML = html;

    // Smooth scroll to result on mobile
    if (window.innerWidth < 768) {
      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // ==========================================
  // 4. SMOOTH SCROLL for CTA buttons
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});

