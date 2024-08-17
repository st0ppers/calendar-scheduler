import {LoginRequest} from "../models/requests/LoginRequest";
import {Login} from "../models/internal/Login";

export default interface ILoginRetriever {
    login(request: LoginRequest): Promise<Login>;
}
