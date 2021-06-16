import React from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Box, Grid, makeStyles } from '@material-ui/core';
import './index.css'
import { useSelector } from 'react-redux';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

TopicItem.propTypes = {
    topic: TopicItem.object,
};

function TopicItem(props) {

    const loginUser = useSelector(state => state.user.current)

    const islogin = !!loginUser.email


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
                    <img src={`${topic.img}`} alt='' />
                </Box>
                <Box width='100%'>
                    <Grid container>
                        <Grid item lg={8} >
                            <Box className='contai-topic-info'>
                                {/* <Box mb={2} ml={3} className='topic-date'> ngay 1 thang 1</Box> */}
                                <Box mb={1} className='topic-name'>{topic.nameTopic}</Box>
                                <Box mb={1} className='topic-social'>
                                    <Box >
                                        <ShareIcon className='topic-social-icon' fontSize="small" />
                                        <FacebookIcon className='topic-social-icon' fontSize="small" />
                                        <InstagramIcon className='topic-social-icon' fontSize="small" />
                                    </Box>

                                </Box>
                                <Box lg={3} mb={1} className='topic-descrip'>
                                    {topic.descrip}
                                </Box>
                                <Box className='topic-action'>
                                    <Link className={classes.link} to='/list-topic/132/detail'>
                                        <Box className='btn-action action_detail'  > Chi Tiết </Box>
                                    </Link>

                                    <Link className={classes.link} to={`/exercise/${topic._id}/${topic.slug}`}>
                                        <Box className='btn-action action_do' > Làm Bài</Box>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Box className='user-topic'>
                                <Box className='user-topic2'>
                                    {!islogin ?
                                        <Box className='do-topic'>
                                            <Box className='f-bet' >
                                                <Box className='f-cen'>
                                                    <AccessAlarmIcon /> <Box ml={1}> Điểm </Box>
                                                </Box>
                                                <Box> 12/15</Box>
                                            </Box>
                                            <Box className='f-bet' >
                                                <Box className='f-cen'>
                                                    <AccessAlarmIcon /> <Box ml={1}> Thời gian </Box>
                                                </Box>
                                                <Box> 12 phut</Box>
                                            </Box>

                                            <Box className='' >
                                                <Box> thoi gian la vo tan</Box>
                                            </Box>

                                        </Box>
                                        :
                                        <Box className='not-do'>
                                            <Box>
                                                Bạn chưa làm bài này
                                            </Box>
                                        </Box>
                                    }
                                </Box>


                            </Box>
                        </Grid>
                    </Grid>


                </Box>

            </Box>

        </div>
    );
}

export default TopicItem;