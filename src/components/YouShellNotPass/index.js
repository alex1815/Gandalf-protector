// @flow

import React, { useEffect } from "react";
import * as youShellNotPass from "../../assets/youShallNotPass.jpeg";
import { calculateTimeAccordingNumberOfTrying } from "../../service/calculateDifficalty";
import "./YouShellNotPass.css";

export const YOU_SHELL_NOT_PASS_DATA_TEST_ID =
  "YOU_SHELL_NOT_PASS_DATA_TEST_ID";

type YouShellNotPassProps = {
  isSomebodyTryingToEnter: boolean,
  setIsSomebodyTryingToEnter: (isTrying: boolean) => void,
  setWasProtected: (wasProtected: boolean) => void,
  numberOfTrying: number
};

const YouShellNotPass = ({
  isSomebodyTryingToEnter,
  setIsSomebodyTryingToEnter,
  setWasProtected,
  numberOfTrying
}: YouShellNotPassProps) => {
  const protectionTime = calculateTimeAccordingNumberOfTrying(numberOfTrying);
  // const ratio = Math.min(maxWidth / 320, maxHeight / 160);

  useEffect(() => {
    console.log(protectionTime);
    let timerID;
    if (isSomebodyTryingToEnter) {
      // after somebody has been trying to enter we need to ask Gandalf to protect this enter
      timerID = setTimeout(() => {
        setIsSomebodyTryingToEnter(false);
        setWasProtected(true);
        clearTimeout(timerID);
      }, protectionTime * 1000);
    }
    return () => clearTimeout(timerID);
  }, [
    isSomebodyTryingToEnter,
    protectionTime,
    setWasProtected,
    setIsSomebodyTryingToEnter,
    numberOfTrying
  ]);

  if (!isSomebodyTryingToEnter) {
    return null;
  }

  return (
    <div
      className={"Gandalf-container"}
      data-testid={YOU_SHELL_NOT_PASS_DATA_TEST_ID}
    >
      <div className={"Gandalf-image"}>
        <img src={youShellNotPass} alt="Gandalf on guard" />
      </div>
    </div>
  );
};

export default YouShellNotPass;
