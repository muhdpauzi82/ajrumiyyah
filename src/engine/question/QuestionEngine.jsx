import { useState } from "react";
import GamePanel from "../../components/gameUI/GamePanel";
import GameButton from "../../components/gameUI/GameButton";
import "./QuestionEngine.css";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuestionEngine({
  title = "Latihan",
  questions = [],
  total = 10,
  onFinish,
}) {
  const [quiz] = useState(() => shuffle(questions).slice(0, total));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const item = quiz[current];
  const options = item ? shuffle(item.options) : [];

  function jawab(option) {
    if (selected) return;

    setSelected(option);
    const betul = option === item.answer;
    const newScore = betul ? score + 1 : score;

    setTimeout(() => {
      if (current < quiz.length - 1) {
        setScore(newScore);
        setCurrent(current + 1);
        setSelected(null);
      } else {
        <QuestionEngine title="📖 Latihan Bab I'rab"

questions={babIrabQuestions} total={10} onFinish={(score,total)=>{

    localStorage.setItem("babIrabScore",score);     navigate("/bab-irab-reflection");

}}
/>
      }
    }, 900);
  }

  if (!item) {
    return (
      <div className="question-page">
        <GamePanel title={title}>
          <h2>Tiada soalan ditemui.</h2>
        </GamePanel>
      </div>
    );
  }

  return (
    <div className="question-page">
      <GamePanel title={title}>
        <p className="question-count">
          Soalan {current + 1} / {quiz.length}
        </p>

        <div className="question-progress">
          <div
            className="question-progress-fill"
            style={{ width: `${((current + 1) / quiz.length) * 100}%` }}
          />
        </div>

        <h2 className="question-text">{item.q}</h2>

        <div className="question-options">
          {options.map((option, index) => (
            <GameButton
              key={option}
              letter={["A", "B", "C", "D"][index]}
              text={option}
              color={["blue", "green", "purple", "green"][index]}
              status={
                selected === option
                  ? option === item.answer
                    ? "correct"
                    : "wrong"
                  : ""
              }
              onClick={() => jawab(option)}
            />
          ))}
        </div>
      </GamePanel>
    </div>
  );
}