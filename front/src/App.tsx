import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SinglePostPage } from "./pages/SinglePostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
