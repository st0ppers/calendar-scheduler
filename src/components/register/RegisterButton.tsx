import { observer } from "mobx-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const RegisterButton = observer((): React.ReactElement => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/register");
  };
  return (
    <button className="animated-button full-width" onClick={onClick}>
      Register
    </button>
  );
});
