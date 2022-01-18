import React, { createContext, Dispatch, ReactNode, useReducer } from "react";

/**
 * Initial Count
 */
type ICountState = number;
const initialCount: ICountState = 6;

interface IReducerActions {
  type: "increment" | "decrement" | "incrementAmount";
  payload?: number;
}

/**
 * Counter reducer function
 *
 * @param {number} count count value
 * @param {Object} action Object containing a type which will determine how to update the state
 * @return {Object} returns the updated state
 */
function counterReducer(count: ICountState, action: IReducerActions) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "incrementAmount":
      if (action.payload) return count + action.payload;
      return count;
    default:
      return count;
  }
}

export interface ICountContextProps {
  count: ICountState;
  counterDispatch: Dispatch<IReducerActions>;
}

const CountContext = createContext<ICountContextProps>({
  count: initialCount,
  counterDispatch: () => {},
});
CountContext.displayName = "CountContext";

/**
 * Context Provider higher order component
 *
 * @param {Object} props Component props
 * @return {JSX.Element} JSX code for component
 */
export function CountContextProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [count, counterDispatch] = useReducer(counterReducer, initialCount);
  return (
    <CountContext.Provider value={{ count, counterDispatch }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountContext;
