// @flow

import React, { useCallback, useState } from "react";
import TryCatchMe from "./components/TryCatchMe";
import YouShellNotPass from "./components/YouShellNotPass";
import GandalfProtected from "./components/GendalfProtected";
import Counter from "./components/Counter";

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
    </div>
  );
};

export default App;
