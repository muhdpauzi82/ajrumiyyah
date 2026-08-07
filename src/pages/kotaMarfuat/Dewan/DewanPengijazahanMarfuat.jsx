import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DewanPengijazahanMarfuat.css";

const QUESTION_BANK = [
  {
    question: "Apakah fungsi مُحَمَّدٌ dalam ayat جَاءَ مُحَمَّدٌ ؟",
    arabic: "جَاءَ مُحَمَّدٌ",
    options: ["فاعل", "خبر", "مبتدأ", "اسم كان"],
    answer: "فاعل",
  },
  {
    question: "Apakah fungsi الدَّرْسُ ?",
    arabic: "كُتِبَ الدَّرْسُ",
    options: ["نائب الفاعل", "فاعل", "خبر", "اسم إن"],
    answer: "نائب الفاعل",
  },
  {
    question: "Apakah Mubtada'?",
    arabic: "الطَّالِبُ مُجْتَهِدٌ",
    options: ["الطَّالِبُ", "مُجْتَهِدٌ"],
    answer: "الطَّالِبُ",
  },
  {
    question: "Apakah Khabar?",
    arabic: "الطَّالِبُ مُجْتَهِدٌ",
    options: ["الطَّالِبُ", "مُجْتَهِدٌ"],
    answer: "مُجْتَهِدٌ",
  },
  {
    question: "Apakah Isim Kana?",
    arabic: "كَانَ اللَّهُ غَفُورًا",
    options: ["اللَّهُ", "غَفُورًا", "كَانَ"],
    answer: "اللَّهُ",
  },
  {
    question: "Apakah Khabar Inna?",
    arabic: "إِنَّ اللَّهَ غَفُورٌ",
    options: ["اللَّهَ", "غَفُورٌ", "إِنَّ"],
    answer: "غَفُورٌ",
  },
  {
    question: "Fa'il berada dalam keadaan...",
    arabic: "الفاعل",
    options: ["مرفوع", "منصوب", "مجرور"],
    answer: "مرفوع",
  },
  {
    question: "Naib Fa'il berada dalam keadaan...",
    arabic: "نائب الفاعل",
    options: ["مرفوع", "منصوب", "مجرور"],
    answer: "مرفوع",
  },
  {
    question: "Isim Kana berada dalam keadaan...",
    arabic: "اسم كان",
    options: ["مرفوع", "منصوب", "مجرور"],
    answer: "مرفوع",
  },
  {
    question: "Khabar Inna berada dalam keadaan...",
    arabic: "خبر إن",
    options: ["مرفوع", "منصوب", "مجرور"],
    answer: "مرفوع",
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function DewanPengijazahanMarfuat() {
  const navigate = useNavigate();

  const questions = useMemo(
    () =>
      shuffle(QUESTION_BANK).map((q) => ({
        ...q,
        options: shuffle(q.options),
      })),
    []
  );

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [correct, setCorrect] = useState(0);

  const question = questions[current];

  function answer(option) {
    if (selected) return;

    setSelected(option);

    const isCorrect = option === question.answer;

    const totalCorrect =
      isCorrect ? correct + 1 : correct;

    if (isCorrect) {
      setCorrect(totalCorrect);
    }

    setTimeout(() => {

      if (current === questions.length - 1) {

        const passed =
          totalCorrect === questions.length;

        if (passed) {
          localStorage.setItem(
            "dewanMarfuatDone",
            "true"
          );

          localStorage.setItem(
            "istanaMarfuatUnlocked",
            "true"
          );

          navigate("/istana-marfuat");
        } else {

          navigate("/dewan-marfuat-result", {
            state: {
              correct: totalCorrect,
              total: questions.length,
              passed: false,
            },
          });

        }

        return;
      }

      setCurrent((c) => c + 1);
      setSelected("");

    },700);
  }

  return (

    <div className="dewan-marfuat">

      <button
        className="dewan-back-btn"
        onClick={() => navigate("/kota-marfuat")}
      >
        ← Kembali
      </button>

      <div className="dewan-panel">

        <span className="dewan-badge">
          DEWAN PENGIJAZAHAN
        </span>

        <h1>
          الاِخْتِبَارُ النِّهَائِيُّ
        </h1>

        <div className="dewan-progress">

          <div
            className="dewan-progress-fill"
            style={{
              width:
                `${((current+1)/questions.length)*100}%`,
            }}
          />

        </div>

        <div className="dewan-number">
          Soalan {current+1} / {questions.length}
        </div>

        <div className="dewan-question">

          <p>{question.question}</p>

          <div
            className="dewan-arabic"
            dir="rtl"
            lang="ar"
          >
            {question.arabic}
          </div>

        </div>

        <div className="dewan-options">

          {question.options.map((option)=>{

            let cls="dewan-option";

            if(selected){

              if(option===question.answer)
                cls+=" correct";

              else if(option===selected)
                cls+=" wrong";

            }

            return(

              <button
                key={option}
                className={cls}
                onClick={()=>answer(option)}
                disabled={selected}
                dir="rtl"
                lang="ar"
              >
                {option}
              </button>

            );

          })}

        </div>

        <div className="dewan-score">

          Betul : {correct}

        </div>

      </div>

    </div>

  );
}