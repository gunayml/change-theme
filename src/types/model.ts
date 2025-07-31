export type Theme = "light" | "dark";
export const themes: Record<Theme, string> = {
  light: "light-theme",
  dark: "dark-theme",
};
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
