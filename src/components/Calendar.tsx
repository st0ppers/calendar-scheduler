import { observer } from "mobx-react";
import { useStateContext } from "../internal/StateContext";
import CalendarBox from "./CalendarBox";

const Calendar = () => {
  const weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const state = useStateContext();
  return (
    <>
      <div
        style={{
          width: "100%",
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: " 100px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {weekdays.map((weekday, key) => {
            return (
              <div className="weekday" key={key}>
                <p>{weekday}</p>
              </div>
            );
          })}
        </div>
        <CalendarBox />
      </div>

      <button
        disabled={state.getIsStartDateSelected}
        onClick={state.updateCurrentPlayerFreeTime}
      >
        Submit
      </button>
    </>
  );
};

export default observer(Calendar);
