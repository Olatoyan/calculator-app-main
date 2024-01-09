import { ColorContextProps, useColor } from "../contexts/ColorContext";

type NumbersItemsProps = {
  num: number | string;
  onClick: (number: string) => void;
  error: string | null;
};

function NumbersItems({ num, onClick, error }: NumbersItemsProps) {
  const { state } = useColor() as ColorContextProps;

  const { theme } = state;
  return (
    <button
      className={` rounded-2xl  tracking-[-0.0667rem] ${
        num === "del"
          ? "text-[2.8rem] uppercase"
          : "flex items-center justify-center  text-[4rem]"
      } ${error && "disabled:cursor-not-allowed"} ${
        num === "del" &&
        theme === "theme-1" &&
        "bg-medium-blue-gray text-white shadow-theme-1-grey-sh hover:bg-[#A2B2E1]"
      } ${
        num !== "del" &&
        theme === "theme-1" &&
        "bg-[#EAE3DC] text-[#434A59] shadow-theme-1-white-sh hover:bg-[#FFFFFE]"
      } ${
        num === "del" &&
        theme === "theme-2" &&
        "bg-teal text-white shadow-theme-2-teal-sh hover:bg-[#62B5BC]"
      } ${
        num !== "del" &&
        theme === "theme-2" &&
        "bg-light-greyish text-[#36362C] shadow-theme-2-grey-sh hover:bg-white"
      } 
      } ${
        num === "del" &&
        theme === "theme-3" &&
        "bg-deep-purple text-white shadow-theme-3-purple-sh hover:bg-[#8631AF]"
      } ${
        num !== "del" &&
        theme === "theme-3" &&
        "bg-midnight-purple text-yellow shadow-theme-3-mid-purple-sh hover:bg-[#6C34AC]"
      } 
      
      `}
      onClick={() => onClick(num.toString())}
      disabled={error ? true : false}
    >
      {num}
    </button>
  );
}

export default NumbersItems;
