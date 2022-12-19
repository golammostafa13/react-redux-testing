import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./app/utils";


test("should get store", async() => {
  const {getByTestId}=renderWithProviders(<App />);
  console.log(getByTestId)
});
