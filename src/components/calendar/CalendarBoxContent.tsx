import {DayNumber} from "./DayNumber";
import {isCurrentMonth} from "../../internal/utils/Date";
import {Player} from "../../models/internal/Player";
import {SelectionLine} from "./SelectionLine";
import {useStateContext} from "../../internal/StateContext";
import {observer} from "mobx-react";

interface Props {
    date: Date;
}

export const CalendarBoxContent = observer(({date}: Props) => {
    const {playerState} = useStateContext();
    const {getPlayers} = playerState;

    return (
        <>
            <DayNumber date={date.getDate()} isCurrentMonth={isCurrentMonth(date)}/>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100px",
                    flexWrap: "wrap"
                }}>
                {getPlayers.map((player: Player) => {
                    return <SelectionLine player={player} date={date}/>;
                })}
            </div>
        </>
    );
});