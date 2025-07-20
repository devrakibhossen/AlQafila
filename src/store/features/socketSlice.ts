import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SocketState {
  notifications: string[];
}

const initialState: SocketState = {
  notifications: [],
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<string>) => {
      state.notifications.push(action.payload);
    },
  },
});

export const { addNotification } = socketSlice.actions;
export default socketSlice.reducer;
