export interface Author {
  _id: string;
  username: string;
  name: string;
  profileImage: string;
}

export interface CreateCommentData {
  postId: string;
  content: string;
  authorId: string | Author;
  parentId?: string | null;
}

export interface CommentData extends CreateCommentData {
  _id: string;
  replies?: CommentData[];
}
