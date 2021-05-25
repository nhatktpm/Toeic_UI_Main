import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listPartApi from 'api/listPartApi';
import StorageKeys from 'constants/storage-keys';

export const getListPart = createAsyncThunk('admin/getListPart', async () => {
    const data = await listPartApi.getAll();
    return data.data.parts;
});

const ExerciseSlice = createSlice({
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
            
        }
    },
});

const { actions, reducer } = ExerciseSlice;

export default reducer;