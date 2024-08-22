import {action, computed, makeObservable, observable, runInAction} from "mobx";
import ILoginRetriever from "../retriever/ILoginRetriever";
import {State} from "./State";
import {LoginRequest} from "../models/requests/LoginRequest";
import {RegisterRequest} from "../models/requests/RegisterRequest";

export class LoginState {
    @observable private isLoggedIn: boolean = false;
    @observable private username: string = "";
    @observable private password: string = "";
    @observable private color: string = "";
    @observable private accessToken: string = "";
    
    public constructor(private readonly retriever: ILoginRetriever, private readonly state: State) {
        makeObservable(this);
    }
    
    @computed
    get getColor(): string {
        return this.color;
    }
    
    @computed
    get getIsLoggedIn(): boolean {
        return this.isLoggedIn;
    }
    
    @computed
    get getAccessToken(): string {
        return this.accessToken;
    }
    
    @action public setUsername = (value: string) => {
        this.username = value;
    };
    
    @action public setColor = (value: string) => {
        this.color = value;
    };
    
    @action public setPassword = (value: string) => {
        this.password = value;
    };
    
    @action public logOut = () => {
        this.isLoggedIn = false;
    };
    
    public registerPlayer = async (): Promise<void> => {
        const request: RegisterRequest = {username: this.username, password: this.password, color: this.color};
        const response = await this.retriever.register(request);
        if (!response.token) {
            return;
        }
        runInAction(() => {
            this.isLoggedIn = true;
            this.accessToken = response.token;
        });
        
        await this.state.playerState.init(response.player);
    };
    
    public loginPlayer = async (): Promise<void> => {
        const request: LoginRequest = {username: this.username, password: this.password};
        const response = await this.retriever.login(request);
        if (!response.token) {
            return;
        }
        runInAction(() => {
            this.isLoggedIn = true;
            this.accessToken = response.token;
        });
        
        await this.state.playerState.init(response.player);
    };
}
