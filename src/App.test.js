import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./app/utils";


test("should get store", async() => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Submit/i)).toBeInTheDocument()
});
