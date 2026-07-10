export function createTimer(duration = 60) {
  return {
    duration,
    remaining: duration,
    startedAt: null,
    finishedAt: null,
    isRunning: false,
    isFinished: false,
  };
}

export function startTimer(timer) {
  return {
    ...timer,
    startedAt: Date.now(),
    isRunning: true,
    isFinished: false,
  };
}

export function updateTimer(timer) {
  if (!timer.isRunning || !timer.startedAt) return timer;

  const elapsed = Math.floor((Date.now() - timer.startedAt) / 1000);
  const remaining = Math.max(timer.duration - elapsed, 0);

  return {
    ...timer,
    remaining,
    isFinished: remaining <= 0,
    isRunning: remaining > 0,
    finishedAt: remaining <= 0 ? Date.now() : null,
  };
}

export function stopTimer(timer) {
  return {
    ...timer,
    isRunning: false,
    finishedAt: Date.now(),
  };
}

export function resetTimer(duration = 60) {
  return createTimer(duration);
}

export function formatTime(seconds = 0) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}