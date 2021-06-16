import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import './index.css'

PartItem.propTypes = {
    part: PartItem.object,
};

function PartItem(props) {

    const { part } = props
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
                    <img src={`${part.img}`} alt='' />
                </Box>
                <Box>
                    <Box className='contai-part-info'>
                    <Box className="free-part"> Free</Box>
                        {/* <Box mb={2} ml={3} className='part-date'> ngay 1 thang 1</Box> */}
                        <Box mb={1} className='part-name'> {part.name}</Box>
                        <Box mb={2} className='part-social'>
                            <Box >
                                <ShareIcon className='part-social-icon' fontSize="small" />
                                <FacebookIcon className='part-social-icon' fontSize="small" />
                                <InstagramIcon className='part-social-icon' fontSize="small" />
                            </Box>

                        </Box>
                        <Box mb={3} className='part-descrip text-n-row'>
                            {part.descrip}
                        </Box>
                        <Box className='part-action'>
                            <Link className={classes.link} to={`/list-topic/${part._id}`}>
                                <Box className='btn-action action_detail'  ml="25px"> Chi Tiết</Box>
                            </Link>

                            {/* <Link className={classes.link} to='/exercise/asd/asd'>
                                <Box className='btn-action action_do' > lam bai</Box>
                            </Link> */}
                        </Box>
                    </Box>
                </Box>

            </Box>

        </div>
    );
}

export default PartItem;