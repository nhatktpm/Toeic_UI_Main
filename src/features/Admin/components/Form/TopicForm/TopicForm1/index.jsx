import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';
import TextareaField from 'components/form-controls/Textarea';

import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TopicForm1.propTypes = {
    onSubmit: PropTypes.func,
};

function TopicForm1(props) {

    const { initialValues, editMode } = props;


    const schema = yup.object().shape({
        nameTopic: yup.string().required('Please enter title').min(5, 'Title is too short'),
    });



    const form = useForm({
        defaultValues: editMode ? initialValues :
            {
                nameTopic: "Chu De ",
                img: "",
                descrip: "1",
                part: "60197e3072dbac87905bc3b4",
                audio: "",
                translate_vn: "",
                translate_eng: "",
                question: []
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
            <InputField name="nameTopic" label="Topic Name" form={form} />
            <InputField name="descrip" label="Description" form={form} />
            {/* <InputField name="translate_vn" label="Translate VN" form={form} />
            <InputField name="translate_eng" label="Translate Eng" form={form} /> */}
            <Button
                disabled={isSubmitting}
                type="submit"
                // className={classes.submit}
                variant="contained"
                color="primary"
                fullWidth
                size="large"
            >
              {editMode ? "Edit Topic" : "Add Topic"}
            </Button>
        </form>
    );
}

export default TopicForm1;
