export const THEME_CLASSES = {
  DARK: {
    background: "min-h-screen bg-slate-900",
    text: "text-slate-100",
    textSecondary: "text-slate-400",
    card: "bg-slate-800/50",
    border: "border-slate-700",
    accent: "text-blue-400",
  },
  LIGHT: {
    background: "min-h-screen bg-blue-50",
    text: "text-slate-900",
    textSecondary: "text-slate-600",
    card: "bg-white/80",
    border: "border-slate-200",
    accent: "text-blue-600",
  },
};

export const NAVIGATION_SECTIONS = [
  "home",
  "about",
  "projects",
  "skills",
  "contact",
];

export const ANIMATION_CONFIG = {
  scrollBehavior: "smooth",
  fadeInDelay: 100,
  slideInDuration: 300,
};
