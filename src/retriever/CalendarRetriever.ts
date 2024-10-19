import {failure, Result, success} from "../models/Monads";

export const fetchCalendarData =
    process.env.NODE_ENV === "development"
        ?
        async (date: Date): Promise<Result<string>> => {
            const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
            const weekdayOfFirstDay = firstDayOfMonth.getDay();

            let days = getPreviousMonthDays(weekdayOfFirstDay === 0 ? 7 : weekdayOfFirstDay, firstDayOfMonth);

            days = days.concat(getCurrentMonthDays(date));

            days = days.concat(getNextMonthDays(date, days.length));
            return success(JSON.stringify(days));
        }
        :
        async (date: Date): Promise<Result<string>> => {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
                return failure(new Error('Network response was not ok'));
            }
            const text = await response.text();
            return success(text);
        };

const getPreviousMonthDays = (weekdayOfFirstDay: number, firstDayOfMonth: Date): Date[] => {
    const arr: Date[] = [];
    for (let i = weekdayOfFirstDay - 2; i >= 0; i--) {
        const prevDate = new Date(firstDayOfMonth);
        prevDate.setDate(firstDayOfMonth.getDate() - i - 1);
        arr.push(prevDate);
    }
    return arr;
};

const getCurrentMonthDays = (date: Date): Date[] => {
    const arr: Date[] = [];
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        arr.push(new Date(date.getFullYear(), date.getMonth(), i));
    }
    return arr;
};

const getNextMonthDays = (date: Date, length: number): Date[] => {
    const arr: Date[] = [];
    const remainingDays = 42 - length;
    for (let i = 1; i <= remainingDays; i++) {
        arr.push(new Date(date.getFullYear(), date.getMonth() + 1, i));
    }
    return arr;
};
