import React from "react";
import { observer } from "mobx-react";
import { useStateContext } from "../internal/StateContext";
import "../styles/styles.css";

export const ResetButton = observer((): React.ReactElement => {
  const { playerState } = useStateContext();
  return (
    <button
      className="animated-button"
      onClick={playerState.resetCurrentFreeTime}
    >
      Reset
    </button>
  );
});

