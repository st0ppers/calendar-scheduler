import {useStateContext} from "../../internal/StateContext";
import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {ColorInput} from "./ColorInput";
import React from "react";
import {PasswordInput} from "../shared/PasswordInput";
import {UsernameInput} from "../shared/UsernameInput";

export const RegisterForm = observer((): React.ReactElement => {
    const {loginState} = useStateContext();
    const navigate = useNavigate();
    const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        await loginState.registerPlayer();
        if (loginState.getIsLoggedIn) {
            navigate("/calendar");
        }
    };
    return (
        <form
            onSubmit={onSubmit}
            style={{
                display: "inline-grid",
                width: "20%",
                margin: "0 auto"
            }}
        >
            <p>Register</p>
            <UsernameInput/>
            <PasswordInput/>
            <ColorInput/>
            <input style={{margin: "10px"}} type="submit" value="Register"/>
        </form>
    );
});