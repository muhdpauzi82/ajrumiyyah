const audioCache = {};

export function createAudio(src, options = {}) {
  if (!src) return null;

  if (!audioCache[src]) {
    audioCache[src] = new Audio(src);
  }

  const audio = audioCache[src];

  audio.loop = options.loop ?? false;
  audio.volume = options.volume ?? 1;

  return audio;
}

export function playAudio(src, options = {}) {
  const audio = createAudio(src, options);

  if (!audio) return;

  audio.currentTime = options.restart ? 0 : audio.currentTime;
  audio.play().catch(() => {});
}

export function pauseAudio(src) {
  const audio = audioCache[src];

  if (audio) audio.pause();
}

export function stopAudio(src) {
  const audio = audioCache[src];

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

export function stopAllAudio() {
  Object.values(audioCache).forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

export function setAudioVolume(src, volume = 1) {
  const audio = audioCache[src];

  if (audio) {
    audio.volume = Math.min(Math.max(volume, 0), 1);
  }
}

export function playSfx(src, options = {}) {
  if (!src) return;

  const audio = new Audio(src);
  audio.volume = options.volume ?? 0.6;
  audio.play().catch(() => {});
}