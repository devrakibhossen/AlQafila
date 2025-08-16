import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { addReactions, getReaction } from "./postApi";
export interface PostImage {
  type: string;
  images: string;
}

export interface Post {
  _id?: string;
  authorId: string;
  text: string;
  hashtags?: string[];
  images?: PostImage[];
  shares?: number;
  video?: {
    type: string;
    video: string;
  };
  reportedBy?: string[];
  profileStatus?: string;
  views?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface PostState {
  posts: {
    data: Post[];
    success: true;
  };
  loading: boolean;
}

const initialState: PostState = {
  posts: {
    data: [],
    success: true,
  },
  loading: false,
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// GET: Fetch all posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch(`${API_BASE_URL}/api/v1/posts`);
  const data = await res.json();
  return data as {
    data: Post[];
    success: true;
  };
});

// POST: Create a new post
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData: Post) => {
    const res = await fetch(`${API_BASE_URL}/api/v1/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    // return data as Post;
    return data.post as Post;
  }
);

export const addReaction = createAsyncThunk(
  "posts/addReaction",
  async ({ data }: { data: any }, { rejectWithValue }) => {
    try {
      const res = await addReactions(data);
      return res;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add reaction");
    }
  }
);

export const fetchReaction = createAsyncThunk(
  "posts/fetchReaction",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await getReaction(id);
      return res;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch reactions");
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<{ data: Post[]; success: true }>) => {
          state.posts = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts.data.unshift(action.payload);
        state.loading = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addReaction.fulfilled, (state, action) => {});
  },
});

export default postsSlice.reducer;
