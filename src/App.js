// @flow

import React, { useCallback, useState } from "react";
import TryCatchMe from "./components/TryCatchMe/TryCatchMe";
import YouShellNotPass from "./components/YouShellNotPass/YouShellNotPass";

const App = () => {
  const [numberOfTrying, setNumberOfTrying] = useState<number>(0);
  const somebodyTryingToPass = useCallback(
    () => setNumberOfTrying(numberOfTrying + 1),
    [numberOfTrying, setNumberOfTrying]
  );
  return (
    <div className="App">
      <TryCatchMe somebodyTryingToPass={somebodyTryingToPass} />
      <YouShellNotPass somebodyTryToPassAmount={numberOfTrying} />
    </div>
  );
};

export default App;
