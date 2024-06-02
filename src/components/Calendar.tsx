import { observer } from "mobx-react";
import { useState } from "../internal/ContextProvider";
import CalendarBox from "./CalendarBox";

const Calendar = () => {
    const weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const { getStartDate, getEndDate } = useState();
    return (
        <>
            <div style={{ width: "100%", flexGrow: "1", display: "flex", flexDirection: "column" }}>
                <div style={{
                    height: " 100px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }} >
                    {
                        weekdays.map((weekday, key) => {
                            return <div className="weekday" key={key}><p>{weekday}</p></div>
                        })
                    }
                </div>
                <CalendarBox />
            </div>

            <button onClick={() => {
                console.log("Start Date: ", getStartDate.day);
                console.log("End Date: ", getEndDate.day);
            }}>Print</button>
        </>
    )
}

export default observer(Calendar);
