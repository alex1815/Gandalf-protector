//@flow
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Basic app render without crash", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
