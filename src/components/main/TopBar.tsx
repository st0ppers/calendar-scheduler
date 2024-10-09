import {observer} from "mobx-react";
import React from "react";
import {PlayerInfo} from "../header/PlayerInfo";
import {LogoutButton} from "../header/LogoutButton";
import {useStateContext} from "../../internal/StateContext";

export const TopBar = observer((): React.ReactElement => {
    // const month = new Date().toLocaleString("default", {month: "long"});
    const {calendarState} = useStateContext();
    const {getMonth, setMonthToPrev, setMonthToNext} = calendarState;
    
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
                <img src={"left.png"} alt="left arrow" onClick={setMonthToPrev}/>
                <p style={{fontSize: "32px", margin: "0", color: "white"}}>{getMonth}</p>
                {/* get next month with days */}
                <img src={"right.png"} alt="right arrow" onClick={setMonthToNext}/>
            </div>
            <LogoutButton/>
        </div>
    );
});
