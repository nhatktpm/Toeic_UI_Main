import { Box, Container, makeStyles } from '@material-ui/core';
import NavBar from 'features/User/components/NavBar';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailTopic from './pages/DetailTopic';
import Topic_1_User from './pages/Topic_1_User';

function ListTopicUser(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },

        layOut: {
            top: '110px'

        }
    }));


    const classes = useStyles();
    const dispath = useDispatch()
    // useEffect(() => {
    //     dispath(getListPart())
    // });

    const partState = useSelector(state => state.part.listPart)



    const match = useRouteMatch();
    


    return (
        <Box>
            <Box>
                <NavBar />
            </Box>
            <Container> </Container>
            <Box position="relative" className={classes.layOut}>
                <Switch >
                    <Route path={match.url} exact >
                        <Topic_1_User />
                    </Route>
                    <Route path={`${match.url}/detail`}  >
                        <DetailTopic />
                    </Route>
                </Switch>
            </Box>

        </Box>
    );
}

export default ListTopicUser;