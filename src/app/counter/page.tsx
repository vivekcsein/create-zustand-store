import React from "react";
import CounterNextjs from "@/components/CounterNextjs";

const Homepage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-2xl">Zustand library for NextJS</h1>
      <CounterNextjs />
    </main>
  );
};

export default Homepage;
