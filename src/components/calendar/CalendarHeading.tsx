import {observer} from "mobx-react";
import React from "react";

export const CalendarHeading = observer((): React.ReactElement => {
    const weekdays: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    return (
        <div
            style={{
                height: " 100px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }}
        >
            {weekdays.map((weekday, key) => {
                return (
                    <div className="weekday" key={key}>
                        <p>{weekday}</p>
                    </div>
                );
            })}
        </div>
    );
});