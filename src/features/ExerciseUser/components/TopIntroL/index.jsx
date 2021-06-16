import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import './index.css'

function TopIntroL(props) {
    return (
        <div>
            <Box className="contai-list-question">
                <Container maxWidth="lg">
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item lg={12}>
                            <Box className='top-title-l'>Course Popular Courses</Box>

                        </Grid>
                        <Grid item lg={12}>
                            <Box className='top-discrip-l'>
                                Listen and choose the best description for each photo.
                                </Box>
                        </Grid>
                        <Grid item lg={12}>
                            <Box className='audio-part'>
                                <ReactAudioPlayer
                                    src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/in%20the%20office%202.mp3"
                                    // autoPlay
                                    controls
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </div>
    );
}

export default TopIntroL;