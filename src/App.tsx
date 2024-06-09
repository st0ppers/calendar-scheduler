import { State } from "./state/State";
import { MockRetriever } from "./mock/MockRetriever";
import { StateProvider } from "./internal/ContextProvider";
import { observer } from "mobx-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";

const App = () => {
    const mocRetriever = new MockRetriever();
    const state = new State(mocRetriever);
    state.init();

    return (
        <StateProvider state={state}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/calendar" element={<Main />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </StateProvider >
    )
}

export default observer(App);
