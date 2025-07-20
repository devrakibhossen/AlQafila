"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import socket from "@/utils/socket";
import { toast } from "sonner";
import { addNotification } from "@/store/features/socketSlice";

interface Props {
  userId: string;
}

const FriendSocketListener: React.FC<Props> = ({ userId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) return;

    socket.connect();
    socket.emit("join", userId); // Join user room

    socket.on("friendRequest", (data: { sender: unknown }) => {
      toast.success(`🚀 New friend request from ${data.sender}`);
      dispatch(addNotification(`${data.sender} sent a friend request`));
    });

    socket.on("friendRequestAccepted", (data: { receiver: unknown }) => {
      toast.success(`✅ ${data.receiver} accepted your friend request`);
      dispatch(addNotification(`${data.receiver} accepted your request`));
    });

    socket.on("friendRequestDeleted", (data: { receiver: unknown }) => {
      toast.error(`❌ ${data.receiver} deleted your request`);
      dispatch(addNotification(`${data.receiver} deleted your request`));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, userId]);

  return null;
};

export default FriendSocketListener;
