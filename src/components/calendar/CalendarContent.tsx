import {Day} from "../../models/Day";
import {observer} from "mobx-react";
import {Player} from "../../models/Player";
import {useStateContext} from "../../internal/StateContext";
import React from "react";
import {SelectionLine} from "./SelectionLine";
import {DayNumber} from "./DayNumber";

interface Props {
    index: number;
    day: Day;
}

export const CalendarContent = observer(({index, day}: Props): React.ReactElement => {
    const state = useStateContext();
    
    const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>, i: number) => {
        const target = event.target as HTMLParagraphElement;
        const textContent = Number(target.textContent);
        
        if (!state.playerState.getIsStartDateSelected) {
            state.playerState.setStartDate({
                currentMonth: day.currentMonth,
                date: day.date,
                month: day.month,
                number: textContent,
                selected: day.selected,
                year: day.year,
                index: i
            });
        } else {
            state.playerState.setEndDate({
                currentMonth: day.currentMonth,
                date: day.date,
                month: day.month,
                number: textContent,
                selected: day.selected,
                year: day.year,
                index: i
            });
        }
    };
    
    return (
        <div
            key={index}
            onClick={(event) => handleClick(event, index)}
            style={{
                width: "14%",
                height: "18%",
                border: "1px solid black",
                backgroundColor: day.currentMonth ? "white" : "lightgrey"
            }}
        >
            <DayNumber date={day.number}/>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100px",
                    flexWrap: "wrap"
                }}
            >
                {state.playerState.getPlayers.map((player: Player, index: number) => {
                    if (day.date === null) {
                        return null;
                    }
                    
                    if (day.date >= new Date(player.freeTime.from) && day.date <= new Date(player.freeTime.to)) {
                        return <SelectionLine key={index} color={player.color}/>;
                    }
                    
                    return <SelectionLine key={index} color={day.currentMonth ? "white" : "lightgrey"}/>;
                })}
            </div>
        </div>
    );
});
