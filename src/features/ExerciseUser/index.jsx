import { Box } from '@material-ui/core';
import Note from 'features/User/components/Note';
import Solution from 'features/User/components/Solution';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailExercise from './pages/DetailExercise';

function ExerciseUser(props) {

    const match = useRouteMatch();

    return (
        <div>
            ExerciseUser 
            <Box>
                <Switch>

                    <Route path={`${match.url}/:idTopic/:slug`}>
                        <DetailExercise />
                    </Route>

                </Switch>
            </Box>
        </div>
    );
}

export default ExerciseUser;