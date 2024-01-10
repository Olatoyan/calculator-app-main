import { CalculatorContextProps, useCalculator } from "../contexts/CalcContext";
import { ColorContextProps, useColor } from "../contexts/ColorContext";

function DisplaySection() {
  const { state } = useCalculator() as CalculatorContextProps;
  const { state: stateColor } = useColor() as ColorContextProps;

  const { theme } = stateColor;

  // function formatDisplayValue(value: string): string {
  //   const numericValue = parseFloat(value);

  //   // Check if the value is a number and if it's too large
  //   if (!isNaN(numericValue) && Math.abs(numericValue) > 1e9) {
  //     const [coefficient, exponent] = numericValue.toExponential().split("e");
  //     const formattedExponent = exponent ? exponent.replace("+", "e") : "";
  //     return `${coefficient}${formattedExponent}`;
  //   } else {
  //     return value.toLocaleString();
  //   }
  // }

  return (
    <section
      className={`flex h-[12.8rem] w-full items-center justify-end break-words rounded-[1rem] pr-[3.2rem] text-[5.6rem] tracking-[-0.0933rem] mobile:text-[4rem] mobile:tracking-[-0.0667rem] ${
        theme === "theme-1" && "bg-very-dark-blue-gray text-white"
      } ${theme === "theme-2" && "bg-[#eee] text-[#36362C]"} ${
        theme === "theme-3" && "bg-dark-purple text-yellow"
      }`}
    >
      {state.error ? (
        state.error
      ) : (
        // <>{formatDisplayValue(state.displayValue)}</>
        <>{state.displayValue.toLocaleString()}</>
      )}
    </section>
  );
}

export default DisplaySection;
