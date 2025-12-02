import { render, screen } from "@testing-library/react";
import Hello from "../components/Hello.jsx";
import '@testing-library/jest-dom';


test("renders the name correctly", () => {
  render(<Hello name="Arjun" />);
  expect(screen.getByText("Hello Arjun")).toBeInTheDocument();
});
