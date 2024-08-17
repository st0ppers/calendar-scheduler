import {handler} from "../internal/utils/ResponseHandler";
import ILoginRetriever from "./ILoginRetriever";
import {LoginResponse} from "../models/LoginResponse";
import {Login} from "../models/Login";

export class LoginRetriever implements ILoginRetriever {
    constructor(private readonly url: string) {}
    
    async login(username: string, password: string): Promise<Login> {
        const body = {id: 0, username: username, password: password};
        return await fetch(`${this.url}/api/Login/login`, {
            method: "POST",
            body: JSON.stringify(body),
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
            player: {name: response.player.username, color: response.player.color, freeTime: response.player.freeTime},
            expiration: response.expiration
        };
    };
}
