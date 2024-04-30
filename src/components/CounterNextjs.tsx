"use client";
import React from "react";
import { useCounterStore } from "../providers/CounterNextjsProvider";

const CounterNextjs = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );
  return (
    <>
      <div className="flex flex-row gap-5 mt-5">
        <button
          onClick={() => void incrementCount()}
          className="btn-sm w-full rounded-md btn-primary text-white border border-slate-300 hover:bg-sky-600"
        >
          Increament
        </button>
        {count}
        <button
          onClick={() => void decrementCount()}
          className="btn-sm w-full rounded-md btn-primary text-white border border-slate-300 hover:bg-sky-600"
        >
          decrement
        </button>
      </div>
    </>
  );
};

export default CounterNextjs;
