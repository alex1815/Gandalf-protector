// @flow

import React  from "react";
import * as youShellNotPass from "../assets/youShallNotPass.jpeg";

// material ui could be here, but it's redundant for this project
const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
};

const YouShellNotPass = () => {
    // before image turned around like react app logo. It was really fun, but you can't come through the Gandalf.
    return (
        <div style={styles.root}>
            {/*// can specify the size of picture if want*/}
            <img src={youShellNotPass} className="App-logo" alt="logo" />
        </div>
    );
};

export default YouShellNotPass;
