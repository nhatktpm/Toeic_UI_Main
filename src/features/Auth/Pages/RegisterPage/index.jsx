import Register from 'features/Auth/components/Register';
import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';

function RegisterPage(props) {
    return (
        <div>
         <Box className="bg-login-page">
                <Container>
                    <Box className='contai-login'>
                        <Grid container>
                            <Grid item lg={6} >
                                <Box className='left-login'>                               
                                    <img src="https://cdn.dribbble.com/users/1355613/screenshots/15821311/media/90a50fa31d262d02577367230d34efec.jpg?compress=1&resize=1600x1200" alt="" />
                                </Box> </Grid>
                            <Grid item lg={6}>
                                <Box className="f-login">
                                <Register />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
           
        </div>
    );
}

export default RegisterPage;