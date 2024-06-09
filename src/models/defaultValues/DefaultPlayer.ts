import { Player } from "../Player";

export const DefaultPlayer: Player = {
  id: 0,
  name: "",
  color: "",
  freeTime: {
    from: new Date(),
    to: new Date(),
  },
};
