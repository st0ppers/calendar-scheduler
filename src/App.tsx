import { State } from "./state/State";
import { observer } from "mobx-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StateProvider } from "./internal/StateContext";
import { PlayerRetriever } from "./retriever/PlayerRetriever";
import { LoginRetriever } from "./retriever/LoginRetriever";
import { Login } from "./components/login/Login";
import { Main } from "./components/main/Main";
import { Register } from "./components/register/Register";
import { MockPlayerRetriever } from "./mock/MockPlayerRetriever";
import { MockLoginRetriever } from "./mock/MockLoginRetriever";

export const App = observer(() => {
  const playerRetriever =
    process.env.NODE_ENV === "?"
      ? new MockPlayerRetriever()
      : new PlayerRetriever("https://localhost:7265");
  const loginRetriever =
    process.env.NODE_ENV === "?"
      ? new MockLoginRetriever()
      : new LoginRetriever("https://localhost:7265");

  const state = new State(loginRetriever, playerRetriever);
  return (
    <StateProvider state={state}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/calendar" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
});
