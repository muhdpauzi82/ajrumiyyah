export const QUESTION_FLOW = {
  PRACTICE: "practice",
  TEST: "test",
  BOSS: "boss",
  SPEED: "speed",
  SURVIVAL: "survival",
};

export function createQuestionFlow(mode = QUESTION_FLOW.PRACTICE) {
  const flows = {
    [QUESTION_FLOW.PRACTICE]: {
      mode,
      showExplanation: true,
      allowRetry: true,
      requireFullMark: false,
      autoNext: false,
      hasTimer: false,
    },

    [QUESTION_FLOW.TEST]: {
      mode,
      showExplanation: false,
      allowRetry: false,
      requireFullMark: true,
      autoNext: true,
      hasTimer: true,
    },

    [QUESTION_FLOW.BOSS]: {
      mode,
      showExplanation: false,
      allowRetry: false,
      requireFullMark: true,
      autoNext: true,
      hasTimer: true,
    },

    [QUESTION_FLOW.SPEED]: {
      mode,
      showExplanation: false,
      allowRetry: false,
      requireFullMark: false,
      autoNext: true,
      hasTimer: true,
    },

    [QUESTION_FLOW.SURVIVAL]: {
      mode,
      showExplanation: false,
      allowRetry: false,
      requireFullMark: false,
      autoNext: true,
      hasTimer: true,
      endOnWrong: true,
    },
  };

  return flows[mode] || flows[QUESTION_FLOW.PRACTICE];
}