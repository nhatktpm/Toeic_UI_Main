
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import '../User/user.css';
import Home from './pages/Home';
import ListPartUser from './pages/ListPartUser';


function User(props) {

    const match = useRouteMatch();
    console.log(match);
    return (
        <Switch>
           
            <Route path={match.url} exact >
                <Home />
            </Route>

            <Route path={`${match.url}/list-part`}>
                <ListPartUser />
            </Route>

        </Switch>
    );
}

export default User;