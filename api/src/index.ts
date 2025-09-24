import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
    price: 100,
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content 2",
    price: 200,
  },
  {
    id: 3,
    title: "Post 3",
    content: "Content 3",
    price: 300,
  },
];

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/posts", (context) => {
  return context.json(posts);
});

app.get("/posts/:id", (context) => {
  const { id } = context.req.param();
  console.log(id);
  const post = posts.find((post) => post.id === Number(id));
  return context.json(post);
});

app.post("/posts", async (context) => {
  const body = await context.req.json();
  console.log(body);
  const post = { id: posts.length + 1, ...body };
  posts.push(post);
  return context.json(post);
});

// app.put /posts/:id + body
// app.delete /posts/:id

serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
