import React from "react";
import {observer} from "mobx-react";
import {useStateContext} from "../internal/StateContext";

export const ResetButton = observer((): React.ReactElement => {
    const {playerState} = useStateContext();
    return (
        <button onClick={playerState.resetCurrentFreeTime}>
            Reset
        </button>
    );
});