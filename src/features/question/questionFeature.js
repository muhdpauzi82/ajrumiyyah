import {
  prepareQuestions,
  checkAnswer,
  buildScoreSummary,
  buildQuestionAnalytics,
  createReflectionReport,
} from "../../engine";

export function createQuestionFeature(config = {}) {
  const {
    questionBank = [],
    totalQuestions = 10,
    requirement = { passingPercentage: 100 },
    meta = {},
  } = config;

  const questions = prepareQuestions(questionBank, totalQuestions);
  const answers = [];

  function getQuestion(index = 0) {
    return questions[index] || null;
  }

  function submitAnswer(question, selectedAnswer) {
    const result = checkAnswer(question, selectedAnswer);

    answers.push({
      ...result,
      topic: question.topic,
      level: question.level,
    });

    return result;
  }

  function finish(extraMeta = {}) {
    const score = buildScoreSummary(answers, requirement);
    const analytics = buildQuestionAnalytics(answers);

    const reflection = createReflectionReport(score, analytics, {
      ...meta,
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
    getQuestion,
    submitAnswer,
    finish,
  };
}