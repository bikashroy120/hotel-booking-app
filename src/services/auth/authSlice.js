import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";


const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  profileData:{},
  isError: false,
  isLoading: false,
  upLoading:false,
  isSuccess: false,
  message: "",
};

export const regester = createAsyncThunk(
  "auth/regester",
  async (userData, thunkAPI) => {
    try {
      return await authService.regester(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
      try {
        return await authService.login(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


  export const getProfileData = createAsyncThunk(
    "auth/getProfileData",
    async (userData, thunkAPI) => {
      try {
        return await authService.getProfile();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const updateProfileData = createAsyncThunk(
    "auth/updateProfileData",
    async (userData, thunkAPI) => {
      try {
        return await authService.updateProfile(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  


export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(buildeer)=>{
        buildeer
        .addCase(regester.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(regester.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
        })
        .addCase(regester.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
        .addCase(login.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
          state.loginData = action.payload;
          state.message = "success";
        })
        .addCase(login.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })

        .addCase(getProfileData.pending, (state) => {
          
        })
        .addCase(getProfileData.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.profileData = action.payload;
          state.message = "success";
        })
        .addCase(getProfileData.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
       .addCase(updateProfileData.pending, (state) => {
          state.upLoading=true
        })
        .addCase(updateProfileData.fulfilled, (state, action) => {
          state.isError = false;
          state.upLoading = false;
          state.isSuccess = true;
          state.profileData = action.payload;
          state.message = "success";
        })
        .addCase(updateProfileData.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.upLoading = false;
        })
    }
})

export default authSlice.reducer;