import React from "react";
import {observer} from "mobx-react";
import {LoginForm} from "./LoginForm";
import {FormWrapper} from "../shared/FormWrapper";

export const Login = observer((): React.ReactElement => (
    <FormWrapper>
        <LoginForm/>
    </FormWrapper>
));