import { observer } from "mobx-react";
import { useStateContext } from "../../internal/StateContext";
import React from "react";
import { SelectionLine } from "./SelectionLine";
import { DayNumber } from "./DayNumber";
import { Day } from "../../models/internal/Day";
import { Player } from "../../models/internal/Player";

interface Props {
  index: number;
  day: Day;
}

const Blob = ({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement => (
  <div
    style={{
      alignItems: " center",
      backgroundColor: "#242526",
      borderRadius: "16px",
      padding: "8px 12px",
      fontSize: "14px",
      margin: "5px",
    }}
  >
    {children}
  </div>
);

export const CalendarContent = observer(
  ({ index, day }: Props): React.ReactElement => {
    const { playerState } = useStateContext();
    const { getIsFromSelected, getPlayers, setFromDate, setToDate } =
      playerState;

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
          width: "11%",
          backgroundColor: day.currentMonth ? "#242526" : "black",
          alignItems: "center",
          borderRadius: "16px",
          padding: "8px 12px",
          fontSize: "14px",
          margin: "5px",
          justifyContent: "center",
          boxShadow: day.currentMonth
            ? "0 4px 10px rgba(0, 0, 0, 0.5)"
            : "none",
        }}
      >
        {day.currentMonth ? (
          <DayNumber date={day.date?.getDate() ?? 0} />
        ) : null}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            flexWrap: "wrap",
          }}
        >
          {getPlayers.map((player: Player, index: number) => {
            return <SelectionLine key={index} player={player} day={day} />;
          })}
        </div>
      </div>
    );
  },
);
