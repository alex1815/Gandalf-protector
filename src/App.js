import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import helpers from "./helper";

// material ui could be here, but it's redundant for this project
const styles = {
  catchMeField: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

function App() {
  const windowSize = useWindowSize();

  const [shift, setShift] = useState([0, 0]);
  const catchMeFieldStyle = {
    ...styles.catchMeField,
    left: shift[0],
    top: shift[1]
  };

  const onHover = useCallback(() => {
    const leftShift = helpers.getShift(
      windowSize[0],
      styles.catchMeField.width
    );
    const topShift = helpers.getShift(
      windowSize[1],
      styles.catchMeField.height
    );

    setShift([leftShift, topShift]);
  }, [windowSize]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={catchMeFieldStyle} onMouseEnter={onHover}>Click me</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
