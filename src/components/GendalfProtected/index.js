// @flow

import React, { memo } from "react";

type GandalfProtectedProps = {
  numberOfTrying: number
};

const get_RESULT_MESSAGE = numberOfTrying => `Stop, it's enough. Gandalf has protected this enter. You have tried
${numberOfTrying} times`;

function GandalfProtected(props: GandalfProtectedProps) {
  const { numberOfTrying } = props;
  return <span>{get_RESULT_MESSAGE(numberOfTrying)}</span>;
}

export default memo<*>(GandalfProtected);
