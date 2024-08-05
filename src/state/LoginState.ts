import { action, computed, observable, runInAction } from "mobx";
import ILoginRetriever from "../retriever/ILoginRetriever";
import { State } from "./State";

export class LoginState {
  @observable private isLoggedIn: boolean;
  @observable private username: string;
  @observable private password: string;
  @observable private accessToken: string;

  public constructor(
    private readonly retriever: ILoginRetriever,
    private readonly state: State,
  ) {
    //makeObservable(this);
    this.isLoggedIn = false;
    this.username = "";
    this.password = "";
    this.accessToken = "";
  }

  @computed
  get getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  @computed
  get getAccessToken(): string {
    return this.accessToken;
  }

  @action public seAccessToken = (value: string) => {
    this.accessToken = value;
  };

  @action public setUsername = (value: string) => {
    this.username = value;
  };

  @action public setPassword = (value: string) => {
    this.password = value;
  };

  @action public logOut = () => {
    this.isLoggedIn = false;
  };

  public loginPlayer = async () => {
    const token = await this.retriever.login(this.username, this.password);
    if (!token) {
      return;
    } else {
      runInAction(() => {
        this.isLoggedIn = true;
        this.accessToken = token;
      });

      await this.state.playerState.init();
    }
  };
}
