
import { CommentData } from "@/types/comment";
export const buildCommentTree = (comments: CommentData[]): CommentData[] => {
  const map: Record<string, CommentData> = {};
  const roots: CommentData[] = [];

  comments.forEach((c) => {
    map[c._id] = { ...c, replies: c.replies ?? [] };
  });

  comments.forEach((c) => {
    if (c.parentId) {
      const parent = map[c.parentId];
      if (parent) {
        parent.replies!.push(map[c._id]);
      } else {
        roots.push(map[c._id]);
      }
    } else {
      roots.push(map[c._id]);
    }
  });

  return roots;
};
