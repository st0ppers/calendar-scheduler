import {observer} from "mobx-react";
import React from "react";
import {useNavigate} from "react-router-dom";

export const RegisterButton = observer((): React.ReactElement => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/register");
    };
    return (
        <button onClick={onClick}>Register
        </button>
    );
});