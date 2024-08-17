import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction
} from "mobx";
import {DefaultDay} from "../models/defaultValues/DefaultIndexedDay";
import {DefaultPlayer} from "../models/defaultValues/DefaultPlayer";
import {Player} from "../models/Player";
import IPlayerRetriever from "../retriever/IPlayerRetriever";
import {Day} from "../models/Day";
import {FreeTime} from "../models/FreeTime";
import {State} from "./State";

export class PlayerState {
    @observable private players: Player[];
    @observable private currentPlayer: Player;
    @observable private isStartDateSelected: boolean;
    @observable private startDate: Day;
    @observable private endDate: Day;
    
    public constructor(
        private readonly retriever: IPlayerRetriever,
        private readonly state: State
    ) {
        makeObservable(this);
        this.startDate = DefaultDay;
        this.endDate = DefaultDay;
        this.isStartDateSelected = false;
        this.players = [];
        this.currentPlayer = DefaultPlayer;
    }
    
    //get
    @computed
    get getPlayers(): Player[] {
        return this.players;
    }
    
    @computed
    get getCurrentPlayer(): Player {
        return this.currentPlayer;
    }
    
    @computed
    get getIsStartDateSelected(): boolean {
        return this.isStartDateSelected;
    }
    
    @computed
    get getStartDate(): Day {
        return this.startDate;
    }
    
    @computed
    get getEndDate(): Day {
        return this.endDate;
    }
    
    //set
    @action private setIsStartDateSelected = (value: boolean) => {
        this.isStartDateSelected = value;
    };
    
    @action public setCurrentPlayer = (player: Player) => {
        this.currentPlayer = player;
    };
    
    @action public setStartDate = (date: Day) => {
        this.startDate = date;
        this.setIsStartDateSelected(true);
    };
    
    @action public setEndDate = (date: Day) => {
        this.endDate = date;
        this.setIsStartDateSelected(false);
    };
    
    public updateCurrentPlayerFreeTime = async () => {
        const freeTime = {
            from: this.startDate.date,
            to: this.endDate.date
        } as FreeTime;
        const player = this.currentPlayer;
        await this.retriever.setFreeTimeForPlayer(freeTime, player);
        const newPlayers = await this.retriever.getPlayers(
            this.state.loginState.getAccessToken
        );
        
        runInAction(() => {
            this.players = newPlayers;
        });
    };
    
    public init = async () => {
        const token = this.state.loginState.getAccessToken;
        const players = await this.retriever.getPlayers(token);
        // const currentPlayer = await this.retriever.getCurrentPlayer(1, token); //TODO: get current player id
        
        runInAction(() => {
            this.players = players;
            // this.currentPlayer = currentPlayer;
        });
    };
}
