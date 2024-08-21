import React from "react";
import {observer} from "mobx-react";
import {Form} from "./Form";

const Wrapper = ({children}: React.PropsWithChildren<{}>): React.ReactElement => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "column",
            margin: "auto"
        }}>
        {children}
    </div>
);

export const Login = observer((): React.ReactElement => (
    <Wrapper>
        <p style={{textAlign: "center"}}>Welcome</p>
        <Form/>
    </Wrapper>
));