import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { getListPart } from 'features/Admin/Slice/PartSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddCircleIcon from '@material-ui/icons/AddCircle';




import './index.css'

function Part(props) {

  const history = useHistory();
  const dispath = useDispatch()
  const partState = useSelector(state => state.part.listPart)

  const handleClick = async () => {
    const action = getListPart()
    const resultAction = await dispath(action)

    // // console.log("part trong trang list part", part)  
  }

  const handleEditPart = (idPart) => {
    history.push(`/admin/parts/${idPart}/edit`);
  }
  const handleGetListTopic = (idPart, slug) => {
    history.push(`/admin/topic-1/${idPart}`)
  }

  useEffect(() => {
    handleClick()
  }, []);
  let i = 1;


  const useStyles = makeStyles((theme) => ({
    root: {
    },
    listPart: {
      padding: '30px 50px'
    },
    titlePart: {
      fontSize: '1.5rem',
      fontWeight: '400',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

    },
    heght: {

    }

  }));

  const classes = useStyles();

  return (
    <Box className='content-list'>
      <Grid container>
        <Grid item lg={12}>
          <Box className='ad-table'>

            <Box className='table-title'>
              <Box className='content-title'>
                <AcUnitIcon className='table-icon' />
                <Typography variant='h5' className='part-text'> Manage Part</Typography>
              </Box>
            </Box>
            {/* <Box className='button-add'>
              <Button
                variant="contained"
                color="secondary"
                // className={classes.button}
                startIcon={<AddCircleIcon />}
              >
                Add Part
              </Button>
            </Box> */}
            <Box className='table-body'>
              <table class="content-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>IMG</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {partState.map((part) => (

                    <tr key={part._id}>
                      <td>{i++}</td>
                      <td> <Box > <img className="img-in-table" src={`${part.img}`} alt='' />  </Box> </td>
                      <td> {part.name}</td>
                      <td width='350px'>
                      <Box className="text-n-row"> {part.descrip}</Box>
                      </td>
                      <td>
                        <Button onClick={() => handleEditPart(part._id)}>Edit</Button>
                        <Button onClick={() => handleGetListTopic(part._id)}>List Topic</Button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>

  );
}

export default Part;