import {State} from "./state/State";
import {MockPlayerRetriever} from "./mock/MockPlayerRetriever";
import {observer} from "mobx-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateProvider} from "./internal/StateContext";
import {MockLoginRetriever} from "./mock/MockLoginRetriever";
import {PlayerRetriever} from "./retriever/PlayerRetriever";
import {LoginRetriever} from "./retriever/LoginRetriever";
import {Login} from "./components/login/Login";
import {Main} from "./components/Main";

export const App = observer(() => {
    const playerRetriever =
        process.env.NODE_ENV === "development"
        ? new PlayerRetriever("https://localhost:7265")
        : new MockPlayerRetriever();
    
    const loginRetriever =
        process.env.NODE_ENV === "development"
        ? new LoginRetriever("https://localhost:7265")
        : new MockLoginRetriever();
    
    const state = new State(loginRetriever, playerRetriever);
    state.init();
    
    return (
        <StateProvider state={state}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/calendar" element={<Main/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </StateProvider>
    );
});
