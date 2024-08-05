import { handler } from "../internal/utils/ResponseHandler";
import { FreeTime } from "../models/FreeTime";
import { Player } from "../models/Player";
import IPlayerRetriever from "./IPlayerRetriever";

export class PlayerRetriever implements IPlayerRetriever {
  constructor(private readonly url: string) {}

  setFreeTimeForPlayer(freeTime: FreeTime, player: Player): Promise<void> {
    //TODO:
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }

  async getCurrentPlayer(id: number, token: string): Promise<Player> {
    return await fetch(`${this.url}/api/Player/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handler)
      .catch((error) => {
        console.error(error);
        return {} as Player;
      });
  }

  async getPlayers(token: string): Promise<Player[]> {
    return await fetch(`${this.url}/api/Player/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handler)
      .catch((error) => {
        console.error(error);
        return [] as Player[];
      });
  }
}
