import { CalculatorContextProps, useCalculator } from "../contexts/CalcContext";
import { ColorContextProps, useColor } from "../contexts/ColorContext";

function DisplaySection() {
  const { state } = useCalculator() as CalculatorContextProps;
  const { state: stateColor } = useColor() as ColorContextProps;

  const { theme } = stateColor;
  return (
    <section
      className={`flex h-[12.8rem] w-full items-center justify-end rounded-[1rem] pr-[3.2rem] text-[5.6rem] tracking-[-0.0933rem] ${
        theme === "theme-1" && "bg-very-dark-blue-gray text-white"
      } ${theme === "theme-2" && "bg-[#eee] text-[#36362C]"} ${
        theme === "theme-3" && "bg-dark-purple text-yellow"
      }`}
    >
      {state.error ? state.error : <>{state.displayValue.toLocaleString()}</>}
    </section>
  );
}

export default DisplaySection;
