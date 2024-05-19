import { Player } from "../models/Player";
interface Props {
    player: Player;
    isAdmin: boolean;
}

export const TopBar = (props: Props) => {
    const month = new Date().toLocaleString('default', { month: 'long' });
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{props.player.name} - {props.player.color}</p>
            <p style={{ fontSize: "32px" }}>{month}</p>
            <button>Logout</button>
        </div>
    )
}

