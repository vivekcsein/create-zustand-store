"use client";
import React from "react";
import useStore from "../store/counter-store";

const Counter = () => {
  const { count, increment, decrement } = useStore((state) => state);

  return (
    <div className="flex flex-row gap-5 mt-5">
      <button
        onClick={increment}
        className="btn-sm w-full rounded-md btn-primary text-white border border-slate-300 hover:bg-sky-600"
      >
        Increament
      </button>
      {count}
      <button
        onClick={decrement}
        className="btn-sm w-full rounded-md btn-primary text-white border border-slate-300 hover:bg-sky-600"
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
