import { observer } from "mobx-react";
import Calendar from "./Calendar";
import Legend from "./Legend";
import TopBar from "./TopBar";

const Main = () => {
  return (
    <div>
      <TopBar />
      <div className="content" style={{ display: "flex" }}>
        <Legend />
        <Calendar />
      </div>
    </div>
  );
};

export default observer(Main);
