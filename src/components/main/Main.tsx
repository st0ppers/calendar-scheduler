import {observer} from "mobx-react";
import {TopBar} from "./TopBar";
import {Legend} from "./Legend";
import React from "react";
import {CalendarComponent} from "../calendar/CalendarComponent";

export const Main = observer((): React.ReactElement  => {
    return (
        <div>
            <TopBar/>
            <div className="content" style={{display: "flex"}}>
                <Legend/>
                <CalendarComponent/>
            </div>
        </div>
    );
});
