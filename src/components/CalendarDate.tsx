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
    const { getPlayers, setEndDate, setStartDate, getIsStartDateSelected } = useState();

    const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => {
        const target = event.target as HTMLParagraphElement;
        const textContent = Number(target.textContent);

        if (!getIsStartDateSelected) {
            setStartDate({
                currentMonth: props.day.currentMonth,
                date: props.day.date,
                month: props.day.month,
                number: textContent,
                selected: props.day.selected,
                year: props.day.year,
                index: index
            });
        }
        else {
            setEndDate({
                currentMonth: props.day.currentMonth,
                date: props.day.date,
                month: props.day.month,
                number: textContent,
                selected: props.day.selected,
                year: props.day.year,
                index: index
            });
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

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px', flexWrap: "wrap" }}>
                {getPlayers.map((player, index) => {

                    if(props.day.date === null) {
                        return null;
                    }

                    if (props.day.date >= player.freeTime.from && props.day.date <= player.freeTime.to) {
                        return (
                            <SelectionLine key={index} color={player.color} />
                        )
                    }

                    return (
                        <SelectionLine key={index} color={props.day.currentMonth ? "white" : "lightgrey"} />
                    )
                })}
            </div>
        </div>
    )
}
export default observer(CalendarDate);
