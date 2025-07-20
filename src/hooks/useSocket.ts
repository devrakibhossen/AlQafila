// hooks/useSocket.ts
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { useDispatch } from "react-redux";
import { addNotification } from "@/store/features/socketSlice";

export const useSocket = (userId?: string) => {
  const dispatch = useDispatch();
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!userId) return;

    // Create socket connection only once
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");

    // Join the room using userId
    socketRef.current.emit("joinRoom", userId);

    // Listen for friend request notification
    socketRef.current.on("friendRequest", (data) => {
      dispatch(addNotification(`${data.sender} ${data.message}`));
    });

    // Listen for friend request accepted notification
    socketRef.current.on("friendRequestAccepted", (data) => {
      dispatch(addNotification(`${data.receiver} ${data.message}`));
    });

    // Cleanup on unmount or userId change
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [userId, dispatch]);
};
