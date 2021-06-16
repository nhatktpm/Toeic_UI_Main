import { Box } from '@material-ui/core';
import React from 'react';
import Comment from '../Comment';
import { note } from '../dat/dattt';

function Note(props) {
    
    return (
        <div>
            <Box mt='20px'>
               {note.map((comment)=>{
                   return <Comment comment={comment}/>
               })}
            </Box>
        </div>
    );
}

export default Note;