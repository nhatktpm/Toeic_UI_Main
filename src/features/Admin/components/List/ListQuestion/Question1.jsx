import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { deleteQuestion1, getListQuestion } from 'features/Admin/Slice/QuestionSlice';
import { getListTopic } from 'features/Admin/Slice/TopicSlice';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSnackbar } from 'notistack';

function Question1(props) {

  const {
    params: { idTopic },
    url,
  } = useRouteMatch();

  const history = useHistory();
  const dispath = useDispatch()
  const { enqueueSnackbar } = useSnackbar()


  const handleEditQuestion = (idTopic) => {
    history.push(`/admin/question-1/${idTopic}/edit`);
  }

  const handleDeleteQuestion = async (idQues) => {
    const action = deleteQuestion1(idQues)
    const resultAction = await dispath(action)

    let slipType = resultAction.type.split('/')
          if (slipType[2] === 'fulfilled') {
            enqueueSnackbar('Edit Part Successfully', { variant: 'success' })
          } else {
            enqueueSnackbar('Edit Part Not Successfully', { variant: 'error' })
          }

  }

  const handleAddQuestion = (idTopic) => {
    history.push(`/admin/question-1/${idTopic}/add`);
  }



  useEffect(() => {
    (async () => {
      const action = getListQuestion(idTopic)
      const resultAction = await dispath(action)
    })()
  }, []);

  let i = 0;

  const questionState = useSelector(state => state.question.listQuestion);

  return (

    <Box className='content-list'>
      <Grid container>
        <Grid item lg={12}>
          <Box className='ad-table'>

            <Box className='table-title'>
              <Box className='content-title'>
                <AcUnitIcon className='table-icon' />
                <Typography variant='h5' className='part-text'> Manage Question</Typography>
              </Box>
            </Box>
            <Box className='button-add'>
              <Button
                variant="contained"
                color="secondary"
                // className={classes.button}
                startIcon={<AddCircleIcon />}
                onClick={() => handleAddQuestion(idTopic)}
              >
                Add Question
          </Button>
            </Box>
            <Box className='table-body'>
              <table class="content-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>IMG</th>
                    <th>Name</th>
                    <th>Answer</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {questionState.map((question) => (

                    <tr key={question._id}>
                      <td>{i++}</td>
                      <td> <Box > <img className="img-in-table" src={`${question.img}`} alt='IMG Question' /> </Box>  </td>
                      <td>{question.cauhoi} </td>
                      <td>{question.dapandung}</td>
                      <td>
                        <Button onClick={() => handleEditQuestion(question._id)}>Edit</Button>
                        <Button onClick={() => handleDeleteQuestion(question._id)}>Delete</Button>

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

export default Question1;