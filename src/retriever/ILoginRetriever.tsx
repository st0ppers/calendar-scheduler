import {Login} from "../models/Login";

export default interface ILoginRetriever {
  login(username: string, password: string): Promise<Login>;
}
