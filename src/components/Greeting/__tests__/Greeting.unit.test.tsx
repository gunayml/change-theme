import { render, screen } from "@testing-library/react";
import Greeting from "../Greeting";

test("renders personalized greeting", () => {
  render(<Greeting name="Gunay" />);
  expect(screen.getByText("Hello, Gunay!")).toBeInTheDocument();
});
