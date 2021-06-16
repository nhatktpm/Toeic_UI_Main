import { Avatar, Box, Container, TextField } from '@material-ui/core';

import React from 'react';
import Comment from '../Comment';
import { allComment } from '../dat/dattt';
import './index.css'


function AllComment(props) {



    return (
        <div className='layout-all-comment'>
            <Box mb={3}>
                <Box className='contai-all-comment'>
                    <Box><Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/yti/ANoDKi65P3NC5SX7m2soa8NvdmR0U9_dK0B-P4ApCeaLFA=s88-c-k-c0x00ffffff-no-rj-mo" /></Box>
                    <Box ml={3} className='comment-field'> <TextField id="standard-basic" label="Comment" fullWidth /> </Box>
                </Box>
            </Box>

            <Box>
                {allComment.map((comment) => {
                    return <Comment comment={comment} />
                })}
                
            </Box>


        </div>
    );
}

export default AllComment;