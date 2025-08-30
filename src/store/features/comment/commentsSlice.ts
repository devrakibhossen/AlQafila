import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  deletedComment,
  getComment,
  updatedComment,
} from "./commentApi";
import { CommentData, CreateCommentData } from "@/types/comment";

// export interface Author {
//   _id: string;
//   username: string;
//   name: string;
//   profileImage: string;
// }
// export interface CreateCommentData {
//   postId: string;
//   content: string;
//   authorId: string | Author;
//   parentId?: string | null;
// }

// export interface CommentData {
//   _id?: string;
//   postId: string;
//   content: string;
//   authorId: string | Author;
//   parentId?: string | null;
//   replies?: CommentData[];
// }

interface CommentsState {
  items: CommentData[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  items: [],
  loading: false,
  error: null,
};

export const postComment = createAsyncThunk<CommentData, CreateCommentData>(
  "comments/postComment",
  async (data) => {
    try {
      const res = await addComment(data);
      return res;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchComment = createAsyncThunk(
  "comments/fetchComment",
  async (id: string) => {
    try {
      const res = await getComment(id);
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id: string) => {
    try {
      await deletedComment(id);
      return { id };
    } catch (error) {
      throw error;
    }
  }
);

export const updateComment = createAsyncThunk<
  CommentData,
  { id: string; content: string }
>("comments/updateComment", async (data) => {
  try {
    const res = await updatedComment(data);
    return res;
  } catch (error) {
    throw error;
  }
});

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(postComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(fetchComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.items = state.items.filter(
        (comment) => comment._id !== action.payload.id
      );
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        (comment) => comment._id === action.payload._id
      );
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          content: action.payload.content,
        };
      }
    });
  },
});

export default commentsSlice.reducer;
