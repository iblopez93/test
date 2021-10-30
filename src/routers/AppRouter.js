import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'


import Login from "../components/Login/Login";
import UserDetail from "../components/UserDetail/UserDetail";
import UserList from "../components/UserList/UserList";
export const AppRouter = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={UserList} />
                <Route exact path="/user/:userId" component={UserDetail} />
            </Switch>
        </div>
    </Router>
);