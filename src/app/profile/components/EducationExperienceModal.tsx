"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type EducationExperienceData = {
  title: string;
  institution?: string;
  company?: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: EducationExperienceData) => void;
  mode: "add" | "edit";
  type: "education" | "experience";
  defaultValues?: {
    title: string;
    institution?: string;
    company?: string;
    startDate: string;
    endDate: string;
    image: string;
    description: string;
  };
};

export const EducationExperienceModal = ({
  open,
  onClose,
  onSubmit,
  mode,
  type,
  defaultValues,
}: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValues || {
      title: "",
      institution: "",
      company: "",
      startDate: "",
      endDate: "",
      image: "",
      description: "",
    },
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? `Add` : `Update`}{" "}
            {type === "education" ? "Education" : "Experience"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("title")} placeholder="Title" />
          {type === "education" ? (
            <Input {...register("institution")} placeholder="Institution" />
          ) : (
            <Input {...register("company")} placeholder="Company" />
          )}
          <Input {...register("image")} type="file" />
          <Input {...register("startDate")} type="date" />
          <Input {...register("endDate")} type="date" />
          <Input {...register("description")} placeholder="Description" />
          <div className="flex justify-end">
            <Button className="bg-green-accent hover:bg-transparent" type="submit">
              {mode === "add" ? "Add" : "Update"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
