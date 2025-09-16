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
import { FiUploadCloud } from "react-icons/fi";
const CreateForm = () => {
  return (
    <div>
      <form className="space-y-3">
        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="company_name">Name</Label>
          <Input
            type="text"
            id="company_name"
            placeholder="Enter your company name"
          />
        </div>
        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="company_name"> Username</Label>
          <Input
            type="text"
            id="company_name"
            placeholder="Enter your company username"
          />
        </div>
        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="company_name">industry</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry._id} value={industry.name}>
                  {industry.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full  items-center gap-3">
            <Label htmlFor="company_website">Website</Label>
<Input type="url" id="company_website" placeholder="Enter website URL" />

        </div>

        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="company_name">Company Size</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your Company size" />
            </SelectTrigger>
            <SelectContent>
              {companySizes.map((companySize) => (
                <SelectItem key={companySize._id} value={companySize.name}>
                  {companySize.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          <Label htmlFor="company_name">About</Label>
          <Textarea placeholder="Write your about company." />
        </div>

        <button className="bg-green-accent text-center w-full p-2 rounded-full">Create company page</button>
      </form>
    </div>
  );
};

export default CreateForm;
