import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Post from "../Routes/Post";
import Login from "../Routes/Login";
import Join from "../Routes/Join";

import React from 'react';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Post} />
    <Route path="/Login" component={Login} />
    <Route path="/Join" component={Join} />
  </Switch>
);


const AppRouter = () => (
    <LoggedInRoutes/>
);


export default AppRouter; 