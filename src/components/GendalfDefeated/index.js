// @flow

import React, { memo } from "react";
import "./GandalfDefeated.css";

const RESULT_MESSAGE = `Gandalf can't stop you any more. Come in. And reveal all my secrets`;

function GandalfDefeated() {
  return (
    <span className={"Gandalf-Defeated-container-message"}>
      {RESULT_MESSAGE}
      {/* if you're a developer and don't understand how come in and reveal all secrets - it's impossible. Gandalf never reveal his secrets */}
    </span>
  );
}

export default memo<*>(GandalfDefeated);
