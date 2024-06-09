import { observer } from "mobx-react";
import { Navigate } from "react-router-dom";
import { useState } from "../internal/ContextProvider";
import Calendar from "./Calendar";
import Legend from "./Legend";
import TopBar from "./TopBar";

const Main = () => {
    const { getIsLoggedIn } = useState();
    if (getIsLoggedIn) {
        return (
            <div>
                <TopBar />
                <div className='content' style={{ display: "flex" }}>
                    <Legend />
                    <Calendar />
                </div>
            </div>
        )
    }
    else {
        return <Navigate replace to="/" />;
    }
}

export default observer(Main);
