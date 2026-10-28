// Data demo: cocokkan urutan tema dan kosakata dengan BTU Kemenag yang dipakai madrasah.
const D={
7:{1:[
{title:'Gerbang Perkenalan',topic:'التعارف',icon:'🪪',desc:'Salam, nama, dan identitas diri',words:[['مَرْحَبًا','Halo','👋'],['اِسْمٌ','Nama','🏷️'],['أَنَا','Saya','🙋'],['طَالِبٌ','Siswa','🎒']],sentence:['أَنَا','طَالِبٌ'],translation:'Saya seorang siswa.'},
{title:'Kampung Sekolah',topic:'المدرسة',icon:'🏫',desc:'Benda dan tempat di sekolah',words:[['مَدْرَسَةٌ','Sekolah','🏫'],['كِتَابٌ','Buku','📘'],['قَلَمٌ','Pulpen','🖊️'],['مِسْطَرَةٌ','Penggaris','📏']],sentence:['هَذَا','كِتَابٌ'],translation:'Ini sebuah buku.'},
{title:'Pulau Keluarga',topic:'الأُسْرَة',icon:'🏡',desc:'Anggota keluarga',words:[['أَبٌ','Ayah','👨'],['أُمٌّ','Ibu','👩'],['أَخٌ','Saudara laki-laki','🧑'],['أُخْتٌ','Saudara perempuan','👧']],sentence:['هَذِهِ','أُمِّي'],translation:'Ini ibuku.'},
{title:'Menara Angka',topic:'الأعداد',icon:'🔢',desc:'Angka dan hitungan sederhana',words:[['وَاحِدٌ','Satu','1️⃣'],['اِثْنَانِ','Dua','2️⃣'],['ثَلَاثَةٌ','Tiga','3️⃣'],['أَرْبَعَةٌ','Empat','4️⃣']],sentence:['عِنْدِي','كِتَابَانِ'],translation:'Saya memiliki dua buku.'}],
2:[
{title:'Kota Rumah',topic:'البيت',icon:'🏠',desc:'Ruangan dan benda di rumah',words:[['بَيْتٌ','Rumah','🏠'],['غُرْفَةٌ','Kamar','🛏️'],['بَابٌ','Pintu','🚪'],['نَافِذَةٌ','Jendela','🪟']],sentence:['هَذَا','بَيْتِي'],translation:'Ini rumahku.'},
{title:'Pasar Warna',topic:'الألوان',icon:'🎨',desc:'Nama-nama warna',words:[['أَحْمَرُ','Merah','🔴'],['أَزْرَقُ','Biru','🔵'],['أَخْضَرُ','Hijau','🟢'],['أَصْفَرُ','Kuning','🟡']],sentence:['اللَّوْنُ','أَزْرَقُ'],translation:'Warnanya biru.'},
{title:'Taman Buah',topic:'الفواكه',icon:'🍎',desc:'Buah dan ungkapan sederhana',words:[['تُفَّاحٌ','Apel','🍎'],['مَوْزٌ','Pisang','🍌'],['عِنَبٌ','Anggur','🍇'],['بُرْتُقَالٌ','Jeruk','🍊']],sentence:['أُحِبُّ','التُّفَّاحَ'],translation:'Saya suka apel.'},
{title:'Kedai Makanan',topic:'الطعام',icon:'🍽️',desc:'Makanan dan minuman',words:[['مَاءٌ','Air','💧'],['حَلِيبٌ','Susu','🥛'],['خُبْزٌ','Roti','🍞'],['أَرُزٌّ','Nasi','🍚']],sentence:['أُرِيدُ','مَاءً'],translation:'Saya ingin air.'}]},
8:{1:[
{title:'Kota Profesi',topic:'المهنة',icon:'🧑‍🚒',desc:'Pekerjaan dan tempat kerja',words:[['طَبِيبٌ','Dokter','🧑‍⚕️'],['مُعَلِّمٌ','Guru','🧑‍🏫'],['مُهَنْدِسٌ','Insinyur','👷'],['فَلَّاحٌ','Petani','🧑‍🌾']],sentence:['أَبِي','طَبِيبٌ'],translation:'Ayahku seorang dokter.'},
{title:'Lembah Kesehatan',topic:'الصحة',icon:'🩺',desc:'Tubuh dan kebiasaan sehat',words:[['رَأْسٌ','Kepala','🙂'],['يَدٌ','Tangan','✋'],['عَيْنٌ','Mata','👁️'],['مَرِيضٌ','Sakit','🤒']],sentence:['أَنَا','بِخَيْرٍ'],translation:'Saya baik-baik saja.'},
{title:'Jalur Kegiatan',topic:'الأنشطة',icon:'⚽',desc:'Kegiatan dan hobi',words:[['أَقْرَأُ','Saya membaca','📚'],['أَكْتُبُ','Saya menulis','✍️'],['أَلْعَبُ','Saya bermain','⚽'],['أَرْسُمُ','Saya menggambar','🎨']],sentence:['أُحِبُّ','القِرَاءَةَ'],translation:'Saya suka membaca.'},
{title:'Pulau Waktu',topic:'الوقت',icon:'⏰',desc:'Waktu dan kegiatan harian',words:[['صَبَاحٌ','Pagi','🌅'],['مَسَاءٌ','Sore/malam','🌇'],['سَاعَةٌ','Jam','🕒'],['يَوْمٌ','Hari','📅']],sentence:['أَذْهَبُ','صَبَاحًا'],translation:'Saya pergi pada pagi hari.'}],
2:[
{title:'Pasar Kerajaan',topic:'التسوق',icon:'🛍️',desc:'Jual beli dan harga',words:[['سُوقٌ','Pasar','🏪'],['سِعْرٌ','Harga','🏷️'],['كَمْ؟','Berapa?','❓'],['غَالٍ','Mahal','💰']],sentence:['كَمْ','السِّعْرُ؟'],translation:'Berapa harganya?'},
{title:'Kebun Sayur',topic:'الخضروات',icon:'🥕',desc:'Sayuran dan makanan',words:[['جَزَرٌ','Wortel','🥕'],['خِيَارٌ','Mentimun','🥒'],['طَمَاطِمُ','Tomat','🍅'],['بَصَلٌ','Bawang','🧅']],sentence:['أُرِيدُ','جَزَرًا'],translation:'Saya ingin wortel.'},
{title:'Pelabuhan Perjalanan',topic:'السفر',icon:'🧳',desc:'Perjalanan dan transportasi',words:[['سَيَّارَةٌ','Mobil','🚗'],['قِطَارٌ','Kereta','🚆'],['مَطَارٌ','Bandara','✈️'],['حَقِيبَةٌ','Tas','🧳']],sentence:['أُسَافِرُ','بِالقِطَارِ'],translation:'Saya bepergian dengan kereta.'},
{title:'Ladang Cuaca',topic:'الطقس',icon:'🌦️',desc:'Cuaca dan keadaan alam',words:[['مَطَرٌ','Hujan','🌧️'],['شَمْسٌ','Matahari','☀️'],['حَارٌّ','Panas','🥵'],['بَارِدٌ','Dingin','🥶']],sentence:['الجَوُّ','بَارِدٌ'],translation:'Cuacanya dingin.'}]},
9:{1:[
{title:'Kota Harapan',topic:'الأمل',icon:'🌟',desc:'Cita-cita dan rencana',words:[['مُسْتَقْبَلٌ','Masa depan','🔭'],['حُلْمٌ','Cita-cita','💭'],['أُرِيدُ','Saya ingin','🙋'],['نَاجِحٌ','Berhasil','🏆']],sentence:['أُرِيدُ','أَنْ أَنْجَحَ'],translation:'Saya ingin berhasil.'},
{title:'Perpustakaan Hikmah',topic:'القراءة',icon:'📚',desc:'Membaca dan mencari informasi',words:[['مَكْتَبَةٌ','Perpustakaan','📚'],['قِصَّةٌ','Cerita','📖'],['مَعْلُومَةٌ','Informasi','💡'],['مُفِيدٌ','Bermanfaat','✅']],sentence:['القِرَاءَةُ','مُفِيدَةٌ'],translation:'Membaca itu bermanfaat.'},
{title:'Kampung Lingkungan',topic:'البيئة',icon:'🌳',desc:'Lingkungan dan kebersihan',words:[['بِيئَةٌ','Lingkungan','🌍'],['نَظِيفٌ','Bersih','✨'],['شَجَرَةٌ','Pohon','🌳'],['نُفَايَاتٌ','Sampah','🗑️']],sentence:['نَحْنُ','نَحْمِي البِيئَةَ'],translation:'Kita menjaga lingkungan.'},
{title:'Balai Teknologi',topic:'التكنولوجيا',icon:'💻',desc:'Teknologi dan komunikasi',words:[['حَاسُوبٌ','Komputer','💻'],['هَاتِفٌ','Telepon','📱'],['شَبَكَةٌ','Jaringan','🌐'],['رِسَالَةٌ','Pesan','✉️']],sentence:['أَسْتَخْدِمُ','الحَاسُوبَ'],translation:'Saya menggunakan komputer.'}],
2:[
{title:'Galeri Budaya',topic:'الثقافة',icon:'🎭',desc:'Budaya dan tradisi',words:[['ثَقَافَةٌ','Budaya','🎭'],['لُغَةٌ','Bahasa','🗣️'],['تَارِيخٌ','Sejarah','🏛️'],['تَقْلِيدٌ','Tradisi','🪡']],sentence:['اللُّغَةُ','العَرَبِيَّةُ جَمِيلَةٌ'],translation:'Bahasa Arab itu indah.'},
{title:'Ruang Persahabatan',topic:'الصداقة',icon:'🤝',desc:'Sikap dan hubungan sosial',words:[['صَدِيقٌ','Teman','🧑‍🤝‍🧑'],['مُسَاعَدَةٌ','Pertolongan','🤲'],['احْتِرَامٌ','Menghormati','💗'],['تَعَاوُنٌ','Kerja sama','🤝']],sentence:['نَحْنُ','نَتَعَاوَنُ'],translation:'Kita bekerja sama.'},
{title:'Menara Ibadah',topic:'العبادة',icon:'🕌',desc:'Kosakata kegiatan ibadah',words:[['مَسْجِدٌ','Masjid','🕌'],['صَلَاةٌ','Salat','🤲'],['قُرْآنٌ','Al-Qur’an','📗'],['دُعَاءٌ','Doa','🌙']],sentence:['أُصَلِّي','فِي المَسْجِدِ'],translation:'Saya salat di masjid.'},
{title:'Gerbang Kelulusan',topic:'مراجعة',icon:'🏆',desc:'Ulasan kosakata dan kalimat',words:[['كَلِمَةٌ','Kata','🔤'],['جُمْلَةٌ','Kalimat','📝'],['سُؤَالٌ','Pertanyaan','❓'],['جَوَابٌ','Jawaban','💬']],sentence:['أَتَعَلَّمُ','العَرَبِيَّةَ'],translation:'Saya belajar bahasa Arab.'}]}};
// Agar setiap kelas/semester memiliki jalur empat gerbang: kelas VII, VIII, IX × semester 1 dan 2.
