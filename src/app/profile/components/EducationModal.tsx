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
import { useState } from "react";

type EducationData = {
  institute?: string;
  degree?: string;
  gpa?: string;
  startYear?: string;
  endYear?: string;
  image?: string;
};

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

export const EducationModal = ({
  open,
  onClose,
  onSubmit,
  mode,
  defaultValues,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: EducationData) => void;
  mode: "add" | "edit";
  defaultValues?: EducationData;
}) => {
  const { register, handleSubmit, setValue } = useForm<EducationData>({
    defaultValues: defaultValues || {},
  });

  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      setUploading(true);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setValue("image", data.secure_url);
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add" : "Update"} Education
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("institute")} placeholder="institute" />
          <Input {...register("degree")} placeholder="Degree" />
          <Input {...register("gpa")} placeholder="GPA" />
          <Input {...register("startYear")} placeholder="Start Date" />
          <Input {...register("endYear")} placeholder="End Date" />
          <Input type="file" onChange={handleImageUpload} />
          <Button type="submit" disabled={uploading} className="w-full">
            {uploading
              ? "Uploading..."
              : mode === "add"
              ? "Add Education"
              : "Update Education"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
