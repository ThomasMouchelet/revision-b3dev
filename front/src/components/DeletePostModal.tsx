import { useState } from "react";
import { Button } from "./ui/Button";
import { postService } from "../services/post.service";
import { useNavigate } from "react-router-dom";

interface DeletePostModalProps {
  id: string;
}

export const DeletePostModal = ({ id }: DeletePostModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await postService.deletePost(id);
      setIsOpen(false);
      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Delete
      </Button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col gap-4 justify-center items-center`}
      >
        <div className="bg-gray-800 p-4 rounded-md flex flex-col gap-4 text-white">
          <h1>Delete Post</h1>
          <p>Are you sure you want to delete this post?</p>
          <Button variant="danger" onClick={handleDelete}>
            Confirm delete
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};
