import {
  isimAsas,
  isimPertengahan,
  menaraIsim,
} from "./isimQuestions";

import {
  fiilAsas,
  fiilAkademi,
  fiilMenara,
} from "./fiilQuestions";

import {
  hurufAsas,
  hurufAkademi,
  hurufMenara,
} from "./hurufQuestions";

const semuaIsim = [
  ...isimAsas,
  ...isimPertengahan,
  ...menaraIsim,
];

const semuaFiil = [
  ...fiilAsas,
  ...fiilAkademi,
  ...fiilMenara,
];

const semuaHuruf = [
  ...hurufAsas,
  ...hurufAkademi,
  ...hurufMenara,
];

function shuffle(items) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [result[index], result[randomIndex]] = [
      result[randomIndex],
      result[index],
    ];
  }

  return result;
}

export function createGuardianQuestions() {
  const selectedQuestions = shuffle([
    ...shuffle(semuaIsim).slice(0, 14),
    ...shuffle(semuaFiil).slice(0, 13),
    ...shuffle(semuaHuruf).slice(0, 13),
  ]);

  return selectedQuestions.map((question) => ({
    ...question,
    options: shuffle(question.options),
  }));
}