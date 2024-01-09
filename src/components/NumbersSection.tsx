import { CalculatorContextProps, useCalculator } from "../contexts/CalcContext";
import NumbersItems from "./NumbersItems";
import NumbersItems2 from "./NumbersItems2";

function NumbersSection() {
  const { inputNumber, calculateResult, clear, backspace, state } =
    useCalculator() as CalculatorContextProps;
  const { error } = state;
  const handleButtonClick = (value: number | string) => {
    // console.log(value);
    if (typeof value === "number" || value === ".") {
      inputNumber(value.toString());
      console.log("qqqqqqqq");
    } else if (value === "del") {
      backspace();
    } else if (value === "reset") {
      clear();
    } else if (value === "=") {
      calculateResult();
    } else {
      inputNumber(value);
    }
  };

  return (
    <section className="grid grid-cols-4 gap-10 rounded-2xl bg-dark-blue-gray p-12">
      <NumbersItems num={7} onClick={handleButtonClick} error={error} />
      <NumbersItems num={8} onClick={handleButtonClick} error={error} />
      <NumbersItems num={9} onClick={handleButtonClick} error={error} />
      <NumbersItems num="del" onClick={handleButtonClick} error={error} />
      <NumbersItems num={4} onClick={handleButtonClick} error={error} />
      <NumbersItems num={5} onClick={handleButtonClick} error={error} />
      <NumbersItems num={6} onClick={handleButtonClick} error={error} />
      <NumbersItems num="+" onClick={handleButtonClick} error={error} />
      <NumbersItems num={1} onClick={handleButtonClick} error={error} />
      <NumbersItems num={2} onClick={handleButtonClick} error={error} />
      <NumbersItems num={3} onClick={handleButtonClick} error={error} />
      <NumbersItems num="-" onClick={handleButtonClick} error={error} />
      <NumbersItems num="." onClick={handleButtonClick} error={error} />
      <NumbersItems num={0} onClick={handleButtonClick} error={error} />
      <NumbersItems num="/" onClick={handleButtonClick} error={error} />
      <NumbersItems num="*" onClick={handleButtonClick} error={error} />
      <NumbersItems2 num="reset" onClick={handleButtonClick} />
      <NumbersItems2 num="=" onClick={handleButtonClick} />
    </section>
  );
}

export default NumbersSection;
