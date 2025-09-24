import { PostList } from "../components/PostList";

export const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Home page</h1>

      <h2 className="text-xl font-bold">Post List</h2>
      <PostList />
    </div>
  );
};
