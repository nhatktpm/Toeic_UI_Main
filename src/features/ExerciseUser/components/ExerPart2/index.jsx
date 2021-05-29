import { Box, Container } from '@material-ui/core';
import React from 'react';
import ExerPart2Form from '../FormExercise/FormExerPart2';


function ExerPart2(props) {

    const { listQuestion } = props
    console.log(listQuestion);
    const handleSubmit = async (values) => {
        console.log(values);
    };
    return (
        <Box>
            <Box>
                <Container></Container>
            </Box>

            <Container >
                <ExerPart2Form onSubmit={handleSubmit} />
            </Container>
        </Box>
    );
}

export default ExerPart2;