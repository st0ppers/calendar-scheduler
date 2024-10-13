import {observer} from "mobx-react";
import {useStateContext} from "../../internal/StateContext";
import React from "react";
import {isCurrentMonth} from "../../internal/utils/Date";
import {CalendarBoxContent} from "./CalendarBoxContent";

interface Props {
    date: Date;
}

const BoxWrapper = ({children, date, onClick}: { children: React.ReactElement, date: Date, onClick: () => void }): React.ReactElement => (
    <div
        onClick={onClick}
        style={{
            width: "11%",
            backgroundColor: isCurrentMonth(date) ? "#93979f" : "black",
            alignItems: "center",
            borderRadius: "16px",
            padding: "8px 12px",
            fontSize: "14px",
            margin: "5px",
            justifyContent: "center",
            boxShadow: isCurrentMonth(date)
                ? "0 4px 10px rgba(0, 0, 0, 0.5)"
                : "none"
        }}>
        {children}
    </div>
);

export const CalendarBox = observer(({date}: Props): React.ReactElement => {
        const {playerState} = useStateContext();
        const {getIsFromSelected, setFromDate, setToDate} = playerState;

        const handleClick = () => {
            if (!getIsFromSelected) {
                setFromDate(date);
                return;
            }
            setToDate(date);
        };

        return (
            <BoxWrapper onClick={handleClick} date={date}>
                <CalendarBoxContent date={date}/>
            </BoxWrapper>
        );
    }
);
