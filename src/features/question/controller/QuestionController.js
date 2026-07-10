import {
  prepareQuestions,
  checkAnswer,
  buildScoreSummary,
  buildQuestionAnalytics,
  createReflectionReport,
} from "../../../engine";

export function createQuestionController(config = {}) {
  const questions = prepareQuestions(
    config.questionBank || [],
    config.totalQuestions || 10
  );

  const answers = [];

  function submitAnswer(question, selectedAnswer) {
    const result = checkAnswer(question, selectedAnswer);

    answers.push({
      ...result,
      questionId: question.id,
      topic: question.topic,
      level: question.level,
    });

    return result;
  }

  function finish(extraMeta = {}) {
    const score = buildScoreSummary(answers, config.requirement || {});
    const analytics = buildQuestionAnalytics(answers);
    const reflection = createReflectionReport(score, analytics, {
      ...(config.meta || {}),
      ...extraMeta,
    });

    return {
      questions,
      answers,
      score,
      analytics,
      reflection,
    };
  }

  return {
    questions,
    answers,
    submitAnswer,
    finish,
  };
}