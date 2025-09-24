import { useEffect, useState } from "react";
import { postService } from "../services/post.service";
import type { PostType } from "../types/post.type";
import { PostCard } from "./PostCard";

export const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const posts = await postService.getPosts();
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
