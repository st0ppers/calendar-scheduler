import {handler} from "../internal/utils/ResponseHandler";
import ILoginRetriever from "./ILoginRetriever";
import {LoginRequest} from "../models/requests/LoginRequest";
import {Login} from "../models/internal/Login";
import {LoginResponse} from "../models/responses/LoginResponse";
import {RegisterRequest} from "../models/requests/RegisterRequest";
import {Bounce, toast} from "react-toastify";

export class LoginRetriever implements ILoginRetriever {
    constructor(private readonly url: string) {}
    
    async login(request: LoginRequest): Promise<Login> {
        return await fetch(`${this.url}/api/Login/login`, {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(handler)
            .then(this.responseToInternal)
            .catch((_) => {
                // console.error(error);
                toast.error("Invalid username or password", {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce
                });
                return {} as Login;
            });
    }
    
    async register(request: RegisterRequest): Promise<Login> {
        return await fetch(`${this.url}/api/Login/register`, {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(handler)
            .then(this.responseToInternal)
            .catch((_) => {
                // console.error(error);
                toast("Test");
                return {} as Login;
            });
    }
    
    private responseToInternal = (response: LoginResponse): Login => {
        return {
            token: response.token,
            player: {
                id: response.player.id,
                name: response.player.username,
                color: response.player.color,
                freeTime: response.player.freeTime
            },
            expiration: response.expiration
        };
    };
}
