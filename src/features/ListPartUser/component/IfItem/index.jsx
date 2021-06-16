import React from 'react';
import AccoIcon from '@material-ui/icons/AccountBalance';
import { Box } from '@material-ui/core';

function IfItem(props) {

    const data = [{
        name: 'giá',
        icon: '',
        text: 'Free'
    }, {
        name: 'đã làm',
        icon: '',
        text: '5'
    }, {
        name: 'bài tập',
        icon: '',
        text: '10'
    }, {
        name: 'thời gian',
        icon: '',
        text: '100 phút'
    }, {
        name: 'số người tham gia',
        icon: '',
        text: ''
    }
    ]



    return (
        <Box>
            <Box>
                <Box className="if-item">
                    <Box className="if-icon-name">
                        <Box className="if-icon"> <AccoIcon /> </Box>
                        <Box className="if-name">
                            Giá
                        </Box>
                    </Box>
                    <Box className="if-text"> Free</Box>
                </Box>
            </Box>
        </Box>
    );
}

export default IfItem;