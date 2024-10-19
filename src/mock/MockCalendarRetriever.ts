// import {Day} from "../models/internal/Day";

// export interface ICalendarRetriever {
//     getDays: () => Promise<Date[]>;
// }

// export class MockCalendarRetriever implements ICalendarRetriever {
//     public getDays = async (): Promise<Date[]> => {
//         const currentDay = new Date();
//         const firstDayOfMonth = new Date(
//             currentDay.getFullYear(),
//             currentDay.getMonth(),
//             1
//         );
//         const weekdayOfFirstDay = firstDayOfMonth.getDay();
//         let currentDays: Day[] = [];
//
//         for (let day = 0; day < 42; day++) {
//             if (day === 0 && weekdayOfFirstDay === 0) {
//                 firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6);
//             } else if (day === 0) {
//                 firstDayOfMonth.setDate(
//                     firstDayOfMonth.getDate() + (day - weekdayOfFirstDay + 1)
//                 );
//             } else {
//                 firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
//             }
//
//             let calendarDay = {
//                 date: new Date(firstDayOfMonth),
//                 isSelected: firstDayOfMonth.toDateString() === currentDay.toDateString(),
//                 isCurrentMonth: firstDayOfMonth.getMonth() === currentDay.getMonth()
//             } as Day;
//
//             currentDays.push(calendarDay);
//         }
//         return Promise.resolve(currentDays.map(d => d.date));
//     };
// }
