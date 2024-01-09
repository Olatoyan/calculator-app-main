function ThemeChanger() {
  return (
    <div className="flex items-end gap-10">
      <h2 className="text-[1.2rem] uppercase tracking-[0.1rem] text-white">
        Theme
      </h2>

      <div className="">
        <div className="flex justify-evenly gap-4 text-[1.2rem] text-white">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div
          className={`bg-dark-blue-gray before:bg-red relative h-[2.6rem] w-[7.1rem] rounded-[1.3rem] before:absolute before:left-2 before:top-2 before:h-[1.6rem] before:w-[1.6rem] before:rounded-full`}
        ></div>
      </div>
    </div>
  );
}

export default ThemeChanger;
