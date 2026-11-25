"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useActionState, useEffect, useState } from "react";
import { AuthForm } from "@/components/chat/auth-form";
import { OAuthButtons } from "@/components/chat/oauth-buttons";
import { SubmitButton } from "@/components/chat/submit-button";
import { toast } from "@/components/chat/toast";
import { type RegisterActionState, register } from "../actions";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    { status: "idle" }
  );

  const { update: updateSession } = useSession();

  // biome-ignore lint/correctness/useExhaustiveDependencies: router and updateSession are stable refs
  useEffect(() => {
    if (state.status === "user_exists") {
      toast({ description: "Account already exists!", type: "error" });
    } else if (state.status === "failed") {
      toast({ description: "Failed to create account!", type: "error" });
    } else if (state.status === "invalid_data") {
      toast({
        description: "Failed validating your submission!",
        type: "error",
      });
    } else if (state.status === "success") {
      toast({ description: "Account created!", type: "success" });
      setIsSuccessful(true);
      void updateSession()
        .catch(() => null)
        .finally(() => {
          router.replace("/chatbot");
          router.refresh();
        });
    }
  }, [state.status]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <>
      <h1 className="text-[28px] font-normal tracking-tight text-slate-900">
        Create your account
      </h1>
      <p className="mb-3 text-sm text-slate-600">
        A personal space for your ideas and conversations
      </p>
      <AuthForm action={handleSubmit} defaultIdentifier={email} mode="register">
        <SubmitButton
          className="bg-[#1a73e8] text-white hover:bg-[#1765cc]"
          isSuccessful={isSuccessful}
        >
          Create account
        </SubmitButton>
        <OAuthButtons />
        <p className="pt-1 text-center text-[13px] text-slate-600">
          {"Have an account? "}
          <Link
            className="font-medium text-[#1a73e8] underline-offset-4 hover:underline"
            href="/login"
          >
            Sign in
          </Link>
        </p>
      </AuthForm>
    </>
  );
}
