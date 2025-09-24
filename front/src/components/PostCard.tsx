import { Link } from "react-router-dom";
import type { PostType } from "../types/post.type";

interface PostCardProps {
  post: PostType;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4">
      <h3>{post.title}</h3>
      <p>{post.content.slice(0, 100)}...</p>
      <p>{post.price}€</p>
      <Link to={`/posts/${post.id}`}>View</Link>
    </div>
  );
};
