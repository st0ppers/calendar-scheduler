import {FreeTime} from "../internal/FreeTime";

export interface PlayerResponse {
    id: string;
    username: string;
    color: string;
    freeTime: FreeTime;
}
