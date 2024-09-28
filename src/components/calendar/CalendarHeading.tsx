import { observer } from "mobx-react";
import React from "react";

const Wrapper = ({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const Blob = ({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement => (
  <div
    style={{
      display: " inline-flex",
      alignItems: "center",
      backgroundColor: "#242526",
      borderRadius: "16px",
      padding: "8px 12px",
      fontSize: "14px",
      margin: "5px",
      width: "11%",
      justifyContent: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    }}
  >
    {children}
  </div>
);

export const CalendarHeading = observer((): React.ReactElement => {
  const weekdays: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Wrapper>
      {weekdays.map((weekday, key) => {
        return (
          <Blob key={key}>
            <p style={{ color: "white", margin: "0px" }}>{weekday}</p>
          </Blob>
        );
      })}
    </Wrapper>
  );
});

