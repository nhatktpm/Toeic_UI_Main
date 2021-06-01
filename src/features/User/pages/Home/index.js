import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import listPartApi from 'api/listPartApi';
import PartItem from 'features/ListPartUser/component/PartItem';
import Banner from 'features/User/components/Banner';
import ListTenCard from 'features/User/components/ListTenCard';
import NavBar from 'features/User/components/NavBar';
import React, { useEffect, useState } from 'react';
import '../Home/index.css';

Home.propTypes = {

};

function Home(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        layout: {
            paddingTop: '100px'
        },
        link: {
            textDecoration: 'none',
            color: '#120F2D'
        },
        hh: {
            height: '500px'
        }
    }));
    const classes = useStyles()

    const [loading, setLoading] = useState(true);
    const [PartListten, setPartlistten] = useState([]);
    const [PartRead, setPartRead] = useState([]);

    
    useEffect(() => {
        (async () => {
            try {
                const data = await listPartApi.getAll()
                setPartlistten(data.data.parts.slice(0,4));
                setPartRead(data.data.parts.slice(4,7));
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, []);


    return (
        <Box className='home'>

         
            <Box >

                <NavBar> </NavBar>
            </Box>

            <Box className={classes.layout}>
                <Banner />
            </Box>

            <Box id='listten'>
                <ListTenCard listpart={PartRead} />
            </Box>

            <Box>
                <Container>
                    <Box className={classes.hh}>
                        <Grid container>
                            <Grid item lg={2}>
                                banner left

                                
                            </Grid>
                            <Grid item lg={10}>
                            <Box>

                                <Box id='readpart' className='text-title-readi'>Reading Toeic Test</Box>
                            { PartListten.map((part)=>{
                              return  <PartItem part ={part}/>
                            })}
                               </Box>                            
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

        </Box>
    );
}

export default Home;