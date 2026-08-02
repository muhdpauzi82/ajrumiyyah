import guruIrab from "../assets/characters/guru-irab.gif";
import pelajar from "../assets/characters/pelajar1.webp";

const babIrabDialog = [
  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 5,
    text: "السلام عليكم ورحمة الله وبركاته",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 12,
    text:
      "Selamat datang, {player}. Hari ini kita akan mempelajari satu bab yang sangat penting dalam ilmu Nahu, iaitu Bab I'rab.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 18,
    text:
      "Waalaikumussalam guru. Saya sudah bersedia untuk belajar.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 26,
    text:
      "Bagus. I'rab ialah perubahan yang berlaku pada akhir sesuatu kalimah kerana perbezaan kedudukannya di dalam ayat.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 34,
    text:
      "Maksudnya, yang berubah hanyalah bahagian akhir kalimah?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 42,
    text:
      "Benar. Kalimah yang sama boleh mempunyai baris yang berbeza apabila kedudukannya dalam ayat berubah.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 50,
    text:
      "Sekarang mari kita lihat tiga contoh yang menggunakan kalimah yang sama.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 58,
    title: "Contoh Pertama",
    before: "جَاءَ",
    word: "مُحَمَّد",
    ending: "ٌ",
    text:
      "Perhatikan kalimah مُحَمَّدٌ. Akhir kalimah mempunyai tanda dhammah.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 64,
    text:
      "Saya nampak hujung kalimah itu berakhir dengan dhammah.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 72,
    title: "Contoh Kedua",
    before: "رَأَيْتُ",
    word: "مُحَمَّد",
    ending: "ًا",
    text:
      "Sekarang perhatikan. Kalimah yang sama berubah menjadi مُحَمَّدًا dan akhirnya mempunyai fathah.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 78,
    text:
      "Oh... kalimahnya masih sama, tetapi hujungnya berubah menjadi fathah.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 86,
    title: "Contoh Ketiga",
    before: "مَرَرْتُ بِـ",
    word: "مُحَمَّد",
    ending: "ٍ",
    text:
      "Dalam ayat ini pula, kalimah مُحَمَّدٍ berakhir dengan kasrah.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 94,
    text:
      "Alhamdulillah, sekarang saya faham. Kalimah مُحَمَّد masih sama, tetapi yang berubah hanyalah bahagian akhirnya mengikut kedudukannya dalam ayat.",
  },

  {
    type: "summary",
    speaker: "guru",
    progress: 100,
    title: "Tahniah!",
    text:
      "Bagus, {player}. Kamu telah memahami asas I'rab. Selepas ini kita akan melihat perubahan tersebut melalui animasi supaya lebih mudah difahami.",
  },
];

export default babIrabDialog;