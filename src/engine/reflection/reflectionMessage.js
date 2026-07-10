export function createReflectionMessage(summary = {}) {
  const score = summary.score?.percentage ?? 0;
  const weakTopics = summary.weakness?.topics ?? [];

  // Cemerlang
  if (score === 100) {
    return {
      type: "excellent",
      title: "Cemerlang!",
      message:
        "Alhamdulillah. Anda telah menguasai semua soalan dalam latihan ini dengan sangat baik. Teruskan semangat ini ke cabaran seterusnya.",
    };
  }

  // Sangat Baik
  if (score >= 80) {
    return {
      type: "good",
      title: "Prestasi Sangat Baik",
      message:
        weakTopics.length > 0
          ? `Anda menunjukkan penguasaan yang baik. Berikan sedikit perhatian kepada topik ${weakTopics
              .map((t) => t.topic)
              .join(", ")} untuk meningkatkan lagi pencapaian anda.`
          : "Anda menunjukkan penguasaan yang baik. Teruskan latihan secara konsisten.",
    };
  }

  // Sederhana
  if (score >= 60) {
    return {
      type: "fair",
      title: "Teruskan Berusaha",
      message:
        "Asas kefahaman anda semakin terbentuk. Dengan sedikit ulang kaji dan latihan tambahan, pencapaian anda akan menjadi lebih baik.",
    };
  }

  // Perlu Bimbingan
  return {
    type: "needs-improvement",
    title: "Mari Perbaiki Bersama",
    message:
      "Jangan risau jika masih terdapat kesilapan. Setiap latihan ialah peluang untuk belajar. Ulang semula nota yang berkaitan dan cuba sekali lagi.",
  };
}