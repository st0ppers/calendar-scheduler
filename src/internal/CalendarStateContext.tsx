import React, {createContext, useContext, useState} from 'react';

interface CalendarContextProps {
    date: Date;
    setNextMonth: () => void;
    setPrevMonth: () => void;
    getLongMonth: () => string;
}

const CalendarContext = createContext<CalendarContextProps | undefined>(undefined);

export const CalendarProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [date, setDate] = useState(new Date());

    const setNextMonth = (): void => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    const setPrevMonth = (): void => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const getLongMonth = (): string => {
        return date.toLocaleString("default", {month: "long"});
    };

    return (
        <CalendarContext.Provider value={{date, setNextMonth, setPrevMonth, getLongMonth}}>
            {children}
        </CalendarContext.Provider>
    );
};

export const useCalendar = (): CalendarContextProps => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendar must be used within a CalendarProvider');
    }
    return context;
};