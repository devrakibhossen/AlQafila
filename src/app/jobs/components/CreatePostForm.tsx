"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryList } from "@/utils/countriesList";

import { SalaryRangeSelector } from "./SalaryRangeSelector";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import JobDescriptionEditor from "./JobDescriptionEditor";
const CreatePostForm = () => {
  const form = useForm();
   const { control } = form;

  async function onSubmit() {
    console.log("Hello");
  }
  return (
    <div>
      <h3 className="text-xl font-bold mb-5">Job Information</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-5 items-center gap-6">
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                type="text"
                id="jobTitle"
                className="rounded-sm"
                placeholder="Job title"
              />
            </div>
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="employmentType">Employment Type</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Employment Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full Time</SelectItem>
                  <SelectItem value="part-time">Part Time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-5 items-center gap-6">
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="jobLocation">Job Location</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Worldwide</SelectLabel>
                    <SelectItem value="worldwide">
                      <span>🌎</span>
                      <span> Worldwide / Remote</span>
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Location</SelectLabel>
                    {countryList.map((country) => (
                      <SelectItem key={country.code} value={country.name}>
                        <span>{country.flagEmoji}</span>
                        <span className="pl-2">{country.name}</span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="salaryRange">Salary Range</Label>
              <SalaryRangeSelector
                control={control}
                minSalary={10000}
                maxSalary={1000000}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-5 items-center gap-6">
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                type="text"
                id="company-name"
                className="rounded-sm"
                placeholder="Company name"
              />
            </div>
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="company-logo">Company Logo</Label>
              <Input
                type="file"
                id="company-logo"
                className="rounded-sm"
                placeholder="Company logo "
              />
            </div>
          </div>

          <div className="grid w-full  items-center gap-3 mb-5">
            <Label htmlFor="skills">Skills</Label>
            <Input
              type="text"
              id="skills"
              className="rounded-sm"
              placeholder="Skills"
            />
          </div>

          <div className="grid w-full  items-center gap-3 mb-5">
            <Label htmlFor="job-description">Job Description</Label>
            <JobDescriptionEditor />
          </div>
          <button className="w-full text-center py-2 bg-green-accent rounded-md">
            Post Job
          </button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePostForm;
