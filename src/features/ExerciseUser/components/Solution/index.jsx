import { Box, Container } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import './index.css'
function Solution(props) {

    const { idTopic } = props
    const match = useRouteMatch();

    console.log(match);
    return (
        <Box className='contai-comment'>
            <Container>
            <Box mb='30px' className='text-l'> bài giải chi tiết của từng câu</Box>
                <Box >
                    <Box className='text-m' mb='10px'> câu 1</Box>
                    <Box className='text-s'>
                        giai
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Solution;