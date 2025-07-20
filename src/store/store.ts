import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import postsReducer from "./features/postsSlice";
import aboutReducer from "./features/aboutSlice";
import socketReducer from "./features/socketSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      posts: postsReducer,
      about: aboutReducer,
      socket: socketReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
