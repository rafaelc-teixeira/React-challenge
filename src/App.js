import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Createbook, Search } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create" exact component={() => <Createbook />} />
          <Route path="/search" exact component={() => <Search />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;