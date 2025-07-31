export type Theme = "light" | "dark";
export const themes: Record<Theme, string> = {
  light: "bg-white text-black",
  dark: "bg-gray-900 text-white",
};
export interface ThemeContextType {
  theme?: Theme;
  toggleTheme?: () => void;
}
