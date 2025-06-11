import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const FormFields = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type,
}: FormFieldProps<T>) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                className="rounded-full p-5"
                {...field}
              />
            </FormControl>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormFields;
