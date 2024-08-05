import { FreeTime } from "../models/FreeTime";
import { Player } from "../models/Player";

export default interface IPlayerRetriever {
  getCurrentPlayer(id: number, token: string): Promise<Player>;
  getPlayers(token: string): Promise<Player[]>;

  setFreeTimeForPlayer(freeTime: FreeTime, player: Player): Promise<void>;
}
