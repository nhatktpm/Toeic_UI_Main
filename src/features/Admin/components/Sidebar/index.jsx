import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link, NavLink } from 'react-router-dom';
import '../Sidebar/sidebar.css'
import { Box, Typography } from '@material-ui/core';

// Icon
import AcUnitIcon from '@material-ui/icons/AcUnit';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  textCantai: {

  }
}));

export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box>
        <Box className='ad-logo-contai' >
          <Typography variant='h5' className='ad-textlogo'>
            INU EngLish
          </Typography>
        </Box>
      </Box>
      <Box>
        <nav>
          <ul>
            <li className='sb-item'> <Box>
              <Link className='link'><AcUnitIcon className='mr-icon' color="secondary" /> Manager User</Link>
            </Box></li>

            <li className='sb-item'> <Box>
              <Link to="/admin/list-part" className='link'><AcUnitIcon className='mr-icon' color="secondary" />  Manager Part</Link>
            </Box></li>

            <li className='sb-item'> <Box>
              <Link className='link'><AcUnitIcon className='mr-icon' color="secondary" />  Manager Topic</Link>
            </Box></li>

            <li className='sb-item'> <Box>
              <Link className='link'><AcUnitIcon className='mr-icon' color="secondary" />  Manager Contact</Link>
            </Box></li>

            <li className='sb-item'> <Box>
              <Link  to="/admin/trash" className='link'><AcUnitIcon className='mr-icon' color="secondary" />  Manager Trash</Link>
            </Box></li>

          </ul>
        </nav>
      </Box>

    </Box>

  );
}
