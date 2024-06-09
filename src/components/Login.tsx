import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { useState } from "../internal/ContextProvider";

const Login: React.FC = () => {
    const { setPassword, setUsername, isPlayerRegistered } = useState();
    const navigate = useNavigate();
    const margin = {
        margin: "10px",
    };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        isPlayerRegistered();
        navigate('/calendar');
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                flexDirection: "column",
                height: "100%"
            }}>
            <p style={{ textAlign: "center" }}>
                Welcome
            </p>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "inline-grid",
                    width: "20%",
                    margin: "0 auto"
                }}>
                <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    style={margin}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    autoComplete="on"
                    style={margin}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <input
                    style={margin}
                    type="submit"
                    value="Login" />
            </form>
        </div>
    )
};

export default observer(Login);
