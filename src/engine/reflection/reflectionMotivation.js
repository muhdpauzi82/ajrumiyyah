export function createReflectionMotivation(summary = {}) {
  const score = summary.score?.percentage ?? 0;

  if (score === 100) {
    return {
      type: "excellent",
      message: "Ilmu yang dikuasai dengan baik akan menjadi cahaya dalam perjalanan seterusnya.",
    };
  }

  if (score >= 80) {
    return {
      type: "good",
      message: "Sedikit lagi usaha dan anda mampu mencapai penguasaan penuh.",
    };
  }

  if (score >= 60) {
    return {
      type: "fair",
      message: "Setiap ulang kaji kecil hari ini akan membina kefahaman yang besar esok.",
    };
  }

  return {
    type: "encourage",
    message: "Jangan putus asa. Kesilapan hari ini ialah jalan menuju kefahaman esok.",
  };
}