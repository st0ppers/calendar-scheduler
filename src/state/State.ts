import ILoginRetriever from "../retriever/ILoginRetriever";
import IPlayerRetriever from "../retriever/IPlayerRetriever";
import { LoginState } from "./LoginState";
import { PlayerState } from "./PlayerState";

export class State {
  public readonly loginState: LoginState;
  public readonly playerState: PlayerState;

  public constructor(
    public readonly loginRetriever: ILoginRetriever,
    public readonly playerRetriever: IPlayerRetriever,
  ) {
    this.loginState = new LoginState(loginRetriever, this);
    this.playerState = new PlayerState(playerRetriever, this);
  }

  public init() {
    //Promise.all([this.playerState.init()]);
  }
}
