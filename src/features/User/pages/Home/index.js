import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import ScrollToTop from 'components/SrollToTop';
import Banner from 'features/User/components/Banner';
import ListTenCard from 'features/User/components/ListTenCard';
import NavBar from 'features/User/components/NavBar';
import React from 'react';
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
        },
        hh: {
            height: '500px'
        }
    }));
    const classes = useStyles()




    return (
        <Box className='home'>

            <ScrollToTop />
            <Box >

                <NavBar> </NavBar>
            </Box>

            <Box className={classes.layout}>
                <Banner />
            </Box>

            <Box>
                <ListTenCard />
            </Box>

            <Box>
                <Container>
                    <Box className={classes.hh}>
                        <Grid container>
                            <Grid item lg={6}>
                                banner left

                                <p>If you click on me, I will disappear.</p>
                                <p>Click me away!</p>
                                <p>Click me too!</p>
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