import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import QuestionApi from 'api/listQuestionApi';
import listTopicAPI from 'api/listTopicAPI';
import markAPI from 'api/markApi';

export const getListExer = createAsyncThunk('admin/getListExer', async (id) => {
    const data = await QuestionApi.getAll(id)
    console.log(data.data.questions);
    return data.data.questions;
});

export const getTopicExer = createAsyncThunk('admin/getTopicExer', async (id) => {
    const data = await listTopicAPI.get(id)

    return data.data.topic;
});

export const getAnswer = createAsyncThunk('admin/getAnswer', async (rs) => {

    const data = await markAPI.add(rs.idTopic, rs.dataAPI)

    return rs.answer
});


const ExerciseSlice = createSlice({
    name: 'admin',
    initialState: {
        listExer: [],
        topic: {},
        isMark: false
    },

    extraReducers: {
        [getListExer.fulfilled]: (state, action) => {
            state.listExer = action.payload
        },
        [getTopicExer.fulfilled]: (state, action) => {
            state.topic = action.payload
        },
        [getAnswer.fulfilled]: (state, action) => {
         
            state.listExer = action.payload
        }
    },

});

const { actions, reducer } = ExerciseSlice;
export const { showAnswer } = actions;
export default reducer;