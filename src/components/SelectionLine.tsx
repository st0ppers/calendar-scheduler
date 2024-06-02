import { observer } from "mobx-react";

interface Props {
    color: string;
}

const SelectionLine = (props: Props) => {
    return (
        <div style={{
            width: '100%',
            height: '3px',
            backgroundColor: props.color
        }} />
    )
}
export default observer(SelectionLine);
