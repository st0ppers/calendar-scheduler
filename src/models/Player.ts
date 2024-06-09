import { FreeTime } from "./FreeTime";

export interface Player {
  id: number;
  name: string;
  color: string;
  freeTime: FreeTime;
}
