import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store as setStore } from "./store";

export function renderWithProviders(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={setStore}>{children}</Provider>;
  }
  return { setStore, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
