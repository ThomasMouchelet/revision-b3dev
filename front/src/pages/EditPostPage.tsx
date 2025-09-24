import { useParams } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import { useEffect, useState } from "react";
import type { PostType } from "../types/post.type";
import { postService } from "../services/post.service";
import { DeletePostModal } from "../components/DeletePostModal";

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
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-10">
        <h1>Edit Post</h1>
        <DeletePostModal id={id as string} />
      </div>
      <PostForm post={post as PostType} />
    </div>
  );
};
