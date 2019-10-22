import { HashRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Post from "../Routes/Post";
import Login from "../Routes/Login";
import MyProfile from "../Routes/MyProfile";
import PostEdit from "../Routes/PostEdit";
import Detail from "../Routes/Detail"
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
    <Route exact path="/MyProfile" component={MyProfile} />
    <Route exact path="/PostEdit" component={PostEdit} />
    <Route exact path="/Detail" component={Detail} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;


export default AppRouter; 