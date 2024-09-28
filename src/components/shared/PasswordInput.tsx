import { useStateContext } from "../../internal/StateContext";
import { observer } from "mobx-react";
import React from "react";
import "../../styles/login.css";

export const PasswordInput = observer((): React.ReactElement => {
  const { loginState } = useStateContext();

  return (
    <input
      type="password"
      name="Password"
      placeholder="Password"
      autoComplete="on"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        loginState.setPassword(e.target.value)
      }
    />
  );
});
