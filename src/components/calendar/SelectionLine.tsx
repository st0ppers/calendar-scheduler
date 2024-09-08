import {observer} from "mobx-react";
import React from "react";
import {Day} from "../../models/internal/Day";
import {Player} from "../../models/internal/Player";

interface Props {
    day: Day;
    player: Player;
}

interface ColorProps {
    backgroundColor: string;
}

const Line = ({backgroundColor}: ColorProps): React.ReactElement => (
    <div
        style={{
            width: "100%",
            height: "3px",
            margin: "0px",
            padding: "0px",
            backgroundColor: backgroundColor
        }}
    />
);
export const SelectionLine = observer(({day, player}: Props): React.ReactElement => {
    const backgroundColor = day.currentMonth ? "white" : "lightgrey";
    return (
        <>
            {
                day.date >= new Date(player.freeTime.from) && day.date <= new Date(player.freeTime.to)
                ?
                    // <div
                    //     style={{
                    //         width: "100%",
                    //         height: "3px",
                    //         margin: "0px",
                    //         padding: "0px",
                    //         backgroundColor: player.color
                    //     }}
                    // />
                <Line backgroundColor={player.color}/>
                :
                <Line backgroundColor={backgroundColor}/>
                // <div
                //     style={{
                //         width: "100%",
                //         height: "3px",
                //         margin: "0px",
                //         padding: "0px",
                //         backgroundColor: `${backgroundColor}`
                //     }}
                // />
            }
        </>
    );
});