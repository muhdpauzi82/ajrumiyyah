import { latihanKeadaanQuestions } from
  "../LatihanKeadaan/latihanKeadaanQuestions";

import { latihanTandaQuestions } from
  "../LatihanTanda/latihanTandaQuestions";

import { latihanAyatQuestions } from
  "../LatihanAyat/latihanAyatQuestions";

function binaSentenceParts(arabic, target) {
  if (!arabic) {
    return [];
  }

  if (!target || !arabic.includes(target)) {
    return [
      {
        text: arabic,
        highlight: false,
      },
    ];
  }

  const targetIndex = arabic.indexOf(target);

  const before = arabic.slice(
    0,
    targetIndex
  );

  const after = arabic.slice(
    targetIndex + target.length
  );

  return [
    before
      ? {
          text: before,
          highlight: false,
        }
      : null,

    {
      text: target,
      highlight: true,
    },

    after
      ? {
          text: after,
          highlight: false,
        }
      : null,
  ].filter(Boolean);
}

function normaliseQuestion(
  question,
  source,
  category
) {
  return {
    ...question,

    id: `${source}-${question.id}`,

    source,
    category,

    sentenceParts:
      question.sentenceParts ??
      binaSentenceParts(
        question.arabic,
        question.target
      ),
  };
}

export const latihanCampuranQuestions = [
  ...latihanKeadaanQuestions.map(
    (question) =>
      normaliseQuestion(
        question,
        "keadaan",
        "Keadaan I‘rab"
      )
  ),

  ...latihanTandaQuestions.map(
    (question) =>
      normaliseQuestion(
        question,
        "tanda",
        "Tanda I‘rab"
      )
  ),

  ...latihanAyatQuestions.map(
    (question) =>
      normaliseQuestion(
        question,
        "ayat",
        "Analisis Ayat"
      )
  ),
];