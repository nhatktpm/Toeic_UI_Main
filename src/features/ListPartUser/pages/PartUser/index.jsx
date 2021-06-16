import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import './index.css'
import IntroItemTop from 'features/ListPartUser/component/IntroItemTop';
import PartItem from 'features/ListPartUser/component/PartItem';
import AccoIcon from '@material-ui/icons/AccountBalance';

import listPartApi from 'api/listPartApi';
import IfItem from 'features/ListPartUser/component/IfItem';


function PartUser(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },

        mrBot: {
            marginBottom: '20px'
        }
    }));

    const classes = useStyles();


    const [loading, setLoading] = useState(true);
    const [listPart, setListPart] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await listPartApi.getAll()
                setListPart(data.data.parts);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <div>

            <Box className='bg-title-part'>
                <Box className='title-part'> List All Part In Toeic </Box>

            </Box>

            <Box className={classes.mrBot}>
                <Container maxWidth="lg">
                    <Box className='intro-left'>
                        <Box className='intro-contai'>
                            <IntroItemTop />
                            <IntroItemTop />
                            <IntroItemTop />
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box>
                <Container>
                    <Box  >
                        <Grid container>
                            <Grid item lg={3}>
                                <Box className="if-contai">
                                    <Box className="if-title"> thong tin chi tiet</Box>
                                    <Box className="if-info">

                                        <Box className="if-item">
                                            <Box className="if-icon-name">
                                                <Box className="if-icon"> <AccoIcon /> </Box>
                                                <Box className="if-name">text</Box>
                                            </Box>
                                            <Box className="if-text"> thong tin</Box>
                                        </Box>

                                        <IfItem />

                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item lg={9}>
                                <Box className='contai-list'>
                                    {listPart.map((part) => (
                                        <PartItem part={part} />
                                    ))}

                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box> intro botttom</Box>
        </div>
    );
}

export default PartUser;