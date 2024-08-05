import ILoginRetriever from "../retriever/ILoginRetriever";

export class MockLoginRetriever implements ILoginRetriever {
  login(username: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (username === "a" && password === "a") {
        resolve("true");
      } else {
        resolve("false");
      }
    });
  }
}
