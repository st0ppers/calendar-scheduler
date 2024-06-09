import { FreeTime } from "../models/FreeTime";
import { Player } from "../models/Player";
import IRetriever from "../retriever/IRetriever";

export class MockRetriever implements IRetriever {
  private updateDates = (
    yesterday: Date,
    tomorrow: Date,
    twoDaysAfterToday: Date,
    today: Date,
  ) => {
    yesterday.setDate(today.getDate() - 1);
    tomorrow.setDate(today.getDate() + 1);
    twoDaysAfterToday.setDate(today.getDate() + 2);
  };

  private today = new Date();
  private yesterday = new Date();
  private tomorrow = new Date();
  private twoDaysAfterToday = new Date();
  private players: Player[] = [];

  constructor() {
    this.updateDates(
      this.yesterday,
      this.tomorrow,
      this.twoDaysAfterToday,
      this.today,
    );
    this.players = [
      {
        color: "Blue",
        name: "Alex",
        freeTime: { from: this.yesterday, to: this.today } as FreeTime,
      } as Player,
      {
        color: "Black",
        name: "Nasko",
        freeTime: { from: this.today, to: this.tomorrow } as FreeTime,
      } as Player,
      {
        color: "Red",
        name: "Petur",
        freeTime: { from: this.today, to: this.twoDaysAfterToday } as FreeTime,
      } as Player,
      {
        color: "Purple",
        name: "Djat",
        freeTime: { from: this.today, to: this.twoDaysAfterToday } as FreeTime,
      } as Player,
      {
        color: "Pink",
        name: "Jak",
        freeTime: { from: this.today, to: this.twoDaysAfterToday } as FreeTime,
      } as Player,
      {
        color: "Green",
        name: "Ivo",
        freeTime: { from: this.today, to: this.twoDaysAfterToday } as FreeTime,
      } as Player,
    ];
  }

  login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (username === "a" && password === "a") {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  setFreeTimeForPlayer(freeTime: FreeTime, p: Player): Promise<void> {
    this.players.forEach((player) => {
      if (player.name === p.name) {
        player.freeTime = freeTime;
      }
    });

    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }

  getCurrentPlayer(): Promise<Player> {
    return new Promise<Player>((resolve, reject) => {
      resolve({ color: "Purple", name: "Petur" } as Player);
    });
  }

  getPlayers(): Promise<Player[]> {
    return new Promise<Player[]>((resolve, reject) => {
      resolve(this.players);
    });
  }
}
