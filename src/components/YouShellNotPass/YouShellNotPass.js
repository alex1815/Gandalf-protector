// @flow

import React, {useEffect, useState} from "react";
import * as youShellNotPass from "../../assets/youShallNotPass.jpeg";
import './style.css'

const PROTECTION_TIME = 1;

type YouShellNotPassProps = {
    somebodyTryToPassAmount: number
}

const YouShellNotPass = ({ somebodyTryToPassAmount }: YouShellNotPassProps) => {

    const [gandalfProtectThisEnter, setGandalfProtectThisEnter] = useState<boolean>(false);

    useEffect(() => {
        // after somebody try to pass need to ask Gandalf to protect this enter
        setGandalfProtectThisEnter(true);
        const timerID = setTimeout(() => setGandalfProtectThisEnter(false),  PROTECTION_TIME * 1000);
        return () => clearTimeout(timerID);
    }, [somebodyTryToPassAmount]);

    if (!gandalfProtectThisEnter) {
        return null;
    }
    // before image turned around like react app logo. It was really fun, but you can't come through the Gandalf.
    return (
        <div className={'Gandalf-image'}>
            {/*// can specify the size of picture if want*/}
            <img src={youShellNotPass} alt="Gandalf on guard" />
        </div>
    );
};

export default YouShellNotPass;
