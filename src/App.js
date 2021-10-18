import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Fetchdata from "./components/Fetch/Fetchdata";
import "./components/Fetch/Fetchdata.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
     
      <Route path='/'/>
      <Route/>
      <Route/>
      <Nav />
      <div className="App">
        <Fetchdata />
      </div>
    </Router>
  );
}

export default App;
