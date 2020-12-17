import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("Renders the app with H2", () => {
  render(<App />);
  const linkElement = screen.getByText(/Properties Page/i);
  expect(linkElement).toBeInTheDocument();
});
