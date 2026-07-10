import { useMemo, useState } from "react";
import { createQuestionController } from "../controller/QuestionController";

export function useQuestion(config = {}) {
  const controller = useMemo(() => createQuestionController(config), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastResult, setLastResult] = useState(null);
  const [finished, setFinished] = useState(false);
  const [finalReport, setFinalReport] = useState(null);

  const currentQuestion = controller.questions[currentIndex] || null;

  function answer(selectedAnswer) {
    if (!currentQuestion || finished) return;

    const result = controller.submitAnswer(currentQuestion, selectedAnswer);
    setLastResult(result);

    const isLast = currentIndex >= controller.questions.length - 1;

    if (isLast) {
      setFinished(true);
      setFinalReport(controller.finish());
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  return {
    questions: controller.questions,
    currentQuestion,
    currentIndex,
    total: controller.questions.length,
    lastResult,
    finished,
    finalReport,
    answer,
  };
}