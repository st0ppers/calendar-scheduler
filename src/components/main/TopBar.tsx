import {observer} from "mobx-react";
import React from "react";
import {PlayerInfo} from "../header/PlayerInfo";
import {LogoutButton} from "../header/LogoutButton";

export const TopBar = observer((): React.ReactElement => {
    const month = new Date().toLocaleString("default", {month: "long"});
    
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <PlayerInfo/>
            <p style={{fontSize: "32px", margin:"0"}}>{month}</p>
            <LogoutButton/>
        </div>
    );
});
