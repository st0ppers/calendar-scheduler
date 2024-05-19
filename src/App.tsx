import { TopBar } from "./components/TopBar";
import { Legend } from "./components/Legend";
import Calendar from "./components/Calendar";

function App() {
    return (
        <div>
            <TopBar player={{ name: "Alex", color: "Black" }} isAdmin={true} />
            <div className='content' style={{ display: "flex" }}>
                <Legend players={[{ name: "Petur", color: "Gay" }, { name: "Nasko", color: "GayAsWell" }]} />
                <Calendar />
            </div>
        </div>
    );
}

export default App;
