import {observer} from "mobx-react";
import {useStateContext} from "../../internal/StateContext";
import {useNavigate} from "react-router-dom";
import {UsernameInput} from "./UsernameInput";
import {PasswordInput} from "./PasswordInput";
import React from "react";

export const Form = observer((): React.ReactElement => {
    const {loginState} = useStateContext();
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        await loginState.loginPlayer();
        
        if (!loginState.getIsLoggedIn) {
            //TODO
            //add warning message that the login failed
        } else {
            navigate("/calendar");
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "inline-grid",
                width: "20%",
                margin: "0 auto"
            }}
        >
            <UsernameInput/>
            <PasswordInput/>
            <input style={{margin: "10px"}} type="submit" value="Login"/>
        </form>
    );
});