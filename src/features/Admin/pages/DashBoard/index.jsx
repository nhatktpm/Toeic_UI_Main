import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../../components/Sidebar';
import { Switch, Route, useRouteMatch } from 'react-router';



import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';


import Part from '../../components/List/ListPart';

import AddTopic1 from '../../components/Topics/Topic-1/AddTopic1';
import EditTopic1 from '../../components/Topics/Topic-1/EditTopic1';

import '../DashBoard/index.css'

import EditPart from 'features/Admin/components/Parts/EditPart';
import Topic1 from 'features/Admin/components/List/ListTopic/Topic1';
import Topic2 from 'features/Admin/components/List/ListTopic/Topic2';
import AddTopic2 from 'features/Admin/components/Topics/Topic-2/AddTopic2';
import EditTopic2 from 'features/Admin/components/Topics/Topic-2/EditTopic2';
import ListTrash from 'features/Admin/components/Trash/ListTrasp';
import Question1 from 'features/Admin/components/List/ListQuestion/Question1';
import AddQuestion1 from 'features/Admin/components/Questions/Question1/AddQuestion1';
import EditQuestion1 from 'features/Admin/components/Questions/Question1/EditQuestion1';



const DashBoard = props => {
    const match = useRouteMatch();

    const useStyles = makeStyles((theme) => ({
        root: {

        },

        left: {
            width: '250px',
        },

        right: {
            flex: '1 1 0',
            marginLeft: '260px'
        },
        container: {
            minWidth: '100%',
            paddingRight: '0px'
        },



    }));

    const classes = useStyles();

    return (
        <Box>
            <Box component="div" className="sidebar">
                <SideBar />
            </Box>
            <Box>
                <Container className={classes.container} >
                    <Grid container >
                        <Grid item className={classes.right}>
                            <Paper>
                                <Switch>
                                    <Route path={match.url} exact>

                                    </Route>
                                    <Route path={`${match.url}/list-part`}>
                                        <Part />
                                    </Route>
                                    <Route path={`${match.url}/parts/:idPart/edit`}>
                                        <EditPart />
                                    </Route>

                                    {/* Route Part 1 */}
                                    <Route path={`${match.url}/topic-1/:idPart`} exact>
                                        <Topic1 />
                                    </Route>
                                    <Route path={`${match.url}/topic-1/:idPart/add`}>
                                        <AddTopic1 />
                                    </Route>

                                    <Route path={`${match.url}/topic-1/:idPart/edit`}>
                                        <EditTopic1 />
                                    </Route>

                                    {/* Route Part 2 */}
                                    <Route path={`${match.url}/topic-2/:idPart`} exact>
                                        <Topic2 />
                                    </Route>
                                    <Route path={`${match.url}/topic-2/:idPart/add`}>
                                        <AddTopic2 />
                                    </Route>
                                    <Route path={`${match.url}/topic-2/:idPart/edit`}>
                                        <EditTopic2 />
                                    </Route>

                                    {/* Route Part 2 */}
                                    <Route path={`${match.url}/question-1/:idTopic`} exact>
                                        <Question1 />
                                    </Route>
                                    <Route path={`${match.url}/question-1/:idQuestion/add`}>
                                        <AddQuestion1 />
                                    </Route>
                                    <Route path={`${match.url}/question-1/:idQuestion/edit`}>
                                        <EditQuestion1
                                        />
                                    </Route>



                                    {/* Trash */}
                                    <Route path={`${match.url}/trash`}>
                                        <ListTrash />
                                    </Route>

                                </Switch>
                            </Paper>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>


    );
};

DashBoard.propTypes = {

};

export default DashBoard;