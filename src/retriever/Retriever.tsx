import { FreeTime } from "../models/FreeTime";
import { Player } from "../models/Player";

export default interface IRetriever {
    getCurrentPlayer(): Promise<Player>;
    getPlayers(): Promise<Player[]>;

    setFreeTimeForPlayer(freeTime: FreeTime, player: Player): Promise<void>;
    isPlayerRegistered(username: string, password: string): Promise<boolean>;
}
