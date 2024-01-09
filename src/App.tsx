import HomeDetails from "./components/HomeDetails";
import { ColorContextProps, useColor } from "./contexts/ColorContext";

function App() {
  const { state } = useColor() as ColorContextProps;

  const { theme } = state;

  return (
    <main
      className={`flex min-h-[100dvh] items-center justify-center transition-all duration-300 ${
        theme === "theme-1" && "bg-theme-1-bg"
      } ${theme === "theme-2" && "bg-theme-2-bg"} ${
        theme === "theme-3" && "bg-theme-3-bg"
      }`}
    >
      <HomeDetails />
    </main>
  );
}

export default App;
