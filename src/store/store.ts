import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import postsReducer from "./features/postsSlice";
import aboutReducer from "./features/aboutSlice";
import friendRequestReducer from "./features/friendRequest/friendRequestSlice";
import userProfileReducer from "./features/userProfile/userProfileSlice";
import socketReducer from "./features/socketSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      posts: postsReducer,
      about: aboutReducer,
      friendRequest: friendRequestReducer,
      userProfile: userProfileReducer,
      socket: socketReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
