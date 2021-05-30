import { Box } from '@material-ui/core';
import React from 'react';
import './index.css';

function CardPart(props) {

    const { part } = props

    return (
        <Box className='contai-card'>
            <Box className='card-part'>
                <Box className='card-img'>
                    <img src={`${part.img}`} alt='' height="100" width="100%" />
                </Box>
                <Box className='card-content'>
                    <Box className='name-card'>
                        {part.name}
                    </Box>
                    <Box className='card-decrip'>
                        {part.descrip}
                     </Box>
                    <Box className='card-action'>
                        <Box className='ac action-1'> Mô Tả </Box>

                        <Box className='ac action-2'>Bài Tập</Box>
                        <Box className='ac action-3'> Tác giả</Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    );
}

export default CardPart;