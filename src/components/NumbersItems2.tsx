import { ColorContextProps, useColor } from "../contexts/ColorContext";

type NumbersItemsProps = {
  num: string;
  onClick: (number: string) => void;
};

function NumbersItems2({ num, onClick }: NumbersItemsProps) {
  const { state } = useColor() as ColorContextProps;

  const { theme } = state;

  return (
    <button
      className={` mobile:text-[2rem] col-span-2 rounded-2xl py-5 text-[2.8rem] uppercase tracking-[-0.0667rem] text-white  ${
        num !== "=" &&
        theme === "theme-1" &&
        "bg-medium-blue-gray text-white shadow-theme-1-grey-sh hover:bg-[#a2b2e1]"
      } ${
        num === "=" &&
        theme === "theme-1" &&
        "bg-red text-white shadow-theme-1-red-sh hover:bg-[#F96B5B]"
      } ${
        num !== "=" &&
        theme === "theme-2" &&
        "shadow-theme-1-teal-sh bg-teal text-white hover:bg-[#62B5BC]"
      } ${
        num === "=" &&
        theme === "theme-2" &&
        "shadow-theme-1-orange-sh bg-orange text-[#434A59] hover:bg-[#FF8A38]"
      } ${
        num !== "=" &&
        theme === "theme-3" &&
        "shadow-theme-1-purple-sh bg-deep-purple text-white hover:bg-[#8631AF]"
      } ${
        num === "=" &&
        theme === "theme-3" &&
        "shadow-theme-1-cyan-sh bg-cyan text-[#1a2327] hover:bg-[#93FFF8]"
      } `}
      onClick={() => onClick(num.toString())}
    >
      {num}
    </button>
  );
}

export default NumbersItems2;
