import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  about: string;
  loading: boolean;
}

const initialState: UserState = {
  about: "",
  loading: false,
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const updateUserAbout = createAsyncThunk(
  "user/updateAbout",
  async (
    {
      email,
      data,
    }: {
      email: string;
      data: Omit<UserState, "loading">;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/users/${email}/about`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.message || "Failed to update profile");
      }

      const result = await res.json();
      return result.data.about; // ✅ this is a string
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const aboutSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserAbout.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        updateUserAbout.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.about = action.payload;
          state.loading = false;
        }
      )
      .addCase(updateUserAbout.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default aboutSlice.reducer;
