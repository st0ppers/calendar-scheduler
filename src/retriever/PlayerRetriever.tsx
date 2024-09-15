import { handler } from "../internal/utils/ResponseHandler";
import IPlayerRetriever from "./IPlayerRetriever";
import { UpdateFreeTimeRequest } from "../models/requests/UpdateFreeTimeRequest";
import { Player } from "../models/internal/Player";
import { PlayerResponse } from "../models/responses/PlayerResponse";

export class PlayerRetriever implements IPlayerRetriever {
  constructor(private readonly url: string) {}

  async setFreeTimeForPlayer(
    request: UpdateFreeTimeRequest,
    token: string,
  ): Promise<void> {
    await fetch(`${this.url}/api/Player/update-free-time`, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getPlayers(token: string): Promise<Player[]> {
    return await fetch(`${this.url}/api/Player?GroupId=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handler)
      .then(this.responseToInternal)
      .catch((error) => {
        console.error(error);
        return [] as Player[];
      });
  }

  private responseToInternal = (players: PlayerResponse[]): Player[] => {
    return players.map((p: PlayerResponse) => ({
      id: p.id,
      name: p.username,
      color: p.color,
      freeTime: p.freeTime,
    }));
  };
}
