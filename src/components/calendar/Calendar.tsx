import {observer} from "mobx-react";
import React from "react";
import {SubmitButton} from "./SubmitButton";
import {CalendarBox} from "./CalendarBox";
import {CalendarHeading} from "./CalendarHeading";

export const Calendar = observer((): React.ReactElement => {
    
    return (
        <>
            <div
                style={{
                    width: "100%",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <CalendarHeading/>
                <CalendarBox/>
            </div>
            <SubmitButton/>
        </>
    );
});
