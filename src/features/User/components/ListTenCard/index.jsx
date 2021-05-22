import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import CardPart from '../CardPart';
import './index.css';

function ListTenCard(props) {

    return (
        <Box className='bg-listen-card'>
            <Box className='bg-cl-card'></Box>
            <Container maxWidth="lg">
                <Box className='title-list-card'>
                    <Box className='text-title-card title-red'>
                        toeic
                    </Box>
                    <Box className='text-title-card title-black'>
                        listening toeic test
                    </Box>
                </Box>
                <Box className='list-l-card'>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item lg={4}>
                            <CardPart />
                        </Grid>
                        <Grid item lg={4}>
                            <CardPart />
                        </Grid>
                        <Grid item lg={4}>
                            <CardPart />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default ListTenCard;