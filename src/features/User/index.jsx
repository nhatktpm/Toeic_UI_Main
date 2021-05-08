import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import '../User/user.css'

function User(props) {
    return (
        <Box>
            <Box component="div" className="sidebar-user">
                SideBar
            </Box>
            <Box component="div" className="main-user">
                <Box className="abso">abso luot </Box>
                <Box className="red">dasdasdasd</Box>
                <Box className="xanh">dasdasdasd</Box>
                <Box className="trang">
                    <Grid container>

                        <Grid item lg={3} sm={6} className="fl">
                            <Box className="helo">
                                <Box className="helo-con">helo-chir</Box>
                            </Box>

                        </Grid>

                        <Grid item lg={3} sm={6}>
                            phan tu thuw 2
                        </Grid>

                        <Grid item lg={3}>
                            phan tu thu 3
                        </Grid>

                        <Grid item lg={3}>
                            phan tu thu 3
                        </Grid>
                    </Grid>

                    <Container>
                        <Box component="div">helo cac ban asdased</Box>
                        <Box component="span">helo cac ban</Box>
                        <Box component="span">helo cac ban</Box>
                    </Container>

                    <Grid container>
                        <Grid item lg={6}> 1 </Grid>
                        <Grid item lg={6}> 2</Grid>
                        <Grid item container>
                            <Grid item> 1con </Grid>
                            <Grid item> 2con </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Container className="test">
                    asdasd
                </Container>

                <Box>
                    <Container className="ea">kjhkjhk
                        {/* <Grid container>
                            <Grid item className="ea">
                             asdasdasd
                            </Grid>
                        </Grid> */}
                    </Container>
                </Box>
            </Box>

        </Box>
    );
}

export default User;