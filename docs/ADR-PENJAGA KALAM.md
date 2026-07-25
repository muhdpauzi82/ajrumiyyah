Aliran Guardian Battle
1. Fasa sambutan

Kotak hitam memaparkan ucapan Penjaga Kalam:

Selamat datang, wahai penuntut ilmu.
Tahniah kerana berjaya mengatasi halangan sebelum ini.
Kini tibalah ujian terakhir.
Perhatikan setiap soalan, jawab dengan betul, yakin dan pantas.

Pada masa ini:

Guardian menggunakan ekspresi talking
Buku masih kosong
Butang jawapan belum muncul
Masa belum bermula

Selepas ucapan selesai, tekan butang:

MULAKAN UJIAN

atau terus kiraan:

3... 2... 1... MULA
2. Fasa soalan

Apabila ujian bermula:

ucapan hilang;
soalan keluar dari buku;
teks soalan bergerak naik ke kotak hitam;
tiga pilihan jawapan muncul pada tapak hijau, biru dan merah;
pemasa bermula dari 60.

Paparan:

Kotak hitam:
Soalan 1 / 50
Yang manakah Isim?

Bawah:
عَلِيٌّ     كَتَبَ     قَلَمٌ

Kitab berfungsi sebagai sumber soalan, tetapi kotak hitam ialah tempat membaca soalan. Ini lebih jelas untuk pelajar dan tidak memerlukan teks kecil di atas kitab.

3. Selepas jawapan diklik

Apabila pemain klik jawapan:

Butang yang dipilih memberi reaksi ringkas.
Soalan dan ketiga-tiga jawapan hilang.
Soalan seterusnya muncul.
Tiga jawapan baharu muncul.
Proses berulang dengan sangat pantas.

Tidak perlu:

butang “Soalan seterusnya”;
penerangan panjang;
paparan keputusan yang lama antara soalan.

Tempoh reaksi boleh sekitar:

Betul: 300–450ms
Salah: 450–600ms

Supaya permainan kekal pantas.

Peraturan yang perlu diputuskan

Untuk sasaran 45 atau 50 soalan dalam 60 saat, ada dua bentuk:

Pilihan A — Capai 45 betul dalam 60 saat
Bank soalan boleh lebih daripada 50.
Permainan tamat apabila:
pemain mendapat 45 betul, atau
masa habis.
Jawapan salah tidak terus menamatkan permainan.
Salah hanya membazirkan masa.

Ini lebih sesuai untuk cabaran pantas.

Pilihan B — Jawab 50 soalan dalam 60 saat
Tepat 50 soalan dipaparkan.
Pelajar mesti mendapat 50/50.
Satu kesalahan menyebabkan gagal.
Namun pemain boleh terus menjawab sehingga tamat untuk melihat prestasi.

Ini jauh lebih sukar.

Cadangan saya

Untuk Penjaga Kalam, gunakan:

Sasaran: 45 jawapan betul
Masa: 60 saat
Soalan tersedia: tanpa had daripada bank rawak

Kenapa 45 lebih sesuai?

Kerana satu soalan perlu dibaca, difahami dan diklik dalam purata sekitar:

60 ÷ 45 = 1.33 saat

Untuk 50:

60 ÷ 50 = 1.2 saat

50 dalam 60 saat sangat pantas, khususnya jika soalan Bahasa Melayu agak panjang. Ia sesuai sebagai mod kemuncak, tetapi 45 lebih realistik untuk pelajar.

Struktur keadaan permainan

Kita boleh gunakan empat keadaan:

"intro"
"countdown"
"playing"
"result"

Aliran:

intro
  ↓
countdown
  ↓
playing
  ↓
result

Semasa playing, setiap soalan mempunyai fasa kecil:

entering
ready
answered
leaving

Ini membolehkan animasi:

buku → kotak hitam
jawapan muncul
klik
semua hilang
soalan baharu masuk
Pembahagian komponen
GuardianArena
├── IntroDialogue
├── QuestionDisplay
├── AnswerButtons
├── GuardianCharacter
├── BattleHUD
├── StageProgress
└── ResultPanel

Kitab tidak perlu mengandungi banyak teks. Ia hanya menjadi elemen visual yang “menghantar” soalan ke kotak hitam.

Cadangan teks pembukaan
Selamat datang, wahai penuntut ilmu.

Tahniah kerana kamu telah berjaya mengatasi segala halangan sebelum ini.

Kini tibalah ujian terakhir di Gerbang Kalam.

Perhatikan setiap soalan dengan teliti.

Jawablah dengan betul, yakin dan pantas.

Kamu mempunyai 60 saat untuk membuktikan penguasaanmu.

Bersediakah kamu?
Keputusan reka bentuk

Cadangan anda sangat sesuai dan patut dijadikan aliran rasmi:

Ucapan Penjaga
→ Kiraan mula
→ Soalan keluar dari kitab
→ Soalan masuk ke kotak hitam
→ Jawapan muncul
→ Klik jawapan
→ Soalan dan jawapan hilang
→ Soalan seterusnya
→ Tamat apabila sasaran dicapai atau masa habis

Ini menjadikan buku, kotak hitam, Guardian dan butang jawapan masing-masing mempunyai fungsi yang jelas.