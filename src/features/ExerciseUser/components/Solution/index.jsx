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
                    <Box> cau 5 dùng vì</Box>
                    <Box className='text-s'>
                        <Box className='giai-chitiet'> A.She is cutting a piece of wood. </Box>
                        <Box className='giai-chitiet'>B.She is constructing an outdoor wall. </Box>
                        <Box className='giai-chitiet'> C.She is focusing on hammering a nail.</Box>
                        <Box className='giai-chitiet'>D.She is fixing the power cable. </Box>
                    </Box>
                </Box>
                <Box >
                    <Box className='text-m' mb='10px'> câu 2</Box>
                    <Box className='text-s'>
                        <Box className='giai-chitiet'> A.Coffee is being poured into cups.</Box>
                        <Box className='giai-chitiet'>B.He is fixing a mobile phone. </Box>
                        <Box className='giai-chitiet'> C.She is focusing on hammering a nail.</Box>
                        <Box className='giai-chitiet'>D.She is fixing the power cable. </Box>
                    </Box>
                </Box>
                <Box >
                    <Box className='text-m' mb='10px'> câu 3</Box>
                    <Box className='text-s'>
                        <Box className='giai-chitiet'>A.People are walking past the bench.. </Box>
                        <Box className='giai-chitiet'>B. A man is carrying a bag. </Box>
                        <Box className='giai-chitiet'>C.The path leads down through the woods..</Box>
                        <Box className='giai-chitiet'>D.She is fixing the power cable. </Box>
                    </Box>
                </Box>
                <Box >
                    <Box className='text-m' mb='10px'> câu 4</Box>
                    <Box className='text-s'>
                        <Box className='giai-chitiet'> A.The woman is using a computer on her lap.</Box>
                        <Box className='giai-chitiet'>B.They are looking in the same direction. </Box>
                        <Box className='giai-chitiet'> C.They are involved in a discussion..</Box>
                        <Box className='giai-chitiet'>D.The woman is resting at the bottom of the steps </Box>
                    </Box>
                </Box>


            </Container>
        </Box>
    );
}

export default Solution;