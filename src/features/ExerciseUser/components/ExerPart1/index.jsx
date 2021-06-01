import { Box, Container } from '@material-ui/core';
import { getAnswer } from 'features/ExerciseUser/ExerciseSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import ExerPart1Form from '../FormExercise/FormExerPart1';
import Swal from 'sweetalert2';

function ExerPart1(props) {

    const { listQuestion } = props

    const match = useRouteMatch()

    const {
        params: { idTopic, slug },
        url,
    } = useRouteMatch();



    const dispatch = useDispatch()

    const listExerState = useSelector(state => state.exer.listExer);
    // var newExer = [...listExerState]
    console.log(listExerState);

    var isLoggin = true;

    const handleSubmit = async (values) => {

        let mark = 0;       

        let listAnswer = listExerState.map((answer) => {
            let newAnswer = { ...answer }
            if (answer.dapandung == values[answer._id]) {
                newAnswer.kq = true;
                mark++
            }
            else {
                newAnswer.kq = false;
            };
            return newAnswer
        })
        let data = {
            dataAPI: {
                point: mark,
                idUser: '5555'
            },
            answer: listAnswer,
            idTopic: idTopic
        }
        const action = getAnswer(data)
        const resultAction = await dispatch(action)

        if (!isLoggin) {
            
            Swal.fire({
                title: 'Bạn Chưa Đăng Nhập',
                text: "Đăng nhập để nhận kết quả",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Loggin'
            }).then((result) => {
                if (result.isConfirmed) {
                    // show form dang ky
                }
            })
        }
        
        if(isLoggin){
            Swal.fire({

                title: `Bạn đạt được: ${mark} Điểm ` ,
                text: "Nhấn OK Để Xem Đáp Án Của Bài Thi",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  
                }
              })
        }

        
    };



    return (
        <Box>
            <Box>
                <Container></Container>
            </Box>

            <Container >
                <ExerPart1Form onSubmit={handleSubmit} />
            </Container>
        </Box>
    );
}

export default ExerPart1;