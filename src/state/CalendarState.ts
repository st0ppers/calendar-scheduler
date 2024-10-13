import {action, computed, makeObservable, observable} from "mobx";
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