import {observer} from "mobx-react";
import React from "react";
import {RegisterForm} from "./RegisterForm";
import {FormWrapper} from "../shared/FormWrapper";

export const Register = observer((): React.ReactElement => {
    return (
        <FormWrapper>
            <RegisterForm/>
        </FormWrapper>
    );
});