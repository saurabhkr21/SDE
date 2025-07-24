// @ts-nocheck
"use client";

import React, { createContext, useContext, useState } from "react";

//  Call createContext() with default values
const OpenContext = createContext({
  open: false,
  handleOpen: () => {},
  handleClose: () => {},
});

//  Custom hook to use context
export const useOpenContext = () => useContext(OpenContext);

//  Capitalized provider component
export function ContextAPIProvider({ children }) {
  const [open, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <OpenContext.Provider
      value={{
        open,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </OpenContext.Provider>
  );
}
