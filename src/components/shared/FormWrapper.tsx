import React from "react";

export const FormWrapper = ({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      flexDirection: "column",
      margin: "auto",
      minHeight: "100vh",
    }}
  >
    {children}
  </div>
);
