import { Player } from "../models/Player";
import IRetriever from "../retriever/Retriever";

export class MockRetriever implements IRetriever {
    getCurrentPlayer(): Promise<Player> {
        return new Promise<Player>((resolve, reject) => {
            resolve({ color: "Pink", name: "Jessie" } as Player);
        });
    }

    getPlayers(): Promise<Player[]> {
        return new Promise<Player[]>((resolve, reject) => {
            resolve([
                { color: "Blue", name: "Doe" } as Player,
                { color: "Black", name: "John" } as Player,
            ]);
        });
    }

}
