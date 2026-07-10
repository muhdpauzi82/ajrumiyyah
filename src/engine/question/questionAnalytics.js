export function analyzeByTopic(answers = []) {
  const topicMap = {};

  answers.forEach((item) => {
    const topic = item.topic || "umum";

    if (!topicMap[topic]) {
      topicMap[topic] = {
        topic,
        total: 0,
        correct: 0,
        wrong: 0,
      };
    }

    topicMap[topic].total++;

    if (item.isCorrect) {
      topicMap[topic].correct++;
    } else {
      topicMap[topic].wrong++;
    }
  });

  return Object.values(topicMap).map((item) => ({
    ...item,
    percentage:
      item.total === 0 ? 0 : Math.round((item.correct / item.total) * 100),
  }));
}

export function analyzeByLevel(answers = []) {
  const levelMap = {};

  answers.forEach((item) => {
    const level = item.level || "asas";

    if (!levelMap[level]) {
      levelMap[level] = {
        level,
        total: 0,
        correct: 0,
        wrong: 0,
      };
    }

    levelMap[level].total++;

    if (item.isCorrect) {
      levelMap[level].correct++;
    } else {
      levelMap[level].wrong++;
    }
  });

  return Object.values(levelMap).map((item) => ({
    ...item,
    percentage:
      item.total === 0 ? 0 : Math.round((item.correct / item.total) * 100),
  }));
}

export function findWeakTopics(topicAnalytics = []) {
  return [...topicAnalytics]
    .filter((item) => item.percentage < 80)
    .sort((a, b) => a.percentage - b.percentage);
}

export function buildQuestionAnalytics(answers = []) {
  const topicAnalytics = analyzeByTopic(answers);
  const levelAnalytics = analyzeByLevel(answers);
  const weakTopics = findWeakTopics(topicAnalytics);

  return {
    topicAnalytics,
    levelAnalytics,
    weakTopics,
    hasWeakness: weakTopics.length > 0,
  };
}