import {useStateContext} from "../../internal/StateContext";
import {observer} from "mobx-react";
import React from "react";

export const ColorInput = observer((): React.ReactElement => {
    const {loginState} = useStateContext();
    return (
        <input
            type="text"
            name="Color"
            placeholder="Enter color"
            autoComplete="on"
            style={{margin: "10px"}}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                loginState.setColor(e.target.value)
            }/>
    );
});