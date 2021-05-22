import { Box } from '@material-ui/core';
import React from 'react';
import './index.css';

function CardPart(props) {
    return (
        <Box className='contai-card'>
            <Box className='card-part'>
                <Box className='card-img'>
                    <img src="https://mltgfb8sgh5y.i.optimole.com/3Vuqt6I.vAfL~2a7bd/w:349/h:214/q:90/dpr:1.5/https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course6-1.jpg"
                        alt="Parliament Hill" height="100" width="100%"></img>

                </Box>
                <Box className='card-content'>
                    <Box className='name-card'>
                        Luyện tập Part 1 - Photographs
                    </Box>
                    <Box className='card-decrip'>
                        Xem 1 bức tranh trong đề và nghe 4 đáp án. Chọn đáp án mô tả đúng về bức tranh.
                     </Box>
                    <Box className='card-action'>
                        <Box className='ac action-1'> chasdas </Box>

                        <Box className='ac action-2'>bai tap </Box>
                        <Box className='ac action-3'> free</Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    );
}

export default CardPart;