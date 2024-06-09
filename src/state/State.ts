import {
  computed,
  action,
  observable,
  makeObservable,
  runInAction,
} from "mobx";
import { DefaultDay } from "../models/defaultValues/DefaultIndexedDay";
import { DefaultPlayer } from "../models/defaultValues/DefaultPlayer";
import { Player } from "../models/Player";
import IRetriever from "../retriever/IRetriever";
import { Day } from "../models/Day";
import { FreeTime } from "../models/FreeTime";

export class State {
  @observable private players: Player[];
  @observable private curentPlayer: Player;
  @observable private isStartDateSelected: boolean;
  @observable private startDate: Day;
  @observable private endDate: Day;

  @observable private isLoggedIn: boolean;
  @observable private username: string;
  @observable private password: string;

  private readonly retriever: IRetriever;

  public constructor(retriever: IRetriever) {
    makeObservable(this);
    this.startDate = DefaultDay;
    this.endDate = DefaultDay;
    this.isStartDateSelected = false;
    this.players = [];
    this.curentPlayer = DefaultPlayer;
    this.retriever = retriever;

    this.isLoggedIn = false;
    this.username = "";
    this.password = "";
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
  get getStartDate(): Day {
    return this.startDate;
  }

  @computed
  get getEndDate(): Day {
    return this.endDate;
  }

  @computed
  get getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  //set
  @action private setIsStartDateSelected = (value: boolean) => {
    this.isStartDateSelected = value;
  };

  @action public setStartDate = (date: Day) => {
    this.startDate = date;
    this.setIsStartDateSelected(true);
  };

  @action public setUsername = (value: string) => {
    this.username = value;
  };

  @action public setPassword = (value: string) => {
    this.password = value;
  };

  @action public setEndDate = (date: Day) => {
    this.endDate = date;
    this.setIsStartDateSelected(false);
  };

  @action public logOut = () => {
    this.isLoggedIn = false;
  };

  public updateCurrentPlayerFreeTime = async () => {
    const freeTime = {
      from: this.startDate.date,
      to: this.endDate.date,
    } as FreeTime;
    const player = this.curentPlayer;
    await this.retriever.setFreeTimeForPlayer(freeTime, player);
    const newPlayers = await this.retriever.getPlayers();

    runInAction(() => {
      this.players = newPlayers;
    });
  };

  public loginPlayer = async () => {
    const isLoggedIn = await this.retriever.login(this.username, this.password);

    runInAction(() => {
      this.isLoggedIn = isLoggedIn;
    });
  };

  public init = async () => {
    const players = await this.retriever.getPlayers();
    const currentPlayer = await this.retriever.getCurrentPlayer(1); //TODO: get current player id

    runInAction(() => {
      this.players = players;
      this.curentPlayer = currentPlayer;
    });
  };
}
