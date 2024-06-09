import { observer } from "mobx-react";
import { useState } from "../internal/ContextProvider";

const Legend = () => {
    const { getPlayers } = useState();

    return (
        <div style={{
            borderStyle: "solid",
            borderColor: "black",
            width: "200px",
            height: "fit-content",
            padding: "15px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column" }}>
            {
                getPlayers.map((player, index) => {
                    return (
                        <div key={index} style={{ margin: "0 20%", display: "flex" }} >
                            <p>{player.name} -{'\u00A0'}</p>
                            <p style={{ color: player.color }}>{player.color}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default observer(Legend);
