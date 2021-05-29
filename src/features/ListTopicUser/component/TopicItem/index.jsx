import React from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Box, makeStyles } from '@material-ui/core';
import './index.css'


TopicItem.propTypes = {
    topic: TopicItem.object,
};

function TopicItem(props) {



    const { topic } = props


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
            <Box className='topic-item mrb'>
                <Box className='topic-img'>
                    <img src='https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/course-img1-400x400.jpg' alt='' />
                </Box>
                <Box>
                    <Box className='contai-topic-info'>
                        <Box mb={2} ml={3} className='topic-date'> ngay 1 thang 1</Box>
                        <Box mb={1} className='topic-name'>{topic.nameTopic}</Box>
                        <Box mb={2} className='topic-social'>
                            <Box >

                                <ShareIcon className='topic-social-icon' fontSize="small" />
                                <FacebookIcon className='topic-social-icon' fontSize="small" />
                                <InstagramIcon className='topic-social-icon' fontSize="small" />
                            </Box>

                        </Box>
                        <Box mb={3} className='topic-descrip'>
                            {topic.descrip}
                        </Box>
                        <Box className='topic-action'>
                            <Link className={classes.link} to='/list-topic/132/detail'>
                                <Box className='btn-action action_detail'  > chi tiet </Box>
                            </Link>

                            <Link className={classes.link} to={`/exercise/${topic._id}/${topic.slug}`}>
                                <Box className='btn-action action_do' > lam bai</Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </div>
    );
}

export default TopicItem;