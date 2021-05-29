import React from 'react';
import { Avatar, Box, Container } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './index.css'

function Comment(props) {
    return (
        <div>
            <Box mb={2}>
                <Container>
                    <Box className='comment'>
                        <Box><Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/yti/ANoDKi65P3NC5SX7m2soa8NvdmR0U9_dK0B-P4ApCeaLFA=s88-c-k-c0x00ffffff-no-rj-mo" /></Box>
                        <Box className='comment-contai' >
                            <Box className='comment-name'>
                                <Box component='span' className='comment-user'> Nguyễn Trường Nhật</Box>
                                <Box component='span' className='comment-date'>21 / 5 / 2021 </Box>
                            </Box>
                            <Box className='comment-content'> ommunication – Bài kiểm tra tiếng
                            Anh giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc tế về g
                            iao tiếp dành cho người đi làm không phải là ng
                            ười sử dụng tiếng Anh làm tiếng mẹ đẻ, đặc bi
                            ệt là những đối tượng muốn sử dụng</Box>
                            <Box className='comment-action'> 
                            <EditIcon className='comment-action-edit'  /> <DeleteForeverIcon className='comment-action-delete' /> 
                            </Box>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default Comment;