import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Banner from 'features/User/components/Banner';
import NavBar from 'features/User/components/NavBar';
import React from 'react';
import { useRouteMatch } from 'react-router';
import '../Home/index.css';



Home.propTypes = {

};


function Home(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        layout: {
            paddingTop: '100px'
        },
        link: {
            textDecoration: 'none',
            color: '#120F2D'
        }
    }));
    const classes = useStyles()
    const match = useRouteMatch();

    return (
        <Box className='home'>
            <Box >
                <NavBar> </NavBar>
            </Box>

            <Box className={classes.layout}>
                <Banner />
            </Box>

            <Box>
                <Container>
                    <Box>
                        <Grid container>
                            <Grid item lg={6}>
                                banner left
                            </Grid>
                            <Grid item lg={6}>
                                banner right
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

        </Box>
    );
}

export default Home;