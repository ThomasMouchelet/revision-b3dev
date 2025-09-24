import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SinglePostPage } from "./pages/SinglePostPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import { EditPostPage } from "./pages/EditPostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/posts/create" element={<CreatePostPage />} />
        <Route path="/posts/:id/edit" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
