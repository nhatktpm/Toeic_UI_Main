import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Banner(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        layout: {

        },
        link: {
            textDecoration: 'none',
            color: '#120F2D'
        }
    }));

    const classes = useStyles();

    return (
        <Box className='bg-banner'>
            <Box className='bg-cl-banner'></Box>
            <Container disableGutters maxWidth="xl">
                <Box className='banner'>
                    <Grid container
                        irection="row"
                        justify="center"
                        alignItems="center">
                        <Grid item>
                            <Box className='content-banner'>
                                <Box className='bn-text1'> The Leader in Online Learning</Box>
                                <Box className='bn-text2'> Simple and Interactive Online Programming Learning</Box>
                                <Box className='banner-btn-gr'>
                                    <Box className=' banner-btn-1'> View all course</Box>
                                    <Box className=' banner-btn-2'> Start free</Box>
                                </Box>
                                <Box>
                                    <Box component='span' className='bn-text3'> Learn new skills online and change your life </Box>
                                    <Box component='span' >
                                        <Link className='bn-text4'> Sign In Now</Link>
                                    </Box>
                                </Box>


                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Banner;