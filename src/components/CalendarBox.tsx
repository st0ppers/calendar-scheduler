import CalendarDate from "./CalendarDate";
import { Day } from "../models/Day";
import { observer } from "mobx-react";

const CalendarBox = () => {
    const currentDay = new Date();
    const firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays: Day[] = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === currentDay.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === currentDay.toDateString()),
            year: firstDayOfMonth.getFullYear(),
            index: day
        }

        currentDays.push(calendarDay);
    }

    return (
        <div style={{ width: "100%", flexGrow: "1", display: "flex", flexWrap: "wrap", justifyContent: "center", boxSizing: "border-box" }}>
            {
                currentDays.map((day, index) => {
                    return (
                        <CalendarDate key={index} index={index} day={day} color={day.currentMonth ? "white" : "lightgrey"} />
                    )
                })
            }
        </div>
    )
}

export default observer(CalendarBox);

