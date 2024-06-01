import { observer } from "mobx-react";
import { useState } from "../internal/ContextProvider";

const TopBar = () => {
    const month = new Date().toLocaleString('default', { month: 'long' });
    const { getCurrentPlayer } = useState();

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{getCurrentPlayer.name} - {getCurrentPlayer.color}</p>
            <p style={{ fontSize: "32px" }}>{month}</p>
            <button onClick={() => console.log(getCurrentPlayer)}>Logout</button>
        </div>
    )
}

export default observer(TopBar);
