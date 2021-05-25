import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import './index.css'

function PartItem(props) {


    const useStyles = makeStyles((theme) => ({
        root: {
        },

        mrBot: {
            marginBottom: '20px'
        },
        link: {
            textDecoration: 'none'
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <Box className='part-item mrb'>
                <Box className='part-img'>
                    <img src='https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/course-img1-400x400.jpg' alt='' />
                </Box>
                <Box>
                    <Box className='contai-part-info'>
                        <Box mb={2} ml={3} className='part-date'> ngay 1 thang 1</Box>
                        <Box mb={1} className='part-name'> day la tem cua part</Box>
                        <Box mb={2} className='part-social'>
                            <Box >
                            
                                <ShareIcon className='part-social-icon' fontSize="small"/>
                                <FacebookIcon className='part-social-icon' fontSize="small" />
                                <InstagramIcon className='part-social-icon' fontSize="small" />
                            </Box>

                        </Box>
                        <Box mb={3} className='part-descrip'>
                            There’s a quandary I hear people talk about a
                            lot in the self-improvement world whould I just learn…
                            oot in the self-improvement world whould I just lear
                            ot in the self-improvement world whould I just lear
                        </Box>
                        <Box className='part-action'>
                            <Link className={classes.link} to='/list-topic/132'>
                                <Box  className='btn-action action_detail'  > chi tiet </Box>
                            </Link>

                            <Link className={classes.link} to='/exercise/asd/asd'>
                                <Box className='btn-action action_do' > lam bai</Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </div>
    );
}

export default PartItem;