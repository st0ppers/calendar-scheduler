interface Props {
    day: Date;
    changeCurrentDay: (day: Date) => void;
    setNotesModeal: (isOpen:boolean) => void;
}

const CalendarBox = (props: Props) => {
    const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
            year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay);
    }

    // const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    //     const target = event.target as HTMLParagraphElement;
    //     const textContent = Number(target.textContent);

    //     props.setStartDate(textContent);
    // };

    return (
        <div style={{ width: "100%", flexGrow: "1", display: "flex", flexWrap: "wrap", justifyContent: "center", boxSizing: "border-box" }}>
            {
                currentDays.map((day, index) => {
                    return (
                        <div key={index}
                            // onClick={props.setNotesModeal}
                            style={{
                                width: "14.28%",
                                height: "14.28%",
                                // height: "fit-content",
                                border: "1px solid black",
                                boxSizing: "border-box",
                                backgroundColor: day.currentMonth ? "white" : "lightgrey"
                            }}>
                            <p style={{ textAlign: "center", padding: "0px", margin: "0px" }}>
                                {day.number}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CalendarBox;
