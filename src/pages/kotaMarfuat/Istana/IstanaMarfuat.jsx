import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/IstanaMarfuat.css";

const FINAL_QUESTIONS = [
  {
    arabic: "جَاءَ مُحَمَّدٌ",
    question: "Apakah fungsi مُحَمَّدٌ ?",
    options: [
      "فاعل",
      "مبتدأ",
      "خبر",
      "نائب الفاعل",
    ],
    answer: "فاعل",
  },
  {
    arabic: "كُتِبَ الدَّرْسُ",
    question: "Apakah fungsi الدَّرْسُ ?",
    options: [
      "نائب الفاعل",
      "فاعل",
      "خبر",
      "اسم كان",
    ],
    answer: "نائب الفاعل",
  },
  {
    arabic: "الطَّالِبُ مُجْتَهِدٌ",
    question: "Apakah Mubtada'?",
    options: [
      "الطَّالِبُ",
      "مُجْتَهِدٌ",
    ],
    answer: "الطَّالِبُ",
  },
  {
    arabic: "الطَّالِبُ مُجْتَهِدٌ",
    question: "Apakah Khabar?",
    options: [
      "الطَّالِبُ",
      "مُجْتَهِدٌ",
    ],
    answer: "مُجْتَهِدٌ",
  },
  {
    arabic: "كَانَ اللَّهُ غَفُورًا",
    question: "Apakah Isim Kana?",
    options: [
      "اللَّهُ",
      "غَفُورًا",
      "كَانَ",
    ],
    answer: "اللَّهُ",
  },
  {
    arabic: "إِنَّ اللَّهَ غَفُورٌ",
    question: "Apakah Khabar Inna?",
    options: [
      "اللَّهَ",
      "غَفُورٌ",
      "إِنَّ",
    ],
    answer: "غَفُورٌ",
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function IstanaMarfuat() {

  const navigate = useNavigate();

  const questions = useMemo(
    () =>
      shuffle(FINAL_QUESTIONS).map((q) => ({
        ...q,
        options: shuffle(q.options),
      })),
    []
  );

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [correct, setCorrect] = useState(0);

  const question = questions[index];

  function choose(answer) {

    if (selected) return;

    setSelected(answer);

    const isCorrect =
      answer === question.answer;

    const newCorrect =
      isCorrect ? correct + 1 : correct;

    if (isCorrect)
      setCorrect(newCorrect);

    setTimeout(() => {

      if (index === questions.length - 1) {

        const passed =
          newCorrect === questions.length;

        if (passed) {

          localStorage.setItem(
            "istanaMarfuatDone",
            "true"
          );

          localStorage.setItem(
            "kotaMansubatUnlocked",
            "true"
          );

          navigate("/chapter-complete-marfuat");

        } else {

          navigate("/dewan-marfuat-result",{
            state:{
              correct:newCorrect,
              total:questions.length,
              passed:false,
            }
          });

        }

        return;
      }

      setIndex(index+1);
      setSelected("");

    },700);

  }

  return(

<div className="istana-marfuat">

<button
className="istana-back-btn"
onClick={()=>navigate("/kota-marfuat")}
>

← Kembali

</button>

<div className="istana-panel">

<div className="boss-title">

👑 PENJAGA ISTANA MARFU'AT

</div>

<h1>

الْاِخْتِبَارُ الْعَظِيمُ

</h1>

<div className="boss-image">

🧙‍♂️

</div>

<div className="boss-text">

Aku ialah Penjaga Kota Marfu'at.

Jawab semua soalan dengan tepat
untuk memperoleh Artifak Marfu'at.

</div>

<div className="boss-progress">

<div
className="boss-progress-fill"
style={{
width:
`${((index+1)/questions.length)*100}%`
}}
/>

</div>

<div className="boss-number">

Soalan {index+1} / {questions.length}

</div>

<div className="boss-question">

<p>

{question.question}

</p>

<div
className="boss-arabic"
dir="rtl"
lang="ar"
>

{question.arabic}

</div>

</div>

<div className="boss-options">

{question.options.map((option)=>{

let cls="boss-option";

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
disabled={selected}
onClick={()=>choose(option)}
dir="rtl"
lang="ar"
>

{option}

</button>

);

})}

</div>

<div className="boss-score">

Markah :
{correct}
/
{questions.length}

</div>

</div>

</div>

);

}