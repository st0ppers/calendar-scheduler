import {observer} from "mobx-react";
import {useStateContext} from "../../internal/StateContext";
import React from "react";
import {SelectionLine} from "./SelectionLine";
import {DayNumber} from "./DayNumber";
import {Day} from "../../models/internal/Day";
import {Player} from "../../models/internal/Player";

interface Props {
    index: number;
    day: Day;
}

export const CalendarContent = observer(({index, day}: Props): React.ReactElement => {
    const {playerState} = useStateContext();
    const {getIsFromSelected, getPlayers, setFromDate, setToDate} = playerState;
    
    const handleClick = () => {
        if (!getIsFromSelected) {
            setFromDate(day.date);
            return;
        }
        setToDate(day.date);
    };
    
    return (
        <div
            key={index}
            onClick={handleClick}
            style={{
                width: "14%",
                height: "18%",
                border: "1px solid black",
                backgroundColor: day.currentMonth ? "white" : "lightgrey"
            }}
        >
            <DayNumber date={day.date?.getDate() ?? 0}/>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100px",
                    flexWrap: "wrap"
                }}
            >
                {getPlayers.map((player: Player, index: number) => {
                    return <SelectionLine key={index} player={player} day={day}/>;
                })}
            </div>
        </div>
    );
});
