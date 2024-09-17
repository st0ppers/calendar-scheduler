import {observer} from "mobx-react";
import React from "react";

const Wrapper = ({children}: React.PropsWithChildren<{}>): React.ReactElement => (
    <div
        style={{
            display: "flex",
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