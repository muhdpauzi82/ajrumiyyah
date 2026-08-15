import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AnimasiKhabar.css";

const stages = [
  {
    before: "مُحَمَّدٌ",
    word: "طَالِب",
    ending: "ٌ",
    label: "Khabar",
    arabicLabel: "الْخَبَرُ",
    sign: "Dhammah",
    note:
      "طَالِبٌ ialah Khabar kerana menerangkan Mubtada' مُحَمَّدٌ. Khabar berada dalam keadaan marfu'.",
  },

  {
    before: "الطَّالِبُ",
    word: "مُجْتَهِد",
    ending: "ٌ",
    label: "Khabar",
    arabicLabel: "الْخَبَرُ",
    sign: "Dhammah",
    note:
      "مُجْتَهِدٌ ialah Khabar kerana menerangkan Mubtada' الطَّالِبُ dan berada dalam keadaan marfu'.",
  },

  {
    before: "الْعِلْمُ",
    word: "نَافِع",
    ending: "ٌ",
    label: "Khabar",
    arabicLabel: "الْخَبَرُ",
    sign: "Dhammah",
    note:
      "نَافِعٌ ialah Khabar kerana menerangkan Mubtada' الْعِلْمُ. Tanda رفعnya ialah dhammah.",
  },
];

export default function AnimasiKhabar() {
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
      "khabarAnimasiDone",
      "true"
    );

    navigate("/latihan-khabar");
  }

  function previous() {
    if (step > 0) {
      setStep((currentStep) => currentStep - 1);
      return;
    }

    navigate("/kitab-khabar");
  }

  return (
    <main className="khabar-animation-screen">

      <div className="khabar-animation-shade" />

      <header className="khabar-animation-header">

        <span className="khabar-animation-kicker">
          الْخَبَرُ
        </span>

        <h1>
          Perhatikan Khabar yang Marfu‘
        </h1>

      </header>

      <article
        key={step}
        className="khabar-animation-card"
      >

        <div className="khabar-stage-label">

          <span>
            {current.arabicLabel}
          </span>

          <strong>
            {current.label}
          </strong>

        </div>

        <div
          className="khabar-full-sentence"
          dir="rtl"
          lang="ar"
        >

          <span className="khabar-before">
            {current.before}
          </span>

          <span className="khabar-focus-word">

            <span className="khabar-word-base">
              {current.word}
            </span>

            <span
              key={`${step}-${current.ending}`}
              className="khabar-changing-ending"
            >
              {current.ending}
            </span>

          </span>

        </div>

        <div className="khabar-sign-information">

          <span>
            Tanda akhir
          </span>

          <strong>
            {current.sign}
          </strong>

        </div>

        <p className="khabar-stage-note">
          {current.note}
        </p>

        <div
          className="khabar-comparison-flow"
          dir="rtl"
          lang="ar"
        >

          <span
            className={
              step === 0 ? "current" : ""
            }
          >
            مُحَمَّدٌ طَالِبٌ
          </span>

          <b>←</b>

          <span
            className={
              step === 1 ? "current" : ""
            }
          >
            الطَّالِبُ مُجْتَهِدٌ
          </span>

          <b>←</b>

          <span
            className={
              step === 2 ? "current" : ""
            }
          >
            الْعِلْمُ نَافِعٌ
          </span>

        </div>

      </article>

      <footer className="khabar-animation-actions">

        <button
          type="button"
          className="khabar-animation-button secondary"
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

        <div className="khabar-stage-indicator">

          {stages.map((item, index) => (
            <div
              key={item.label + index}
              className={`khabar-stage-book ${
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
          className="khabar-animation-button primary"
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