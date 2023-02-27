import "./App.css";
import Cards from "./components/Cards";
import Card from "./components/Card";

import data from "./data.json";

function App() {
  return (
    <div className="app-background">
      <div>
        <h1> Welcome Guardians</h1>
        <h3> Destiny 2 Community Board</h3>
        <Cards data={data} />
      </div>
    </div>
  );
}

export default App;
