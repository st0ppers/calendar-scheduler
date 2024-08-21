import {observer} from "mobx-react";
import React from "react";

const Wrapper = ({children}: React.PropsWithChildren<{}>): React.ReactElement => (
    <div
        style={{
            height: " 100px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}
    >
        {children}
    </div>
);

export const CalendarHeading = observer((): React.ReactElement => {
    const weekdays: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    return (
        <Wrapper>
            {weekdays.map((weekday, key) => {
                return (
                    <div className="weekday" key={key}>
                        <p>{weekday}</p>
                    </div>
                );
            })}
        </Wrapper>
    );
});