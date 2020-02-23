//@flow
import React from "react";
import {
  fireEvent,
  render,
  queryByTestId,
  getByTestId,
  waitForElementToBeRemoved
} from "@testing-library/react";
import App from "./App";
import { COME_IN_TEXT } from "./components/TryCatchMe/TryCatchMe";
import { YOU_SHELL_NOT_PASS_DATA_TEST_ID } from "./components/YouShellNotPass/YouShellNotPass";

test("Basic app render without crash", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

test("After trying to come in Gandalf protect the enter", () => {
  const { getByText, container } = render(<App />);

  const comeInElement = getByText(COME_IN_TEXT);
  expect(queryByTestId(container, YOU_SHELL_NOT_PASS_DATA_TEST_ID)).toBeNull();

  fireEvent.mouseEnter(comeInElement);
  expect(
    getByTestId(container, YOU_SHELL_NOT_PASS_DATA_TEST_ID)
  ).toBeInTheDocument();
});

test("After trying to come and Gandalf protected the enter Gandalf go to rest", async () => {
  const { getByText, container } = render(<App />);

  const comeInElement = getByText(COME_IN_TEXT);
  fireEvent.mouseEnter(comeInElement);

  expect(
    getByTestId(container, YOU_SHELL_NOT_PASS_DATA_TEST_ID)
  ).toBeInTheDocument();
  // Gandalf go to rest
  await waitForElementToBeRemoved(() =>
    queryByTestId(container, YOU_SHELL_NOT_PASS_DATA_TEST_ID)
  );
});
