import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type definition
export type Education = {
  _id?: string;
  institute?: string;
  degree?: string;
  gpa?: string;
  startYear?: string;
  endYear?: string;
  image?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// POST education
export const postEducation = createAsyncThunk(
  "education/postEducation",
  async (
    { email, data }: { email: string; data: Education },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/users/${email}/education`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post education");
      }

      const result = await response.json();
      return result as Education;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

// PUT education (update)
export const updateEducation = createAsyncThunk(
  "education/updateEducation",
  async (
    { email, data }: { email: string; data: Education },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/users/${email}/education/${data._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update education");
      }

      const result = await response.json();
      return result as Education;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

// Initial state
type EducationState = {
  educations: Education[];
  loading: boolean;
  error: string | null;
};

const initialState: EducationState = {
  educations: [],
  loading: false,
  error: null,
};

// Slice
const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // POST cases
      .addCase(postEducation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        postEducation.fulfilled,
        (state, action: PayloadAction<Education>) => {
          state.educations.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(postEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // PUT cases
      .addCase(updateEducation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateEducation.fulfilled,
        (state, action: PayloadAction<Education>) => {
          state.loading = false;
          const index = state.educations.findIndex(
            (edu) => edu._id === action.payload._id
          );
          if (index !== -1) {
            state.educations[index] = action.payload;
          }
        }
      )
      .addCase(updateEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default educationSlice.reducer;
