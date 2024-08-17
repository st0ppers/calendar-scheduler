import {handler} from "../internal/utils/ResponseHandler";
import {FreeTime} from "../models/FreeTime";
import {Player} from "../models/Player";
import IPlayerRetriever from "./IPlayerRetriever";
import {PlayerResponse} from "../models/PlayerResponse";

export class PlayerRetriever implements IPlayerRetriever {
    constructor(private readonly url: string) {}
    
    setFreeTimeForPlayer(freeTime: FreeTime, player: Player): Promise<void> {
        //TODO:
        return new Promise<void>((resolve, _) => {
            resolve();
        });
    }
    
    // async getCurrentPlayer(id: number, token: string): Promise<Player> {
    //     return await fetch(`${this.url}/api/Player/${id}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //         .then(handler)
    //         .catch((error) => {
    //             console.error(error);
    //             return {} as Player;
    //         });
    // }
    //
    async getPlayers(token: string): Promise<Player[]> {
        return await fetch(`${this.url}/api/Player/1`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
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
            name: p.username,
            color: p.color,
            freeTime: p.freeTime
        }));
    };
}
