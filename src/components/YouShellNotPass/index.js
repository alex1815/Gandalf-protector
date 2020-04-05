// @flow

import React, { useEffect, useState } from "react";
import * as youShellNotPass from "../../assets/youShallNotPass.jpeg";
import "./YouShellNotPass.css";

const DEFAULT_PROTECTION_TIME = 3;
// How many times use default protection time. Can't be less than 2 (due log function)
const DIFFICULTY_LEVEL_FOR_START = 3;

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
  // const [timerProtectionID, setTimerProtectionID] = useState<?TimeoutID>();
  // move to separate function
  const protectionTime =
    numberOfTrying > DIFFICULTY_LEVEL_FOR_START
      ? Math.round(DEFAULT_PROTECTION_TIME / Math.log(numberOfTrying))
      : DEFAULT_PROTECTION_TIME;

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
