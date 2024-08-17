import {FreeTime} from "./FreeTime";

export interface Player {
    id: string;
    name: string;
    color: string;
    freeTime: FreeTime;
}