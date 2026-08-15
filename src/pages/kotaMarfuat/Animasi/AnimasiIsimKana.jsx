import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AnimasiIsimKana.css";

const stages = [
  {
    before: "كَانَ",
    word: "مُحَمَّد",
    ending: "ٌ",
    label: "Isim Kāna",
    arabicLabel: "اسْمُ كَانَ",
    sign: "Dhammah",
    note:
      "مُحَمَّدٌ ialah اسم كان kerana datang selepas كَانَ dan kekal dalam keadaan marfu‘.",
  },

  {
    before: "كَانَ",
    word: "الطَّالِب",
    ending: "ُ",
    label: "Isim Kāna",
    arabicLabel: "اسْمُ كَانَ",
    sign: "Dhammah",
    note:
      "الطَّالِبُ ialah اسم كان. Isim Kāna berada dalam keadaan marfu‘ dan tanda رفعnya ialah dhammah.",
  },

  {
    before: "كَانَ",
    word: "الْجَوُّ",
    ending: "ُ",
    label: "Isim Kāna",
    arabicLabel: "اسْمُ كَانَ",
    sign: "Dhammah",
    note:
      "الْجَوُّ ialah اسم كان kerana menjadi isim bagi كَانَ. Isim Kāna berada dalam keadaan marfu‘.",
  },
];

export default function AnimasiIsimKana() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const current = stages[step];

  const isLastStage = step === stages.length - 1;

  function next() {
    if (!isLastStage) {
      setStep((currentStep) => currentStep + 1);
      return;
    }

    localStorage.setItem(
      "isimKanaAnimasiDone",
      "true"
    );

    navigate("/latihan-isim-kana");
  }

  function previous() {
    if (step > 0) {
      setStep((currentStep) => currentStep - 1);
      return;
    }

    navigate("/kitab-isim-kana");
  }

  return (
    <main className="isim-kana-animation-screen">

      <div className="isim-kana-animation-shade" />

      <header className="isim-kana-animation-header">

        <span className="isim-kana-animation-kicker">
          اسْمُ كَانَ
        </span>

        <h1>
          Perhatikan Isim Kāna yang Marfu‘
        </h1>

      </header>

      <article
        key={step}
        className="isim-kana-animation-card"
      >

        <div className="isim-kana-stage-label">

          <span>
            {current.arabicLabel}
          </span>

          <strong>
            {current.label}
          </strong>

        </div>

        <div
          className="isim-kana-full-sentence"
          dir="rtl"
          lang="ar"
        >

          <span className="isim-kana-before">
            {current.before}
          </span>

          <span className="isim-kana-focus-word">

            <span className="isim-kana-word-base">
              {current.word}
            </span>

            <span
              key={`${step}-${current.ending}`}
              className="isim-kana-changing-ending"
            >
              {current.ending}
            </span>

          </span>

        </div>

        <div className="isim-kana-sign-information">

          <span>
            Tanda akhir
          </span>

          <strong>
            {current.sign}
          </strong>

        </div>

        <p className="isim-kana-stage-note">
          {current.note}
        </p>

        <div
          className="isim-kana-comparison-flow"
          dir="rtl"
          lang="ar"
        >

          <span className={step === 0 ? "current" : ""}>
            مُحَمَّدٌ
          </span>

          <b>←</b>

          <span className={step === 1 ? "current" : ""}>
            الطَّالِبُ
          </span>

          <b>←</b>

          <span className={step === 2 ? "current" : ""}>
            الْجَوُّ
          </span>

        </div>

      </article>

      <footer className="isim-kana-animation-actions">

        <button
          type="button"
          className="isim-kana-animation-button secondary"
          onClick={(event) => {
            event.stopPropagation();
            previous();
          }}
        >
          ←{" "}
          {step === 0
            ? "Kembali"
            : "Sebelumnya"}
        </button>

        <div className="isim-kana-stage-indicator">

          {stages.map((item, index) => (
            <div
              key={item.label + index}
              className={`isim-kana-stage-book ${
                index < step
                  ? "done"
                  : index === step
                  ? "active"
                  : ""
              }`}
            >
              📖
            </div>
          ))}

        </div>

        <button
          type="button"
          className="isim-kana-animation-button primary"
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
        >
          {isLastStage
            ? "Mulakan Latihan"
            : "Seterusnya"}{" "}
          →
        </button>

      </footer>

    </main>
  );
}