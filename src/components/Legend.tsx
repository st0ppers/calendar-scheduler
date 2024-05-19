import { Player } from "../models/Player";
interface Props {
    players: Player[];
}

export const Legend = (props: Props) => {
    return (
        <div style={{ borderStyle: "solid", borderColor: "black", width: "200px", height: "700px", padding:"15px"}}>
            {
                props.players.map((player, index) => {
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

