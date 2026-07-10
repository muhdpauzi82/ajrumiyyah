export function createRecommendation(result = {}, analytics = {}) {
  const weakTopics = analytics.weakTopics || [];

  if (result.passed) {
    return {
      action: "continue",
      label: "Teruskan",
      message: "Anda boleh terus ke tahap seterusnya.",
    };
  }

  if (weakTopics.length > 0) {
    return {
      action: "review",
      label: "Ulang Nota",
      message: `Ulang semula topik: ${weakTopics
        .map((item) => item.topic)
        .join(", ")}.`,
    };
  }

  return {
    action: "retry",
    label: "Cuba Lagi",
    message: "Cuba latihan ini sekali lagi untuk mengukuhkan kefahaman.",
  };
}