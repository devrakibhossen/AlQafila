export const getFriendsRequest = async (userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/friend/myFriendRequests/${userId}`
  );
  return response.json();
};

export const acceptFriendRequest = async (requestId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/friend/accept-requests/${requestId}`,
    {
      method: "PATCH",
    }
  );
  return response.json();
};

export const declineFriendRequest = async (requestId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/friend/delete-requests/${requestId}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};


export const getMyFriends = async (userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/friend/myFriends/${userId}`
  );
  return response.json();
};