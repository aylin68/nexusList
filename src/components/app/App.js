import InputsList from "../list/InputsList";
import ActivitiesList from "../list/ActivitiesList";
import OutputsList from "../list/OutputsList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <InputsList />
      <ActivitiesList />
      <OutputsList />
    </div>
  );
}

export default App;
