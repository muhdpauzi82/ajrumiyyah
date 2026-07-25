import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/BabIrabAnimasi.css";

const stages = [
  {
    sentence: "جَاءَ مُحَمَّدٌ",
    word: "مُحَمَّد",
    end: "ٌ",
    label: "Raf‘",
    note: "Muhammad marfu‘ kerana datang selepas fi‘il sebagai pelaku.",
  },
  {
    sentence: "رَأَيْتُ مُحَمَّدًا",
    word: "مُحَمَّد",
    end: "ًا",
    label: "Nasb",
    note: "Muhammad mansub kerana menjadi maf‘ul bih.",
  },
  {
    sentence: "مَرَرْتُ بِمُحَمَّدٍ",
    word: "مُحَمَّد",
    end: "ٍ",
    label: "Jar",
    note: "Muhammad majrur kerana didahului huruf jar.",
  },
];

export default function BabIrabAnimasi() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const current = stages[step];

  function next() {
    if (step < stages.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/bab-irab-quiz");
    }
  }

  return (
  <main className="irab-animasi-screen">
    <div className="irab-animasi-page">
      <button
        className="animasi-back"
        onClick={() => navigate("/bab-irab-learning")}
      >
        ← Kembali
      </button>

      <div className="animasi-card">
        <h1>Perhatikan Perubahan I&apos;rab</h1>

        <div
          className="focus-word"
          dir="rtl"
          lang="ar"
        >
          <span className="word-base">
            {current.word}
          </span>

          <span
            key={`${step}-${current.end}`}
            className="ending"
          >
            {current.end}
          </span>
        </div>

        <div className="label">
          {current.label}
        </div>

        <p>{current.note}</p>

        <div className="flow-vertical">
          <span>مُحَمَّدٌ</span>
          <b>↓</b>
          <span>مُحَمَّدًا</span>
          <b>↓</b>
          <span>مُحَمَّدٍ</span>
        </div>

       <button className="animasi-next" onClick={next}>
  {step < stages.length - 1
    ? "Seterusnya"
    : "📝 Mulakan Kuiz"}
</button>
      </div>
    </div>
  </main>
);
}