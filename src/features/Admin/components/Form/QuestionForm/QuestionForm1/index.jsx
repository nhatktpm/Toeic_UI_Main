import { Box, Button, Grid, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
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


    const form = useForm({
        defaultValues: editMode ? initialValues :
            {
                cauhoi: "1 ",
                caua: "l",
                caub: "b",
                cauc: "c",
                caud: "d",
                dapandung: "1",
                img: "1"               
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

    return (

        <Box className='content-list'>
        <Grid container>
            <Grid item lg={12}>
                <Box className='ad-table'>

                    <Box className='table-title'>
                        <Box className='content-title'>
                            <AcUnitIcon className='table-icon' />
                            <Typography variant='h5' className='part-text'> This Is My Gu</Typography>
                        </Box>
                    </Box>
                    <Box className='button-add'>
                        <Button
                            variant="contained"
                            color="secondary"
                            // className={classes.button}
                            startIcon={<AddCircleIcon />}
                        >
                            Add Part
                        </Button>
                    </Box>
                    <Box className='table-body'>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>

                            <Grid container spacing={3}>
                                <Grid item md={9}>

                                    <Grid container>
                                        <Grid item md={12}>
                                            <Box className='inp'>
                                            <InputField name="cauhoi" label="Question " form={form} />
                                            </Box>
                                        </Grid>

                                        <Grid item md={12}>
                                            <Box className='inp'>
                                            <InputField name="dapandung" label="Day la hinh" form={form} />
                                            </Box>
                                        </Grid>

                                        <Grid item md={12}>
                                            <Box className='inp'>
                                            <InputField name="img" label="day la hinh" form={form} />
                                            </Box>
                                        </Grid>

                                        <Grid item md={12}>
                                            <Box className='inp'>
                                                <InputField name="d" label="Translate English" form={form} />
                                            </Box>
                                        </Grid>

                                    </Grid>

                                </Grid>

                                <Grid item md={3}>
                                    <Box className='inp'>
                                        <InputField name="img" label="Upload File" form={form} />
                                    </Box>

                                    <Box className='inp'>
                                        <InputField name="asd" label="Upload File" form={form} />
                                    </Box>

                                </Grid>


                            </Grid>
                            <Grid item md={12}>
                                <Box className='btn-edit-part' mt={5}>
                                    <Button
                                        disabled={isSubmitting}
                                        type="submit"
                                        // className={classes.submit}
                                        variant="contained"
                                        color="primary"

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

export default QuestionForm1;