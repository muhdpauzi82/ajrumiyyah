import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AnimasiMubtada.css";

const stages = [
  {
    before: "",
    word: "مُحَمَّد",
    ending: "ٌ",
    label: "Mubtada'",
    arabicLabel: "الْمُبْتَدَأُ",
    sign: "Dhammah",
    note:
      "مُحَمَّدٌ ialah Mubtada' kerana menjadi permulaan jumlah ismiyyah. Mubtada' berada dalam keadaan marfu'.",
  },

  {
    before: "",
    word: "الطَّالِب",
    ending: "ُ",
    label: "Mubtada'",
    arabicLabel: "الْمُبْتَدَأُ",
    sign: "Dhammah",
    note:
      "الطَّالِبُ ialah Mubtada' kerana menjadi permulaan jumlah ismiyyah dan berada dalam keadaan marfu'.",
  },

  {
    before: "",
    word: "الْعِلْم",
    ending: "ُ",
    label: "Mubtada'",
    arabicLabel: "الْمُبْتَدَأُ",
    sign: "Dhammah",
    note:
      "الْعِلْمُ ialah Mubtada' kerana menjadi permulaan jumlah ismiyyah. Tanda رفعnya ialah dhammah.",
  },
];

export default function AnimasiMubtada() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const current = stages[step];

  const isLastStage =
    step === stages.length - 1;

  function next() {
    if (!isLastStage) {
      setStep((currentStep) => currentStep + 1);
      return;
    }

    localStorage.setItem(
      "mubtadaAnimasiDone",
      "true"
    );

    navigate("/latihan-mubtada");
  }

  function previous() {
    if (step > 0) {
      setStep((currentStep) => currentStep - 1);
      return;
    }

    navigate("/kitab-mubtada");
  }

  return (
    <main className="mubtada-animation-screen">

      <div className="mubtada-animation-shade" />

      <header className="mubtada-animation-header">

        <span className="mubtada-animation-kicker">
          الْمُبْتَدَأُ
        </span>

        <h1>
          Perhatikan Mubtada' yang Marfu‘
        </h1>

      </header>

      <article
        key={step}
        className="mubtada-animation-card"
      >

        <div className="mubtada-stage-label">

          <span>
            {current.arabicLabel}
          </span>

          <strong>
            {current.label}
          </strong>

        </div>

        <div
          className="mubtada-full-sentence"
          dir="rtl"
          lang="ar"
        >

          {current.before && (
            <span className="mubtada-before">
              {current.before}
            </span>
          )}

          <span className="mubtada-focus-word">

            <span className="mubtada-word-base">
              {current.word}
            </span>

            <span
              key={`${step}-${current.ending}`}
              className="mubtada-changing-ending"
            >
              {current.ending}
            </span>

          </span>

        </div>

        <div className="mubtada-sign-information">

          <span>
            Tanda akhir
          </span>

          <strong>
            {current.sign}
          </strong>

        </div>

        <p className="mubtada-stage-note">
          {current.note}
        </p>

        <div
          className="mubtada-comparison-flow"
          dir="rtl"
          lang="ar"
        >

          <span
            className={
              step === 0 ? "current" : ""
            }
          >
            مُحَمَّدٌ
          </span>

          <b>←</b>

          <span
            className={
              step === 1 ? "current" : ""
            }
          >
            الطَّالِبُ
          </span>

          <b>←</b>

          <span
            className={
              step === 2 ? "current" : ""
            }
          >
            الْعِلْمُ
          </span>

        </div>

      </article>

      <footer className="mubtada-animation-actions">

        <button
          type="button"
          className="mubtada-animation-button secondary"
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

        <div className="mubtada-stage-indicator">

          {stages.map((item, index) => (
            <div
              key={item.label + index}
              className={`mubtada-stage-book ${
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
          className="mubtada-animation-button primary"
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