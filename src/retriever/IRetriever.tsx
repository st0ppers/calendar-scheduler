import { FreeTime } from "../models/FreeTime";
import { Player } from "../models/Player";

export default interface IRetriever {
  login(username: string, password: string): Promise<boolean>;

  getCurrentPlayer(id: number): Promise<Player>;
  getPlayers(): Promise<Player[]>;

  setFreeTimeForPlayer(freeTime: FreeTime, player: Player): Promise<void>;
}
