import React from 'react';
import PropTypes from 'prop-types';
import PartForm from '../Form/PartForm';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editPart } from 'features/Admin/Slice/PartSlice';
import { unwrapResult } from '@reduxjs/toolkit';

EditPart.propTypes = {

};

function EditPart(props) {
  const dispath = useDispatch()

  const handleEditPartFormSubmit = async (values) => {
    // let data = {
    //   name: values.name,
    //   img: values.img,
    //   descrip: values.descrip,
    //   slug: values.slug,
    // }
    const action = editPart(idPart, values)
    const resultAction = await dispath(action)   
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