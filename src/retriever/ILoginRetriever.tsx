import {LoginRequest} from "../models/requests/LoginRequest";
import {Login} from "../models/internal/Login";
import {RegisterRequest} from "../models/requests/RegisterRequest";

export default interface ILoginRetriever {
    login(request: LoginRequest): Promise<Login>;
    
    register(request: RegisterRequest): Promise<Login>;
}
