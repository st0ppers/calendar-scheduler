import {observer} from "mobx-react";
import {useStateContext} from "../../internal/StateContext";
import {useNavigate} from "react-router-dom";
import React from "react";
import {RegisterButton} from "../register/RegisterButton";
import {UsernameInput} from "../shared/UsernameInput";
import {PasswordInput} from "../shared/PasswordInput";

export const LoginForm = observer((): React.ReactElement => {
    const {loginState} = useStateContext();
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        await loginState.loginPlayer();
        if (loginState.getIsLoggedIn) {
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
            <p style={{textAlign: "center"}}>Welcome</p>
            <UsernameInput/>
            <PasswordInput/>
            <input style={{margin: "10px"}} type="submit" value="Login"/>
            <RegisterButton/>
        </form>
    );
});