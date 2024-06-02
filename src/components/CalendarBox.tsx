import CalendarDate from "./CalendarDate";
import { Day } from "../models/Day";
import { useState } from "../internal/ContextProvider";

const CalendarBox = () => {
    const currentDay = new Date();
    const firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays: Day[] = [];

    const { getStartDate, getEndDate, getCurrentPlayer } = useState();//TODO: Delte later

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

        //console.log(calendarDay);
        currentDays.push(calendarDay);
    }

    return (
        <div style={{ width: "100%", flexGrow: "1", display: "flex", flexWrap: "wrap", justifyContent: "center", boxSizing: "border-box" }}>
            {
                currentDays.map((day, index) => {

                    if (getStartDate.index === index && getStartDate.day === day.number) {
                        return (
                            <CalendarDate key={index} index={index} day={day} color={getCurrentPlayer.color} />
                        )
                    }

                    if (getEndDate.index === index && getEndDate.day === day.number) {
                        return (
                            <CalendarDate key={index} index={index} day={day} color={getCurrentPlayer.color} />
                        )
                    }

                    if (index >= getStartDate.index && index <= getEndDate.index) {
                        return (
                            <CalendarDate key={index} index={index} day={day} color={getCurrentPlayer.color} />
                        )
                    }

                    return (
                        <CalendarDate key={index} index={index} day={day} color={day.currentMonth ? "white" : "lightgrey"} />
                    )

                    // return (
                    //     <div key={index}
                    //         onClick={handleClick}
                    //         style={{
                    //             width: "14.28%",
                    //             height: "14.28%",
                    //             // height: "fit-content",
                    //             border: "1px solid black",
                    //             boxSizing: "border-box",
                    //             backgroundColor: day.currentMonth ? "white" : "lightgrey"
                    //         }}>
                    //         <p style={{ textAlign: "center", padding: "0px", margin: "0px" }}>
                    //             {day.number}
                    //         </p>
                    //     </div>
                    // )
                })
            }
        </div>
    )
}

export default CalendarBox;

