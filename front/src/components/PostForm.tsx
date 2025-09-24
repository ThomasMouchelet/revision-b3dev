import { useEffect, useState } from "react";
import type { PostCreateDTO, PostType } from "../types/post.type";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { postService } from "../services/post.service";

const INITIAL_STATE: PostCreateDTO = {
  title: "",
  content: "",
  price: 0,
};

interface PostFormProps {
  post?: PostType;
}

export const PostForm = ({ post }: PostFormProps) => {
  const [credentials, setCredentials] = useState<PostCreateDTO>(INITIAL_STATE);

  useEffect(() => {
    if (post) {
      setCredentials(post);
    }
  }, [post]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    console.log(credentials);
    // if post is null => create else update
    try {
      if (post) {
        await postService.updatePost(post.id.toString(), credentials);
      } else {
        await postService.createPost(credentials);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        name="title"
        placeholder="Title"
        value={credentials.title}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="content"
        placeholder="Content"
        value={credentials.content}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="price"
        placeholder="Price"
        value={credentials.price}
        onChange={handleChange}
      />
      <Button type="submit">{post ? "Update" : "Create"}</Button>
    </form>
  );
};
