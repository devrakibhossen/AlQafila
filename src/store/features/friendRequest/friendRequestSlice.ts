import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  acceptFriendRequest,
  declineFriendRequest,
  getFriendsRequest,
  getMyFriends,
  getSentFriendsRequest,
} from "./friendsRequestApi";

interface FriendRequestType {
  _id: string;
  name: string;
  username: string;
  profileImage: string;
  email?: string;
}
interface SentFriendRequestType {
  _id: string;
  receiver:{
    _id: string;
    name?: string;
    username: string;
    profileImage?: string;
    email?: string;
  }
 
}

interface FriendRequestType {
  _id: string;
  status: "pending" | "accepted" | "declined";
  sender: {
    name: string;
    username: string;
    profileImage: string;
  };
}
type friendRequestState = {
  friendRequest: FriendRequestType[];
  myFriends: FriendRequestType[];
  mySentRequest: SentFriendRequestType[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: friendRequestState = {
  friendRequest: [],
  myFriends: [],
  mySentRequest: [],
  isLoading: false,
  isError: false,
  error: null,
};

// fetch
export const fetchFriendRequests = createAsyncThunk(
  "friendRequest/fetch",
  async (userId: string) => {
    const data = await getFriendsRequest(userId);
    return data;
  }
);
// fetch
export const fetchSentFriendsRequest = createAsyncThunk(
  "friendRequest/fetchMySetFriends",
  async (userId: string) => {
    const data = await getSentFriendsRequest(userId);
    return data;
  }
);
// fetch
export const fetchMyFriends = createAsyncThunk(
  "friendRequest/fetchMyFriends",
  async (userId: string) => {
    const data = await getMyFriends(userId);
    return data;
  }
);

// accept
export const acceptRequest = createAsyncThunk(
  "friendRequest/accept",
  async (requestId: string) => {
    const data = await acceptFriendRequest(requestId);
    return {
      requestId,
      message: data.message,
    };
  }
);

// decline
export const declineRequest = createAsyncThunk(
  "friendRequest/decline",
  async (requestId: string) => {
    const data = await declineFriendRequest(requestId);
    return {
      requestId,
      message: data.message,
    };
  }
);

const friendRequestSlice = createSlice({
  name: "friendRequest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFriendRequests.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });

    builder.addCase(fetchFriendRequests.fulfilled, (state, action) => {
      state.isLoading = false;
      state.friendRequest = action.payload;
    });

    builder.addCase(fetchFriendRequests.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message || "Something went wrong";
    });

    //
    builder.addCase(fetchSentFriendsRequest.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });

    builder.addCase(fetchSentFriendsRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mySentRequest = action.payload;
    });

    builder.addCase(fetchSentFriendsRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message || "Something went wrong";
    });
    //

    builder.addCase(fetchMyFriends.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });

    builder.addCase(fetchMyFriends.fulfilled, (state, action) => {
      state.isLoading = false;
      state.myFriends = action.payload;
    });

    builder.addCase(fetchMyFriends.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message || "Something went wrong";
    });

    // accept

    builder.addCase(acceptRequest.fulfilled, (state, action) => {
      state.friendRequest = state.friendRequest.filter(
        (req) => req._id !== action.payload.requestId
      );
    });

    // decline
    builder.addCase(declineRequest.fulfilled, (state, action) => {
      state.friendRequest = state.friendRequest.filter(
        (req) => req._id !== action.payload.requestId
      );
    });
  },
});

export default friendRequestSlice.reducer;
