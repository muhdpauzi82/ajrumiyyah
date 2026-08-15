import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AnimasiTabiMarfu.css";

const stages = [
  {
    before: "جَاءَ مُحَمَّدٌ",
    word: "الْمُجْتَهِد",
    ending: "ُ",
    label: "Na'at",
    arabicLabel: "النَّعْتُ",
    sign: "Dhammah",
    note:
      "الْمُجْتَهِدُ ialah نعت yang mengikuti مُحَمَّدٌ. Oleh sebab مُحَمَّدٌ marfu‘, النعت juga menjadi marfu‘.",
  },

  {
    before: "جَاءَ مُحَمَّدٌ",
    word: "وَخَالِد",
    ending: "ٌ",
    label: "‘Ataf",
    arabicLabel: "الْعَطْفُ",
    sign: "Dhammah",
    note:
      "وَخَالِدٌ mengikuti مُحَمَّدٌ yang marfu‘. Oleh itu خَالِدٌ juga berada dalam keadaan marfu‘.",
  },

  {
    before: "جَاءَ مُحَمَّدٌ",
    word: "نَفْسُه",
    ending: "ُ",
    label: "Taukid",
    arabicLabel: "التَّوْكِيدُ",
    sign: "Dhammah",
    note:
      "نَفْسُهُ ialah توكيد yang mengikuti مُحَمَّدٌ. Oleh sebab المتبوع marfu‘, التوكيد juga marfu‘.",
  },
];

export default function AnimasiTabiMarfu() {
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
      "tabiMarfuAnimasiDone",
      "true"
    );

    navigate("/latihan-tabi-marfu");
  }

  function previous() {
    if (step > 0) {
      setStep(
        (currentStep) => currentStep - 1
      );
      return;
    }

    navigate("/kitab-tabi-marfu");
  }

  return (
    <main className="tabi-marfu-animation-screen">

      <div className="tabi-marfu-animation-shade" />

      <header className="tabi-marfu-animation-header">

        <span className="tabi-marfu-animation-kicker">
          التَّابِعُ لِلْمَرْفُوعِ
        </span>

        <h1>
          Perhatikan Tabi‘ yang Mengikuti Marfu‘
        </h1>

      </header>

      <article
        key={step}
        className="tabi-marfu-animation-card"
      >

        <div className="tabi-marfu-stage-label">

          <span>
            {current.arabicLabel}
          </span>

          <strong>
            {current.label}
          </strong>

        </div>

        <div
          className="tabi-marfu-full-sentence"
          dir="rtl"
          lang="ar"
        >

          <span className="tabi-marfu-before">
            {current.before}
          </span>

          <span className="tabi-marfu-focus-word">

            <span className="tabi-marfu-word-base">
              {current.word}
            </span>

            <span
              key={`${step}-${current.ending}`}
              className="tabi-marfu-changing-ending"
            >
              {current.ending}
            </span>

          </span>

        </div>

        <div className="tabi-marfu-sign-information">

          <span>
            Tanda akhir
          </span>

          <strong>
            {current.sign}
          </strong>

        </div>

        <p className="tabi-marfu-stage-note">
          {current.note}
        </p>

        <div
          className="tabi-marfu-comparison-flow"
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
            النَّعْتُ
          </span>

          <b>←</b>

          <span
            className={
              step === 1
                ? "current"
                : ""
            }
          >
            الْعَطْفُ
          </span>

          <b>←</b>

          <span
            className={
              step === 2
                ? "current"
                : ""
            }
          >
            التَّوْكِيدُ
          </span>

        </div>

      </article>

      <footer className="tabi-marfu-animation-actions">

        <button
          type="button"
          className="tabi-marfu-animation-button secondary"
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

        <div className="tabi-marfu-stage-indicator">

          {stages.map((item, index) => (
            <div
              key={item.label + index}
              className={`tabi-marfu-stage-book ${
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
          className="tabi-marfu-animation-button primary"
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