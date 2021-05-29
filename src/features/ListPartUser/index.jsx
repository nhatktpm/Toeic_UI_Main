import { Box, makeStyles } from '@material-ui/core';
import { getListPart } from 'features/Admin/Slice/PartSlice';
import NavBar from 'features/User/components/NavBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';

import PartUser from './pages/PartUser';



function ListPartUser(props) {


    const useStyles = makeStyles((theme) => ({
        root: {
        },

        layOut: {
           top : '110px'

        }
    }));

    const classes = useStyles();


    const dispath = useDispatch()
    useEffect(() => {
        dispath(getListPart())
    },[]);

    const partState = useSelector(state => state.part.listPart)

    // console.log(partState);

    const match = useRouteMatch();

    return (
        <Box>
            <Box position="relative" className={classes.layOut}>
                <Box>
                    <NavBar />
                </Box>

                <Switch>

                    <Route path={match.url} exact >
                        <PartUser />
                    </Route>

                </Switch>

            </Box>
        </Box>
    );
}

export default ListPartUser;