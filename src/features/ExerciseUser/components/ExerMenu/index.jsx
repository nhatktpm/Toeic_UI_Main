import { Box, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './index.css'

ExerMenu.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',    

    },
    colorLink : {
        color : '#221638'
    }

}));

function ExerMenu(props) {
    const classes = useStyles();
    const { url } = useRouteMatch();

    return (
        <Box component="ul" className='menu-exer'>
            <li className='menu-exer-item'>
                <Link className={classes.colorLink} component={NavLink} to={url} exact>
                    All Comment
                </Link>
            </li>

            <li className='menu-exer-item'>
                <Link className={classes.colorLink} component={NavLink} to={`${url}/note`} exact>
                    Note
        </Link>
            </li>

            <li className='menu-exer-item'>
                <Link className={classes.colorLink} component={NavLink} to={`${url}/solution`} exact>
                    Answer
        </Link>
            </li>
        </Box>
    );
}

export default ExerMenu;