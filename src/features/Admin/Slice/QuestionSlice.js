import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import QuestionApi from 'api/listQuestionApi';

export const getListQuestion = createAsyncThunk('admin/getListQuestion', async (id) => {
    const data = await QuestionApi.getAll(id)
    console.log(data.data);
    return data.data.questions;

});

export const getOneTopic = createAsyncThunk('admin/getOneTopic', async (id) => {
    const data = await QuestionApi.get(id)
    return data.data.question;
});

export const addQuestion1 = createAsyncThunk('admin/addQuestion1', async (rs) => {
    const data = await QuestionApi.add(rs.id,rs.ques)
    console.log(data.data);
    return data.data.question;

});

export const editQuestion1 = createAsyncThunk('admin/editQuestion1', async (params) => {
    const data = await QuestionApi.update(params._id, params)
    console.log(params);
    return params
});

export const deleteQuestion1 = createAsyncThunk('admin/deleteQuestion1', async (id) => {
    const data = await QuestionApi.remove(id)
    console.log(data);
    return id;
});

const TopicSlice = createSlice({
    name: 'question',
    initialState: {
        listQuestion: []
    },
    extraReducers: {
        [getListQuestion.fulfilled]: (state, action) => {
            // state.listPart.push(action.payload);
            state.listQuestion = action.payload

        },        

        [addQuestion1.fulfilled]: (state, action) => {
            state.listQuestion.push(action.payload)
        },

        [editQuestion1.fulfilled]: (state, action) => {
            const newTopic = action.payload;

            const quesIndex = state.listQuestion.findIndex(topic => topic._id === newTopic.id);

            if (quesIndex >= 0) {
                state.listQuestion[quesIndex] = newTopic;
            }
        },

        [deleteQuestion1.fulfilled]: (state, action) => {

            let id = action.payload
            console.log(id);
            state.listQuestion = state.listQuestion.filter(topic => topic._id !== id)

        },
    },
});

const { actions, reducer } = TopicSlice;

export default reducer;