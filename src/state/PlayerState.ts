import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction
} from "mobx";
import {DefaultPlayer} from "../models/defaultValues/DefaultPlayer";
import IPlayerRetriever from "../retriever/IPlayerRetriever";
import {State} from "./State";
import {Player} from "../models/internal/Player";
import {UpdateFreeTimeRequest} from "../models/requests/UpdateFreeTimeRequest";

export class PlayerState {
    @observable private players: Player[] = [];
    @observable private currentPlayer: Player = DefaultPlayer;
    @observable private isFromSelected: boolean = false;
    
    public constructor(private readonly retriever: IPlayerRetriever, private readonly state: State) {
        makeObservable(this);
    }
    
    @computed
    get getPlayers(): Player[] {
        return this.players;
    }
    
    @computed
    get getCurrentPlayer(): Player {
        return this.currentPlayer;
    }
    
    @computed
    get getIsFromSelected(): boolean {
        return this.isFromSelected;
    }
    
    @action public setCurrentPlayer = (player: Player) => {
        this.currentPlayer = player;
    };
    
    @action public setFromDate = (date: Date) => {
        this.currentPlayer.freeTime.from = date;
        this.players = this.players.map(p => p.id === this.currentPlayer.id ? this.currentPlayer : p);
        this.isFromSelected = !this.isFromSelected;
    };
    
    @action public setToDate = (date: Date) => {
        this.currentPlayer.freeTime.to = date;
        this.players = this.players.map(p => p.id === this.currentPlayer.id ? this.currentPlayer : p);
        this.isFromSelected = !this.isFromSelected;
    };
    
    public updateCurrentPlayerFreeTime = async () => {
        const request: UpdateFreeTimeRequest = {
            playerId: this.currentPlayer.id,
            from: this.currentPlayer.freeTime.from,
            to: this.currentPlayer.freeTime.to
        };
        
        await this.retriever.setFreeTimeForPlayer(request, this.state.loginState.getAccessToken);
        const newPlayers = await this.retriever.getPlayers(this.state.loginState.getAccessToken);
        
        runInAction(() => {
            this.players = newPlayers;
        });
    };
    
    public init = async (player: Player) => {
        const token = this.state.loginState.getAccessToken;
        const players = await this.retriever.getPlayers(token);
        
        runInAction(() => {
            this.players = players;
            this.currentPlayer = player;
        });
    };
}
