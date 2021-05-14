import React from 'react';
import PropTypes from 'prop-types';
import { TextareaAutosize} from '@material-ui/core';
import { Controller } from 'react-hook-form';

TextareaField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function TextareaField(props) {
  const { form, name, label, disable } = props;
  const { control } = form;


  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextareaAutosize
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disable}
        />
      )}
    ></Controller>
  );
}

export default TextareaField;