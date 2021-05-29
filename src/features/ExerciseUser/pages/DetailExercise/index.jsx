import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import AllComment from 'features/ExerciseUser/components/AllComment';
import ExerMenu from 'features/ExerciseUser/components/ExerMenu';
import ExerPart1 from 'features/ExerciseUser/components/ExerPart1';
import ExerPart2 from 'features/ExerciseUser/components/ExerPart2';
import Note from 'features/ExerciseUser/components/Note';
import Solution from 'features/ExerciseUser/components/Solution';

import TopIntroL from 'features/ExerciseUser/components/TopIntroL';
import NavBar from 'features/User/components/NavBar';


import React, { useEffect, useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router';
import QuestionApi from 'api/listQuestionApi';
import './index.css'
import listTopicAPI from 'api/listTopicAPI';
import { useDispatch } from 'react-redux';
import { getListExer, getTopicExer } from 'features/ExerciseUser/ExerciseSlice';


function DetailExercise(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        layout: {
            paddingTop: '100px'

        },
        bgForm: {
            backgroundColor: '#f0f4fa'
        },
        contaiBot: {
            minHeight: '400px',
            boxShadow: '0px 10px 50px 0px rgb(44 44 52 / 8%)',

        }
    }));
    const classes = useStyles()
    const match = useRouteMatch()
    const {
        params: { idTopic, slug },
        url,
    } = useRouteMatch();


    const [listExer, SetListExer] = useState([]);
    const [toPic, SetTopic] = useState([]);
    const [loading, setLoading] = useState(true);
   

    const dispath = useDispatch()

    useEffect(() => {
        (async () => {            
            const resultAction = await dispath(getListExer(idTopic))
            const resultAction2 = await dispath(getTopicExer(idTopic))
        })()
    }, []);
     
    

    const exerciseOfPart = (slug) => {

        switch (slug) {
            case 'topic-1':
                return <ExerPart1 listQuestion={listExer} />;
            case 'topic-2':
                return <ExerPart2 listQuestion={listExer} />;
            default:
                return 'foo';
        }
    }

   

    return (
        <div>
            <Box className="nav-top-exer">
                <NavBar />
            </Box>

            <Box className={classes.layout}>

                <Box>
                    <TopIntroL />
                </Box>
                {/*  Danh sach cac cau hoi */}
                <Box>
                    <Container>
                        <Box>
                            {() => exerciseOfPart(slug)}
                        </Box>
                    </Container>
                </Box>

                {/* Cac CMT, bai giai, ghi chu */}

                <Box>
                    <Container>
                        <Grid container>
                            <Grid item xl={9} lg={9} md={9}>
                                <Box>
                                    <ExerMenu />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box >
                    <Container >
                        <Grid container>
                            <Grid item lg={9} md={9} xs={12} className={classes.contaiBot}>
                                <Switch>

                                    <Route path={`${match.url}`} exact >
                                        <AllComment />
                                    </Route>

                                    <Route path={`${match.url}/note`}>
                                        <Note />
                                    </Route>

                                    <Route path={`${match.url}/solution`}>
                                        <Solution idTopic={126543} />
                                    </Route>

                                    <Route path={`${match.url}/note`}>
                                        <Note />
                                    </Route>

                                </Switch>
                            </Grid>
                            <Grid item lg={3} md={3} xs={12}>

                                quan cao
                            </Grid>
                        </Grid>

                    </Container>

                </Box>
            </Box>
        </div>
    );
}

export default DetailExercise;