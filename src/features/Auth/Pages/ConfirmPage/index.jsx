import { Box, Container, Grid } from '@material-ui/core';
import userApi from 'api/userApi';
import Login from 'features/Auth/components/Login';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import './index.css'

function Confirm(props) {

    const [ms, setMs]= useState("Thong bao")


    const {
        params: { token },
        url,
    } = useRouteMatch();


    useEffect(() => {
        (async () => {
            const cfEmail = await userApi.confirm({ tokenUser: token })
            setMs(cfEmail.data.msg)
        })()
    }, []);


    return (
        <div>
            <Box className="bg-login-page">
                <Container>
                    <Box className='contai-login'>
                        <Grid container>
                            <Grid item lg={6} >
                                <Box className='left-confirm'>
                                    <img src="https://cdn.dribbble.com/users/1355613/screenshots/15821311/media/90a50fa31d262d02577367230d34efec.jpg?compress=1&resize=1600x1200" alt="" />
                                </Box> </Grid>
                            <Grid item lg={6}>
                                <Box className="f-login contai-confirm">
                                    <Box className="noti-confirm"> {ms}</Box>
                                    <Box className="link-noti"> <Link to="/auth"> Login Now </Link></Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

        </div>
    );
}

export default Confirm;