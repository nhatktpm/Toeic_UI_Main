import { Avatar, Box, Button, Container, Grid, makeStyles, Menu, MenuItem } from '@material-ui/core';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../NavBar/index.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from 'features/Auth/components/Login';


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

    const loginUser = useSelector(state => state.user.current)

    const islogin = !!loginUser.email

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
    };




    return (
        <Box className='nav'>
            <Container disableGutters maxWidth="lg">
                <Box className='contai-nav'>
                    <Grid container alignItems="center">
                        <Grid item lg={3}>
                            <Box className='nav-logo'>
                                <NavLink to='/'>
                                    <img src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2020/02/logo.png" alt='' />
                                </NavLink></Box>
                        </Grid>
                        <Grid item lg={7} >
                            <Box className='contai-link'>

                                <Box>
                                    <Box >
                                        <Box className='nav-link toeic-cha'>
                                            <NavLink to="/list-part" className={classes.link}>  <span className='link-text'>Toeic</span></NavLink>
                                            {/* 
                                            <Box className='toeic-child'>
                                                <Box>
                                                    <NavLink to="asdasdasd"> <span className='link-text  sub-menu' >Part 1</span> </NavLink>
                                                    <NavLink to="asdasda"> <span className='link-text sub-menu' >Part 2</span> </NavLink>
                                                    <NavLink to="asdasdasd"> <span className='link-text sub-menu' >Part 3</span> </NavLink>
                                                    <NavLink to="asdasda"> <span className='link-text sub-menu' >Part 4</span> </NavLink>

                                                </Box>
                                            </Box> */}

                                        </Box>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box className='nav-link' >
                                        <Link to="listten" smooth={true} duration={2000}>
                                            <span className='link-text' >toeic listening</span>
                                        </Link>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box className='nav-link'>
                                        <Link to="readpart" smooth={true} duration={2000}>
                                            <span className='link-text'>Toeic reading</span>
                                        </Link>

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
                                {islogin ?
                                    <Box className='nav-auth'>
                                    <Avatar src={`${loginUser.img}`} onClick={handleUserClick}></Avatar>
                                    <Box ml={1}>Nguyễn Trường Nhật</Box>
                                     </Box>
                                    :
                                    <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                                        Sing In/Register
                                    </Button>
                                }
                            </Box>
                        </Grid>
                        <Menu
                            keepMounted
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                        </Menu>

                        <Dialog disableBackdropClick
                            disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                            <DialogContent>
                                <Login closeDialog={handleClose} />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>

                            </DialogActions>
                        </Dialog>



                    </Grid>
                </Box>

            </Container>
        </Box>
    );
}

export default NavBar;