
import { Box, Container, Grid } from '@material-ui/core';
import { computeHeadingLevel } from '@testing-library/dom';
import listPartApi from 'api/listPartApi';
import listTopicAPI from 'api/listTopicAPI';
import PartUser from 'features/ListPartUser/pages/PartUser';
import SearchTopic from 'features/ListTopicUser/component/Search';
import TopicItem from 'features/ListTopicUser/component/TopicItem';
import NavBar from 'features/User/components/NavBar';
import React, { useEffect, useState } from 'react';
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
    let idTopic = match.url.split('/')[2]




    const [loading, setLoading] = useState(true);
    const [listTopic, setListTopic] = useState([]);
    const [part, setPart] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await listTopicAPI.getAll(idTopic)
                setListTopic(data.data.topics);
                const dataPart = await listPartApi.get(idTopic)
                setPart(dataPart.data.data)
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, []);

    console.log(part);

    return (
        <Box className='asd'>
            <Box className='bg-title-topic'>
                <Container maxWidth="xl" disableGutters={true}>
                    <Box className="ct-title-listTopic">
                        <Box className='title-part'>{part.name}</Box>
                        <Box className='title-descrip'>{part.descrip} </Box>
                    </Box>
                </Container>
            </Box>

            <Box className='a'>
                <Container maxWidth="lg">
                    <Box className='contai-fill'>
                        <Box> <SearchTopic /></Box>
                        <Box> fillter</Box>
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

                                    {listTopic.map((topic) => (
                                        <TopicItem topic={topic} />
                                    ))}
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
