// @flow

import React, { useCallback, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import helpers from "../helper";

// material ui could be here, but it's redundant for this project
const styles = {
    root: {
        backgroundColor: "green",
        width: 100,
        height: 100,
        borderRadius: 50,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: 'white'
    }
};

type TryCatchMeProps = {
    somebodyTryingToPass: () => void
}

const TryCatchMe = ({ somebodyTryingToPass }: TryCatchMeProps) => {
    const windowSize = useWindowSize();

    const [shift, setShift] = useState([0, 0]);
    const catchMeFieldStyle = {
        ...styles.root,
        left: shift[0],
        top: shift[1]
    };

    const onHover = useCallback(() => {
        console.log('ghovef');
        const leftShift = helpers.getShift(
            windowSize[0],
            styles.root.width
        );
        const topShift = helpers.getShift(
            windowSize[1],
            styles.root.height
        );

        setShift([leftShift, topShift]);
        somebodyTryingToPass();
    }, [somebodyTryingToPass, windowSize]);
    return (
                <div style={catchMeFieldStyle} onMouseEnter={onHover}>Come in</div>
    );
};

export default TryCatchMe;
