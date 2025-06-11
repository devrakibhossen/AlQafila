"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineEdit } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserAbout } from "../../../store/features/aboutSlice";
import { useState } from "react";
import { AppDispatch } from "@/store/store";
type FormData = { about: string };

const About = ({ email, isEditOption, about }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      await dispatch(updateUserAbout({ email, data }));
      reset(data);
      setOpen(false);
    } catch (err) {
      console.error("Update failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-6">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-lg font-semibold dark:text-white text-gray-800">
          About
        </h4>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            {isEditOption && (
              <MdOutlineEdit className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer" />
            )}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit About</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
              <Textarea
                className="resize-none h-[300px]"
                placeholder="Write something in detail..."
                {...register("about")}
              />

              <DialogFooter className="pt-4">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="bg-green-accent hover:bg-transparent"
                >
                  {loading ? "Saving..." : "Save changes"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {about}
        <span className="text-sm green-accent cursor-pointer"> see more</span>
      </p>
    </div>
  );
};

export default About;
