import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../internal/StateContext";

const TopBar = () => {
  const month = new Date().toLocaleString("default", { month: "long" });
  const state = useStateContext();
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <p>
          {state.getCurrentPlayer.name} -{"\u00A0"}
        </p>
        <p style={{ color: state.getCurrentPlayer.color }}>
          {state.getCurrentPlayer.color}
        </p>
      </div>
      <p style={{ fontSize: "32px" }}>{month}</p>
      <button
        onClick={() => {
          state.logOut();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default observer(TopBar);
