import ILoginRetriever from "../retriever/ILoginRetriever";
import {LoginRequest} from "../models/requests/LoginRequest";
import {Login} from "../models/internal/Login";
import {RegisterRequest} from "../models/requests/RegisterRequest";

export class MockLoginRetriever implements ILoginRetriever {
    login(request: LoginRequest): Promise<Login> {
        return new Promise<Login>((resolve, _) => {
            resolve({
                player: {
                    color: "red",
                    freeTime: {from: new Date("2024-08-15"), to: new Date("2024-08-20")},
                    name: "Petur",
                    id: "2"
                },
                expiration: 1,
                token: "token"
            } as Login);
        });
    }

    register(request: RegisterRequest): Promise<Login> {
        return new Promise<Login>((resolve, _) => {
            resolve({
                player: {
                    color: "red",
                    freeTime: {from: new Date("2024-08-15"), to: new Date("2024-08-20")},
                    name: "Petur",
                    id: "2"
                },
                expiration: 1,
                token: "token"
            } as Login);
        });
    }
}
