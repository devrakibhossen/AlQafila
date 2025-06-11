import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Experience = {
  id: string;
  title: string;
  company: string;
  duration: string;
  startYear: string;
  endYear: string;
  image: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// POST experience
export const postExperience = createAsyncThunk(
  "experience/postExperience",
  async (
    { email, data }: { email: string; data: Experience },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/users/${email}/experience`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw new Error("Failed to post experience");
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// PUT experience (update)
export const updateExperience = createAsyncThunk(
  "experience/updateExperience",
  async (
    { email, data }: { email: string; data: Experience },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/users/${email}/experience/${data.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw new Error("Failed to update experience");
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Redux state
type ExperienceState = {
  experiences: Experience[];
  loading: boolean;
  error: string | null;
};

const initialState: ExperienceState = {
  experiences: [],
  loading: false,
  error: null,
};

// Slice
const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // POST
      .addCase(postExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        postExperience.fulfilled,
        (state, action: PayloadAction<Experience>) => {
          state.experiences.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(postExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // UPDATE
      .addCase(updateExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateExperience.fulfilled,
        (state, action: PayloadAction<Experience>) => {
          state.loading = false;
          const index = state.experiences.findIndex(
            (exp) => exp.id === action.payload.id
          );
          if (index !== -1) {
            state.experiences[index] = action.payload;
          }
        }
      )
      .addCase(updateExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default experienceSlice.reducer;
