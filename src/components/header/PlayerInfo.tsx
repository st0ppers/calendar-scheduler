import { useStateContext } from "../../internal/StateContext";
import { observer } from "mobx-react";
import React from "react";

export const PlayerInfo = observer((): React.ReactElement => {
  const { playerState } = useStateContext();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p style={{ color: "white" }}>
        {playerState.getCurrentPlayer.name} -{"\u00A0"}
      </p>
      <p style={{ color: playerState.getCurrentPlayer.color }}>
        {playerState.getCurrentPlayer.color}
      </p>
    </div>
  );
});

