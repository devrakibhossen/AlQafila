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

type EducationExperienceData = {
  title?: string;
  institute?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
  degree?: string;
  gpa?: string;
  duration?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: EducationExperienceData) => void;
  mode: "add" | "edit";
  type: "education" | "experience";
  defaultValues?: EducationExperienceData;
};

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

export const EducationExperienceModal = ({
  open,
  onClose,
  onSubmit,
  mode,
  type,
  defaultValues,
}: Props) => {
  const { register, handleSubmit, setValue } = useForm<EducationExperienceData>(
    {
      defaultValues: defaultValues || {
        title: "",
        institution: "",
        company: "",
        startDate: "",
        endDate: "",
        image: "",
        degree: "",
        gpa: "",
        duration: "",
      },
    }
  );

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
      setValue("image", data.secure_url); // set image URL from Cloudinary
    } catch (err) {
      console.error("Image upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add" : "Update"}{" "}
            {type === "education" ? "Education" : "Experience"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {type === "experience" && (
            <Input {...register("title")} placeholder="Title" />
          )}
          {type === "education" ? (
            <>
              <Input {...register("institution")} placeholder="Institution" />
              <Input {...register("degree")} placeholder="Degree" />
              <Input {...register("gpa")} placeholder="GPA" />
            </>
          ) : (
            <>
              <Input {...register("company")} placeholder="Company" />
              <Input {...register("duration")} placeholder="Duration" />
            </>
          )}

          {/* File Upload */}
          <Input type="file" onChange={handleImageUpload} />
          {/* {uploading && <p className="text-sm text-blue-600">Uploading...</p>} */}

          <Input {...register("startDate")} type="date" />
          <Input {...register("endDate")} type="date" />

          <div className="flex justify-end">
            <Button
              className="bg-green-accent hover:bg-transparent"
              type="submit"
              disabled={uploading}
            >
              {mode === "add" ? "Add" : "Update"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
