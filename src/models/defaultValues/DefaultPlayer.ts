import {Player} from "../Player";

export const DefaultPlayer: Player = {
    name: "",
    color: "",
    freeTime: {
        from: new Date(),
        to: new Date()
    }
};
