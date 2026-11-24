# GeoAkses Bandung

> **Ringkasan Eksekutif:** Aplikasi Android berbasis Sistem Informasi Geografis (SIG) untuk membantu masyarakat menemukan fasilitas umum di Kota Bandung sekaligus memperoleh rekomendasi rute transportasi publik (TMB dan angkot) menuju lokasi tersebut.

---

## 1. Instruksi untuk AI Agent (Context & Constraints)

- **Target Workspace:** Seluruh kode tahap ini wajib dibuat di dalam folder `geoakses.github.io/`[cite: 2].
- **Tujuan Pengerjaan Saat Ini:** Membangun *landing page* web statis untuk memperkenalkan produk aplikasi GeoAkses Bandung (untuk di-host di GitHub Pages)[cite: 2].
- **Tech Stack Wajib:** `HTML5`, `CSS3`, dan `Vanilla JavaScript` murni.
- **Larangan (Strict Rules):** 
  - **JANGAN** membuat database, koneksi backend, maupun memanggil API eksternal pada tahap ini.
  - Gunakan konten dari bagian **Konteks Produk** di bawah ini sebagai sumber materi teks (*copywriting*) utama pada *landing page*.
  - Buat simulasi interaktif menggunakan JavaScript murni (misalnya simulasi filter kategori fasilitas atau simulasi kartu rute TMB/Angkot) tanpa memuat data dari server.

---

## 2. Konteks Produk (Sumber Konten Landing Page)

### Deskripsi & Proposisi Nilai
- **Definisi:** Aplikasi berbasis Android yang mengintegrasikan informasi geografis fasilitas umum dengan data transportasi publik di Kota Bandung.
- **Tujuan Utama:** Meningkatkan kemudahan masyarakat dalam menemukan, mengakses, dan menjangkau fasilitas umum melalui pemanfaatan informasi geografis dan rekomendasi transportasi publik.
- **Nilai Utama (Core Value):** GeoAkses tidak hanya menjawab pertanyaan *"Ada fasilitas umum apa di sekitar saya?"*, tetapi juga menjawab pertanyaan *"Bagaimana cara saya mencapai fasilitas tersebut menggunakan transportasi publik?"*.

### Cakupan Data & Fitur Utama
- **Kategori Fasilitas Umum:** Perpustakaan, rumah sakit, puskesmas, sekolah, universitas, taman, tempat olahraga, dan fasilitas publik lainnya melalui peta interaktif.
- **Integrasi Transportasi Publik:** Rekomendasi perjalanan menggunakan **TMB (Trans Metro Bandung)** maupun **angkutan kota (angkot)**, termasuk kombinasi berjalan kaki.
- **Detail Informasi Rute:** Lokasi halte keberangkatan, layanan/trayek transportasi yang digunakan, halte tujuan, kebutuhan transit atau perpindahan rute, estimasi perjalanan (jika tersedia), serta petunjuk perjalanan menuju fasilitas tujuan.

### Alur Cara Kerja Aplikasi (6 Langkah)
1. **Menemukan fasilitas umum:** Pengguna membuka peta dan melihat berbagai fasilitas umum yang tersedia di sekitar lokasi mereka.
2. **Memilih fasilitas tujuan:** Pengguna memilih fasilitas yang ingin dikunjungi (misalnya perpustakaan, rumah sakit, atau taman kota).
3. **Melihat informasi fasilitas:** Aplikasi menampilkan nama, kategori, alamat, lokasi pada peta, dan informasi pendukung fasilitas tersebut.
4. **Mendapatkan rekomendasi transportasi:** Aplikasi menganalisis pilihan transportasi publik yang dapat digunakan dari lokasi pengguna menuju fasilitas yang dipilih.
5. **Melihat alternatif perjalanan:** Pengguna memperoleh informasi halte keberangkatan, rute transportasi, halte tujuan, transit jika diperlukan, serta estimasi perjalanan apabila data tersedia.
6. **Mengikuti petunjuk perjalanan:** Pengguna dapat melihat tahapan perjalanan melalui peta dan informasi navigasi yang disediakan aplikasi.

### Studi Kasus / Contoh Penggunaan (Skenario: Menuju Perpustakaan)
1. Pengguna membuka aplikasi GeoAkses.
2. Aplikasi menampilkan fasilitas umum di sekitar pengguna.
3. Pengguna memilih kategori **Pendidikan** atau **Perpustakaan**.
4. Pengguna memilih salah satu perpustakaan pada peta.
5. Aplikasi menampilkan detail perpustakaan tersebut.
6. Pengguna menekan tombol **Cari Rute**.
7. GeoAkses memberikan rekomendasi perjalanan menggunakan transportasi publik (kombinasi berjalan kaki dan angkot atau TMB).
8. Pengguna memilih alternatif perjalanan yang paling sesuai.

---

## 3. Struktur File yang Diharapkan
```text
geoakses.github.io/
├── README.md       # Dokumen spesifikasi ini
├── index.html      # Halaman utama landing page GeoAkses Bandung
├── style.css       # Styling responsif & modern
└── script.js       # Interaktivitas UI (navigasi, tab cara kerja, simulasi rute statis)