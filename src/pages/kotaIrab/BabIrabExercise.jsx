import { useNavigate } from "react-router-dom";
import { useQuestion, QuestionCard, AnswerGrid, ReflectionPanel } from "../../features";
import { babIrabQuestions } from "../../data/babIrab/questions";

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
    totalQuestions: 10,
    requirement: { passingPercentage: 100 },
    meta: {
      lesson: "Bab I'rab",
      level: "asas",
      mode: "exercise",
    },
  });

  if (finished) {
    return (
      <ReflectionPanel
        report={finalReport}
        onRetry={() => window.location.reload()}
        onContinue={() => {
          if (finalReport?.summary?.score?.passed) {
            localStorage.setItem("babIrabDone", "true");
          }

          localStorage.setItem(
            "babIrabScore",
            String(finalReport?.summary?.score?.correct || 0)
          );

          navigate("/bab-irab-selesai");
        }}
      />
    );
  }

  return (
    <QuestionCard
      question={currentQuestion}
      currentIndex={currentIndex}
      total={total}
    >
      <AnswerGrid
        options={currentQuestion?.options || []}
        onAnswer={answer}
      />
    </QuestionCard>
  );
}