import {observer} from "mobx-react";
import React, {PropsWithChildren} from "react";
import {CalendarContent} from "./CalendarContent";
import {CalendarHeading} from "./CalendarHeading";

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

export const CalendarComponent = observer((): React.ReactElement => (
    <>
        <Wrapper>
            <CalendarHeading/>
            <CalendarContent/>
        </Wrapper>
    </>
));
