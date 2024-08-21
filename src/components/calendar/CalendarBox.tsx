import {observer} from "mobx-react";
import React from "react";
import {CalendarContent} from "./CalendarContent";
import {Day} from "../../models/internal/Day";

const Wrapper = ({children}: { children: React.ReactElement }): React.ReactElement => (
    <div
        style={{
            width: "100%",
            flexGrow: "1",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            boxSizing: "border-box"
        }}>
        {children}
    </div>
);

export const CalendarBox = observer((): React.ReactElement => {
    const currentDay = new Date();
    const firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays: Day[] = [];
    
    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay + 1));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }
        
        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === currentDay.getMonth()),
            date: new Date(firstDayOfMonth),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === currentDay.toDateString()),
            year: firstDayOfMonth.getFullYear(),
            index: day
        };
        
        currentDays.push(calendarDay);
    }
    
    return (
        <Wrapper>
            <>
                {
                    currentDays.map((day, index) => {
                        return (
                            <CalendarContent key={index} index={index} day={day}/>
                        );
                    })
                }
            </>
        </Wrapper>
    );
});
