import {useStateContext} from "../../internal/StateContext";
import {observer} from "mobx-react";
import React from "react";

export const SubmitButton = observer((): React.ReactElement => {
    const {playerState} = useStateContext();
    const {getIsFromSelected, updateCurrentPlayerFreeTime} = playerState;
    return (
        <button
            disabled={getIsFromSelected}
            onClick={updateCurrentPlayerFreeTime}>
            Submit
        </button>
    );
});