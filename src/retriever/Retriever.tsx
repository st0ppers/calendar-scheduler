import { FreeTime } from "../models/FreeTime";
import { Player } from "../models/Player";
import IRetriever from "../retriever/IRetriever";

export class Retriever implements IRetriever {
  constructor(private readonly url: string) {}

  async login(username: string, password: string): Promise<boolean> {
    const body = { username: username, password: password };
    return await fetch(`${this.url}/api/Login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(this.handler)
      .then((r) => JSON.parse(r))
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

  setFreeTimeForPlayer(freeTime: FreeTime, player: Player): Promise<void> {
    //TODO:
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }

  async getCurrentPlayer(id: number): Promise<Player> {
    return await fetch(`${this.url}/api/Player/${id}`)
      .then(this.handler)
      .catch((error) => {
        console.error(error);
        return {} as Player;
      });
  }

  async getPlayers(): Promise<Player[]> {
    return await fetch(`${this.url}/api/Player/all`, {
      method: "GET",
    })
      .then(this.handler)
      .catch((error) => {
        console.error(error);
        return [] as Player[];
      });
  }

  private async handler(resp: any) {
    const content = await resp.json();
    return resp.ok ? content : Promise.reject(content || resp.statusText);
  }
}
