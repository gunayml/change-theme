import { createContext } from "react";
import type { ThemeContextType } from "../../types/model";

export const ThemeContext = createContext<ThemeContextType | null>(null);
