import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listTopicAPI from 'api/listTopicAPI';

export const getListTopic = createAsyncThunk('admin/getListTopic', async (id) => {
    const data = await listTopicAPI.getAll(id)
    console.log(data)
    return data.data.topics;    
});

export const getOneTopic = createAsyncThunk('admin/getOneTopic', async (id) => {
    const data = await listTopicAPI.get(id)
    return data.data.topic;    
});

export const addTopic1 = createAsyncThunk('admin/addTopic1', async (topic) => {
    const data = await listTopicAPI.add(topic)
    return data.data.topic;    
});

export const editTopic1 = createAsyncThunk('admin/editTopic1', async (id,topic) => {
    const data = await listTopicAPI.add(id,topic)
    return data.data.topic;    
});
export const deleteTopic1 = createAsyncThunk('admin/deleteTopic1', async (id) => {
    const data = await listTopicAPI.add(id)
    return data.data.topic;    
});

export const deleteSoftTopic1 = createAsyncThunk('admin/deleteSoftTopic1', async (id) => {
    const data = await listTopicAPI.add(id)
    return data.data.topic;    
});



const TopicSlice = createSlice({
    name: 'topic',
    initialState: {       
        listTopic : []
    },   
    extraReducers: {
        [getListTopic.fulfilled]: (state, action) => {
            // state.listPart.push(action.payload);
            state.listTopic = action.payload
            
        },        
    },
});

const { actions, reducer } = TopicSlice;

export default reducer;