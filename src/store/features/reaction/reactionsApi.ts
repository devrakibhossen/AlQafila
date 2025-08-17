export interface Reaction {
  _id?: string;
  postId: string;
  userId:
    | string
    | {
        _id: string;
        username: string;
        name: string;
        profileImage: string;
      };
  type: string | null;
  createdAt?: string;
  updatedAt?: string;
}
export interface ReactionId {
  _id?: string;
}

export const addReactions = async (data: Reaction) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/reaction`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

export const getReaction = async (id: ReactionId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/reaction/${id}`,
    { cache: "no-store" }
  );
  return response.json();
};
