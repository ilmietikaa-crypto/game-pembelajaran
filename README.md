# Rihla Arabiyah — Petualangan Bahasa Arab MTs
Website fantasi untuk pembelajaran Bahasa Arab MTs kelas VII, VIII, dan IX; semester 1 dan 2. Dibuat dengan HTML, CSS, JavaScript tanpa framework, akun, atau backend.

## Fitur
- Peta fantasi kelas VII, VIII, IX dengan dua semester per kelas.
- Materi contoh dengan kosakata Arab, arti Indonesia, emoji ilustrasi, contoh kalimat, dan pelafalan melalui fitur suara browser.
- Enam mini-game: Kartu Memori, Tantangan Kilat, Susun Kata, Dengar & Pilih, Peracik Kalimat, Pemburu Kosakata.
- XP, koin, penanda misi selesai, progres tersimpan di `localStorage`.
- Responsif untuk laptop dan HP.

## Jalankan lokal
Ekstrak ZIP lalu buka `index.html`. Untuk pengujian lebih konsisten, gunakan ekstensi Live Server pada VS Code. Tidak perlu `npm install` atau build command.

## Upload ke GitHub
1. Buat repository baru, misalnya `rihla-arabiyah-mts`.
2. Upload seluruh isi folder ini; `index.html` harus berada di root repository.
3. Commit perubahan.

## Deploy ke Netlify
1. Netlify → **Add new site → Import an existing project**.
2. Hubungkan GitHub dan pilih repository.
3. Kosongkan build command dan isi publish directory dengan `.` (root repository).
4. Tekan Deploy site. Netlify akan memberikan URL publik.

## Acuan kurikulum
Struktur kelas VII–IX dan semester 1–2 sudah disiapkan. Namun tema, urutan bab, dan kosakata yang ada saat ini adalah **konten contoh untuk demonstrasi fitur, bukan transkripsi atau klaim kesesuaian persis dengan daftar isi BTU**. Sebelum digunakan untuk pembelajaran/penelitian, cocokkan materi dan indikator dengan buku resmi yang dipakai madrasah.

- Laman BTU PAI dan Bahasa Arab Kemenag: https://kemenag.go.id/informasi/buku-teks-utama-btu-mata-pelajaran-pai-dan-bahasa-arab-pada-mi-mts-dan-ma
- Informasi Kemenag tentang BTU dan KMA Nomor 1503 Tahun 2025: https://djj2.pta.kemenag.go.id/index.php/article/read/kemenag-siapkan-90-buku-pai-dan-bahasa-arab-mi-sampai-ma-bisa-unduh-di-sini-FPaeX
- Buku Bahasa Arab Fase D Kelas VII: https://lampung.kemenag.go.id/kanwil-kementerian-agama-provinsi-lampung/info/buku-teks-utama-mata-pelajaran-pendidikan-agama-islam-dan-bahasa-arab-pada-madrasah-bahasa-arab-fase-d-kelas-7

## Batasan versi demo
- Progres hanya tersimpan di browser/perangkat yang dipakai, tidak tersinkron dan tidak bisa dilihat guru.
- Audio memakai Web Speech API; dukungan dan suara Arab berbeda-beda tiap perangkat/browser.
- Google Fonts memerlukan internet; fallback font tersedia.
