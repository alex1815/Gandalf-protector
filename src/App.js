// @flow

import React, { useCallback, useState } from "react";
import TryCatchMe from "./components/TryCatchMe";
import YouShellNotPass from "./components/YouShellNotPass";
import GandalfProtected from "./components/GendalfProtected";
import GendalfDefeated from "./components/GendalfDefeated";
import Counter from "./components/Counter";

export const YOU_PASSED_AMOUNT = 100;

const App = () => {
  const [numberOfTrying, setNumberOfTrying] = useState<number>(0);
  const [
    isSomebodyTryingToEnter,
    setIsSomebodyTryingToEnter
  ] = useState<boolean>(false);
  const [wasProtected, setWasProtected] = useState<boolean>(false);

  const somebodyTryingToPass = useCallback(() => {
    setNumberOfTrying(prev => prev + 1);
    setIsSomebodyTryingToEnter(true);
  }, [setNumberOfTrying, setIsSomebodyTryingToEnter]);

  return (
    <div className="App">
      {numberOfTrying === YOU_PASSED_AMOUNT ? (
        <GendalfDefeated />
      ) : (
        <>
          {wasProtected ? (
            <GandalfProtected numberOfTrying={numberOfTrying} />
          ) : (
            <>
              <TryCatchMe somebodyTryingToPass={somebodyTryingToPass} />
              <YouShellNotPass
                isSomebodyTryingToEnter={isSomebodyTryingToEnter}
                setIsSomebodyTryingToEnter={setIsSomebodyTryingToEnter}
                setWasProtected={setWasProtected}
                numberOfTrying={numberOfTrying}
              />
              <Counter numberOfTrying={numberOfTrying} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
