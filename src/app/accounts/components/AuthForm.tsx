"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFields from "./FormFields";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const signUpSchema = z.object({
  // name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  const router = useRouter();
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
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
          // name: "",
          username: "",
          email: "",
          password: "",
        },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: SignUpSchema | SignInSchema) {
    try {
      if (type === "sign-up") {
        const res = await fetch(`${API_BASE_URL}/api/v1/auth/sign-up`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
          // credentials: "include",
        });

        const data = await res.json();
        console.log(data);
        // localStorage.setItem("token", data.data.token);
        // console.log("token", data.data.token);
        if (!res.ok) {
          throw new Error(
            data.message || "Something went wrong during sign up"
          );
        }
        toast.success("Account created successfully. Please sign in.");
        router.push("/accounts/sign-in");
        // console.log("SIGN UP", values);
      } else {
        await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        // if (!res.ok) {
        //   throw new Error(
        //     data.message || "Something went wrong during sign up"
        //   );
        // }
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
              name="username"
              type="text"
              label="Username"
              placeholder="Your username"
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
