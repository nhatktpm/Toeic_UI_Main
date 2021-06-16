import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@material-ui/core';

import SearchField from 'components/form-controls/searchField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import SearchIcon from '@material-ui/icons/Search';
import "./index.css"

SearchTopic.propTypes = {
    onSubmit: PropTypes.func,
};

function SearchTopic(props) {
    const schema = yup.object().shape({

    });
    const form = useForm({
        defaultValues: {
            search: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values) => {
        console.log(values);
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Box className="search">
                <SearchField name="search" label="Search Topic" form={form} />
                <Button
                    type="submit"
                    variant="outlined"
                    color="secondary"
                    // fullWidth
                    size="large"
                    startIcon={<SearchIcon />}
                >
                    Tìm Kiếm
                </Button>
            </Box>

        </form>
    );
}

export default SearchTopic;