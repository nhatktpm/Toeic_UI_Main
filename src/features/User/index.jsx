import { Box, Container, Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import '../User/user.css'

function User(props) {

    const { enqueueSnackbar } = useSnackbar();

    const showNoti = () => {
        enqueueSnackbar('click thanh cong', { variant: 'success' })
    }

    return (
        <Box>
            <Box onClick={() => showNoti()} component="div" className="sidebar-user">
                SideBar
            </Box>
            <Box>
                <Grid className="right" container>
                    <Grid item lg={12}> helo</Grid>
                    <Grid item lg={6}> <Box component='div' display='block'>asfdaasdasdasdasdasds</Box></Grid>
                    <Grid item lg={6}> heloasfasdfa</Grid>
                    
                    <Box>asfdas</Box>
                </Grid>
            </Box>


        </Box>


    );
}

export default User;