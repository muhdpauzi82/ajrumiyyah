const DEFAULT_THEME = "default";

const themes = {
  default: {
    name: "default",
    primary: "#22c55e",
    secondary: "#facc15",
    background: "#0f172a",
    surface: "#1e293b",
    text: "#ffffff",
    mutedText: "#cbd5e1",
    border: "#facc15",
  },

  forest: {
    name: "forest",
    primary: "#16a34a",
    secondary: "#fde047",
    background: "#052e16",
    surface: "#14532d",
    text: "#ffffff",
    mutedText: "#d9f99d",
    border: "#facc15",
  },

  desert: {
    name: "desert",
    primary: "#d97706",
    secondary: "#facc15",
    background: "#451a03",
    surface: "#78350f",
    text: "#fff7ed",
    mutedText: "#fed7aa",
    border: "#facc15",
  },
};

export function getTheme(themeName = DEFAULT_THEME) {
  return themes[themeName] || themes[DEFAULT_THEME];
}

export function getAllThemes() {
  return Object.values(themes);
}

export function applyTheme(themeName = DEFAULT_THEME) {
  const theme = getTheme(themeName);

  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    if (key !== "name") {
      root.style.setProperty(`--color-${key}`, value);
    }
  });

  return theme;
}