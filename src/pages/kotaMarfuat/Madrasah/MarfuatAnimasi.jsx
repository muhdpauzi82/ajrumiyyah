import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/MarfuatAnimasi.css";

import madrasahIrabBg from
  "../../assets/backgrounds/madrasah-irab-learning.webp";

const stages = [
  {
    before: "جَاءَ",
    word: "مُحَمَّد",
    ending: "ٌ",
    label: "Raf‘",
    arabicLabel: "الرَّفْعُ",
    sign: "Dhammah",
    note:
      "مُحَمَّدٌ berada dalam keadaan marfu‘ kerana menjadi pelaku dalam ayat.",
  },
  {
    before: "رَأَيْتُ",
    word: "مُحَمَّد",
    ending: "ًا",
    label: "Nasb",
    arabicLabel: "النَّصْبُ",
    sign: "Fathah",
    note:
      "مُحَمَّدًا berada dalam keadaan mansub kerana menjadi maf‘ul bih.",
  },
  {
    before: "مَرَرْتُ بِـ",
    word: "مُحَمَّد",
    ending: "ٍ",
    label: "Jar",
    arabicLabel: "الْجَرُّ",
    sign: "Kasrah",
    note:
      "مُحَمَّدٍ berada dalam keadaan majrur kerana didahului huruf jar.",
  },
];

export default function MarfuatAnimasi() {
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
      "MarfuatAnimasiDone",
      "true"
    );

    navigate("/Marfuat-quiz");
  }

  function previous() {
    if (step > 0) {
      setStep((currentStep) => currentStep - 1);
      return;
    }

    navigate("/Marfuat-learning");
  }

  return (
    <main className="irab-animation-screen">
      <section className="irab-animation-frame">
        <img
          src={madrasahIrabBg}
          className="irab-animation-background"
          alt=""
          draggable="false"
        />

        <div className="irab-animation-shade" />

        <header className="irab-animation-header">
          <span className="irab-animation-kicker">
            Bab I‘rab
          </span>

          <h1>
            Perhatikan Perubahan Akhir Kalimah
          </h1>

          </header>

        <article
          key={step}
          className="irab-animation-card"
        >
          <div className="irab-stage-label">
            <span>{current.arabicLabel}</span>
            <strong>{current.label}</strong>
          </div>

          <div
            className="irab-full-sentence"
            dir="rtl"
            lang="ar"
          >
            <span className="irab-before">
              {current.before}
            </span>

            <span className="irab-focus-word">
              <span className="irab-word-base">
                {current.word}
              </span>

              <span
                key={`${step}-${current.ending}`}
                className="irab-changing-ending"
              >
                {current.ending}
              </span>
            </span>
          </div>

          <div className="irab-sign-information">
            <span>Tanda akhir</span>
            <strong>{current.sign}</strong>
          </div>

          <p className="irab-stage-note">
            {current.note}
          </p>

          <div
            className="irab-comparison-flow"
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
              مُحَمَّدًا
            </span>

            <b>←</b>

            <span
              className={
                step === 2 ? "current" : ""
              }
            >
              مُحَمَّدٍ
            </span>
          </div>
        </article>

        <footer className="irab-animation-actions">
          <button
            type="button"
            className="irab-animation-button secondary"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
          >
            ← {step === 0 ? "Kembali" : "Sebelumnya"}
          </button>

          <div className="irab-stage-indicator">
  {stages.map((item, index) => (
    <div
      key={item.label}
      className={`stage-book
      ${
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
            className="irab-animation-button primary"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            {isLastStage
              ? "Mulakan Kuiz"
              : "Seterusnya"}{" "}
            →
          </button>
        </footer>
      </section>
    </main>
  );
}