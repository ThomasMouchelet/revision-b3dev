import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { PostType } from "../types/post.type";
import { postService } from "../services/post.service";
import { DeletePostModal } from "../components/DeletePostModal";

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
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-10">
        <h1>{post?.title}</h1>
        <div className="flex gap-4 items-center ">
          <Link to={`/posts/${id}/edit`}>Edit Post</Link>
          <DeletePostModal id={id as string} />
        </div>
      </div>
      <p>{post?.content}</p>
      <p>{post?.price}€</p>
    </div>
  );
};
