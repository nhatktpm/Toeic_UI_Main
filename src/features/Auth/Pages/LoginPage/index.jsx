import { Box } from '@material-ui/core';
import Login from 'features/Auth/components/Login';
import React from 'react';
import './index.css'

function LoginPage(props) {
    return (
        <div>
            <Box className="contai-login">
                <Login> </Login>
            </Box>

        </div>
    );
}

export default LoginPage;