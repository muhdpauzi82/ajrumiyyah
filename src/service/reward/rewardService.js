const PLAYER_REWARD_KEY = "ajrumiyyah_player_rewards";

const defaultRewards = {
  xp: 0,
  coins: 0,
  gems: 0,
  level: 1,
  artifacts: [],
  badges: [],
};

function safeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, number) : 0;
}

export function getPlayerRewards() {
  try {
    const saved = localStorage.getItem(PLAYER_REWARD_KEY);

    if (!saved) {
      return { ...defaultRewards };
    }

    const parsed = JSON.parse(saved);

    return {
      ...defaultRewards,
      ...parsed,
      xp: safeNumber(parsed.xp),
      coins: safeNumber(parsed.coins),
      gems: safeNumber(parsed.gems),
      level: Math.max(1, safeNumber(parsed.level)),
      artifacts: Array.isArray(parsed.artifacts)
        ? parsed.artifacts
        : [],
      badges: Array.isArray(parsed.badges)
        ? parsed.badges
        : [],
    };
  } catch (error) {
    console.error("Gagal membaca ganjaran pemain:", error);
    return { ...defaultRewards };
  }
}

export function savePlayerRewards(rewards) {
  try {
    localStorage.setItem(
      PLAYER_REWARD_KEY,
      JSON.stringify(rewards)
    );

    return rewards;
  } catch (error) {
    console.error("Gagal menyimpan ganjaran pemain:", error);
    return null;
  }
}

export function calculateLevel(xp) {
  return Math.floor(safeNumber(xp) / 500) + 1;
}

export function giveRewards({
  xp = 0,
  coins = 0,
  gems = 0,
  artifact = null,
  badge = null,
} = {}) {
  const current = getPlayerRewards();

  const nextXp = current.xp + safeNumber(xp);

  const nextRewards = {
    ...current,
    xp: nextXp,
    coins: current.coins + safeNumber(coins),
    gems: current.gems + safeNumber(gems),
    level: calculateLevel(nextXp),
    artifacts:
      artifact && !current.artifacts.includes(artifact)
        ? [...current.artifacts, artifact]
        : current.artifacts,
    badges:
      badge && !current.badges.includes(badge)
        ? [...current.badges, badge]
        : current.badges,
  };

  savePlayerRewards(nextRewards);

  return nextRewards;
}

export function resetPlayerRewards() {
  savePlayerRewards({ ...defaultRewards });
  return { ...defaultRewards };
}