import { unwrapResult } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { login } from 'features/Auth/userSlice';

import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {

      const dataLogin = await userApi.login(values)

      if (dataLogin.data.token) {
        console.log("true");
      } else {
        console.log("fals");
      }


      console.log(dataLogin);


      // // close dialog
      // const { closeDialog } = props;
      // if (closeDialog) {
      //   closeDialog();
      // }
    } catch (error) {
      console.log('Failed to login:', error);
      // enqueueSnackbar(error.message, { variant: 'error' });
    }


  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
