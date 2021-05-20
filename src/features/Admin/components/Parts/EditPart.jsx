import React from 'react';
import PropTypes from 'prop-types';
import PartForm from '../Form/PartForm';
import { useHistory, useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editPart } from 'features/Admin/Slice/PartSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

EditPart.propTypes = {

};

function EditPart(props) {

  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()
  const dispath = useDispatch()

  const handleEditPartFormSubmit = async (values) => {
    const data = {
      id: idPart,
      part: values
    }
    const action = editPart(data);
    const resultAction = await dispath(action);

    let slipType = resultAction.type.split('/')

    if (slipType[2] == 'fulfilled') {
      history.goBack()
      enqueueSnackbar('Edit Part Successfully', { variant: 'success' })
    } else {
      enqueueSnackbar('Edit Part Not Successfully', { variant: 'error' })
    }

  };

  const {
    params: { idPart },
    url,
  } = useRouteMatch();


  const editedPart = useSelector(state => {
    const foundPart = state.part.listPart.find(x => x._id == idPart);
    return foundPart;
  });

  const initialValues = editedPart

  return (
    <div>

      <PartForm initialValues={initialValues} onSubmit={handleEditPartFormSubmit} />

    </div>
  );
}

export default EditPart;