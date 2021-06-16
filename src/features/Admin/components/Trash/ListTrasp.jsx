import { Box, Button, Grid, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { deleteTopic, getListTrash, restoreTopic } from 'features/Admin/Slice/TrashSlice';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import Swal from 'sweetalert2';



function ListTrash(props) {


  const { enqueueSnackbar } = useSnackbar()

  const {
    params: { idPart },
    url,
  } = useRouteMatch();

  const history = useHistory();
  const dispath = useDispatch()
  const trashState = useSelector(state => state.trash.listTrash)

  const handleRestoreTopic = async (idTrash) => {
    const action = restoreTopic(idTrash)
    const resultAction = await dispath(action)

    let slipType = resultAction.type.split('/')

    if (slipType[2] == 'fulfilled') {

      enqueueSnackbar('Restore Successfully', { variant: 'success' })
    } else {
      enqueueSnackbar('Restore Not Successfully', { variant: 'error' })
    }
  }

  const handlDeleteTopic = async (idTrash) => {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1976d2',
      cancelButtonColor: '#dc004e',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {

          const action = deleteTopic(idTrash)
          const resultAction = await dispath(action)

          let slipType = resultAction.type.split('/')
          if (slipType[2] == 'fulfilled') {
            enqueueSnackbar('Delete Successfully', { variant: 'success' })
          } else {
            enqueueSnackbar('Delete Not Successfully', { variant: 'error' })
          }
        })(); 
      }
    })
  }

  useEffect(() => {
    (async () => {
      const action = getListTrash()
      const resultAction = await dispath(action)
    })()
  }, []);
  let i = 0;
  return (
    <Box className='content-list'>
      <Grid container>
        <Grid item lg={12}>
          <Box className='ad-table'>

            <Box className='table-title'>
              <Box className='content-title'>
                <AcUnitIcon className='table-icon' />
                <Typography variant='h5' className='part-text'> This Is My Gu</Typography>
              </Box>
            </Box>

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

                  {trashState.map((topic) => (

                    <tr key={topic._id}>
                      <td>{i++}</td>
                      <td><Box > <img className="img-in-table" src={`${topic.img}`} alt='IMG Topic' />  </Box></td>
                      <td> {topic.nameTopic}</td>
                      <td>  <Box className="text-n-row">{topic.descripTopic}</Box></td>
                      <td>
                        <Button onClick={() => handleRestoreTopic(topic._id)}>Restore</Button>
                        <Button onClick={() => handlDeleteTopic(topic._id)}>Delete</Button>

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

export default ListTrash;