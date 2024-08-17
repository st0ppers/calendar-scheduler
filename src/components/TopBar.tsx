import {observer} from "mobx-react";
import React from "react";
import {LogoutButton} from "./header/LogoutButton";
import {PlayerInfo} from "./header/PlayerInfo";

export const TopBar = observer((): React.ReactElement => {
    const month = new Date().toLocaleString("default", {month: "long"});
    
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <PlayerInfo/>
            <p style={{fontSize: "32px"}}>{month}</p>
            <LogoutButton/>
        </div>
    );
});
