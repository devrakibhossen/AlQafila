export interface Author {
  _id: string;
  username: string;
  name: string;
  profileImage: string;
}

export interface CommentData {
  _id?: string;
  postId: string;
  content: string;
  authorId: string | Author;
  parentId?: string | null;
  replies?: CommentData[];
}

export interface updatedData {
  id: string;
  content: string;
}

export const addComment = async (data: CommentData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/comment`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  return result.comment;
};

export const getComment = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/comment/${id}`,
    { cache: "no-store" }
  );
  const result = await response.json();
  return result.comment;
};

export const deletedComment = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/comment/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result.comment;
};

export const updatedComment = async (data: updatedData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/comment/${data.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: data.content }),
    }
  );

  const result = await response.json();
  return result.updatedComment;
};
