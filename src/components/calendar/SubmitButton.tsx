import { useStateContext } from "../../internal/StateContext";
import { observer } from "mobx-react";
import React from "react";
import "../../styles/styles.css";

export const SubmitButton = observer((): React.ReactElement => {
  const { playerState } = useStateContext();
  const { getIsFromSelected, updateCurrentPlayerFreeTime } = playerState;
  return (
    <button
      className="animated-button"
      disabled={getIsFromSelected}
      onClick={updateCurrentPlayerFreeTime}
    >
      Submit
    </button>
  );
});

