const ENDPOINT = `${import.meta.env.VITE_API_URL}/posts`;

const getPosts = async () => {
  const res = await fetch(ENDPOINT);
  const data = await res.json();
  return data;
};

export const postService = {
  getPosts,
};
