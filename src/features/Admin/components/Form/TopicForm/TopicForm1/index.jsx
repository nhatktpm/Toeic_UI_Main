import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Grid, Typography } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';
import TextareaField from 'components/form-controls/Textarea';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';

TopicForm1.propTypes = {
    onSubmit: PropTypes.func,
};

function TopicForm1(props) {

    const { initialValues, editMode } = props;
    

    const schema = yup.object().shape({
        nameTopic: yup.string().required('Please enter title').min(5, 'Name topicis too short'),
        descrip: yup.string().required('Please enter descrip').min(5, 'Title is too short'),
        translate_vn: yup.string().required('Please enter translate vn').min(5, 'Title is too short'),
        translate_eng: yup.string().required('Please enter translate eng').min(5, 'Title is too short'),
    });
    const initvalu = { ...initialValues }
    if (!editMode) {
        initvalu.img=''
    }
    const [avatar, setAvatar] = useState(initvalu.img)


    const form = useForm({
        defaultValues: editMode ? initialValues :
            {
                nameTopic: "Topic  ",
                img: "",
                descrip: "",
                part: "60197e3072dbac87905bc3b4",
                audio: "",
                translate_vn: "",
                translate_eng: "",
                question: []
            }
        ,
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


    const changeIMG = async (e) => {

        e.preventDefault()
        try {
            const file = e.target.files[0]
            let formData = new FormData()
            formData.append('file', file)

            const res = await axios.post('http://localhost:9599/admin/upload_img', formData, {
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
                                <Typography variant='h5' className='part-text'>Manage Topic</Typography>
                            </Box>
                        </Box>
                        <Box className='button-add'>
                            {/* <Button
                                variant="contained"
                                color="secondary"
                                // className={classes.button}
                                startIcon={<AddCircleIcon />}
                            >
                                Add Topic
                            </Button> */}
                        </Box>
                        <Box className='table-body'>
                            <form onSubmit={form.handleSubmit(handleSubmit)}>

                                <Grid container spacing={3}>
                                    <Grid item md={9}>

                                        <Grid container>
                                            <Grid item md={12}>
                                                <Box className='inp'>
                                                    <InputField name="nameTopic" label="Topic Name" form={form} />
                                                </Box>
                                            </Grid>

                                            <Grid item md={12}>
                                                <Box className='inp'>
                                                    <InputField name="descrip" label="Description" form={form} />
                                                </Box>
                                            </Grid>

                                            <Grid item md={12}>
                                                <Box className='inp'>
                                                    <InputField name="translate_vn" label="Translate VN" form={form} />
                                                </Box>
                                            </Grid>

                                            <Grid item md={12}>
                                                <Box className='inp'>
                                                    <InputField name="translate_eng" label="Translate English" form={form} />
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

                                            size="large"
                                        >
                                            {editMode ? "Edit Topic" : "Add Topic"}
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

export default TopicForm1;
