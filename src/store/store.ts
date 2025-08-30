import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import reactionsReducer from "./features/reaction/reactionsSlice";
import commentsReducer from "./features/comment/commentsSlice";
import friendRequestReducer from "./features/friendRequest/friendRequestSlice";
import userProfileReducer from "./features/userProfile/userProfileSlice";
import socketReducer from "./features/socketSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      friendRequest: friendRequestReducer,
      userProfile: userProfileReducer,
      socket: socketReducer,
      reactions: reactionsReducer,
      comments: commentsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
