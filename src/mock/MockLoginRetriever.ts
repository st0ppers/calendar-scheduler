import ILoginRetriever from "../retriever/ILoginRetriever";
import {Login} from "../models/Login";

export class MockLoginRetriever implements ILoginRetriever {
    login(username: string, password: string): Promise<Login> {
        return new Promise<Login>((resolve, _) => {
            if (username === "a" && password === "a") {
                resolve({} as Login);
            } else {
                resolve({} as Login);
            }
        });
    }
}
