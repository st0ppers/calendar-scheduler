import { Day } from "../models/Day";
import { observer } from "mobx-react";
import { useState } from "../internal/ContextProvider";
import SelectionLine from "./SelectionLine";

interface Props {
    index: number;
    day: Day;
    color: string;
}

const CalendarDate = (props: Props) => {
    const { setEndDate, setStartDate, getIsStartDateSelected, setIsStartDateSelected } = useState();

    const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => {
        const target = event.target as HTMLParagraphElement;
        const textContent = Number(target.textContent);

        if (!getIsStartDateSelected) {
            setStartDate({ day: textContent, index: index });
            setIsStartDateSelected(true);
        }
        else {
            setEndDate({ day: textContent, index: index });
            setIsStartDateSelected(false);
        }
    };

    return (
        <div key={props.index}
            onClick={(event) => handleClick(event, props.index)}
            style={{
                width: "14.28%",
                height: "14.28%",
                border: "1px solid black",
                backgroundColor: props.day.currentMonth ? "white" : "lightgrey"
            }}>
            <p style={{ textAlign: "center", padding: "0px", margin: "0px" }}>
                {props.day.number}
            </p>
            <SelectionLine day={props.day} color={props.color} />
        </div>
    )
}

export default observer(CalendarDate);
