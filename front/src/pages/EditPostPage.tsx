import { useParams } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import { useEffect, useState } from "react";
import type { PostType } from "../types/post.type";
import { postService } from "../services/post.service";

export const EditPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    const post = await postService.getPost(id as string);
    setPost(post);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <PostForm post={post as PostType} />
    </div>
  );
};
