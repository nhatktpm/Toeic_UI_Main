import React from 'react';
import { Avatar, Box, Container } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './index.css'
import { useRouteMatch } from 'react-router';

function Comment(props) {
    const { slug, comment } = props
    const match = useRouteMatch()
console.log(slug);
    return (
        <div>
            <Box mb={2}>
                <Container>
                    <Box className='comment'>
                        <Box><Avatar alt="Remy Sharp" src={`${comment.img}`} /></Box>
                        <Box className='comment-contai' >
                            <Box className='comment-name'>
                                <Box component='span' className='comment-user'>{comment.name}</Box>
                                <Box component='span' className='comment-date'>21 / 5 / 2021 </Box>
                            </Box>
                            <Box className='comment-content'> {comment.noidung}</Box>
                            <Box className='comment-action'>
                                <EditIcon className='comment-action-edit' /> <DeleteForeverIcon className='comment-action-delete' />
                            </Box>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default Comment;