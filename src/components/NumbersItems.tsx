type NumbersItemsProps = {
  num: number | string;
  onClick: (number: string) => void;
  error: string | null;
};

function NumbersItems({ num, onClick, error }: NumbersItemsProps) {
  return (
    <button
      className={` rounded-2xl  tracking-[-0.0667rem] ${
        num === "del"
          ? "bg-medium-blue-gray text-[2.8rem] uppercase text-white shadow-theme-1-grey-sh"
          : "flex items-center justify-center bg-[#EAE3DC] text-[4rem] text-[#434A59] shadow-theme-1-white-sh"
      } ${error && "disabled:cursor-not-allowed"} `}
      onClick={() => onClick(num.toString())}
      disabled={error ? true : false}
    >
      {num}
    </button>
  );
}

export default NumbersItems;
