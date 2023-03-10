import uuid from "react-native-uuid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Thunk : createAsyncThuck, fulfillWithValue, rejectWithValue
export const __getReadMe = createAsyncThunk(
  "getReadMe",
  async (payload, thunkAPI) => {
    try {
      const response_data = await axios.get(
        "https://lying-magical-math.glitch.me/data"
      );
      // console.log(response_data);
      // console.log(response_data.data);
      return thunkAPI.fulfillWithValue(response_data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __addReadMe = createAsyncThunk(
  "addReadMe",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      await axios.post("https://lying-magical-math.glitch.me/data", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __updateReadMe = createAsyncThunk(
  "updateReadMe",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload.id);
      await axios.put(
        `https://lying-magical-math.glitch.me/data/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __deleteReadMe = createAsyncThunk(
  "deleteReadMe",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      await axios.delete(
        `https://lying-magical-math.glitch.me/data/${payload}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// action creator, reducer : createSlice -> extraReducers
const readMeSlice = createSlice({
  name: "readMe",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // __getReadMe
    builder.addCase(__getReadMe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__getReadMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(__getReadMe.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // __addReadMe
    builder.addCase(__addReadMe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__addReadMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, action.payload];
    });
    builder.addCase(__addReadMe.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // __updateReadMe
    builder.addCase(__updateReadMe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__updateReadMe.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action.payload)
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    });
    builder.addCase(__updateReadMe.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // __deleteReadMe
    builder.addCase(__deleteReadMe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__deleteReadMe.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action.payload)
      state.data = state.data.filter((item) => item.id !== action.payload);
    });
    builder.addCase(__deleteReadMe.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { getReadMe, addReadMe, updateReadMe, deleteReadMe } =
  readMeSlice.actions;
export default readMeSlice.reducer;
