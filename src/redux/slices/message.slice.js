import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MessageService from "../../services/message.service";

// initial state of Message
const initialState = {
    message: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
};

export const send_message = createAsyncThunk(
    "message/send",
    async ({ message }, thunkAPI) => {
        try {
            const response = await MessageService.send_message({ message });
            console.log('response', response);
            let data = JSON.stringify(response.data);
            if (response.success) {
                return null;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.error(e);
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
export const clear_message = createAsyncThunk(
    "message/clear",
    async (thunkAPI) => {
        try {
            const response = await MessageService.clear_message();
            console.log('response', response);
            let data = JSON.stringify(response.data);
            if (response.success) {
                return null;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.error(e);
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        clearState: (state) => {
            state.message = null;
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: {
        /****************************************************** */
        /*  send_message                                    */
        /****************************************************** */
        [send_message.pending]: (state) => {
            state.isFetching = true;
        },
        [send_message.fulfilled]: (state, action) => {
            // state.push(action.payload);
            state.message = action.payload;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [send_message.rejected]: (state, action) => {
            console.log('payload', action.payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = 'Send message failed.';
        },
        
        /****************************************************** */
        /*  clear_message                                    */
        /****************************************************** */
        [clear_message.pending]: (state) => {
            state.isFetching = true;
        },
        [clear_message.fulfilled]: (state, action) => {
            // state.push(action.payload);
            state.message = null;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [clear_message.rejected]: (state, action) => {
            console.log('payload', action.payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = 'Clear message failed.';
        },
        
    },
});
export default messageSlice;

export const { clearState } = messageSlice.actions;