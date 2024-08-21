import {observer} from "mobx-react";
import React, {PropsWithChildren} from "react";
import {SubmitButton} from "./SubmitButton";
import {CalendarBox} from "./CalendarBox";
import {CalendarHeading} from "./CalendarHeading";
import {ResetButton} from "../ResetButton";

const Wrapper = ({children}: PropsWithChildren): React.ReactElement => (
    <div
        style={{
            width: "100%",
            flexGrow: "1",
            display: "flex",
            flexDirection: "column"
        }}
    >
        {children}
    </div>
);

export const Calendar = observer((): React.ReactElement => (
    <>
        <Wrapper>
            <CalendarHeading/>
            <CalendarBox/>
        </Wrapper>
        <SubmitButton/>
        <ResetButton/>
    </>
));
