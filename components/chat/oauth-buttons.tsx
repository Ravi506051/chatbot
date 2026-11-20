"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function OAuthButtons() {
  const [pending, setPending] = useState<"google" | "github" | null>(null);

  async function continueWith(provider: "google" | "github") {
    setPending(provider);
    try {
      await signIn(provider, { redirectTo: "/chatbot" });
    } catch {
      setPending(null);
      toast.error(`${provider === "google" ? "Google" : "GitHub"} sign-in is not configured yet.`);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        <span>OR CONTINUE WITH</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button
          className="h-10 rounded-lg"
          disabled={pending !== null}
          onClick={() => continueWith("google")}
          type="button"
          variant="outline"
        >
          <span className="font-semibold text-base">G</span>
          {pending === "google" ? "Opening..." : "Google"}
        </Button>
        <Button
          className="h-10 rounded-lg"
          disabled={pending !== null}
          onClick={() => continueWith("github")}
          type="button"
          variant="outline"
        >
          <Github className="size-4" />
          {pending === "github" ? "Opening..." : "GitHub"}
        </Button>
      </div>
    </div>
  );
}
