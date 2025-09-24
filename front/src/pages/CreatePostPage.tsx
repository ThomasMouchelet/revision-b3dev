import { PostForm } from "../components/PostForm";

export const CreatePostPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Create Post</h1>
      <div className="mt-4">
        <PostForm />
      </div>
    </div>
  );
};
