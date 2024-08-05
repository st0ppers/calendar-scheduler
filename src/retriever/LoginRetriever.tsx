import { handler } from "../internal/utils/ResponseHandler";
import ILoginRetriever from "./ILoginRetriever";

export class LoginRetriever implements ILoginRetriever {
  constructor(private readonly url: string) {}

  async login(username: string, password: string): Promise<string> {
    const body = { id: 0, username: username, password: password };
    return await fetch(`${this.url}/api/Login/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(handler)
      .then((r) => {
        console.log(r.value.access_token);
        return r.value.access_token;
      })
      .catch((error) => {
        console.error(error);
        return "";
      });
  }
}
