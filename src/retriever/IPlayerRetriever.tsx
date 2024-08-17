import {FreeTime} from "../models/FreeTime";
import {Player} from "../models/Player";

export default interface IPlayerRetriever {
    getPlayers(token: string): Promise<Player[]>;
    
    setFreeTimeForPlayer(freeTime: FreeTime, player: Player): Promise<void>;
}
