import {observer} from "mobx-react";
import React from "react";

interface Props {
    color: string;
}

export const SelectionLine = observer(({color}: Props): React.ReactElement => (
    <div
        style={{
            width: "100%",
            height: "3px",
            margin: "0px",
            padding: "0px",
            backgroundColor: color
        }}
    />
));