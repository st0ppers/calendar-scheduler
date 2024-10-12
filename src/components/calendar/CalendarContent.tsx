import {observer} from "mobx-react";
import React, {useEffect} from "react";
import {CalendarBox} from "./CalendarBox";
import {useStateContext} from "../../internal/StateContext";
import {fetchCalendarData} from "../../retriever/CalendarRetriever";

const Wrapper = ({children}: { children: React.ReactElement }): React.ReactElement => (
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
    const {calendarState} = useStateContext();
    const [days, setDays] = React.useState<Date[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<Error | null>(null);

    useEffect(() => {
        fetchCalendarData()
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
    }, []);

    return (
        <Wrapper>
            <>
                {days.map((date: Date) => {
                    return <CalendarBox key={date.toDateString()} date={date}/>;
                })}
            </>
        </Wrapper>
    );
});
