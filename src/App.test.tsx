import { render, screen } from "@testing-library/react";
import App from "./App";

test('Renders main page correctly', () => {
  render(<App />);
  expect(screen.getByText(/React ⚛️/)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /react/i })).toBeInTheDocument();
});