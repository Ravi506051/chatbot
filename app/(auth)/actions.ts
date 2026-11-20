"use server";

import { z } from "zod";

import { createUser, getUser } from "@/lib/db/queries";

import { signIn } from "./auth";

const loginFormSchema = z.object({
  identifier: z.string().trim().min(3),
  password: z.string().min(6),
});

const registerFormSchema = z.object({
  email: z.email(),
  phone: z.string().trim().regex(/^\+?[\d\s().-]{8,24}$/),
  password: z.string().min(8),
});

export type LoginActionState = {
  status: "idle" | "in_progress" | "success" | "failed" | "invalid_data";
};

export const login = async (
  _: LoginActionState,
  formData: FormData
): Promise<LoginActionState> => {
  try {
    const validatedData = loginFormSchema.parse({
      identifier: formData.get("identifier"),
      password: formData.get("password"),
    });

    await signIn("credentials", {
      identifier: validatedData.identifier,
      password: validatedData.password,
      redirect: false,
    });

    return { status: "success" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: "invalid_data" };
    }

    return { status: "failed" };
  }
};

export type RegisterActionState = {
  status:
    | "idle"
    | "in_progress"
    | "success"
    | "failed"
    | "user_exists"
    | "invalid_data";
};

export const register = async (
  _: RegisterActionState,
  formData: FormData
): Promise<RegisterActionState> => {
  try {
    const validatedData = registerFormSchema.parse({
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    });

    const [userByEmail] = await getUser(validatedData.email);
    const [userByPhone] = await getUser(validatedData.phone);

    if (userByEmail || userByPhone) {
      return { status: "user_exists" } as RegisterActionState;
    }
    await createUser(
      validatedData.email,
      validatedData.password,
      validatedData.phone
    );
    await signIn("credentials", {
      identifier: validatedData.email,
      password: validatedData.password,
      redirect: false,
    });

    return { status: "success" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: "invalid_data" };
    }

    return { status: "failed" };
  }
};
