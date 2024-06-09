import { observer } from "mobx-react";

interface Props {
  color: string;
}

const SelectionLine = (props: Props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "3px",
        margin: "0px",
        padding: "0px",
        backgroundColor: props.color,
      }}
    />
  );
};
export default observer(SelectionLine);
