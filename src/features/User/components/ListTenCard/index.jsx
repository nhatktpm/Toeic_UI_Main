import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import CardPart from '../CardPart';
import './index.css';

function ListTenCard(props) {
    const { listpart } = props
    


    return (
        <Box className='bg-listen-card'>
            <Box className='bg-cl-card'></Box>
            <Container maxWidth="lg">
                <Box className='title-list-card'>
                    <Box className='text-title-card title-red'>
                        Toeic
                    </Box>
                    <Box className='text-title-card title-black'>
                        Listening Toeic Test
                    </Box>
                </Box>
                <Box className='list-l-card'>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {listpart.map((part) => {
                            return (<Grid item lg={4}>
                                <CardPart  part={part} />
                            </Grid>)
                        })}

                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default ListTenCard;