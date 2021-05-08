import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import DashBoard from './pages/DashBoard';

function Admin(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={match.url} component={DashBoard} />
        </Switch>
    );
}

export default Admin;