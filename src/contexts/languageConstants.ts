export type Lang = "FR" | "EN";

export const languages: { code: Lang; label: string }[] = [
  { code: "FR", label: "Français" },
  { code: "EN", label: "English" },
];

export const toLocale = (ui: Lang) => (ui === "EN" ? "en" : "fr");
export const toUICode = (locale?: string) => (locale?.startsWith("en") ? "EN" : "FR");
