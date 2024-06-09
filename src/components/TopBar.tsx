import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { useState } from "../internal/ContextProvider";

const TopBar = () => {
    const month = new Date().toLocaleString('default', { month: 'long' });
    const { getCurrentPlayer, logOut } = useState();
    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
                <p>{getCurrentPlayer.name} -{'\u00A0'}</p>
                <p style={{ color: getCurrentPlayer.color }}>{getCurrentPlayer.color}</p>
            </div>
            <p style={{ fontSize: "32px" }}>{month}</p>
            <button onClick={() => {
                logOut();
                navigate('/login');
            }}>Logout</button>
        </div>
    )
}

export default observer(TopBar);
