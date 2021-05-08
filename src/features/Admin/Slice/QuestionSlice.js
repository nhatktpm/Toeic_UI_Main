import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listTopicAPI from 'api/listTopicAPI';

export const getListTopic = createAsyncThunk('admin/getListTopic', async (id) => {
    const data = await listTopicAPI.get(id)
    return data.data.topics;
    
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