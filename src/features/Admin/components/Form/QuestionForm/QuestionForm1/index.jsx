import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
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
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="cauhoi" label="Question " form={form} />
            <InputField name="dapandung" label="Day la hinh" form={form} />
            <InputField name="img" label="day la hinh" form={form} />
            <Button
                disabled={isSubmitting}
                type="submit"
                // className={classes.submit}
                variant="contained"
                color="primary"
                fullWidth
                size="large"
            >
                Add Question
        </Button>
        </form>
    );
}

export default QuestionForm1;