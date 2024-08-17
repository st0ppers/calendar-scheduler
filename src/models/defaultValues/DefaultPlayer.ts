import {Player} from "../internal/Player";

export const DefaultPlayer: Player = {
    id: "",
    name: "",
    color: "",
    freeTime: {
        from: new Date(),
        to: new Date()
    }
};