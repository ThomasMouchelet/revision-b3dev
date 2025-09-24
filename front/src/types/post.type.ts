export type PostType = {
  id: number;
  title: string;
  content: string;
  price: number;
};

export type PostCreateDTO = {
  title: string;
  content: string;
  price: number;
};
