import {observer} from "mobx-react";
import React, {useEffect} from "react";
import {CalendarBox} from "./CalendarBox";
import {fetchCalendarData} from "../../retriever/CalendarRetriever";
import {useCalendar} from "../../internal/CalendarStateContext";

const Wrapper = ({children}: React.PropsWithChildren<{}>): React.ReactElement => (
    <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            boxSizing: "border-box",
        }}
    >
        {children}
    </div>
);

export const CalendarContent = observer((): React.ReactElement => {
    const {date} = useCalendar();
    const [days, setDays] = React.useState<Date[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<Error | null>(null);

    useEffect(() => {
        fetchCalendarData(date)
            .then(r => r.map(date => JSON.parse(date) as Date[]))
            .then(r => r.map(date => date.map(d => new Date(d))))
            .then(r => r.match((v) => v, (e) => e))
            .then(r => {
                    if (r instanceof Error) {
                        return setError(r);
                    }
                    return setDays(r);
                }
            )
            .finally(() => setLoading(false))
        ;
    }, [date]);

    return (
        <Wrapper>
            {days.map((date: Date, index: number) => (
                <CalendarBox key={`${date}-${index}`} date={date}/>
            ))}
        </Wrapper>
    );
});
