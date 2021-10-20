import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import "./components/Fetch/Fetchdata.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import NavDetail from "./components/Loader/NavDetail";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/detail">
          <NavDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
