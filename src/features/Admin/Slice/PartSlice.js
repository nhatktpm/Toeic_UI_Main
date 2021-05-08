import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listPartApi from 'api/listPartApi';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

export const getListPart = createAsyncThunk('admin/getListPart', async () => {
    const data = await listPartApi.getAll();
    return data.data.parts;
});
export const editPart = createAsyncThunk('admin/editPart', async (id, part) => {
    const data = await listPartApi.update(id, part)    
    return part;
});



const PartSlice = createSlice({
    name: 'admin',
    initialState: {

        settings: {},
        listPart: []
    },
    reducers: {
        logout(state) {
            // clear local storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);

            state.current = {};
        },
    },
    extraReducers: {
        [getListPart.fulfilled]: (state, action) => {
            // state.listPart.push(action.payload);
            state.listPart = action.payload
        },
        [editPart.fulfilled]: (state, action) => {
            // const newPart = action.payload;
            // const partIndex = state.listPart.findIndex(part => part.id === newPart._id);

            // if (partIndex >= 0) {
            //     state.listPart[partIndex] = newPart;
            // }
            console.log("helo");
        },
        [editPart.rejected]: (state, action) => {
            console.log('helo');
        },
    },
});

const { actions, reducer } = PartSlice;

export default reducer;