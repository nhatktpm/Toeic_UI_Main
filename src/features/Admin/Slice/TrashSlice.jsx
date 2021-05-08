import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listTrashApi from 'api/listTopicAPI';


export const getListTrash = createAsyncThunk('trash/getListTrash', async () => {
    const data = await listTrashApi.getStrash();

    return data.data.topicTrash
});

export const restoreTopic = createAsyncThunk('trash/restoreTopic', async (id) => {
    const data = await listTrashApi.restore(id)
    return { rs: data.data, idTopic: id }
});

export const deleteTopic = createAsyncThunk('trash/deleteTopic', async (id) => {
    const data = await listTrashApi.remove(id)
    return { rs: data.data, idTopic: id }
});


const TrashSlice = createSlice({
    name: 'trash',
    initialState: {
        settings: {},
        listTrash: []
    },
    reducers: {

    },
    extraReducers: {
        [getListTrash.fulfilled]: (state, action) => {
            // state.listPart.push(action.payload);
            state.listTrash = action.payload
        },

        [restoreTopic.fulfilled]: (state, action) => {
            let kq = action.payload.rs.n;
            if (kq == 1) {
                let id = action.payload.idTopic;
                state.listTrash = state.listTrash.filter(photo => photo._id !== id)
            }
        },
        [deleteTopic.fulfilled]: (state, action) => {
            let kq = action.payload.rs.n;
            if (kq == 1) {
                let id = action.payload.idTopic;
                state.listTrash = state.listTrash.filter(photo => photo._id !== id)
            }
        }

    },
});

const { actions, reducer } = TrashSlice;
export const { logout } = actions;
export default reducer;