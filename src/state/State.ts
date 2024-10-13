import ILoginRetriever from "../retriever/ILoginRetriever";
import IPlayerRetriever from "../retriever/IPlayerRetriever";
import {LoginState} from "./LoginState";
import {PlayerState} from "./PlayerState";
import {makeObservable} from "mobx";
import {CalendarState} from "./CalendarState";

export class State {
    public readonly loginState: LoginState;
    public readonly playerState: PlayerState;
    public readonly calendarState: CalendarState;

    public constructor(loginRetriever: ILoginRetriever, playerRetriever: IPlayerRetriever) {
        this.loginState = new LoginState(loginRetriever, this);
        this.playerState = new PlayerState(playerRetriever, this);
        this.calendarState = new CalendarState();
        makeObservable(this);
    }
}