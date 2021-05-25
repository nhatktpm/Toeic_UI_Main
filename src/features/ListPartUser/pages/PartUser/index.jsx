import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import './index.css'
import IntroItemTop from 'features/ListPartUser/component/IntroItemTop';
import PartItem from 'features/ListPartUser/component/PartItem';


function PartUser(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },

        mrBot: {
           marginBottom : '20px'
        }
    }));

    const classes = useStyles();


    return (
        <div>


            <Box className='bg-title-part'>
                <Box className='title-part'> part title</Box>
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
                    <Box>
                        <Grid container>
                            <Grid item lg={2}>
                                populate
                            </Grid>
                            <Grid item lg={10}>
                                <Box className='contai-list'>
                                    <PartItem />
                                    <PartItem />
                                    <PartItem />
                                    <PartItem />
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