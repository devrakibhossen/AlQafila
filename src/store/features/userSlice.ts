// features/user/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  profileImage: string | null;
  coverImage: string | null;
  name: string;
  bio: string;
  location: string | null | undefined;
  loading: boolean;
}

const initialState: UserState = {
  profileImage: null,
  coverImage: null,
  name: "",
  bio: "",
  location: undefined,
  loading: false,
};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// ✅ AsyncThunk with fetch
export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async ({
    email,
    data,
  }: {
    email: string;
    data: Omit<UserState, "loading">;
  }) => {
    const res = await fetch(
      `${API_BASE_URL}/api/v1/users/${email}/personal-info`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update profile");
    }

    const updatedUser = await res.json();
    return updatedUser;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        updateUserProfile.fulfilled,
        (state, action: PayloadAction<UserState>) => {
          return { ...action.payload, loading: false };
        }
      )
      .addCase(updateUserProfile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
