import IPlayerRetriever from "../retriever/IPlayerRetriever";
import {Player} from "../models/internal/Player";
import {UpdateFreeTimeRequest} from "../models/requests/UpdateFreeTimeRequest";

export class MockPlayerRetriever implements IPlayerRetriever {
    private players: Player[] = [
        {
            id: "1",
            color: "Blue",
            name: "Alex",
            freeTime: {from: new Date("2024-08-01"), to: new Date("2024-08-03")}
        },
        {
            id: "2",
            color: "Black",
            name: "Nasko",
            freeTime: {from: new Date("2024-08-03"), to: new Date("2024-08-04")}
        },
        {
            id: "2",
            color: "Red",
            name: "Petur",
            freeTime: {from: new Date("2024-08-05"), to: new Date("2024-08-06")}
        },
        {
            id: "3",
            color: "Purple",
            name: "Djat",
            freeTime: {from: new Date("2024-08-07"), to: new Date("2024-08-08")}
        },
        {
            id: "4",
            color: "Pink",
            name: "Jak",
            freeTime: {from: new Date("2024-08-09"), to: new Date("2024-08-10")}
        },
        {
            id: "5",
            color: "Green",
            name: "Ivo",
            freeTime: {from: new Date("2024-08-11"), to: new Date("2024-08-12")}
        }
    ];
    
    getPlayers(token: string): Promise<Player[]> {
        return new Promise<Player[]>((resolve, _) => {
            resolve(this.players);
        });
    }
    
    setFreeTimeForPlayer(request: UpdateFreeTimeRequest): Promise<void> {
        this.players.forEach((player) => {
            if (player.id === request.playerId) {
                player.freeTime = {from: request.from, to: request.to};
            }
        });
        
        return new Promise<void>((resolve) => {
            resolve();
        });
    }
}

