import { Link } from "react-router-dom";
import type { PostType } from "../types/post.type";
import { DeletePostModal } from "./DeletePostModal";

interface PostCardProps {
  post: PostType;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4">
      <h3>{post.title}</h3>
      <p>{post.content.slice(0, 100)}...</p>
      <p>{post.price}€</p>
      <div className="flex gap-4 items-center justify-between">
        <Link to={`/posts/${post.id}`}>View</Link>
        <DeletePostModal id={post.id.toString()} />
      </div>
    </div>
  );
};
