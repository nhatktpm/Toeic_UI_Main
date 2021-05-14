import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listTopicAPI from 'api/listTopicAPI';

export const getListTopic = createAsyncThunk('admin/getListTopic', async (id) => {
    const data = await listTopicAPI.getAll(id)
    return data.data.topics;
});

export const getOneTopic = createAsyncThunk('admin/getOneTopic', async (id) => {
    const data = await listTopicAPI.get(id)
    return data.data.topic;
});

export const addTopic1 = createAsyncThunk('admin/addTopic1', async (newTopic) => {
    const data = await listTopicAPI.add(newTopic)
    console.log(data.data.topic);
    return data.data.topic;

});

export const editTopic1 = createAsyncThunk('admin/editTopic1', async (params) => {
    const data = await listTopicAPI.update(params._id, params)
    console.log(params);
    return params
});

export const deleteTopic1 = createAsyncThunk('admin/deleteTopic1', async (id) => {
    const data = await listTopicAPI.add(id)
    return data.data.topic;
});

export const deleteSoftTopic1 = createAsyncThunk('admin/deleteSoftTopic1', async (id) => {
    const data = await listTopicAPI.deleteSoft(id)
    return id
});



const TopicSlice = createSlice({
    name: 'topic',
    initialState: {
        listTopic: []
    },
    extraReducers: {
        [getListTopic.fulfilled]: (state, action) => {
            // state.listPart.push(action.payload);
            state.listTopic = action.payload

        },
        [addTopic1.fulfilled]: (state, action) => {
            state.listTopic.push(action.payload)
        },

        [editTopic1.fulfilled]: (state, action) => {
            const newTopic = action.payload;
           
            const partIndex = state.listTopic.findIndex(topic => topic._id === newTopic.id);

            if (partIndex >= 0) {
                state.listPart[partIndex] = newTopic;
            }
        },

        [deleteSoftTopic1.fulfilled]: (state, action) => {

            let id = action.payload

            state.listTopic = state.listTopic.filter(topic => topic._id !== id)

        },
    },
});

const { actions, reducer } = TopicSlice;

export default reducer;