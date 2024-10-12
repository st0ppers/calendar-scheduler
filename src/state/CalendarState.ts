import {action, computed, makeObservable, observable} from "mobx";
import {ICalendarRetriever} from "../mock/MockCalendarRetriever";
import {Day} from "../models/internal/Day";

export class CalendarState {
    @observable private days: Day[] = [];
    
    public constructor() {
        makeObservable(this);
    }
    
    @computed
    public get getDays(): Day[] {
        return this.days;
    }
    
    @action
    public setDays = (value: Day[]) => {
        this.days = value;
    };
}