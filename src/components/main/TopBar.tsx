import {observer} from "mobx-react";
import React from "react";
import {PlayerInfo} from "../header/PlayerInfo";
import {LogoutButton} from "../header/LogoutButton";
import {useCalendar} from "../../internal/CalendarStateContext";

export const TopBar = observer((): React.ReactElement => {
    const {setNextMonth, setPrevMonth, getLongMonth} = useCalendar();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <PlayerInfo/>
            <div style={{display: "flex", gap: "50px"}}>
                <img src={"left.png"} alt="left arrow" onClick={setPrevMonth}/>
                <p style={{fontSize: "32px", margin: "0", color: "white", width: "200px", textAlign: "center"}}>{getLongMonth()}</p>
                <img src={"right.png"} alt="right arrow" onClick={setNextMonth}/>
            </div>
            <LogoutButton/>
        </div>
    );
});
