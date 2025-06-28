import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface IReactions {
  like: number;
  love: number;
  smart: number;
  funny: number;
  wow: number;
  sad: number;
  angry: number;
  total: number;
}
export interface PostImage {
  type: string;
  images: string;
}
export interface Post {
  _id?: string;
  authorEmail: string;
  text: string;
  hashtags?: string[];
  images?: PostImage[];
  reactions?: IReactions;
  shares?: number;
  video?: {
    type: string;
    video: string;
  };
  reportedBy?: string[];
  reactionsBy?: string[];
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
      });
  },
});

export default postsSlice.reducer;
