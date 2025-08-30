// export interface Author {
//   _id: string;
//   username: string;
//   name: string;
//   profileImage: string;
// }
// export interface CommentData {
//   _id?: string;
//   postId: string;
//   content: string;
//   authorId: string | Author;
//   parentId?: string | null;
//   replies: CommentData[];
// }

import { CommentData } from "@/types/comment";

export const buildCommentTree = (comments: CommentData[]): CommentData[] => {
  const map: Record<string, CommentData> = {};
  const roots: CommentData[] = [];

  comments.forEach((c) => {
    map[c._id] = { ...c, replies: [] };
  });

  comments.forEach((c) => {
    if (c.parentId) {
      map[c.parentId]!.replies!.push(map[c._id]);
    } else {
      roots.push(map[c._id]);
    }
  });

  return roots;
};
