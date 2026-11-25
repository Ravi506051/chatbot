"use client";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function OAuthButtons() {
  const [pending, setPending] = useState(false);
  const [availableProviders, setAvailableProviders] =
    useState<Set<string> | null>(null);

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

  async function continueWithGoogle() {
    if (!availableProviders?.has("google")) {
      return;
    }

    setPending(true);
    try {
      await signIn("google", { redirectTo: "/chatbot" });
    } catch {
      setPending(false);
      toast.error("Google sign-in could not start. Please try again.");
    }
  }

  const googleReady = availableProviders?.has("google") ?? false;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        <span>OR</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <Button
        className="h-11 w-full rounded-md border-slate-300 bg-white text-[14px] font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900"
        disabled={pending || !googleReady}
        onClick={continueWithGoogle}
        type="button"
        variant="outline"
      >
        <GoogleMark />
        {pending ? "Connecting to Google..." : "Continue with Google"}
      </Button>
      {availableProviders && !googleReady ? (
        <p className="text-center text-xs text-muted-foreground">
          Google sign-in is temporarily unavailable. Email or mobile sign-in is
          still available.
        </p>
      ) : null}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" className="size-[18px]" viewBox="0 0 48 48">
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.7a12 12 0 0 1 0-7.4V15H5.8a20 20 0 0 0 0 18l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8A19.5 19.5 0 0 0 24 4 20 20 0 0 0 5.8 15l6.8 5.3c1.6-4.7 6.1-8.2 11.4-8.2Z"
      />
    </svg>
  );
}
