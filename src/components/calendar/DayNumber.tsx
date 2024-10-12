import {observer} from "mobx-react";
import React from "react";

interface Props {
    date: number;
    isCurrentMonth: boolean;
}

const StyledParagraph = ({children}: React.PropsWithChildren<{}>): React.ReactElement => (
    <p
        style={{
            textAlign: "center",
            padding: "0px",
            margin: "0px",
            color: "black",
        }}
    >
        {children}
    </p>
);

export const DayNumber = observer(({date, isCurrentMonth}: Props): React.ReactElement => {
    return (
        <>
            {isCurrentMonth ?
                <StyledParagraph>
                    {date}
                </StyledParagraph>
                : null
            }
        </>
    );
});

