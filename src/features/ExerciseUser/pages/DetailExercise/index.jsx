import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import ExerPart1 from 'features/ExerciseUser/components/ExerPart1';
import NavBar from 'features/User/components/NavBar';
import Note from 'features/User/components/Note';

import Solution from 'features/User/components/Solution';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

function DetailExercise(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        layout: {
            paddingTop: '100px'
        }
    }));
    const classes = useStyles()

    const match = useRouteMatch();

    var listQuestion = [
        {
            nameQuestion: 'cau1',
            slug: 'topic1',
            descrip: ' mo to 1',
            id: '1'
        }, {
            nameQuestion: 'cau1',
            slug: 'topic1',
            descrip: ' mo to 1',
            id: '2'
        }, {
            nameQuestion: 'cau1',
            slug: 'topic1',
            descrip: ' mo to 1',
            id: '3'
        }
    ]


    const exerciseOfPart = (slug) => {
        switch (slug) {
            case 'part-1':
                return <ExerPart1 listQuestion={listQuestion} />;
            case 'part-2':
                return 'bar';
            default:
                return 'foo';
        }
    }

    var x = 'part-1'


    return (
        <div>
            <Box>
                <NavBar />
            </Box>
            
            <Box className={classes.layout}>
                <Box className="contai-list-question">
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item lg={12}> gioi thieu</Grid>
                        </Grid>
                    </Container>
                </Box>

                {/*  Danh sach cac cau hoi */}

                <Box>
                    {() => exerciseOfPart(x)}
                </Box>



                {/* Cac CMT, bai giai, ghi chu */}

                <Box>
                    <Container>
                        <Grid container>
                            <Grid item xl={12} lg={12} md={12}>
                                <Box>
                                    <Box> linl</Box>
                                    <Box> linl</Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box>
                    <Switch>

                        <Route path={`${match.url}`} exact >
                            <Solution idTopic={126543} />
                        </Route>

                        <Route path={`${match.url}/note`}>
                            <Note />
                        </Route>

                    </Switch>
                </Box>
            </Box>
        </div>
    );
}

export default DetailExercise;