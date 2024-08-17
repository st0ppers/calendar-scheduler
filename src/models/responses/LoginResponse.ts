import {PlayerResponse} from "./PlayerResponse";

export interface LoginResponse{
    player: PlayerResponse;
    token: string;
    expiration: number;
}