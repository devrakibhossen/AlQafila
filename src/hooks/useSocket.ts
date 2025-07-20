// hooks/useSocket.ts
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { addNotification } from "@/store/features/socketSlice";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Socket } from "socket.io-client";

export const useSocket = (userId?: string) => {
  const dispatch = useDispatch();
  const socketRef = useRef<ReturnType<typeof io> | null>(null);

  useEffect(() => {
    if (!userId) return;

    // ✅ Create the socket connection
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL || "", {
      transports: ["websocket"],
      withCredentials: true,
    });

    socketRef.current.emit("joinRoom", userId);

    socketRef.current.on(
      "friendRequest",
      (data: { sender: string; message: string }) => {
        dispatch(addNotification(`${data.sender} ${data.message}`));
      }
    );

    socketRef.current.on(
      "friendRequestAccepted",
      (data: { receiver: string; message: string }) => {
        dispatch(addNotification(`${data.receiver} ${data.message}`));
      }
    );

    // ✅ Cleanup
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [userId, dispatch]);
};
