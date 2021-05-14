import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { deleteQuestion1, getListQuestion } from 'features/Admin/Slice/QuestionSlice';
import { getListTopic } from 'features/Admin/Slice/TopicSlice';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';


function Question1(props) {

  const {
    params: { idTopic },
    url,
  } = useRouteMatch(); 

  const history = useHistory();
  const dispath = useDispatch()

 

  const handleEditQuestion = (idTopic) => {
    history.push(`/admin/question-1/${idTopic}/edit`);
  }

  const handleDeleteQuestion = async (idQues) => {
    const action = deleteQuestion1(idQues)
    const resultAction = await dispath(action)

  }

  const handleAddQuestion = (idTopic) => {
    history.push(`/admin/question-1/${idTopic}/add`);  }

 

    useEffect(() => {
        (async () => {
          const action = getListQuestion(idTopic)
          const resultAction = await dispath(action)
        })()
      }, []);

  let i = 0;

  const questionState = useSelector(state => state.question.listQuestion); 

  return (
    <div>
      <Box>
        <Grid container>
          <Grid item lg={12} >
            list question
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

                {questionState.map((question) => (

                  <tr key={question._id}>
                    <td>{i++}</td>
                    <td>{question.nameTopic}</td>
                    <td> {question.img}</td>
                    <td>{question.descripTopic}</td>
                    <td>
                      <Button onClick={() => handleEditQuestion(question._id)}>Edit</Button>
                      <Button onClick={() => handleDeleteQuestion(question._id)}>Delete</Button>
                      
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </Grid>
          
          <Grid item lg={12} >
          <Button onClick={() => handleAddQuestion(idTopic)}>Add Topic</Button>
            </Grid>
        </Grid>


      </Box>
    </div>
  );
}

export default Question1;