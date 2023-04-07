import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import placeService from "./placeServices"



const initialState = {
    place: [],
    ownerPlace:[],
    singalPlace:{},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };


  export const creactPlace = createAsyncThunk(
    "place/creactPlaces",
    async (userData, thunkAPI) => {
      try {
        return await placeService.creactPlace(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const updatePlace = createAsyncThunk(
    "place/updatePlace",
    async (userData, thunkAPI) => {
      try {
        return await placeService.updatePlace(userData.id,userData.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const creactRoom = createAsyncThunk(
    "room/creactRoom",
    async (userData, thunkAPI) => {
      try {
        return await placeService.creactRoom(userData.id,userData.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const updateRoom = createAsyncThunk(
    "room/updateRoom",
    async (userData, thunkAPI) => {
      try {
        return await placeService.updateRoom(userData.id,userData.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


  export const getOwnerPlace = createAsyncThunk(
    "place/getownerplace",
    async(userData,thunkAPI)=>{
      try { 
          return await placeService.getOwnerPlace()
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )

  export const getPlace = createAsyncThunk(
    "place/getplace",
    async(userData,thunkAPI)=>{
      try { 
          return await placeService.getPlace()
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )


  export const getSingalPlace = createAsyncThunk(
    "place/getSingalplace",
    async(id,thunkAPI)=>{
      try { 
          return await placeService.getSingalPlace(id)
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )

  export const deleteRoom = createAsyncThunk(
    "room/deleteRoom",
    async(id,thunkAPI)=>{
      try { 
          return await placeService.deleteRoom(id)
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )

  export const deleteHotel = createAsyncThunk(
    "place/deleteHotel",
    async(id,thunkAPI)=>{
      try { 
          return await placeService.deleteHotal(id)
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )
  

  export const placeSlice = createSlice({
    name:"place",
    initialState,
    reducers:{},
    extraReducers:(buildeer)=>{
        buildeer
        .addCase(creactPlace.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(creactPlace.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.creactplace = action.payload;
        })
        .addCase(creactPlace.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
        .addCase(updatePlace.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updatePlace.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.creactplace = action.payload;
        })
        .addCase(updatePlace.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
        .addCase(creactRoom.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(creactRoom.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.creactroom = action.payload;
        })
        .addCase(creactRoom.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })

        .addCase(updateRoom.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateRoom.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.creactroom = action.payload;
        })
        .addCase(updateRoom.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
        .addCase(getOwnerPlace.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getOwnerPlace.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.ownerPlace = action.payload;
          state.creactroom = null;
        })
        .addCase(getOwnerPlace.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
        .addCase(getPlace.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getPlace.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.place = action.payload;
        })
        .addCase(getPlace.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })

        .addCase(getSingalPlace.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getSingalPlace.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.singalPlace = action.payload;
        })
        .addCase(getSingalPlace.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
        .addCase(deleteRoom.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteRoom.fulfilled, (state, action) => {
          state.isLoading = false;
          state.deleted=state.payload
        })
        .addCase(deleteRoom.rejected, (state, action) => {
          state.isSuccess = false;
        })
        .addCase(deleteHotel.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteHotel.fulfilled, (state, action) => {
          state.isLoading = false;
        })
        .addCase(deleteHotel.rejected, (state, action) => {
          state.isSuccess = false;
        })
    }
})

export default placeSlice.reducer;