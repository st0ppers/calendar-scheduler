import { observer } from "mobx-react";
import { useState } from "../internal/ContextProvider";

const Legend = () => {
    const { getPlayers } = useState();

    return (
        <div style={{ borderStyle: "solid", borderColor: "black", width: "200px", height: "700px", padding: "15px" }}>
            {
                getPlayers.map((player, index) => {
                    return (
                        <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>{player.name} - {player.color}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default observer(Legend);
