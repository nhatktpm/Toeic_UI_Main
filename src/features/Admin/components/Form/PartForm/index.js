import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';

import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

PartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function PartForm(props) {

  const { initialValues} = props;

  const schema = yup.object().shape({
    name: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });


  const form = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="name" label="Part Name" form={form} />      
      <InputField name="descrip" label="Description" form={form} />
      <Button
        disabled={isSubmitting}
        type="submit"
        // className={classes.submit}
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >
        Edit Part
        </Button>
    </form>
  );
}

export default PartForm;

