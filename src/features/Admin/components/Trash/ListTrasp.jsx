import { Box, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { restoreTopic } from 'features/Admin/Slice/TrashSlice';
import { deleteTopic } from 'features/Admin/Slice/TrashSlice';


import { getListTrash } from 'features/Admin/Slice/TrashSlice';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';


function ListTrash(props) {

  const {
    params: { idPart },
    url,
  } = useRouteMatch();

  const history = useHistory();
  const dispath = useDispatch()
  const trashState = useSelector(state => state.trash.listTrash)

  const handleRestoreTopic = async (idTrash) => {
    const action = restoreTopic(idTrash)
    const rsRestore = await dispath(action)
    
  }

  const handlDeleteTopic = async (idTrash) => {
    const action = deleteTopic(idTrash)
    const rsRestore = await dispath(action)
    
  }

  const handleAddTopic = (a) => {
    history.push(`/admin/parts/${a}/edit`);
  }

  useEffect(() => {
    (async () => {
      const action = getListTrash()
      const resultAction = await dispath(action)
    })()
  }, []);
  let i = 0;
  return (
    <div>
      <Box>
        <Grid container>
          <Grid item lg={12} >
            <Paper>List Trash</Paper>
          </Grid>
          <Grid item lg={12}>
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
                    <td>{topic.nameTopic}</td>
                    <td> {topic.img}</td>
                    <td>{topic.descripTopic}</td>
                    <td>
                      <Button onClick={() => handleRestoreTopic(topic._id)}>Restore</Button>
                      <Button onClick={() => handlDeleteTopic(topic._id)}>Delete</Button>

                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </Grid>

          <Grid item lg={12} >
            <Button onClick={() => handleAddTopic()}>Edit</Button>
          </Grid>
        </Grid>


      </Box>
    </div>
  );
}

export default ListTrash;