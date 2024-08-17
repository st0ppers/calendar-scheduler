import {Player} from "./Player";

export interface Login {
    player: Player;
    token: string;
    expiration: number;
}
