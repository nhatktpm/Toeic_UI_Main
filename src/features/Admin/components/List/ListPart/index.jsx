import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { getListPart } from 'features/Admin/Slice/PartSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
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
    history.push(`/admin/${slug}/${idPart}`)
  }

  useEffect(() => {
    handleClick()
  }, []);
  let i = 0;
  return (
    <div>
      <Box>
        <Container>
          <Grid container>
            <Grid item lg={12} >
              asdadasd
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

                  {partState.map((part) => (

                    <tr key={part._id}>
                      <td>{i++}</td>
                      <td>{part.name}</td>
                      <td> {part.img}</td>
                      <td>{part.slug}</td>
                      <td>
                        <Button onClick={() => handleEditPart(part._id)}>Edit</Button>
                        <Button onClick={() => handleGetListTopic(part._id, part.slug)}>List Topic</Button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </Grid>
          </Grid>
        </Container>

      </Box>
    </div>
  );
}

export default Part;