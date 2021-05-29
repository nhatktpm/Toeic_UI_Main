import { Box } from '@material-ui/core';
import React from 'react';
import Comment from '../Comment';

function Note(props) {
    return (
        <div>
            <Box mt='20px'>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </Box>
        </div>
    );
}

export default Note;