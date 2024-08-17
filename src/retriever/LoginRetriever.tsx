import {handler} from "../internal/utils/ResponseHandler";
import ILoginRetriever from "./ILoginRetriever";
import {LoginRequest} from "../models/requests/LoginRequest";
import {Login} from "../models/internal/Login";
import {LoginResponse} from "../models/responses/LoginResponse";

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
            .catch((error) => {
                console.error(error);
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
