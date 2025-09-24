import type { PostCreateDTO } from "../types/post.type";

const ENDPOINT = `${import.meta.env.VITE_API_URL}/posts`;

const getPosts = async () => {
  const res = await fetch(ENDPOINT);
  const data = await res.json();
  return data;
};

const getPost = async (id: string) => {
  const res = await fetch(`${ENDPOINT}/${id}`);
  const data = await res.json();
  return data;
};

const createPost = async (post: PostCreateDTO) => {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
};

const updatePost = async (id: string, post: PostCreateDTO) => {
  const res = await fetch(`${ENDPOINT}/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
};

export const postService = {
  getPosts,
  getPost,
  createPost,
  updatePost,
};
