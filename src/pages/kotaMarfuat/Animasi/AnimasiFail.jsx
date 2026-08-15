import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AnimasiFail.css";

const stages = [
  {
    before: "جَاءَ",
    word: "زَيْد",
    ending: "ٌ",
    label: "Fa'il",
    arabicLabel: "الْفَاعِلُ",
    sign: "Dhammah",
    note:
      "زَيْدٌ ialah فاعل kerana menjadi orang yang melakukan perbuatan جَاءَ. Fa'il berada dalam keadaan marfu‘.",
  },

  {
    before: "ذَهَبَ",
    word: "مُحَمَّد",
    ending: "ٌ",
    label: "Fa'il",
    arabicLabel: "الْفَاعِلُ",
    sign: "Dhammah",
    note:
      "مُحَمَّدٌ ialah فاعل kerana menjadi orang yang melakukan perbuatan ذَهَبَ. Tanda رفعnya ialah dhammah.",
  },

  {
    before: "نَجَحَ",
    word: "الطَّالِب",
    ending: "ُ",
    label: "Fa'il",
    arabicLabel: "الْفَاعِلُ",
    sign: "Dhammah",
    note:
      "الطَّالِبُ ialah فاعل kerana menjadi orang yang melakukan perbuatan نَجَحَ. Fa'il berada dalam keadaan marfu‘.",
  },
];

export default function AnimasiFail() {
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
      "failAnimasiDone",
      "true"
    );

    navigate("/latihan-fail");
  }

  function previous() {
    if (step > 0) {
      setStep((currentStep) => currentStep - 1);
      return;
    }

    navigate("/kitab-fail");
  }

  return (
    <main className="fail-animation-screen">

      <div className="fail-animation-shade" />

      <header className="fail-animation-header">
        <span className="fail-animation-kicker">
          الفَاعِلُ
        </span>

        <h1>
          Perhatikan Fa'il yang Marfu‘
        </h1>
      </header>

      <article
        key={step}
        className="fail-animation-card"
      >
        <div className="fail-stage-label">
          <span>{current.arabicLabel}</span>
          <strong>{current.label}</strong>
        </div>

        <div
          className="fail-full-sentence"
          dir="rtl"
          lang="ar"
        >
          <span className="fail-before">
            {current.before}
          </span>

          <span className="fail-focus-word">
            <span className="fail-word-base">
              {current.word}
            </span>

            <span
              key={`${step}-${current.ending}`}
              className="fail-changing-ending"
            >
              {current.ending}
            </span>
          </span>
        </div>

        <div className="fail-sign-information">
          <span>Tanda akhir</span>
          <strong>{current.sign}</strong>
        </div>

        <p className="fail-stage-note">
          {current.note}
        </p>

        <div
          className="fail-comparison-flow"
          dir="rtl"
          lang="ar"
        >
          <span
            className={
              step === 0 ? "current" : ""
            }
          >
            زَيْدٌ
          </span>

          <b>←</b>

          <span
            className={
              step === 1 ? "current" : ""
            }
          >
            مُحَمَّدٌ
          </span>

          <b>←</b>

          <span
            className={
              step === 2 ? "current" : ""
            }
          >
            الطَّالِبُ
          </span>
        </div>
      </article>

      <footer className="fail-animation-actions">

        <button
          type="button"
          className="fail-animation-button secondary"
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

        <div className="fail-stage-indicator">
          {stages.map((item, index) => (
            <div
              key={item.label + index}
              className={`stage-book ${
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
          className="fail-animation-button primary"
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