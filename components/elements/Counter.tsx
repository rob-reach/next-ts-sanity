import React, { useContext, useState } from "react";
import CountContext from "../../lib/context/CounterContext";

/**
 * Counter component for demonstrating context api
 *
 * @return {JSX.Element} JSX code for component
 */
export default function Counter() {
  const counter = useContext(CountContext);
  const [amount, setAmount] = useState("");
  return (
    <>
      <h3>Count: {counter.count}</h3>
      <div className="flex">
        <button
          className="p-4 text-white bg-blue-100 mr-2"
          onClick={() => counter.counterDispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="p-4 text-white bg-blue-100 mr-2"
          onClick={() => counter.counterDispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="p-4 text-white bg-blue-100 mr-2"
          onClick={() =>
            counter.counterDispatch({
              type: "incrementAmount",
              payload: Number(amount),
            })
          }
        >
          Increment by amount
        </button>
        <input
          type="number"
          className="border-2"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </div>
    </>
  );
}
