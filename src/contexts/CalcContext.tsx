import { Dispatch, createContext, useContext, useReducer } from "react";

type CalculatorState = {
  displayValue: string;
  rawValue: number;
  error: string | null;
};

const enum CalculatorActionType {
  CALCULATOR_INPUT_NUMBER,
  CALCULATOR_EQUALS,
  CALCULATOR_CLEAR,
  CALCULATOR_BACKSPACE,
}

type CalculatorAction = {
  type: CalculatorActionType;
  payload?: string;
};

// Define the context type
type CalculatorContextProps = {
  state: CalculatorState;
  dispatch: Dispatch<CalculatorAction>;
  inputNumber: (number: string) => void;
  calculateResult: (number: string) => void;
  clear: () => void;
  backspace: () => void;
};

const initialState: CalculatorState = {
  displayValue: "",
  rawValue: 0,
  error: null,
};

function calculatorReducer(state: CalculatorState, action: CalculatorAction) {
  switch (action.type) {
    case CalculatorActionType.CALCULATOR_INPUT_NUMBER: {
      const trimmedValue = state.displayValue === "0" ? "" : state.displayValue;

      return {
        ...state,
        displayValue: trimmedValue + (action.payload ?? ""),
        error: null,
      };
    }
    case CalculatorActionType.CALCULATOR_EQUALS:
      try {
        console.log(state.displayValue);
        const result = eval(state.displayValue);
        console.log(result);
        return {
          ...state,
          displayValue: result.toLocaleString(),
          error: null,
        };
      } catch (error) {
        // Handle invalid expressions or other errors
        console.error("Error evaluating expression:", error);

        return { ...state, error: "ERROR!" };
      }
    case CalculatorActionType.CALCULATOR_BACKSPACE:
      return {
        ...state,
        displayValue: state.displayValue.slice(0, -1),
        error: null,
      };
    case CalculatorActionType.CALCULATOR_CLEAR:
      return {
        ...state,
        rawValue: 0,
        displayValue: "",
        error: null,
      };
    default:
      return state;
  }
}

const CalculatorContext = createContext<CalculatorContextProps | null>(null);

function CalculatorProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer<
    React.Reducer<CalculatorState, CalculatorAction>
  >(calculatorReducer, initialState);

  function inputNumber(number: string) {
    dispatch({
      type: CalculatorActionType.CALCULATOR_INPUT_NUMBER,
      payload: number,
    });
  }

  function calculateResult() {
    dispatch({ type: CalculatorActionType.CALCULATOR_EQUALS });
  }

  function clear() {
    dispatch({ type: CalculatorActionType.CALCULATOR_CLEAR });
  }

  function backspace() {
    dispatch({ type: CalculatorActionType.CALCULATOR_BACKSPACE });
  }

  return (
    <CalculatorContext.Provider
      value={{
        state,
        inputNumber,
        calculateResult,
        clear,
        backspace,
        dispatch,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
}

export { CalculatorProvider, useCalculator };
