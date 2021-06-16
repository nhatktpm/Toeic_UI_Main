import { Box, Container } from '@material-ui/core';
import React from 'react';
import ExerPart5Form from '../FormExercise/FormExerPart5';



function ExerPart5(props) {

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
                <ExerPart5Form onSubmit={handleSubmit} />
            </Container>
        </Box>
    );
}

export default ExerPart5;