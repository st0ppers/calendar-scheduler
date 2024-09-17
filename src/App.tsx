import {State} from "./state/State";
import {observer} from "mobx-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateProvider} from "./internal/StateContext";
import {PlayerRetriever} from "./retriever/PlayerRetriever";
import {LoginRetriever} from "./retriever/LoginRetriever";
import {Login} from "./components/login/Login";
import {Main} from "./components/main/Main";
import {Register} from "./components/register/Register";
import {MockPlayerRetriever} from "./mock/MockPlayerRetriever";
import {MockLoginRetriever} from "./mock/MockLoginRetriever";

export const App = observer(() => {
    const playerRetriever = process.env.NODE_ENV === 'development'
        ? new MockPlayerRetriever()
        : new PlayerRetriever(process.env.REACT_APP_API_URL ?? "",);
    const loginRetriever = process.env.NODE_ENV === 'development'
        ? new MockLoginRetriever()
        : new LoginRetriever(process.env.REACT_APP_API_URL ?? "",);

    const state = new State(loginRetriever, playerRetriever);

    return (
        <StateProvider state={state}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/calendar" element={<Main/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </StateProvider>
    );
});
