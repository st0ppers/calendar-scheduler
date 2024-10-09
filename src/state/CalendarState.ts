import {action, computed, makeObservable, observable} from "mobx";
import {ICalendarRetriever} from "../mock/MockCalendarRetriever";
import {Day} from "../models/internal/Day";

export class CalendarState {
    @observable private currentDay: Date = new Date();
    @observable private days: Day[] = [];
    
    public constructor(private readonly retriever: ICalendarRetriever) {
        makeObservable(this);
    }
    
    @computed
    public get getMonth(): string {
        console.log("getMonth");
        return this.currentDay.toLocaleString("default", {month: "long"});
    }
    
    @action
    public setMonthToPrev(): void {
        console.log("setMonthToPrev");
        this.currentDay.setMonth(this.currentDay.getMonth() - 1);
    }
    
    @action
    public setMonthToNext(): void {
        console.log("setMonthToNext");
        this.currentDay.setMonth(this.currentDay.getMonth() + 1);
    }
    
    @computed
    public get getDays(): Day[] {
        console.log("getDays");
        return this.days;
    }
    
    @action
    public setDays = (value: Day[]) => {
        console.log("setDays");
        this.days = value;
    };
    
    public init = async (): Promise<void> => {
        console.log("init");
        const days = await this.retriever.getDays();
        
        this.setDays(days.map(d => ({
            date: d,
            isSelected: false,
            isCurrentMonth: true
        })));
    };
}