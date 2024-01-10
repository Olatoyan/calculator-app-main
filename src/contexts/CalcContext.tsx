import { Dispatch, createContext, useContext, useReducer } from "react";

type CalculatorState = {
  displayValue: string;
  error: string | null;
  newOperation: boolean;
};

const enum CalculatorActionType {
  CALCULATOR_INPUT_NUMBER,
  CALCULATOR_EQUALS,
  CALCULATOR_CLEAR,
  CALCULATOR_BACKSPACE,
  CALCULATOR_NEW_OPERATION,
}

type CalculatorAction = {
  type: CalculatorActionType;
  payload?: string;
};

// Define the context type
export type CalculatorContextProps = {
  state: CalculatorState;
  dispatch: Dispatch<CalculatorAction>;
  inputNumber: (number: string) => void;
  calculateResult: () => void;
  clear: () => void;
  backspace: () => void;
  newOperation: () => void;
};

const initialState: CalculatorState = {
  displayValue: "",
  error: null,
  newOperation: false,
};

function calculatorReducer(state: CalculatorState, action: CalculatorAction) {
  switch (action.type) {
    case CalculatorActionType.CALCULATOR_INPUT_NUMBER: {
      // const trimmedValue = state.displayValue === "0" ? "" : state.displayValue;
      const trimmedValue =
        state.displayValue === "0" || state.newOperation
          ? ""
          : state.displayValue;

      const newValue = trimmedValue + (action.payload ?? "");

      return {
        ...state,
        displayValue: newValue,
        newOperation: false,
        error: null,
      };
    }
    case CalculatorActionType.CALCULATOR_EQUALS:
      try {
        const result = eval(state.displayValue);
        return {
          ...state,
          displayValue: result,
          newOperation: false,
          error: null,
        };
      } catch (error) {
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
        displayValue: "",
        newOperation: false,
        error: null,
      };
    case CalculatorActionType.CALCULATOR_NEW_OPERATION:
      return {
        ...state,
        newOperation: true,
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

  function newOperation() {
    dispatch({ type: CalculatorActionType.CALCULATOR_NEW_OPERATION });
  }

  return (
    <CalculatorContext.Provider
      value={{
        state,
        inputNumber,
        calculateResult,
        clear,
        backspace,
        newOperation,
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
