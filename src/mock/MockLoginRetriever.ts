import ILoginRetriever from "../retriever/ILoginRetriever";
import {LoginRequest} from "../models/requests/LoginRequest";
import {Login} from "../models/internal/Login";

export class MockLoginRetriever implements ILoginRetriever {
    login(request: LoginRequest): Promise<Login> {
        return new Promise<Login>((resolve, _) => {
            resolve({
                player: {
                    color: "red",
                    freeTime: {from: new Date("2024-08-15"), to: new Date("2024-08-20")},
                    name: "Petur"
                },
                expiration: 1,
                token: "token"
            } as Login);
        });
    }
}
