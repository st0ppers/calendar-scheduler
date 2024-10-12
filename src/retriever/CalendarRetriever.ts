import {failure, Result, success} from "../models/Monads";

export const fetchCalendarData =
    process.env.NODE_ENV === "development"
        ?
        async (): Promise<Result<string>> => {
            const firstDayOfMonth = new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                1
            );
            const weekdayOfFirstDay = firstDayOfMonth.getDay();
            let currentDays: Date[] = [];

            for (let day = 0; day < 42; day++) {
                const a = getDate(day, weekdayOfFirstDay, firstDayOfMonth);
                currentDays.push(new Date(a));
            }
            return success(JSON.stringify(currentDays));
        }
        :
        async (): Promise<Result<string>> => {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
                return failure(new Error('Network response was not ok'));
            }
            const text = await response.text();
            return success(text);
        };

const getDate = (day: number, weekdayOfFirstDay: number, firstDayOfMonth: Date): number => {
    if (day === 0 && weekdayOfFirstDay === 0) {
        return firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6);
    } else if (day === 0) {
        return firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay + 1));
    } else {
        return firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }
};