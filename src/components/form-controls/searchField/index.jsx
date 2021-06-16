import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import { Controller } from 'react-hook-form';

SearchField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function SearchField(props) {
  const { form, name, label, disable, row } = props;
  const { control } = form;



  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <InputBase
          margin="normal"
          placeholder="Search Google Maps"
          variant="outlined"
          rows={row}          
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

export default SearchField;