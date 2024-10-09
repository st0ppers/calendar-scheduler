import { observer } from "mobx-react";
import React from "react";

interface Props {
  date: number;
}

export const DayNumber = observer(({ date }: Props): React.ReactElement => {
  return (
    <p
      style={{
        textAlign: "center",
        padding: "0px",
        margin: "0px",
        color: "black",
      }}
    >
      {date}
    </p>
  );
});

