import { useStateContext } from "../../internal/StateContext";
import { observer } from "mobx-react";
import React from "react";
import "../../styles/login.css";

export const UsernameInput = observer((): React.ReactElement => {
  const { loginState } = useStateContext();

  return (
    <input
      type="text"
      name="Username"
      placeholder="Username"
      autoComplete="on"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        loginState.setUsername(e.target.value)
      }
    />
  );
});
