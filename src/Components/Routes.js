import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Post from "../Routes/Post";
import Login from "../Routes/Login";

import React from 'react';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Post} />
    <Route path="/Login" component={Login} />
  </Switch>
);


const AppRouter = () => (
    <LoggedInRoutes/>
);


export default AppRouter; 