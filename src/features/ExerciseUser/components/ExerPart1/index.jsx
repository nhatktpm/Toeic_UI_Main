import { Box, Container } from '@material-ui/core';
import React from 'react';
import ExerPart1Form from '../FormExercise/FormExerPart1';

function ExerPart1(props) {

    const { listQuestion } = props
    console.log(listQuestion);
    const handleSubmit = async (values) => {
        console.log(values);
    };
    return (
        <Box>
            <Container >
                <ExerPart1Form onSubmit={handleSubmit} />
            </Container>
        </Box>
    );
}

export default ExerPart1;