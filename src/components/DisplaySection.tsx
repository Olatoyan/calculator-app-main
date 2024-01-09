import { useCalculator } from "../contexts/CalcContext";

function DisplaySection() {
  const { state } = useCalculator();

  return (
    <section className="flex h-[12.8rem] w-full items-center justify-end rounded-[1rem] bg-very-dark-blue-gray pr-[3.2rem] text-[5.6rem] tracking-[-0.0933rem] text-white">
      {state.error ? state.error : <>{state.displayValue}</>}
    </section>
  );
}

export default DisplaySection;
