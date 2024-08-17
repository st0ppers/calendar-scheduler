import React from "react";
import {observer} from "mobx-react";
import {Form} from "./Form";

export const Login = observer((): React.ReactElement => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "column",
            margin: "auto"
        }}>
        <p style={{textAlign: "center"}}>Welcome</p>
        <Form/>
    </div>
));