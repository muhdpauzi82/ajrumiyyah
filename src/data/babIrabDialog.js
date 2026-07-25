import guruIrab from "../assets/characters/guru-irab.gif";
import pelajar from "../assets/characters/pelajar1.webp";

const babIrabDialog = [
  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 5,
    text: "السلام عليكم ورحمة الله وبركاته",
  },
  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 12,
    text:
      "Selamat datang, {player}. Hari ini kita akan mempelajari Bab I'rab.",
  },
  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 20,
    text:
      "Waalaikumussalam guru. Saya sudah bersedia.",
  },
  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 28,
    text:
      "I'rab ialah rahsia perubahan akhir kalimah.",
  },
  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 36,
    text:
      "Maksudnya, hanya hujung perkataan yang berubah?",
  },
  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 44,
    text:
      "Benar. Sekarang mari kita lihat beberapa contoh.",
  },

  {
    type: "arabic",
    speaker: "guru",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 56,
    title: "Perhatikan Ayat Pertama",
    before: "جَاءَ",
    word: "مُحَمَّد",
    ending: "ٌ",
    text:
      "Perhatikan akhir kalimah مُحَمَّدٌ. Ia berakhir dengan dhammah.",
  },
  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 64,
    text:
      "Saya melihat kalimah مُحَمَّدٌ berakhir dengan dhammah.",
  },

  {
    type: "arabic",
    speaker: "guru",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 72,
    title: "Perhatikan Ayat Kedua",
    before: "رَأَيْتُ",
    word: "مُحَمَّد",
    ending: "ًا",
    text:
      "Sekarang kalimah yang sama berubah menjadi مُحَمَّدًا.",
  },
  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 80,
    text:
      "Akhirnya berubah menjadi fathah.",
  },

  {
    type: "arabic",
    speaker: "guru",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 88,
    title: "Perhatikan Ayat Ketiga",
    before: "مَرَرْتُ بِـ",
    word: "مُحَمَّد",
    ending: "ٍ",
    text:
      "Dalam ayat ini, kalimah مُحَمَّدٍ berakhir dengan kasrah.",
  },

  {
    type: "summary",
    speaker: "guru",
    guruImage: guruIrab,
    playerImage: pelajar,
    progress: 100,
    title: "Rahsia Perubahan Akhir Kalimah",
    text:
      "Perubahan pada akhir kalimah inilah yang dinamakan I'rab.",
  },
];

export default babIrabDialog;