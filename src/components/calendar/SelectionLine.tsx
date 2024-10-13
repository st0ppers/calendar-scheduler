import {observer} from "mobx-react";
import React from "react";
import {Player} from "../../models/internal/Player";
import {isCurrentMonth} from "../../internal/utils/Date";

interface Props {
    date: Date;
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
export const SelectionLine = observer(({date, player}: Props): React.ReactElement => {
        const backgroundColor = isCurrentMonth(date) ? "#93979f" : "black";
        return (
            <>
                {date >= player.freeTime.from &&
                date <= player.freeTime.to &&
                isCurrentMonth(date)
                    ? <Line backgroundColor={player.color}/>
                    : <Line backgroundColor={backgroundColor}/>
                }
            </>
        );
    }
);
