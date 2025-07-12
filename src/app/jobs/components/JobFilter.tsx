import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { countryList } from "@/utils/countriesList";
import { X } from "lucide-react";

const JobFilter = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-5 border rounded-xl">
      <div className="justifyBetween border-b mb-5">
        <h3 className="text-2xl font-bold mb-3">Filter</h3>
        <button className=" flex items-center text-white cursor-pointer justify-center mb-3 gap-2 rounded-full border dark:border-red-700 border-red-300 overflow-hidden shadow-sm  bg-red-500  text-sm  font-medium py-1 px-3 transition-all">
          Clear all
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3 mb-5">
        <h3 className="text-xl font-semibold mb-3">Job Type</h3>
        <div className="grid grid-cols-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-green-600 w-4 h-4"
              value="full-time"
            />
            <span>Full Time</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-green-600 w-4 h-4"
              value="part-time"
            />
            <span>Part Time</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-green-600 w-4 h-4"
              value="contract"
            />
            <span>Contract</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-green-600 w-4 h-4"
              value="internship"
            />
            <span>Internship</span>
          </label>
        </div>
      </div>

      <div className="grid w-full  items-center gap-3 border-t pt-5 mb-5">
        <h3 className="text-xl font-semibold mb-2"> Location</h3>
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

      <div className="grid w-full  items-center gap-3 border-t pt-5 ">
        <h3 className="text-xl font-semibold mb-2"> Salary Range</h3>
        <div className="justifyBetween gap-5">
          <Input
            type="text"
            id="minsalary"
            className="rounded-sm"
            placeholder="Min salary"
          />
          <Input
            type="text"
            id="maxsalary"
            className="rounded-sm"
            placeholder="Max salary"
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
