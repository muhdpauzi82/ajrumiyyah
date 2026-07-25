const STORAGE_KEY = "ajrumiyyah_progress";

const DEFAULT_PROGRESS = {
  worlds: {
    gerbangKalam: true,
    kotaIrab: false,
    marfuat: false,
    mansubat: false,
    majrurat: false,
    tawabi: false,
    istana: false,
  },

  chapters: {
    gerbangKalamDone: false,
    kotaIrabDone: false,
    marfuatDone: false,
    mansubatDone: false,
    majruratDone: false,
    tawabiDone: false,
  },

  artifacts: {
    isim: false,
    fiil: false,
    huruf: false,
    kalam: false,
    irab: false,
  },
};

function cloneDefaultProgress() {
  return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
}

export function getGameProgress() {
  try {
    const savedProgress = localStorage.getItem(STORAGE_KEY);

    if (!savedProgress) {
      const defaultProgress = cloneDefaultProgress();

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(defaultProgress)
      );

      return defaultProgress;
    }

    const parsedProgress = JSON.parse(savedProgress);

    return {
      ...cloneDefaultProgress(),
      ...parsedProgress,

      worlds: {
        ...DEFAULT_PROGRESS.worlds,
        ...parsedProgress.worlds,
      },

      chapters: {
        ...DEFAULT_PROGRESS.chapters,
        ...parsedProgress.chapters,
      },

      artifacts: {
        ...DEFAULT_PROGRESS.artifacts,
        ...parsedProgress.artifacts,
      },
    };
  } catch (error) {
    console.error(
      "Gagal membaca progres Ajrumiyyah:",
      error
    );

    return cloneDefaultProgress();
  }
}

export function saveGameProgress(progress) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );
  } catch (error) {
    console.error(
      "Gagal menyimpan progres Ajrumiyyah:",
      error
    );
  }
}

export function updateGameProgress(updater) {
  const currentProgress = getGameProgress();

  const updatedProgress =
    typeof updater === "function"
      ? updater(currentProgress)
      : {
          ...currentProgress,
          ...updater,
        };

  saveGameProgress(updatedProgress);

  return updatedProgress;
}

/*
 * GERBANG KALAM
 */

export function completeGerbangKalam() {
  return updateGameProgress((progress) => ({
    ...progress,

    worlds: {
      ...progress.worlds,
      kotaIrab: true,
    },

    chapters: {
      ...progress.chapters,
      gerbangKalamDone: true,
    },

    artifacts: {
      ...progress.artifacts,
      kalam: true,
    },
  }));
}

export function isKotaIrabUnlocked() {
  const progress = getGameProgress();

  return progress.worlds.kotaIrab === true;
}

/*
 * KOTA I'RAB
 */

export function completeKotaIrab() {
  return updateGameProgress((progress) => ({
    ...progress,

    worlds: {
      ...progress.worlds,
      marfuat: true,
    },

    chapters: {
      ...progress.chapters,
      kotaIrabDone: true,
    },

    artifacts: {
      ...progress.artifacts,
      irab: true,
    },
  }));
}

export function isMarfuatUnlocked() {
  const progress = getGameProgress();

  return progress.worlds.marfuat === true;
}

/*
 * DUNIA SETERUSNYA
 */

export function unlockWorld(worldName) {
  return updateGameProgress((progress) => ({
    ...progress,

    worlds: {
      ...progress.worlds,
      [worldName]: true,
    },
  }));
}

export function isWorldUnlocked(worldName) {
  const progress = getGameProgress();

  return progress.worlds[worldName] === true;
}

/*
 * ARTIFAK
 */

export function unlockArtifact(artifactName) {
  return updateGameProgress((progress) => ({
    ...progress,

    artifacts: {
      ...progress.artifacts,
      [artifactName]: true,
    },
  }));
}

export function hasArtifact(artifactName) {
  const progress = getGameProgress();

  return progress.artifacts[artifactName] === true;
}

/*
 * RESET UNTUK TESTING
 */

export function resetGameProgress() {
  const defaultProgress = cloneDefaultProgress();

  saveGameProgress(defaultProgress);

  return defaultProgress;
}