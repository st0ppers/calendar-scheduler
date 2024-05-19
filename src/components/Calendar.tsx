import { useState } from "react";
import CalendarBox from "./CalendarBox";

const Calendar = () => {

    const [currentDay, setCurrentDay] = useState(new Date());
    const weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [isNotesOpen, setIsNotesOpen] = useState(false);

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
                <CalendarBox day={currentDay} changeCurrentDay={setCurrentDay} setNotesModeal={setIsNotesOpen} />
            </div>
            <button onClick={() => {

            }
            }>Print</button>
        </>
    )
}

export default Calendar;
