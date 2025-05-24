"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFields from "./FormFields";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const signUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email(),
  password: z.string().min(5),
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  const router = useRouter();
  const isSignIn = type === "sign-in";
  // const formSchema = authFormSchema(type);
  type SignUpSchema = z.infer<typeof signUpSchema>;
  type SignInSchema = z.infer<typeof signInSchema>;

  // 1. Define your form.
  const form = useForm<SignUpSchema | SignInSchema>({
    resolver: zodResolver(isSignIn ? signInSchema : signUpSchema),
    defaultValues: isSignIn
      ? {
          email: "",
          password: "",
        }
      : {
          name: "",
          email: "",
          password: "",
        },
  });

  // 2. Define a submit handler.
  function onSubmit(values: SignUpSchema | SignInSchema) {
    try {
      if (type === "sign-up") {
        toast.success("Account created successfully. Please sign in.");
        router.push("/accounts/sign-in");
        console.log("SIGN UP", values);
      } else {
        toast.success("Sign in successfully.");
        router.push("/");

        console.log("SIGN IN", values);
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error ${error}`);
    }
  }

  return (
    <div className="my-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {!isSignIn && (
            <FormFields
              control={form.control}
              name="name"
              type="text"
              label="Name"
              placeholder="Your Name"
            />
          )}
          <FormFields
            control={form.control}
            name="email"
            label="Email"
            type="email"
            placeholder="Your email"
          />
          <FormFields
            control={form.control}
            name="password"
            type="password"
            label="Password"
            placeholder="Enter password"
          />
          <Button
            type="submit"
            className=" bg-green-accent text-white rounded-full w-full cursor-pointer"
          >
            {isSignIn ? "Sign In" : "Create an Account"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
