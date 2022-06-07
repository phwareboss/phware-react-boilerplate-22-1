
import { useNavigate } from 'react-router-dom';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

// initial state of Auth
const initialState = {
    isLoggedIn: (user ? true : false),
    user: (user ? user : null),
    username: '',
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
};


export const register = createAsyncThunk(
    "auth/register",
    async ({ username, email, password }, thunkAPI) => {

        try {
            const response = await AuthService.register({ username, email, password });

            //return response.data;

            console.log('response', response);

            let data = JSON.stringify(response.data);

            if (response.status === 200) {

                let token = data.token ? data.token : (data.jwt ? data.jwt : (data.accessToken ? data.accessToken : null));

                if (token === undefined || !token || token === '') {
                    throw new Error('no token found');
                }

                // store token and data in local storage
                localStorage.setItem("token", JSON.stringify(response.data));

                return data;

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
// export const signInAndFetchUser = (credentials: SignInOpts) => {
//     return async (dispatch, getState) => {
//        // dispatch(action.startLoading);

//         try {
//             const res = await signIn(credentials);
//             dispatch(action.signedInSuccess(res.token));

//             try {
//                 const user = await getMe(res.token);
//                 dispatch(action.getMeSucceded(user));
//             } catch (err) {
//                 dispatch(action.getMeFailed(err));
//             }
//         } catch {
//             dispatch(action.signInFailed(err));
//         }
//     };
// };
export const login = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {
        return { 'test': 1 };
    }
);
export const login_BAK = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {

        try {
            const response = await AuthService.loginTest({ username, password });

            //return response.data;

            console.log('response', response);

            // let data = JSON.stringify(response.data);

            // if (response.status === 200) {

            //     let token = data.token ? data.token : (data.jwt ? data.jwt : (data.accessToken ? data.accessToken : null));

            //     if (token === undefined || !token || token === '') {
            //         throw new Error('no token found');
            //     }

            //     // store token and data in local storage
            //     localStorage.setItem("token", JSON.stringify(response.data));

            //     return data;

            // } else {
            //     return thunkAPI.rejectWithValue(data);
            // }
        } catch (e) {
            console.error(e);
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }

    }
);

export const fetchUserByToken = createAsyncThunk(
    "auth/fetchUserByToken",
    async ({ token }, thunkAPI) => {
        try {
            const response = await AuthService.fetchUserByToken({ token });

            //return response.data;

            console.log('response', response);

            let data = response.data.json();

            if (response.status === 200) {
                return data;
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

export const logout = createAsyncThunk(
    "auth/logout",
    async (thunkAPI) => {
        try {
            const response = await AuthService.logout();
            console.log('response', response);

            let data = JSON.stringify(response.data);

            if (response.status === 200) {
                useNavigate('/'); /// navigate back to front page
            } else {
                return thunkAPI.rejectWithValue({ err: 'Could not log out', data });
            }
        } catch (e) {
            console.error(e);
            console.log('Error', e?.response?.data);
            thunkAPI.rejectWithValue(e?.response?.data);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isLoggedIn = false;
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: {
        /****************************************************** */
        /*  register                                    */
        /****************************************************** */
        [register.pending]: (state) => {
            state.isFetching = true;
        },
        [register.fulfilled]: (state, { payload }) => {
            clearState()
            state.isSuccess = true;
        },
        [register.rejected]: (state) => {
            state.isFetching = false;
            state.isError = true;
        },
        /****************************************************** */
        /*  login                                    */
        /****************************************************** */
        [login.pending]: (state) => {
            state.isFetching = true;
        },
        [login.fulfilled]: (state, action) => {
            // state.push(action.payload);
            state.email = action.payload.email;
            state.username = action.payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            return state;
        },
        [login.rejected]: (state, action) => {
            //console.log('payload', action.payload);
            state.isLoggedIn = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload.message;
        },

        /****************************************************** */
        /*  fetchUserByToken                                    */
        /****************************************************** */
        [fetchUserByToken.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUserByToken.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.isLoggedIn = true;

            state.email = payload.email;
            state.username = payload.name;
        },
        [fetchUserByToken.rejected]: (state) => {
            console.log('fetchUserBytoken');
            state.isFetching = false;
            state.isError = true;
            state.isLoggedIn = false;
        },

        /****************************************************** */
        /*  logout                                              */
        /****************************************************** */
        [logout.pending]: (state) => {
            state.isFetching = true;
        },
        [logout.fulfilled]: (state, { payload }) => {
            clearState()
            state.isSuccess = true;
        },
        [logout.rejected]: (state) => {
            state.isFetching = false;
            state.isError = true;
        },
    },
});
export default authSlice;


export const { clearState } = authSlice.actions;