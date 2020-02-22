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
        if (somebodyTryToPassAmount) {
            setGandalfProtectThisEnter(true);
        }
        console.log('pro');
        const timerID = setTimeout(() => {
            setGandalfProtectThisEnter(false)
            console.log('exit');
        },  PROTECTION_TIME * 1000);
        return () => clearTimeout(timerID);
    }, [somebodyTryToPassAmount]);

    if (!gandalfProtectThisEnter) {
        return null;
    }
    // before image turned around like react app logo. It was really fun, but you can't come through the Gandalf.
    return (
        <div className={'Gandalf-container'}>
            <div className={'Gandalf-image'}>
                {/*// can specify the size of picture if want*/}
                <img src={youShellNotPass} alt="Gandalf on guard" />
            </div>
        </div>
    );
};

export default YouShellNotPass;
