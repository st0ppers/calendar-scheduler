import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../internal/StateContext";

const Login: React.FC = () => {
  const state = useStateContext();
  const navigate = useNavigate();
  const margin = {
    margin: "10px",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    await state.loginPlayer();

    if (!state.getIsLoggedIn) {
      //add warning message that the login failed
    } else {
      navigate("/calendar");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <p style={{ textAlign: "center" }}>Welcome</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-grid",
          width: "20%",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="Username"
          placeholder="Username"
          style={margin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            state.setUsername(e.target.value)
          }
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          autoComplete="on"
          style={margin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            state.setPassword(e.target.value)
          }
        />
        <input style={margin} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default observer(Login);
