import { Box } from '@material-ui/core';
import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './index.css'

function IntroItemTop(props) {
    return (

        <Box className='intro-r'>
            <Box className='intro-icon' >
                <MenuBookIcon style={{ fontSize: 40 }} />
            </Box>
            <Box className='intro-content-text'>
                <Box className='intro-text'> Số lượng bài tập</Box>
                <Box className='intro-info'> Lorem ipsum dolor sit amet consectets.</Box>
            </Box>

        </Box>
    );
}

export default IntroItemTop;