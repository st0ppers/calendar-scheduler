import { Day } from "../models/Day";
import { observer } from "mobx-react";
import { useState } from "../internal/ContextProvider";
import Line from "./Line";

interface Props {
    index: number;
    day: Day;
    color: string;
}

const CalendarDate = (props: Props) => {
    const { setEndDate, setStartDate, getIsStartDateSelected, setIsStartDateSelected } = useState();
    const { getCurrentPlayer, getStartDate, getEndDate } = useState();//TODO: Delte later

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

        //console.log("Index: ", index);
        //console.log("Day: ", props.day);
        console.log("StartDay: condition: ", getStartDate.index === index);
        console.log("EndDay: condition: ", getEndDate.index === index);
        //console.log(textContent);
    };

    return (
        <div key={props.index}
            onClick={(event) => handleClick(event, props.index)}
            style={{
                width: "14.28%",
                height: "14.28%",
                // height: "fit-content",
                border: "1px solid black",
                backgroundColor: props.day.currentMonth ? "white" : "lightgrey"
                //backgroundColor: props.color
            }}>
            <p style={{ textAlign: "center", padding: "0px", margin: "0px" }}>
                {props.day.number}
            </p>
            <Line day={props.day} color={props.color}/>
        </div>
    )
}

export default observer(CalendarDate);
            //style={{
            //    width: "14.28%",
            //    height: "14.28%",
            //    // height: "fit-content",
            //    border: "1px solid black",
            //    boxSizing: "border-box",
            //    //backgroundColor: props.day.currentMonth ? "white" : "lightgrey"
            //    //backgroundColor: props.color
            //    background: 'linear-gradient(90deg, blue 50%, transparent 50%)'
            //}}>

