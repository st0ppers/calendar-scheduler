import { observer } from "mobx-react";
import { useStateContext } from "../../internal/StateContext";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../../styles/styles.css";

export const LogoutButton = observer((): React.ReactElement => {
  const { loginState } = useStateContext();
  const navigate = useNavigate();

  return (
    <button
      className="animated-button"
      onClick={() => {
        loginState.logOut();
        navigate("/login");
      }}
    >
      Logout
    </button>
  );
});

