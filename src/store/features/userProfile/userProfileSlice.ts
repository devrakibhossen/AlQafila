/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  aboutInfo,
  addEducation,
  addExperience,
  getProfileInfo,
  personalInfo,
  updateEducation,
  updateExperience,
} from "./userProfileApi";

type EducationType = {
  _id?: string;
  institute?: string;
  degree?: string;
  image?: string;
  startYear?: string;
  endYear?: string;
  gpa?: string;
};
type ExperienceType = {
  _id?: string;
  title?: string;
  company?: string;
  image?: string;
  startYear?: string;
  endYear?: string;
  duration?: string;
};

interface UserProfileType {
  _id: string;
  name: string;
  username: string;
  email: string;
  about: string;
  education: EducationType[];
  experience: ExperienceType[];
  bio: string;
  locations: string;
  profileImage: string | null;
  coverImage: string | null;
}

type UserProfileState = {
  userProfile: UserProfileType | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: UserProfileState = {
  userProfile: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async (username: string, thunkAPI) => {
    try {
      const res = await getProfileInfo(username);
      return res?.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updatePersonalInfo = createAsyncThunk(
  "userProfile/updatePersonalInfo",
  async ({ email, data }: { email: string; data: any }, thunkAPI) => {
    try {
      const res = await personalInfo(email, data);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateAboutInfo = createAsyncThunk(
  "userProfile/updateAboutInfo",
  async ({ email, data }: { email: string; data: any }, thunkAPI) => {
    try {
      const res = await aboutInfo(email, data);
      return res?.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const createEducation = createAsyncThunk(
  "userProfile/createEducation",
  async ({ email, data }: { email: string; data: EducationType }, thunkAPI) => {
    try {
      const res = await addEducation(email, data);
      return res?.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editEducation = createAsyncThunk(
  "userProfile/editEducation",
  async ({ email, data }: { email: string; data: EducationType }, thunkAPI) => {
    try {
      const res = await updateEducation(email, data);
      return res?.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const createExperience = createAsyncThunk(
  "userProfile/createExperience",
  async ({ email, data }: { email: string; data: any }, thunkAPI) => {
    try {
      const res = await addExperience(email, data);
      return res?.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editExperience = createAsyncThunk(
  "userProfile/editExperience",
  async ({ email, data }: { email: string; data: any }, thunkAPI) => {
    try {
      const res = await updateExperience(email, data);
      return res?.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchProfile
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "Something went wrong";
      });

    // personal info

    builder.addCase(updatePersonalInfo.fulfilled, (state, action) => {
      state.userProfile = {
        ...state.userProfile!,
        ...action.payload,
      };
    });

    // about info
    builder.addCase(updateAboutInfo.fulfilled, (state, action) => {
      state.userProfile = {
        ...state.userProfile!,
        ...action.payload,
      };
    });

    // education
    builder.addCase(createEducation.fulfilled, (state, action) => {
      if (state.userProfile) {
        state.userProfile.education = [
          ...state.userProfile.education,
          action.payload,
        ];
      }
    });

    builder.addCase(editEducation.fulfilled, (state, action) => {
      const updated = action.payload;

      if (!updated || !updated._id || !state.userProfile) return;

      state.userProfile.education = state.userProfile.education.map((edu) =>
        edu._id === updated._id ? updated : edu
      );
    });

    // Add Experience
    builder.addCase(createExperience.fulfilled, (state, action) => {
      if (state.userProfile) {
        state.userProfile.experience.push(action.payload);
      }
    });

    // Edit Experience
    builder.addCase(editExperience.fulfilled, (state, action) => {
      if (state.userProfile) {
        const index = state.userProfile.experience.findIndex(
          (exp) => exp?._id === action.payload?._id
        );
        if (index !== -1) {
          state.userProfile.experience[index] = action.payload;
        }
      }
    });
  },
});

export default userProfileSlice.reducer;
