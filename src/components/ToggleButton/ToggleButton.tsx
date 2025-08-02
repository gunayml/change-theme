import { Switch } from "@mui/material";
import React from "react";
import { useTheme } from "../../context/theme";

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    if (toggleTheme) {
      toggleTheme();
    }
  };

  return (
    <Switch
      checked={theme === "dark"}
      onChange={handleToggle}
      id="theme-toggle"
      inputProps={
        {
          "aria-label": "Toggle theme",
        } as React.InputHTMLAttributes<HTMLInputElement>
      }
    />
  );
};

export default ToggleButton;
