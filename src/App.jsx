import "./App.css";

import Header from "./assets/components/Header";
import ListOfWords from "./assets/components/ListOfWords";

function App() {
  return (
    <div className="wrapper">
      <Header title="Learning words" />
      <ListOfWords />
    </div>
  );
}

export default App;
