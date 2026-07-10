export function calculateScore(answers = []) {
  const total = answers.length;
  const correct = answers.filter((answer) => answer.isCorrect).length;
  const wrong = total - correct;

  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);

  return {
    total,
    correct,
    wrong,
    percentage,
  };
}

export function determinePass(score, requirement = {}) {
  const passingPercentage = requirement.passingPercentage ?? 100;

  return {
    ...score,
    passed: score.percentage >= passingPercentage,
    passingPercentage,
  };
}

export function calculateStars(percentage = 0) {
  if (percentage === 100) return 3;
  if (percentage >= 80) return 2;
  if (percentage >= 60) return 1;
  return 0;
}

export function buildScoreSummary(answers = [], requirement = {}) {
  const score = calculateScore(answers);
  const result = determinePass(score, requirement);
  const stars = calculateStars(result.percentage);

  return {
    ...result,
    stars,
  };
}