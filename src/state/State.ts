import { computed, action, observable, makeObservable, runInAction } from "mobx";
import { DefaultPlayer } from "../models/defaultValues/Player";
import { Player } from "../models/Player";
import IRetriever from "../retriever/Retriever";

export class State {
    @observable private players: Player[];
    @observable private curentPlayer: Player;
    @observable private isNoteModalOpen: boolean;
    private readonly retriever: IRetriever;

    public constructor(retriever: IRetriever) {
        makeObservable(this);
        this.isNoteModalOpen = false;
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

    @action public setNoteModal = () => {
        this.isNoteModalOpen = !this.isNoteModalOpen;
    }

    public async init() {
        const players = await this.retriever.getPlayers();
        const currentPlayer = await this.retriever.getCurrentPlayer();

        runInAction(() => {
            this.players = players
            this.curentPlayer = currentPlayer
        });
    }
}
