import { Day } from "../Day";
import { IndexedDay } from "../IndexedDay";

export const DefaultIndexedDay: IndexedDay = {
    index: -1,
    day: -1
}
export const DefaultDay: Day = {
    currentMonth: false,
    date: new Date(),//TODO: Change to null
    month: -1,
    number: -1,
    selected: false,
    year: -1,
    index: -1
}
