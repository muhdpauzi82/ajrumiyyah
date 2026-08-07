import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DataranMarfuat.css";

const QUESTIONS = [
  {
    sentence: "جَاءَ مُحَمَّدٌ",
    question: "Pilih perkataan yang menjadi Fa'il.",
    words: ["جَاءَ", "مُحَمَّدٌ"],
    answer: "مُحَمَّدٌ",
  },
  {
    sentence: "الطَّالِبُ مُجْتَهِدٌ",
    question: "Pilih Mubtada'.",
    words: ["الطَّالِبُ", "مُجْتَهِدٌ"],
    answer: "الطَّالِبُ",
  },
  {
    sentence: "الطَّالِبُ مُجْتَهِدٌ",
    question: "Pilih Khabar.",
    words: ["الطَّالِبُ", "مُجْتَهِدٌ"],
    answer: "مُجْتَهِدٌ",
  },
  {
    sentence: "كَانَ اللَّهُ غَفُورًا",
    question: "Pilih Isim Kana.",
    words: ["كَانَ", "اللَّهُ", "غَفُورًا"],
    answer: "اللَّهُ",
  },
  {
    sentence: "إِنَّ اللَّهَ غَفُورٌ",
    question: "Pilih Khabar Inna.",
    words: ["إِنَّ", "اللَّهَ", "غَفُورٌ"],
    answer: "غَفُورٌ",
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function DataranMarfuat() {
  const navigate = useNavigate();

  const questions = useMemo(() => shuffle(QUESTIONS), []);

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState("");

  const question = questions[index];

  function choose(word) {
    if (selected) return;

    setSelected(word);

    const isCorrect = word === question.answer;

    const totalCorrect = isCorrect ? correct + 1 : correct;

    if (isCorrect) setCorrect(totalCorrect);

    setTimeout(() => {

      if (index === questions.length - 1) {

        const passed =
          totalCorrect === questions.length;

        if (passed) {
          localStorage.setItem(
            "dataranMarfuatDone",
            "true"
          );
        }

        navigate("/dewan-pengijazahan-marfuat");

        return;
      }

      setIndex(index + 1);
      setSelected("");

    }, 700);
  }

  return (
    <div className="dataran-marfuat">

      <button
        className="dataran-back-btn"
        onClick={() => navigate("/kota-marfuat")}
      >
        ← Kembali
      </button>

      <div className="dataran-panel">

        <span className="dataran-badge">
          DATARAN MARFU'AT
        </span>

        <h1>
          تَحْلِيلُ الْإِعْرَابِ
        </h1>

        <div className="question-count">
          Soalan {index + 1} / {questions.length}
        </div>

        <div
          className="sentence"
          dir="rtl"
          lang="ar"
        >
          {question.sentence}
        </div>

        <p className="instruction">
          {question.question}
        </p>

        <div className="word-grid">
          {question.words.map((word) => {

            let cls = "word-btn";

            if (selected) {

              if (word === question.answer)
                cls += " correct";

              else if (word === selected)
                cls += " wrong";
            }

            return (
              <button
                key={word}
                className={cls}
                onClick={() => choose(word)}
                disabled={selected}
                dir="rtl"
                lang="ar"
              >
                {word}
              </button>
            );

          })}
        </div>

        <div className="score-box">
          Betul : {correct}
        </div>

      </div>

    </div>
  );
}