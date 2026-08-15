import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AnimasiNaibFail.css";

const stages = [
  {
    before: "ضُرِبَ",
    word: "زَيْد",
    ending: "ٌ",
    label: "Naib Fa'il",
    arabicLabel: "نَائِبُ الْفَاعِلِ",
    sign: "Dhammah",
    note:
      "زَيْدٌ ialah نائب الفاعل kerana menggantikan tempat فاعل apabila فاعل tidak disebut. نائب الفاعل berada dalam keadaan marfu‘.",
  },

  {
    before: "كُرِّمَ",
    word: "مُحَمَّد",
    ending: "ٌ",
    label: "Naib Fa'il",
    arabicLabel: "نَائِبُ الْفَاعِلِ",
    sign: "Dhammah",
    note:
      "مُحَمَّدٌ menjadi نائب الفاعل kerana menggantikan فاعل yang tidak disebut. Tanda رفعnya ialah dhammah.",
  },

  {
    before: "كُتِبَ",
    word: "الدَّرْس",
    ending: "ُ",
    label: "Naib Fa'il",
    arabicLabel: "نَائِبُ الْفَاعِلِ",
    sign: "Dhammah",
    note:
      "الدَّرْسُ ialah نائب الفاعل dalam ayat pasif. Ia berada dalam keadaan marfu‘ dan tanda رفعnya ialah dhammah.",
  },
];

export default function AnimasiNaibFail() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const current = stages[step];

  const isLastStage =
    step === stages.length - 1;

  function next() {
    if (!isLastStage) {
      setStep(
        (currentStep) => currentStep + 1
      );

      return;
    }

    localStorage.setItem(
      "naibFailAnimasiDone",
      "true"
    );

    navigate("/latihan-naib-fail");
  }

  function previous() {
    if (step > 0) {
      setStep(
        (currentStep) => currentStep - 1
      );

      return;
    }

    navigate("/kitab-naib-fail");
  }

  return (
    <main className="naib-animation-screen">

      <div className="naib-animation-shade" />

      <header className="naib-animation-header">

        <span className="naib-animation-kicker">
          نَائِبُ الْفَاعِلِ
        </span>

        <h1>
          Perhatikan Naib Fa'il yang Marfu‘
        </h1>

      </header>

      <article
        key={step}
        className="naib-animation-card"
      >

        <div className="naib-stage-label">

          <span>
            {current.arabicLabel}
          </span>

          <strong>
            {current.label}
          </strong>

        </div>

        <div
          className="naib-full-sentence"
          dir="rtl"
          lang="ar"
        >

          <span className="naib-before">
            {current.before}
          </span>

          <span className="naib-focus-word">

            <span className="naib-word-base">
              {current.word}
            </span>

            <span
              key={`${step}-${current.ending}`}
              className="naib-changing-ending"
            >
              {current.ending}
            </span>

          </span>

        </div>

        <div className="naib-sign-information">

          <span>
            Tanda akhir
          </span>

          <strong>
            {current.sign}
          </strong>

        </div>

        <p className="naib-stage-note">
          {current.note}
        </p>

        <div
          className="naib-comparison-flow"
          dir="rtl"
          lang="ar"
        >

          <span
            className={
              step === 0
                ? "current"
                : ""
            }
          >
            زَيْدٌ
          </span>

          <b>←</b>

          <span
            className={
              step === 1
                ? "current"
                : ""
            }
          >
            مُحَمَّدٌ
          </span>

          <b>←</b>

          <span
            className={
              step === 2
                ? "current"
                : ""
            }
          >
            الدَّرْسُ
          </span>

        </div>

      </article>

      <footer className="naib-animation-actions">

        <button
          type="button"
          className="naib-animation-button secondary"
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

        <div className="naib-stage-indicator">

          {stages.map(
            (item, index) => (
              <div
                key={
                  item.label + index
                }
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
            )
          )}

        </div>

        <button
          type="button"
          className="naib-animation-button primary"
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