import TopBar from "./components/TopBar";
import Legend from "./components/Legend";
import Calendar from "./components/Calendar";
import Note from "./components/Note";
import { State } from "./state/State";
import { MockRetriever } from "./mock/MockRetriever";
import { StateProvider } from "./internal/ContextProvider";
import { observer } from "mobx-react";


const App = () => {
    const mocRetriever = new MockRetriever();
    const state = new State(mocRetriever);
    state.init();

    return (
        <StateProvider state={state}>
            <div>
                <TopBar />
                <div className='content' style={{ display: "flex" }}>
                    <Legend />
                    <Calendar />
                </div>
                <Note isOpen={false} />
            </div>
        </StateProvider>
    )
}

export default observer(App);
