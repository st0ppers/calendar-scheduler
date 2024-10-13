import {DayNumber} from "./DayNumber";
import {isCurrentMonth} from "../../internal/utils/Date";
import {Player} from "../../models/internal/Player";
import {SelectionLine} from "./SelectionLine";
import {useStateContext} from "../../internal/StateContext";
import {observer} from "mobx-react";
import React from "react";

interface Props {
    date: Date;
}

const LineWrapper = ({children}: React.PropsWithChildren<{}>): React.ReactElement => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            flexWrap: "wrap"
        }}>
        {children}
    </div>
);

export const CalendarBoxContent = observer(({date}: Props) => {
    const {playerState} = useStateContext();
    const {getPlayers} = playerState;

    return (
        <>
            <DayNumber date={date.getDate()} isCurrentMonth={isCurrentMonth(date)}/>
            <LineWrapper>
                {getPlayers.map((player: Player, index: number) => {
                    return <SelectionLine key={`${player.name}-${player.color}-${index}`} player={player} date={date}/>;
                })}
            </LineWrapper>
        </>
    );
});