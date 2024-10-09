import ILoginRetriever from "../retriever/ILoginRetriever";
import IPlayerRetriever from "../retriever/IPlayerRetriever";
import {LoginState} from "./LoginState";
import {PlayerState} from "./PlayerState";
import {makeObservable} from "mobx";
import {CalendarState} from "./CalendarState";
import {ICalendarRetriever} from "../mock/MockCalendarRetriever";

export class State {
    public readonly loginState: LoginState;
    public readonly playerState: PlayerState;
    public readonly calendarState: CalendarState;
    
    public constructor(loginRetriever: ILoginRetriever, playerRetriever: IPlayerRetriever,
        calendarRetriever: ICalendarRetriever) {
        this.loginState = new LoginState(loginRetriever, this);
        this.playerState = new PlayerState(playerRetriever, this);
        this.calendarState = new CalendarState(calendarRetriever);
        makeObservable(this);
    }
    
    public async init(): Promise<void> {
        await this.calendarState.init();
        console.log("State initialized");
        console.log("calendar state" + JSON.stringify(this.calendarState));
        console.log("player state" + JSON.stringify(this.playerState));
        console.log("login state" + JSON.stringify(this.loginState));
    }
}
