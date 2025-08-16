import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { addReactions, getReaction } from "./reactionsApi";

export interface Reaction {
  _id?: string;
  postId: string;
  userId: string | {
    _id: string;
    username: string;
    name: string;
    profileImage: string;
  };
  type: string | null;
  createdAt?: string;
  updatedAt?: string;
}

interface ReactionsState {
  items: Record<string, Reaction[]>;
  loading: boolean;
  error: string | null;
}

const initialState: ReactionsState = {
  items: {},
  loading: false,
  error: null,
};

// POST: Add reaction
export const addReaction = createAsyncThunk(
  "reactions/addReaction",
  async (
    data: { postId: string; userId: string; type: string | null },
    { rejectWithValue }
  ) => {
    try {
      const res = await addReactions(data);
      return { ...res, requestData: data } as Reaction & { requestData: typeof data };
    } catch (err: unknown) {
  if (err instanceof Error) {
    return rejectWithValue(err.message);
  }
  return rejectWithValue("Failed to add reaction");
}

  }
);

// GET: Fetch reactions by postId
export const fetchReactions = createAsyncThunk(
  "reactions/fetchReactions",
  async (postId: string, { rejectWithValue }) => {
    try {
      const res = await getReaction(postId);
      // Extract reactions array from API response
      const reactions = res.reactions || [];
      return { postId, reactions: reactions as Reaction[] };
    }
    catch (err: unknown) {
  if (err instanceof Error) {
    return rejectWithValue(err.message);
  }
  return rejectWithValue("Failed to fetch reactions");
}
  }
);

const reactionsSlice = createSlice({
  name: "reactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Helper function to extract userId
    const getUserId = (reaction: Reaction): string => {
      return typeof reaction.userId === 'string' 
        ? reaction.userId 
        : reaction.userId._id;
    };

    builder
      // fetch
      .addCase(fetchReactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchReactions.fulfilled,
        (
          state,
          action: PayloadAction<{ postId: string; reactions: Reaction[] }>
        ) => {
          const reactions = Array.isArray(action.payload.reactions) 
            ? action.payload.reactions 
            : [];
          
          state.items[action.payload.postId] = reactions;
          state.loading = false;
        }
      )
      .addCase(fetchReactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // add/update/remove reaction
      .addCase(
        addReaction.fulfilled,
        (state, action: PayloadAction<Reaction & { requestData: { postId: string; userId: string; type: string | null } }>) => {
          const { postId, userId, type } = action.payload.requestData || action.payload;
          
          // Initialize post reactions array if it doesn't exist or if it's not an array
          if (!state.items[postId] || !Array.isArray(state.items[postId])) {
            state.items[postId] = [];
          }
          
          // Find existing reaction by userId
          const existingReactionIndex = state.items[postId].findIndex(
            (reaction) => getUserId(reaction) === userId
          );
          
          if (type === null) {
            // Remove reaction if type is null
            if (existingReactionIndex !== -1) {
              state.items[postId].splice(existingReactionIndex, 1);
            }
          } else {
            // Add or update reaction
            if (existingReactionIndex !== -1) {
              // Update existing reaction
              state.items[postId][existingReactionIndex] = {
                ...state.items[postId][existingReactionIndex],
                type,
                updatedAt: action.payload.updatedAt || new Date().toISOString(),
              };
            } else {
              // Add new reaction
              state.items[postId].push({
                _id: action.payload._id,
                postId,
                userId,
                type,
                createdAt: action.payload.createdAt || new Date().toISOString(),
                updatedAt: action.payload.updatedAt || new Date().toISOString(),
              });
            }
          }
          
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(addReaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addReaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default reactionsSlice.reducer;