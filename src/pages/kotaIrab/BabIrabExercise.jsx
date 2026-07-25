import { useNavigate } from "react-router-dom";
import {
  useQuestion,
  QuestionCard,
  AnswerGrid,
  ReflectionPanel,
} from "../../features";
import { babIrabQuestions } from "../../data/babIrab/questions";
import "../../styles/BabIrabExercise.css";


export default function BabIrabExercise() {
  const navigate = useNavigate();

  const {
    currentQuestion,
    currentIndex,
    total,
    finished,
    finalReport,
    answer,
  } = useQuestion({
    questionBank: babIrabQuestions,
    totalQuestions: 30,
    requirement: {
      passingPercentage: 100,
    },
    meta: {
      lesson: "Bab I'rab",
      level: "asas",
      mode: "exercise",
    },
  });

  const passed =
    finalReport?.summary?.score?.passed === true;

  const correctScore =
    finalReport?.summary?.score?.correct || 0;

  function handleContinue() {
    localStorage.setItem(
      "babIrabScore",
      String(correctScore)
    );

    if (!passed) {
      alert(
        "Anda perlu menjawab semua soalan dengan betul sebelum meneruskan."
      );
      return;
    }

    localStorage.setItem("babIrabDone", "true");
    localStorage.setItem("babIrabQuizDone", "true");

    navigate("/bab-irab-selesai");
  }

  if (finished) {
    return (
      <ReflectionPanel
        report={finalReport}
        onRetry={() => window.location.reload()}
        onContinue={handleContinue}
      />
    );
  }

 return (
  <QuestionCard
    question={currentQuestion}
    currentIndex={currentIndex}
    total={total}
  >
    {currentQuestion?.display && (
      <div className="irab-question-display">
        {currentQuestion.display}
      </div>
    )}

    {currentQuestion?.vocabulary && (
      <div className="irab-vocabulary">
        <span className="irab-vocabulary-arabic">
          {currentQuestion.vocabulary.arabic}
        </span>

        <span className="irab-vocabulary-meaning">
          {currentQuestion.vocabulary.meaning}
        </span>
      </div>
    )}

    <AnswerGrid
      options={currentQuestion?.options || []}
      onAnswer={answer}
    />
  </QuestionCard>
);
}