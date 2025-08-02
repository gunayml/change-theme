import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleButton from "../ToggleButton";
import type { Theme, ThemeContextType } from "../../../types/model";
import { vi } from "vitest";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const renderWithTheme = (
  theme: Theme,
  toggleButtonProps: Partial<React.ComponentProps<typeof ToggleButton>> = {}
) => {
  const mockToggleTheme = vi.fn();
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme: mockToggleTheme,
  };

  render(
    <ThemeContext.Provider value={contextValue}>
      <ToggleButton {...toggleButtonProps} />
    </ThemeContext.Provider>
  );

  return { mockToggleTheme };
};

describe("ToggleButton", () => {
  test("renders switch as checked when theme is dark", () => {
    renderWithTheme("dark");
    const switchElement = screen.getByRole("checkbox", {
      name: /toggle theme/i,
    });
    expect(switchElement).toBeChecked();
  });

  test("calls toggleTheme when clicked)", async () => {
    const { mockToggleTheme } = renderWithTheme("dark");
    const switchElement = screen.getByRole("checkbox", {
      name: /toggle theme/i,
    });
    await userEvent.click(switchElement);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  test("has correct aria-label for accessibility", () => {
    renderWithTheme("light");
    const switchElement = screen.getByRole("checkbox");
    expect(switchElement).toHaveAttribute("aria-label", "Toggle theme");
  });

  test("does not call toggleTheme without interaction", () => {
    const { mockToggleTheme } = renderWithTheme("dark");
    expect(mockToggleTheme).not.toHaveBeenCalled();
  });
});
