import { computed, action, observable, makeObservable, runInAction } from "mobx";
import { DayIndex } from "../models/DayIndex";
import { DefaultDayIndex } from "../models/defaultValues/DayIndex";
import { DefaultPlayer } from "../models/defaultValues/Player";
import { Player } from "../models/Player";
import IRetriever from "../retriever/Retriever";

export class State {
    @observable private players: Player[];
    @observable private curentPlayer: Player;
    @observable private isStartDateSelected: boolean;
    @observable private startDate: DayIndex;
    @observable private endDate: DayIndex;
    private readonly retriever: IRetriever;

    public constructor(retriever: IRetriever) {
        makeObservable(this);
        this.startDate = DefaultDayIndex;
        this.endDate = DefaultDayIndex;
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
    get getStartDate(): DayIndex {
        return this.startDate;
    }

    @computed
    get getEndDate(): DayIndex {
        return this.endDate;
    }

    //set
    @action public setIsStartDateSelected = (value: boolean) => {
        this.isStartDateSelected = value;
    }

    @action public setStartDate = (date: DayIndex) => {
        this.startDate = date;
    }

    @action public setEndDate = (date: DayIndex) => {
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
