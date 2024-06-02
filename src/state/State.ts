import { computed, action, observable, makeObservable, runInAction } from "mobx";
import { IndexedDay } from "../models/IndexedDay";
import { DefaultIndexedDay } from "../models/defaultValues/DefaultIndexedDay";
import { DefaultPlayer } from "../models/defaultValues/DefaultPlayer";
import { Player } from "../models/Player";
import IRetriever from "../retriever/Retriever";

export class State {
    @observable private players: Player[];
    @observable private curentPlayer: Player;
    @observable private isStartDateSelected: boolean;
    @observable private startDate: IndexedDay;
    @observable private endDate: IndexedDay;
    private readonly retriever: IRetriever;

    public constructor(retriever: IRetriever) {
        makeObservable(this);
        this.startDate = DefaultIndexedDay;
        this.endDate = DefaultIndexedDay;
        this.isStartDateSelected = false;
        this.players = [];
        this.curentPlayer = DefaultPlayer;
        this.retriever = retriever;
    }

    //get
    @computed
    get getPlayers(): Player[] {
        return this.players;
    }

    @computed
    get getCurrentPlayer(): Player {
        return this.curentPlayer;
    }

    @computed
    get getIsStartDateSelected(): boolean {
        return this.isStartDateSelected;
    }

    @computed
    get getStartDate(): IndexedDay {
        return this.startDate;
    }

    @computed
    get getEndDate(): IndexedDay {
        return this.endDate;
    }

    //set
    @action public setIsStartDateSelected = (value: boolean) => {
        this.isStartDateSelected = value;
    }

    @action public setStartDate = (date: IndexedDay ) => {
        this.startDate = date;
    }

    @action public setEndDate = (date: IndexedDay ) => {
        this.endDate = date;
    }

    public init = async () => {
        const players = await this.retriever.getPlayers();
        const currentPlayer = await this.retriever.getCurrentPlayer();

        runInAction(() => {
            this.players = players
            this.curentPlayer = currentPlayer
        });
    }
}
