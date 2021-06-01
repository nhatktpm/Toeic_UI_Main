import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function Auth(props) {

    const match = useRouteMatch();
    return (
        <Box>
            <Switch >
                <Route path={match.url} exact >
                    <LoginPage />
                </Route>

                <Route path={`${match.url}/register`} >
                    <RegisterPage />
                </Route>
            </Switch>

        </Box>
    );
}

export default Auth;