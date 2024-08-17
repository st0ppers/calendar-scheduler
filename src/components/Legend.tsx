import {observer} from "mobx-react";
import {useStateContext} from "../internal/StateContext";
import React from "react";
import {Player} from "../models/Player";

export const Legend = observer((): React.ReactElement => {
    const {playerState} = useStateContext();
    return (
        <div
            style={{
                borderStyle: "solid",
                borderColor: "black",
                width: "200px",
                height: "fit-content",
                padding: "15px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            }}
        >
            {playerState.getPlayers.map((player: Player, index: number) => {
                return (
                    <div key={index} style={{margin: "0 20%", display: "flex"}}>
                        <p>
                            {player.name} -{"\u00A0"}
                        </p>
                        <p style={{color: player.color}}>{player.color}</p>
                    </div>
                );
            })}
        </div>
    );
});
