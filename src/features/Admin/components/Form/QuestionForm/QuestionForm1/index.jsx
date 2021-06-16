import { Box, Button, Grid, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from 'axios';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';



QuestionForm1.propTypes = {
    onSubmit: PropTypes.func,
};

function QuestionForm1(props) {

    const { initialValues, editMode } = props;

    const schema = yup.object().shape({
        cauhoi: yup.string().required('Please enter title').min(5, 'Title is too short'),
    });
    const initvalu = { ...initialValues }
    if (!editMode) {
        initvalu.img=''
    }
    const [avatar, setAvatar] = useState(initvalu.img)

    const form = useForm({
        defaultValues: editMode ? initialValues :
            {
                cauhoi: "Câu ",
                caua: "",
                caub: "b",
                cauc: "c",
                caud: "d",
                dapandung: "a",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhItDEsENI2qy_YkEN4y42uuygg_m7IoQ5A&usqp=CAU"               
            }
        ,
        // resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };

    const { isSubmitting } = form.formState;


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
                            <Typography variant='h5' className='part-text'> Manage Question</Typography>
                        </Box>
                    </Box>
                    <Box className='button-add'>
                        <Button
                            variant="contained"
                            color="secondary"
                            // className={classes.button}
                            
                        >
                            Back
                        </Button>
                    </Box>
                    <Box className='table-body'>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>

                            <Grid container spacing={3}>
                                <Grid item md={9}>

                                    <Grid container>
                                        <Grid item md={12}>
                                            <Box className='inp'>
                                            <InputField name="cauhoi" label="Câu hỏi " form={form} />
                                            </Box>
                                        </Grid>

                                        <Grid item md={12}>
                                            <Box className='inp'>
                                            <InputField name="dapandung" label="Đáp Án Đúng" form={form} />
                                            </Box>
                                        </Grid>

                                        <Grid item md={6}>
                                            <Box className='inp'>
                                            <InputField name="caua" label="Câu A" form={form} />
                                            </Box>
                                        </Grid>

                                        <Grid item md={6}>
                                            <Box className='inp'>
                                                <InputField name="caub" label="Câu B" form={form} />
                                            </Box>
                                        </Grid>

                                        <Grid item md={6}>
                                            <Box className='inp'>
                                                <InputField name="cauc" label="Câu C" form={form} />
                                            </Box>
                                        </Grid>

                                        <Grid item md={6}>
                                            <Box className='inp'>
                                                <InputField name="caud" label="Câu D" form={form} />
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

                                        {/* <Box className='inp'>
                                            <InputField name="asd" label="Upload File" form={form} />
                                        </Box> */}

                                    </Grid>



                            </Grid>
                            <Grid item md={12}>
                                <Box className='btn-edit-part' mt={5}>
                                    <Button
                                        disabled={isSubmitting}
                                        type="submit"
                                        // className={classes.submit}
                                        variant="contained"
                                        color="secondary"
                                        
                                    >
                                        {editMode ? "Edit Question" : "Add Question"}
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

export default QuestionForm1;