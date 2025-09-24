import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { PostType } from "../types/post.type";
import { postService } from "../services/post.service";

export const SinglePostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const post = await postService.getPost(id as string);
      setPost(post);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Link to={`/posts/${id}/edit`}>Edit Post</Link>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <p>{post?.price}€</p>
    </div>
  );
};
