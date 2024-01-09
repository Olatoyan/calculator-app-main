import { CalculatorContextProps, useCalculator } from "../contexts/CalcContext";

function DisplaySection() {
  const { state } = useCalculator() as CalculatorContextProps;
  console.log(state.displayValue.toLocaleString());
  console.log(state.displayValue);
  return (
    <section className="flex h-[12.8rem] w-full items-center justify-end rounded-[1rem] bg-very-dark-blue-gray pr-[3.2rem] text-[5.6rem] tracking-[-0.0933rem] text-white">
      {state.error ? state.error : <>{state.displayValue.toLocaleString()}</>}
    </section>
  );
}

export default DisplaySection;
