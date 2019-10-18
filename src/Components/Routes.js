import { HashRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Post from "../Routes/Post";
import Login from "../Routes/Login";
import MyPost from "../Routes/MyPost";
import React from 'react';

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Post} />
    <Route path="/Login" component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);
const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Post} />
    <Route exact path="/MyPost" component={MyPost} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;


export default AppRouter; 