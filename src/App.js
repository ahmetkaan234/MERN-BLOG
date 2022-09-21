import React from "react";
import Main from "./components/Main";
import DetailPage from "./pages/DetailPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full min-h-screen  flex   justify-center bg-stone-100">
      <Router>
        <Switch>
          <Route  exact path="/" >
            <Main />
          </Route>
          <Route  path="/:slug"  >
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
