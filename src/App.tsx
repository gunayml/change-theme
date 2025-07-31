import "./App.css";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import { useTheme } from "./context/theme";
import { themes } from "./types/model";

function App() {
  const { theme } = useTheme();

  return (
    <div className={themes[theme]}>
      <p>{theme}</p>
      <ToggleButton />
    </div>
  );
}

export default App;
