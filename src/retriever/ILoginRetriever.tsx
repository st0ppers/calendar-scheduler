export default interface ILoginRetriever {
  login(username: string, password: string): Promise<string>;
}
