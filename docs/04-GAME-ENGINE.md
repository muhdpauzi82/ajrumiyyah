# GAME ENGINE

Engine pertama:

Gate Challenge

Komponen:

- Timer
- HUD
- Combo
- Score
- Lives
- Falling Word
- Finish
📖 Catatan Pembangunan AJRUMIYYAH V6

Tarikh: 09 Julai 2026

Modul

Gate Challenge Engine - Audio & Result System

Status: ✅ Selesai (Versi 2.0)

Penambahbaikan Audio
1. Struktur Audio Baharu

Audio projek disusun semula mengikut kategori.

public/
└── sounds/
    ├── bgm/
    │   └── gate-challenge.mp3
    │
    ├── sfx/
    │   ├── plus1.mp3
    │   ├── minus1.mp3
    │   ├── 321-go.mp3
    │   ├── result-success.mp3
    │   └── result-fail.mp3

Keputusan:

Background Music (BGM) dipisahkan daripada Sound Effect (SFX).
Memudahkan penyelenggaraan dan pembangunan pada masa hadapan.
2. Audio Service

Sistem audio dipertingkatkan.

BGM

Menggunakan

playAudio()
stopAudio()

Digunakan untuk muzik latar yang berulang (loop).

Sound Effect

Fungsi baharu

playSfx()

dibina khusus untuk:

+1
-1
countdown
keputusan
combo
warning

Rasional

Setiap kesan bunyi perlu dimainkan sebagai objek Audio baharu supaya boleh dimainkan berulang kali tanpa mengganggu BGM.

3. Countdown Audio

Countdown menggunakan satu fail audio penuh.

321-go.mp3

Menggantikan penggunaan empat fail berasingan.

Urutan:

3...
2...
1...
GO!

Kemudian permainan bermula.

4. Penambahbaikan Countdown

Selepas audio "GO!" dimainkan, permainan ditangguhkan kira-kira 300ms sebelum setPlaying(true).

Kesan

Audio tidak terpotong.
Peralihan daripada countdown kepada permainan lebih lancar.
5. Sound Effect Gameplay

Ditambah bunyi:

Betul
plus1.mp3

Apabila pemain menangkap perkataan yang betul.

Salah
minus1.mp3

Apabila pemain menangkap perkataan yang salah.

6. Result Screen

Ditambah:

Animasi CountUp
Sound kemenangan
Sound kegagalan
Floating Score
UI responsif
Keputusan Rekabentuk

Gate Challenge kini menggunakan konsep audio profesional:

Countdown
        ↓
GO
        ↓
Background Music
        ↓
+1 / -1 Sound
        ↓
Result Sound
Status Modul
Gameplay
✅ Countdown
✅ GO
✅ Delay selepas countdown
✅ Background Music
✅ Sound Betul
✅ Sound Salah
✅ Floating Score
✅ Result Screen
Audio
✅ Folder bgm
✅ Folder sfx
✅ playAudio()
✅ playSfx()