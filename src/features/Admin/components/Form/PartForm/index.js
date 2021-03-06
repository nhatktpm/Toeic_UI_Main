import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from 'axios';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import * as yup from 'yup';



PartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function PartForm(props) {

  const { initialValues } = props;

  const schema = yup.object().shape({
    name: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });

  const initvalu = { ...initialValues }

  const [avatar, setAvatar] = useState(initvalu.img)

  // const [dt, setDt] = useState(initvalu)
  const form = useForm({
    defaultValues: initvalu,
    resolver: yupResolver(schema),
  })

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  const { isSubmitting } = form.formState;

  // \\
  
  const changeIMG = async (e) => {

    e.preventDefault()
    try {
      const file = e.target.files[0]
      let formData = new FormData()
      formData.append('file', file)

      const res = await axios.post('http://localhost:9599/admin/upload_avatar', formData, {
        headers: { 'content-type': 'multipart/form-data', }
      })

      setAvatar(res.data.url)

      console.log(avatar);
    } catch (error) {
    }
  }


  return (
    <Box className='content-list'>
      <Grid container>
        <Grid item lg={12}>
          <Box className='ad-table'>

            <Box className='table-title'>
              <Box className='content-title'>
                <AcUnitIcon className='table-icon' />
                <Typography variant='h5' className='part-text'> Part Form</Typography>
              </Box>
            </Box>

            <Box className='table-body'>
              <form onSubmit={form.handleSubmit(handleSubmit)}>

                <Grid container spacing={3}>
                  <Grid item md={9}>

                    <Grid container>
                      <Grid item md={12}>
                        <Box className='inp'>
                          <InputField name="name" label="Part Name" form={form} />
                        </Box>
                      </Grid>

                      <Grid item md={12}>
                        <Box className='inp'>
                          <InputField row={3} name="descrip" label="Description" form={form} />
                          
                        </Box>
                      </Grid>
                    </Grid>

                  </Grid>

                  <Grid item md={3}>
                    <Box className='inp'>
                      <Box > <img className="img-in-upload" height="100px" src={`${avatar}`} alt='' />  </Box>

                      {/* <InputField name="img" label="Upload File" form={form} /> */}

                      <span >
                        <p>Upload</p>
                        <input type="file" name="file" id="file_up" onChange={changeIMG} />
                      </span>

                    </Box>
                    {form.setValue("img", avatar)}
                  </Grid>

             
                </Grid>
                <Grid item md={12}>
                  <Box className='btn-edit-part' pb={4} mt={5}>
                    <Button

                      disabled={isSubmitting}
                      type="submit"
                      // className={classes.submit}
                      variant="outlined"
                      color="secondary"
                      // fullWidth
                      size="large"

                    >
                      Edit Part
                </Button>
                  </Box>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>

  );
}

export default PartForm;

