import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { deleteSoftTopic1, getListTopic } from 'features/Admin/Slice/TopicSlice';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSnackbar } from 'notistack';

import Swal from 'sweetalert2'
import ReactPaginate from 'react-paginate';

import './index.css'

function Topic1(props) {



  const {
    params: { idPart },
    url,
  } = useRouteMatch();

  const { enqueueSnackbar } = useSnackbar()

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

          const action = deleteSoftTopic1(idTopic)
          const resultAction = await dispath(action)

          let slipType = resultAction.type.split('/')
          if (slipType[2] == 'fulfilled') {
            enqueueSnackbar('Edit Part Successfully', { variant: 'success' })
          } else {
            enqueueSnackbar('Edit Part Not Successfully', { variant: 'error' })
          }
        })();
      }
    })
  }

  const handleAddTopic = (idPart) => {
    history.push(`/admin/topic-1/${idPart}/add`);
  }

  const handleGetListQuestion = (idTopic) => {
    history.push(`/admin/question-1/${idTopic}`)
  }

  // Phan trang 

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  let i = 0;
  const displayUsers = topicState
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((topic) => {
      return (

        <tr key={topic._id}>
          <td>{i++}</td>
          <td><Box > <img className="img-in-table" src={`${topic.img}`} alt='IMG Topic' />  </Box></td>
          <td> {topic.img}</td>
          <td>{topic.descripTopic}</td>
          <td>
            <Button onClick={() => handleEditTopic(topic._id)}>Edit</Button>
            <Button onClick={() => handlDeleteTopic(topic._id)}>Delete</Button>
            <Button onClick={() => handleGetListQuestion(topic._id)}>List Question</Button>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(topicState.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    handleClick()
  }, []);

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
            <Box className='button-add'>
              <Button
                variant="contained"
                color="secondary"
                // className={classes.button}
                startIcon={<AddCircleIcon />}
                onClick={() => handleAddTopic(idPart)}
              >
                Add Topic
            </Button>
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
                  {displayUsers}
                  {/* {topicState.map((topic) => (

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
                  ))} */}

                </tbody>
              </table>
              <Box>
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Topic1;