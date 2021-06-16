import { Box, Grid } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { login } from 'features/Auth/userSlice';
import NavBar from 'features/User/components/NavBar';


import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

import './index.css'

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {

    // if (values.password == '123456') {
    //   const action = login(values);
    //   const resultAction = await dispatch(action);
    //   unwrapResult(resultAction);

    //   const { closeDialog } = props;
    //   if (closeDialog) {
    //     closeDialog();
    //   }
    // } else {
    //   enqueueSnackbar('Login Fail', { variant: 'error' })
    // }


    enqueueSnackbar('User is not Admin!', { variant: 'warning' })
  };

  return (
    <div className='bg-bu'>
      <Box className='oauto'>
        <LoginForm onSubmit={handleSubmit} />
      </Box>

    </div>
  );
}

export default Login;
