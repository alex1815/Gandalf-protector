// @flow

import React, { memo } from "react";
import "./Counter.css";

type CounterProps = {
  numberOfTrying: number
};

function Counter(props: CounterProps) {
  const { numberOfTrying } = props;

  return numberOfTrying > 0 ? (
    <span className={"Counter-container"}>{numberOfTrying}</span>
  ) : null;
}

export default memo<*>(Counter);
