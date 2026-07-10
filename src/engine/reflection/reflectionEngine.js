export function createReflection(result = {}, analytics = {}) {
  const weakTopics = analytics.weakTopics || [];

  if (result.passed) {
    return {
      type: "success",
      title: "Tahniah!",
      message:
        "Anda berjaya menguasai latihan ini dengan baik. Teruskan ke cabaran seterusnya.",
      recommendation: "Teruskan perjalanan pembelajaran.",
    };
  }

  if (weakTopics.length > 0) {
    const topicNames = weakTopics.map((item) => item.topic).join(", ");

    return {
      type: "weakness",
      title: "Perlu Ulang Kaji",
      message: `Anda masih lemah pada topik: ${topicNames}.`,
      recommendation:
        "Ulang semula nota berkaitan dan cuba latihan ini sekali lagi.",
    };
  }

  return {
    type: "general",
    title: "Teruskan Usaha",
    message:
      "Anda hampir menguasai latihan ini. Semak semula nota dan cuba sekali lagi.",
    recommendation: "Fokus pada soalan yang dijawab salah.",
  };
}