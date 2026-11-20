"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function OAuthButtons() {
  const [pending, setPending] = useState<"google" | "github" | null>(null);
  const [availableProviders, setAvailableProviders] = useState<Set<string> | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/api/auth/providers")
      .then((response) => (response.ok ? response.json() : {}))
      .then((providers: Record<string, unknown>) => {
        if (active) setAvailableProviders(new Set(Object.keys(providers)));
      })
      .catch(() => {
        if (active) setAvailableProviders(new Set());
      });

    return () => {
      active = false;
    };
  }, []);

  async function continueWith(provider: "google" | "github") {
    setPending(provider);
    try {
      await signIn(provider, { redirectTo: "/chatbot" });
    } catch {
      setPending(null);
      toast.error(`${provider === "google" ? "Google" : "GitHub"} sign-in is not configured yet.`);
    }
  }

  const googleReady = availableProviders?.has("google") ?? false;
  const githubReady = availableProviders?.has("github") ?? false;

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
          disabled={pending !== null || !googleReady}
          onClick={() => continueWith("google")}
          type="button"
          variant="outline"
        >
          <span className="font-semibold text-base">G</span>
          {pending === "google"
            ? "Opening..."
            : googleReady
              ? "Google"
              : "Google (setup needed)"}
        </Button>
        <Button
          className="h-10 rounded-lg"
          disabled={pending !== null || !githubReady}
          onClick={() => continueWith("github")}
          type="button"
          variant="outline"
        >
          <Github className="size-4" />
          {pending === "github"
            ? "Opening..."
            : githubReady
              ? "GitHub"
              : "GitHub (setup needed)"}
        </Button>
      </div>
      {availableProviders && !googleReady && !githubReady ? (
        <p className="text-center text-xs text-muted-foreground">
          Social sign-in is not configured yet. Use your email and password for now.
        </p>
      ) : null}
    </div>
  );
}
