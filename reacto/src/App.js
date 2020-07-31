import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/styles.css";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  }
];

const NoMatch = ({ location }) => (
  <div>
    <h1>404 page</h1>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const AppRouter = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route} {...route} />
    ))}
    <Route component={NoMatch} />
  </Switch>
);

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
