// @flow

import React, { memo } from "react";
import "./GandalfProtected.css";

type GandalfProtectedProps = {
  numberOfTrying: number
};

const get_RESULT_MESSAGE = numberOfTrying => `Stop, it's enough. Gandalf has protected this enter. You have tried
${numberOfTrying} times`;

function GandalfProtected(props: GandalfProtectedProps) {
  const { numberOfTrying } = props;
  return (
    <span className={"Gandalf-Protected-container-message"}>
      {get_RESULT_MESSAGE(numberOfTrying)}
    </span>
  );
}

export default memo<*>(GandalfProtected);
