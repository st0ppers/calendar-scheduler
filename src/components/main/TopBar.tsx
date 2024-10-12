import {observer} from "mobx-react";
import React from "react";
import {PlayerInfo} from "../header/PlayerInfo";
import {LogoutButton} from "../header/LogoutButton";

export const TopBar = observer((): React.ReactElement => {
    // const month = new Date().toLocaleString("default", {month: "long"});
    // const {calendarState} = useStateContext();
    // const {getMonth, setMonthToPrev, setMonthToNext} = calendarState;
    // const {setMonthToPrev, setMonthToNext} = calendarState;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <PlayerInfo/>
            <div style={{display: "flex", gap: "50px"}}>
                {/* get prev month with days */}
                {/*<img src={"left.png"} alt="left arrow" onClick={"Test -1"}/>*/}
                <img src={"left.png"} alt="left arrow"/>
                <p style={{fontSize: "32px", margin: "0", color: "white"}}>{"Test"}</p>
                {/* get next month with days */}
                <img src={"right.png"} alt="right arrow"/>
            </div>
            <LogoutButton/>
        </div>
    );
});
