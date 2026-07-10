export function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function prepareQuestions(questionBank, total = 10) {
  if (!Array.isArray(questionBank)) {
    throw new Error("Question bank mesti dalam bentuk array.");
  }

  return shuffleArray(questionBank).slice(0, total).map((q, index) => {
    return {
      id: q.id || `q-${index + 1}`,
      question: q.question,
      options: shuffleArray(q.options || []),
      answer: q.answer,
      explanation: q.explanation || "",
      level: q.level || "asas",
      topic: q.topic || "umum",
    };
  });
}

export function checkAnswer(question, selectedAnswer) {
  const isCorrect = selectedAnswer === question.answer;

  return {
    isCorrect,
    selectedAnswer,
    correctAnswer: question.answer,
    explanation: question.explanation,
  };
}

export function calculateResult(answers) {
  const total = answers.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const wrong = total - correct;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  return {
    total,
    correct,
    wrong,
    percentage,
    passed: percentage === 100,
  };
}