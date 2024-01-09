import { ColorContextProps, useColor } from "../contexts/ColorContext";

function ThemeChanger() {
  const { changeTheme, state } = useColor() as ColorContextProps;

  const { theme } = state;

  return (
    <div className="flex items-end gap-10">
      <h2
        className={`text-[1.2rem] uppercase tracking-[0.1rem] ${
          theme === "theme-1" && "text-white"
        } ${theme === "theme-2" && "text-[#36362C]"} ${
          theme === "theme-3" && "text-yellow"
        }`}
      >
        Theme
      </h2>

      <div className="">
        <div
          className={`flex justify-evenly gap-4 text-[1.2rem] ${
            theme === "theme-1" && "text-white"
          } ${theme === "theme-2" && "text-[#36362C]"} ${
            theme === "theme-3" && "text-yellow"
          } `}
        >
          <span
            className="cursor-pointer"
            onClick={() => changeTheme("theme-1")}
          >
            1
          </span>
          <span
            className="cursor-pointer"
            onClick={() => changeTheme("theme-2")}
          >
            2
          </span>
          <span
            className="cursor-pointer"
            onClick={() => changeTheme("theme-3")}
          >
            3
          </span>
        </div>
        <div
          className={`flex h-[2.7rem] w-[7.1rem] justify-evenly rounded-[1.3rem] bg-dark-blue-gray p-2`}
        >
          <div
            className={`h-[1.6rem] w-[1.6rem] cursor-pointer rounded-full ${
              theme === "theme-1" && "bg-red"
            }`}
            onClick={() => changeTheme("theme-1")}
          ></div>
          <div
            className={`h-[1.6rem] w-[1.6rem] cursor-pointer rounded-full ${
              theme === "theme-2" && "bg-orange"
            }`}
            onClick={() => changeTheme("theme-2")}
          ></div>
          <div
            className={`h-[1.6rem] w-[1.6rem] cursor-pointer rounded-full ${
              theme === "theme-3" && "bg-cyan"
            }`}
            onClick={() => changeTheme("theme-3")}
          ></div>
        </div>
        {/* <div
          className={`relative h-[2.6rem] w-[7.1rem] rounded-[1.3rem] bg-dark-blue-gray before:absolute before:left-2 before:top-2 before:h-[1.6rem] before:w-[1.6rem] before:rounded-full before:bg-red`}
        ></div> */}
      </div>
    </div>
  );
}

export default ThemeChanger;
