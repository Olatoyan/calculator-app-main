import { ColorContextProps, useColor } from "../contexts/ColorContext";

function Logo() {
  const { state } = useColor() as ColorContextProps;

  const { theme } = state;

  return (
    <h1
      className={`text-[3.2rem] tracking-[-0.0533rem] ${
        theme === "theme-1" && "text-white"
      } ${theme === "theme-2" && "text-[#36362C]"} ${
        theme === "theme-3" && "text-yellow"
      }`}
    >
      calc
    </h1>
  );
}

export default Logo;
