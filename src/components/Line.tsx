import { Day } from "../models/Day";

interface Props {
    day: Day;
    color: string;
}

const Line = (props: Props) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
            <div style={{
                width: '100%',
                height: '1px',
                backgroundColor: props.color
            }} />
        </div>
    )
}

export default Line;
