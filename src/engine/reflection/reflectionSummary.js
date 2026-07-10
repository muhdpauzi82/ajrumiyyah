export function createReflectionSummary(result = {}, analytics = {}, meta = {}) {
  const weakTopics = analytics.weakTopics || [];

  return {
    score: {
      total: result.total || 0,
      correct: result.correct || 0,
      wrong: result.wrong || 0,
      percentage: result.percentage || 0,
      passed: result.passed || false,
      stars: result.stars || 0,
    },

    time: {
      duration: meta.duration || 0,
      formattedDuration: meta.formattedDuration || "",
    },

    weakness: {
      hasWeakness: weakTopics.length > 0,
      topics: weakTopics.map((item) => ({
        topic: item.topic,
        percentage: item.percentage,
        wrong: item.wrong,
      })),
    },

    level: meta.level || "umum",
    mode: meta.mode || "practice",
    lesson: meta.lesson || "umum",
  };
}