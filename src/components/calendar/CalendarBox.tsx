import {observer} from "mobx-react";
import React from "react";
import {CalendarContent} from "./CalendarContent";
import {useStateContext} from "../../internal/StateContext";

const Wrapper = ({children}: { children: React.ReactElement; }): React.ReactElement => (
    <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            boxSizing: "border-box",
        }}
    >
        {children}
    </div>
);

export const CalendarBox = observer((): React.ReactElement => {
    const {calendarState} = useStateContext();

    return (
        <Wrapper>
            <>
                {calendarState.getDays.map((day, index) => {
                    return <CalendarContent key={index} index={index} day={day}/>;
                })}
            </>
        </Wrapper>
    );
});
