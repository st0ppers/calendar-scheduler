import {observer} from "mobx-react";
import React from "react";
import {useStateContext} from "../../internal/StateContext";
import {Player} from "../../models/internal/Player";
import {SubmitButton} from "../calendar/SubmitButton";
import {ResetButton} from "../ResetButton";

const Wrapper = ({children}: React.PropsWithChildren<{}>): React.ReactElement => (
    <div
        style={{
            width: "max-content",
            alignItems: "center",
            borderRadius: "16px",
            padding: "8px 12px",
            fontSize: "14px",
            justifyContent: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#93979f"
        }}
    >
        {children}
    </div>
);

export const Legend = observer((): React.ReactElement => {
    const {playerState} = useStateContext();
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <Wrapper>
                {playerState.getPlayers.map((player: Player) => {
                    return (
                        <p key={`${player.id}-${player.name}`} style={{color: "black"}}>
                            {player.name} -{"\u00A0"}{" "}
                            <span style={{color: player.color}}>{player.color}</span>
                        </p>
                    );
                })}
            </Wrapper>
            <SubmitButton/>
            <ResetButton/>
        </div>
    );
});
