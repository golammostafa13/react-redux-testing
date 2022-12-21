/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import { renderWithProviders } from "./app/utils";

describe("App component testing", () => {
  test("should get submit word", async () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  test("should match input value", async () => {
    const setIsChangeMock = jest.fn();
    const useStateMock = (isChangeMock) => [isChangeMock, setIsChangeMock];
    jest.spyOn(React, "useState").mockImplementation(() => useStateMock());

    renderWithProviders(<App />);

    let value = "Golam Mostafa";
    fireEvent.change(screen.getByTestId("input"), { target: { value } });
    expect(screen.getByTestId("input").value).toBe(value);
  });

  test("should fail input value", async () => {
    const setIsChangeMock = jest.fn();
    const useStateMock = (isChangeMock) => [isChangeMock, setIsChangeMock];
    jest.spyOn(React, "useState").mockImplementation(() => useStateMock());

    renderWithProviders(<App />);

    let value = "Mostafa";
    fireEvent.change(screen.getByTestId("input"), { target: { value } });
    expect(screen.getByTestId("input").value).not.toBe(value);
  });

  test("should call onChange for form input name", async () => {
    const setIsChangeMock = jest.fn();

    const useStateMock = (isChangeMock) => [isChangeMock, setIsChangeMock];
    jest.spyOn(React, "useState").mockImplementation(() => useStateMock());

    renderWithProviders(<App />);

    let value = "";
    fireEvent.change(screen.getByTestId("change-name"), { target: { value } });
    expect(screen.getByTestId("change-name").value).toBe(value);
  });
});
