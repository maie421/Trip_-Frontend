import { HashRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Post from "../Routes/Post";
import Login from "../Routes/Login";
import Search from "../Routes/SearchMain";
import React from 'react';

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Post} />
    <Route path="/Login" component={Login} />
    <Route path="/Search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>
);
const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Post} />
    <Route path="/Search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;


export default AppRouter; 