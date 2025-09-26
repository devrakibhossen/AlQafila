"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { companySizes } from "@/utils/companySizes";
import { industries } from "@/utils/industryList";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  industry: z.string(),
  website: z.string(),
  company_size: z.string(),
  about: z.string(),
});

const CreateForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      industry: "",
      website: "",
      company_size: "",
      about: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid w-full  items-center gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your company name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full  items-center gap-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your company username"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full  items-center gap-3">
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industrie) => (
                          <SelectItem
                            key={industrie._id}
                            value={industrie.name}
                          >
                            {industrie.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full  items-center gap-3">
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="Enter website URL"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid w-full  items-center gap-3">
            <FormField
              control={form.control}
              name="company_size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Size</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your Company size" />
                      </SelectTrigger>
                      <SelectContent>
                        {companySizes.map((companySize) => (
                          <SelectItem
                            key={companySize._id}
                            value={companySize.name}
                          >
                            {companySize.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid w-full  items-center gap-3">
            <Label htmlFor="company_name"> Compaly Logo</Label>
            <div className="relative  w-full h-40 flex flex-col gap-2 justify-center items-center border rounded-md cursor-pointer overflow-hidden">
              <FiUploadCloud className="text-2xl" />
              <p className="text-sm">Upload your company logo</p>
              <input
                type="file"
                id="company_logo"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
          <div className="grid w-full  items-center gap-3">
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your about company."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <button
            type="submit"
            className="bg-green-accent text-sm text-center w-full p-2 rounded-full"
          >
            Create company page
          </button>
        </form>
      </Form>
    </div>
  );
};

export default CreateForm;
