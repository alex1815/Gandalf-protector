//@flow
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TryCatchMe, { COME_IN_TEXT } from "./index";

it("TryCatchMe is moving", () => {
  let amountOfTrying = jest.fn();
  const { getByText } = render(
    <TryCatchMe somebodyTryingToPass={amountOfTrying} />
  );
  const element = getByText(COME_IN_TEXT);

  const top = element.style.top;
  const left = element.style.left;

  fireEvent.mouseEnter(element);
  expect(element).not.toHaveStyle(`top: ${top}; left: ${left} `);
});
