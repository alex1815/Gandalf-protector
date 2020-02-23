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

it("Basic app render without crash", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

it("After trying to come in Gandalf protect the enter", () => {
  const { getByText, container } = render(<App />);

  const comeInElement = getByText(COME_IN_TEXT);
  expect(queryByTestId(container, YOU_SHELL_NOT_PASS_DATA_TEST_ID)).toBeNull();

  fireEvent.mouseEnter(comeInElement);
  expect(
    getByTestId(container, YOU_SHELL_NOT_PASS_DATA_TEST_ID)
  ).toBeInTheDocument();
});

it("After trying to come and Gandalf protected the enter Gandalf go to rest", async () => {
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

fit("Tests", async () => {
  const { getByText, container } = render(<App />);

  const comeInElement = getByText(COME_IN_TEXT);
  fireEvent.mouseEnter(comeInElement);
  const top = comeInElement.style.top;
  console.log(top);

  expect(
    getByTestId(container, YOU_SHELL_NOT_PASS_DATA_TEST_ID)
  ).toBeInTheDocument();

  fireEvent.mouseEnter(comeInElement);
  const top1 = comeInElement.style.top;
  console.log(top1);
  fireEvent.mouseEnter(comeInElement);
  const top2 = comeInElement.style.top;
  console.log(top2);
});
