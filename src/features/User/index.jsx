
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import '../User/user.css';
import Home from './pages/Home';


function User(props) {

    const match = useRouteMatch();
    console.log(match);
    return (
        <Switch>

            <Route path={match.url} exact >
                <Home />
            </Route>
            
        </Switch>
    );
}

export default User;