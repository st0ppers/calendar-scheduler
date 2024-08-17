import {Player} from "../models/internal/Player";
import {UpdateFreeTimeRequest} from "../models/requests/UpdateFreeTimeRequest";

export default interface IPlayerRetriever {
    getPlayers(token: string): Promise<Player[]>;
    
    setFreeTimeForPlayer(request: UpdateFreeTimeRequest, token: string): Promise<void>;
}
