import { BrowserRouter, Route, Switch } from "react-router-dom";
import Api from "./Api";
import "./App.css";
import Figma from "./Figma";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/cloudint" component={Figma} />
          <Route exact path="/cloudint/api" component={Api} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
