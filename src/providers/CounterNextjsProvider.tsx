"use client";

import React from "react";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import {
  type CounterStore,
  createCounterStore,
} from "../store/couter-store-nextjs";

export const CounterStoreContext = createContext<StoreApi<CounterStore> | null>(
  null
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

const CounterNextjsProvider = ({ children }: CounterStoreProviderProps) => {
  const storeRef = useRef<StoreApi<CounterStore>>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore();
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be use within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};


export default CounterNextjsProvider;
