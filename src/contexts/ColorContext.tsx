import { createContext, useContext, useReducer } from "react";

type ColorState = {
  theme: string;
};

type ColorAction = {
  type: string;
  payload: string;
};

const initialState: ColorState = {
  theme: "theme-1",
};

export type ColorContextProps = {
  state: ColorState;
  dispatch: React.Dispatch<ColorAction>;
  changeTheme: (theme: string) => void;
};

function colorReducer(state: ColorState, action: ColorAction) {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}

const ColorContext = createContext<ColorContextProps | null>(null);

function ColorProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  function changeTheme(theme: string) {
    dispatch({
      type: "CHANGE_THEME",
      payload: theme,
    });
  }

  return (
    <ColorContext.Provider value={{ state, dispatch, changeTheme }}>
      {children}
    </ColorContext.Provider>
  );
}

function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
}

export { ColorProvider, useColor };
