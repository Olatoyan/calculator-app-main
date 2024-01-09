type NumbersItemsProps = {
  num: string;
  onClick: (number: string) => void;
};

function NumbersItems2({ num, onClick }: NumbersItemsProps) {
  return (
    <button
      className={` col-span-2 rounded-2xl py-5 text-[2.8rem] uppercase tracking-[-0.0667rem] text-white ${
        num === "="
          ? "bg-red shadow-theme-1-red-sh "
          : "bg-medium-blue-gray shadow-theme-1-grey-sh"
      }  `}
      onClick={() => onClick(num.toString())}
    >
      {num}
    </button>
  );
}

export default NumbersItems2;
