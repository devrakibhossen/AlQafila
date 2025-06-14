"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import UserHeader from "./UserHeader";
import { Input } from "@/components/ui/input";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
interface UploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const UploadModal = ({ open, onOpenChange }: UploadModalProps) => {
  const [options, setOptions] = useState([{ id: Date.now(), text: "" }]);
  const handleAddOption = () => {
    if (options.length < 5) {
      setOptions([...options, { id: Date.now(), text: "" }]);
    }
  };
  const handleDeleteOption = (id: number) => {
    if (options.length > 1) {
      setOptions(options.filter((opt) => opt.id !== id));
    }
  };

  const handleChangeOption = (id: number, value: string) => {
    setOptions(
      options.map((opt) => (opt.id === id ? { ...opt, text: value } : opt))
    );
  };
  const handleSubmit = () => {
    console.log("Submitted Poll Options:", options);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Create a Poll</DialogTitle>
          <hr className="my-2.5" />
          <UserHeader
            name="Rakib Hossen"
            image="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
          />
          <DialogDescription>
            <p className="mb-2">Ask a question</p>

            {options.map((opt, index) => (
              <div key={opt.id} className="justifyBetween gap-4 mb-2">
                <Input
                  name={`option${index + 1}`}
                  className="rounded-sm py-6"
                  placeholder={`Option ${index + 1}`}
                  onChange={(e) => handleChangeOption(opt.id, e.target.value)}
                ></Input>
                <button
                  onClick={() => handleDeleteOption(opt.id)}
                  className=" text-red-500  cursor-pointer"
                >
                  <MdDeleteOutline className="text-2xl" />
                </button>
              </div>
            ))}
            {options.length < 5 && (
              <button
                onClick={handleAddOption}
                className="border green-accent flex justify-center items-center gap-2 rounded-sm mt-2 py-3.5 px-2 w-full cursor-pointer"
              >
                <FaPlus /> Add poll
              </button>
            )}
          </DialogDescription>
          <hr className="my-2.5" />
          <div className=" flex justify-end items-end  gap-5">
            <button
              onClick={handleSubmit}
              className="py-1 px-4  border rounded-full text-sm"
            >
              Poll
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
