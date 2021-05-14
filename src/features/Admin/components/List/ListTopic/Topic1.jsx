import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { deleteSoftTopic1, getListTopic } from 'features/Admin/Slice/TopicSlice';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';


function Topic1(props) {

  const {
    params: { idPart },
    url,
  } = useRouteMatch();


  const history = useHistory();
  const dispath = useDispatch()
  const topicState = useSelector(state => state.topic.listTopic)

  const handleClick = async () => {
    const action = getListTopic(idPart)
    const resultAction = await dispath(action)

  }

  const handleEditTopic = (idPart) => {
    history.push(`/admin/topic-1/${idPart}/edit`);
  }

  const handlDeleteTopic = async (idTopic) => {
    const action = deleteSoftTopic1(idTopic)
    const resultAction = await dispath(action)

  }

  const handleAddTopic = (idPart) => {
    history.push(`/admin/topic-1/${idPart}/add`);
  }

  const handleGetListQuestion = (idTopic) => {
    history.push(`/admin/question-1/${idTopic}`)
  }

  useEffect(() => { 
    handleClick()
  }, []);
  let i = 0;
  return (
    <div>
      <Box>
        <Grid container>
          <Grid item lg={12} >
            list topic
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

                {topicState.map((topic) => (

                  <tr key={topic._id}>
                    <td>{i++}</td>
                    <td>{topic.nameTopic}</td>
                    <td> {topic.img}</td>
                    <td>{topic.descripTopic}</td>
                    <td>
                      <Button onClick={() => handleEditTopic(topic._id)}>Edit</Button>
                      <Button onClick={() => handlDeleteTopic(topic._id)}>Delete</Button>
                      <Button onClick={() => handleGetListQuestion(topic._id)}>List Question</Button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </Grid>
          
          <Grid item lg={12} >
          <Button onClick={() => handleAddTopic(idPart)}>Add Topic</Button>
            </Grid>
        </Grid>


      </Box>
    </div>
  );
}

export default Topic1;