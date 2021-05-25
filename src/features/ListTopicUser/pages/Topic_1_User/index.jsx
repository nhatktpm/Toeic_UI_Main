
import { Box, Container, Grid } from '@material-ui/core';
import { computeHeadingLevel } from '@testing-library/dom';
import PartUser from 'features/ListPartUser/pages/PartUser';
import TopicItem from 'features/ListTopicUser/component/TopicItem';
import NavBar from 'features/User/components/NavBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import './index.css';

function Topic_1_User(props) {
    const dispath = useDispatch()
    // useEffect(() => {
    //     dispath(getListPart())
    // });

    // const partState = useSelector(state => state.part.listPart)

    const match = useRouteMatch();

    var listTopicUser = [1, 2, 3, 4, 5]
  
    return (
        <Box className='asd'>
            <Box className='bg-title-topic'>
                <Container maxWidth="xl" disableGutters={true}>

                    <Box className='title-part'> part title</Box>

                </Container>
            </Box>

            <Box className='a'>
                <Container maxWidth="lg">
                    <Box>
                        gioi thieu
                  </Box>
                </Container>
            </Box>

            <Box>
                <Container>
                    <Box>
                        <Grid container>
                            <Grid item lg={2}>
                                populate
                            </Grid>
                            <Grid item lg={10}>
                                <Box className='contai-list'>
                                    {listTopicUser.map((topic) => {
                                        return <TopicItem />
                                    })}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Topic_1_User;