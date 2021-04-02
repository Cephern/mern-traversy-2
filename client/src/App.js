import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./comps/layout/Navbar";
import Home from "./comps/pages/Home";
import About from "./comps/pages/About";

import ContactState from "./context/contact/ContactState";

function App() {
  return (
    <ContactState>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </ContactState>
  );
}

export default App;
