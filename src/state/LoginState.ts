import {action, computed, makeObservable, observable, runInAction} from "mobx";
import ILoginRetriever from "../retriever/ILoginRetriever";
import {State} from "./State";
import {LoginRequest} from "../models/requests/LoginRequest";

export class LoginState {
    @observable private isLoggedIn: boolean = false;
    @observable private username: string = "";
    @observable private password: string = "";
    @observable private accessToken: string = "";
    
    public constructor(private readonly retriever: ILoginRetriever, private readonly state: State) {
        makeObservable(this);
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
        const request: LoginRequest = {username: this.username, password: this.password};
        const response = await this.retriever.login(request);
        runInAction(() => {
            this.isLoggedIn = true;
            this.accessToken = response.token;
        });
        
        await this.state.playerState.init(response.player);
    };
}
