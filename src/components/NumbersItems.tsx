import { ColorContextProps, useColor } from "../contexts/ColorContext";

type NumbersItemsProps = {
  num: number | string;
  onClick: (number: string) => void;
  error: string | null;
};

function NumbersItems({ num, onClick, error }: NumbersItemsProps) {
  const { state } = useColor() as ColorContextProps;

  const { theme } = state;

  const isDeleteButton = num === "del";
  const isTheme1 = theme === "theme-1";
  const isTheme2 = theme === "theme-2";
  const isTheme3 = theme === "theme-3";
  return (
    <button
      className={` rounded-2xl  tracking-[-0.0667rem] ${
        isDeleteButton
          ? "mobile:text-[2rem] text-[2.8rem] uppercase"
          : "mobile:text-[3.2rem] flex items-center  justify-center text-[4rem]"
      } ${error && "disabled:cursor-not-allowed"} ${
        isDeleteButton &&
        isTheme1 &&
        !error &&
        "bg-medium-blue-gray text-white shadow-theme-1-grey-sh hover:bg-[#A2B2E1]"
      } ${
        !isDeleteButton &&
        isTheme1 &&
        !error &&
        "bg-[#EAE3DC] text-[#434A59] shadow-theme-1-white-sh hover:bg-[#FFFFFE]"
      } ${
        isDeleteButton &&
        isTheme2 &&
        !error &&
        "bg-teal text-white shadow-theme-2-teal-sh hover:bg-[#62B5BC]"
      } ${
        !isDeleteButton &&
        isTheme2 &&
        !error &&
        "bg-light-greyish text-[#36362C] shadow-theme-2-grey-sh hover:bg-white"
      } 
      } ${
        isDeleteButton &&
        isTheme3 &&
        !error &&
        "bg-deep-purple text-white shadow-theme-3-purple-sh hover:bg-[#8631AF]"
      } ${
        !isDeleteButton &&
        isTheme3 &&
        !error &&
        "bg-midnight-purple text-yellow shadow-theme-3-mid-purple-sh hover:bg-[#6C34AC]"
      } 


      ${
        isDeleteButton &&
        isTheme1 &&
        error &&
        "bg-[#1a2a58] text-white shadow-theme-1-grey-sh "
      } ${
        !isDeleteButton &&
        isTheme1 &&
        error &&
        "bg-[#ffd5ab] text-[#434A59] shadow-theme-1-white-sh "
      } ${
        isDeleteButton &&
        isTheme2 &&
        error &&
        "bg-[#143e42] text-white shadow-theme-2-teal-sh"
      } ${
        !isDeleteButton &&
        isTheme2 &&
        error &&
        "bg-[#ffe8a5] text-[#36362C] shadow-theme-2-grey-sh "
      } 
      } ${
        isDeleteButton &&
        isTheme3 &&
        error &&
        "shadow-theme-3-error-purple-sh bg-[#32233b] text-white "
      } ${
        !isDeleteButton &&
        isTheme3 &&
        error &&
        "shadow-theme-3-error-purple-sh bg-[#000] text-yellow"
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
