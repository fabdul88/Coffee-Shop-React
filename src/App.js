import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Navigation/Navbar";
import Index from "./Components/Index/Index";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Index />;
            }}
          />
          ;
          <Route
            path="/menu"
            render={() => {
              return <Menu />;
            }}
          />
          ;
        </Switch>
      </Router>
    </div>
  );
}

export default App;
