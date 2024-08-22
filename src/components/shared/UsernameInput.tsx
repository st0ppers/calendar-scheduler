import {useStateContext} from "../../internal/StateContext";
import {observer} from "mobx-react";
import React from "react";

export const UsernameInput = observer((): React.ReactElement => {
    const {loginState} = useStateContext();
    
    return (
        <input
            type="text"
            name="Username"
            placeholder="Username"
            style={{margin: "10px"}}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                loginState.setUsername(e.target.value)
            }
        />
    );
});