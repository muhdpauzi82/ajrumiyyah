Catatan Kerja Projek AJRUMIYYAH
Tarikh: 17 Julai 2026

Kemaskini Sistem Guardian Arena & World Progress
1. Guardian Arena
Menyusun semula aliran penamat Guardian Arena.
Memisahkan paparan penamat kepada komponen berasingan (ChapterComplete).
Menghapuskan ralat redeclaration of import ChapterComplete.
Memastikan ChapterComplete hanya diimport dalam GuardianArena dan tidak mengimport dirinya sendiri.
2. Sistem Penilaian Guardian
Membetulkan logik penentuan lulus/gagal.
Menggunakan nilai markah sebenar selepas jawapan terakhir sebelum menentukan keputusan.
Aliran baharu:
Lulus 100% → ChapterComplete
Tidak lulus → Skrin keputusan → "CUBA LAGI"
3. Sistem Retry
Menyusun semula fungsi handleRetry().
Reset semua state permainan:
soalan
markah
emosi guardian
countdown
progress
pilihan jawapan
4. Chapter Complete
Komponen baharu disediakan sebagai penamat bab.
Fungsi:
Fade Out
Credit Scroll
Tahniah
Unlock dunia seterusnya
Butang masuk ke dunia berikutnya
5. Sistem Unlock Dunia
Sebelum

Unlock menggunakan banyak LocalStorage.

kunciKalam
gerbangKalamDone
kotaIrabUnlocked
...
Selepas

Semua progres dipusatkan dalam satu fail:

src/utils/gameProgress.js

Menggunakan satu storage utama:

ajrumiyyah_progress
6. Struktur Progress Baharu
{
  worlds: {
    gerbangKalam: true,
    kotaIrab: false,
    marfuat: false,
    mansubat: false,
    majrurat: false,
    tawabi: false,
    istana: false
  },

  chapters: {
    gerbangKalamDone: false,
    kotaIrabDone: false,
    ...
  },

  artifacts: {
    isim: false,
    fiil: false,
    huruf: false,
    kalam: false,
    irab: false
  }
}
7. Fungsi Game Progress

Disediakan fungsi utama:

getGameProgress()
saveGameProgress()
updateGameProgress()
completeGerbangKalam()
completeKotaIrab()
unlockWorld()
unlockArtifact()
isWorldUnlocked()
resetGameProgress()

Semua komponen akan menggunakan fungsi ini dan tidak lagi mengakses localStorage secara terus.

8. World Map

Kemaskini:

Menggunakan gameProgress.js.
Tidak lagi membaca localStorage secara langsung.
Kota I'rab dibuka berdasarkan progress permainan.
Semua dunia lain menggunakan sistem unlock yang sama.
Menghapuskan penggunaan banyak key LocalStorage.
9. Rekabentuk World Map
Mengekalkan laluan dunia berbentuk zig-zag.
Menyediakan hotspot bagi:
Gerbang Kalam
Kota I'rab
Marfu'at
Mansubat
Majrurat
Tawabi'
Istana Rahsia
Dunia yang belum dibuka menggunakan status .locked.
10. Penambahbaikan Seni Bina Projek

Perubahan besar hari ini ialah memusatkan semua sistem progres permainan.

Sebelum:

GuardianArena
      ↓
localStorage

WorldMap
      ↓
localStorage

GerbangKalam
      ↓
localStorage

Selepas:

GuardianArena
        │
        ▼
gameProgress.js
        ▲
        │
WorldMap
        │
GerbangKalam
        │
Kota I'rab
        │
Bab-bab seterusnya

Semua modul kini berkongsi satu sistem progres yang sama.

Status Projek

✅ Guardian Arena stabil.
✅ Chapter Complete dipisahkan daripada Guardian Arena.
✅ Sistem lulus/gagal disusun semula.
✅ Sistem unlock dunia dipusatkan.
✅ Struktur progres permainan bersedia untuk pengembangan dunia seterusnya.

Tugasan Seterusnya
Menghubungkan butang "Masuk ke Kota I'rab" dalam ChapterComplete.
Membina intro sinematik Kota I'rab.
Menyediakan sistem progres untuk Kota I'rab menggunakan gameProgress.js.
Membangunkan kandungan pembelajaran dan latihan Bab I'rab.
Menyediakan sistem unlock Kota Marfu'at selepas tamat Kota I'rab.