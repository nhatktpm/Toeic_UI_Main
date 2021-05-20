import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import '../User/user.css';
import Home from './pages/Home';


function User(props) {

    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.url} component={Home} />
        </Switch>
    );
}

export default User;