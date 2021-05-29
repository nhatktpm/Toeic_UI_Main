import { Box, Container } from '@material-ui/core';
import { getAnswer } from 'features/ExerciseUser/ExerciseSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import ExerPart1Form from '../FormExercise/FormExerPart1';

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