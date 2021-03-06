import {
    Avatar,
    Box, Container, Grid, makeStyles, Typography
} from '@material-ui/core';
import ComeOn from 'features/Admin/components/ComeOn';
import Question1 from 'features/Admin/components/List/ListQuestion/Question1';
import Topic1 from 'features/Admin/components/List/ListTopic/Topic1';
import Topic2 from 'features/Admin/components/List/ListTopic/Topic2';
import EditPart from 'features/Admin/components/Parts/EditPart';
import AddQuestion1 from 'features/Admin/components/Questions/Question1/AddQuestion1';
import EditQuestion1 from 'features/Admin/components/Questions/Question1/EditQuestion1';
import AddTopic2 from 'features/Admin/components/Topics/Topic-2/AddTopic2';
import EditTopic2 from 'features/Admin/components/Topics/Topic-2/EditTopic2';
import ListTrash from 'features/Admin/components/Trash/ListTrasp';
import ListUserInAdmin from 'features/Admin/components/User';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Part from '../../components/List/ListPart';
import SideBar from '../../components/Sidebar';
import AddTopic1 from '../../components/Topics/Topic-1/AddTopic1';
import EditTopic1 from '../../components/Topics/Topic-1/EditTopic1';
import '../DashBoard/index.css';


const DashBoard = props => {
    const match = useRouteMatch();

    const useStyles = makeStyles((theme) => ({
        root: {
        },

        right: {
            flex: '1 1 0',
            paddingTop: '30px'

        },
        container: {
            marginLeft: '280px',

        },
        header: {
            height: '50px',
            padding: '10px 0',

            borderRadius: '2px'

        },
        content: {
            height: 'auto',
            minHeight: '90vh'
        },
        bg: {
            backgroundColor: '#eeeeee'
        }
    }));

    const classes = useStyles();

    return (
        <Box>
            <Box component="div" className="sidebar">
                <Box className="ad-bg">
                    <SideBar />
                </Box>
            </Box>
            <Box className={classes.bg} >
                <Box className={classes.container} >
                    <Grid container >
                        <Grid item lg={12}>
                            <Box className={classes.header} >
                                <Box className='contai-header'>
                                    <Box className='ad-brand' >
                                        <Typography variant='h5'>DashBoard </Typography>
                                    </Box>
                                    {/* <Box className='ad-find'>Tim kiem</Box> */}
                                    <Box className='ad-user' mr='25px'> <Avatar alt="Remy Sharp" src='https://yt3.ggpht.com/yti/ANoDKi65P3NC5SX7m2soa8NvdmR0U9_dK0B-P4ApCeaLFA=s88-c-k-c0x00ffffff-no-rj-mo' /></Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={12} className={classes.right}>
                            <Container maxWidth="lg" disableGutters={true} >
                                <Box className={classes.content}>
                                    <Switch>
                                        <Route path={match.url} exact>
                                            <ComeOn />
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
                                        <Route path={`${match.url}/topic-1/:idTopic/add`}>
                                            <AddTopic1 />
                                        </Route>

                                        <Route path={`${match.url}/topic-1/:idTopic/edit`}>
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
                                        <Route path={`${match.url}/question-1/:idTopic/add`}>
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

                                        <Route path={`${match.url}/list-user`}>
                                            <ListUserInAdmin />
                                        </Route>


                                    </Switch>
                                </Box>
                            </Container>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>


    );
};

DashBoard.propTypes = {

};

export default DashBoard;