import { Player } from "../models/Player";

export default interface IRetriever {
    getCurrentPlayer(): Promise<Player>;
    getPlayers(): Promise<Player[]>;
}
