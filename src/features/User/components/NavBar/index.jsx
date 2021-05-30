import { Avatar, Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import '../NavBar/index.css';

// onClick={() => scroll.scrollToTop()}    Scroll to top
NavBar.propTypes = {

};

function NavBar(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        link: {
            textDecoration: 'none',
            color: '#120F2D'
        }
    }));

    const classes = useStyles();

    return (
        <Box className='nav'>
            <Container disableGutters maxWidth="lg">
                <Box className='contai-nav'>
                    <Grid container alignItems="center">
                        <Grid item lg={3}>
                            <Box className='nav-logo'>
                                <Link to='/'>
                                    <img src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2020/02/logo.png" alt='' />
                                </Link></Box>
                        </Grid>
                        <Grid item lg={7} >
                            <Box className='contai-link'>

                                <Box>
                                    <Link to="/list-part" className={classes.link}>
                                        <Box className='nav-link'>
                                            <span className='link-text'>Toeic</span>
                                        </Box>
                                    </Link>
                                </Box>

                                <Box>
                                    <Box className='nav-link' >
                                        <span className='link-text' >toeic listening</span>

                                    </Box>
                                </Box>

                                <Box>
                                    <Box className='nav-link'>

                                        <span className='link-text'>Toeic reading</span>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box className='nav-link'>

                                        <span className='link-text'>Contact us</span>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box className='nav-link'>

                                        <span className='link-text'>about</span>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item lg={2} >
                            <Box className='auth'>
                                {true ?
                                    <Button variant="outlined" color="secondary">
                                        Sing In/Register
                                    </Button>
                                    :
                                    <Box className='nav-auth'><Avatar>H</Avatar> </Box>
                                }


                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Container>

        </Box>
    );
}

export default NavBar;