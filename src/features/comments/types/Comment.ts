export interface Type {
  id: string;
  content: string;
  userId: string;
  postId: string;
  createdAt: string;
  replies: Type[];
}
