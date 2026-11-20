import Form from "next/form";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AuthForm({
  action,
  children,
  defaultIdentifier = "",
  mode = "login",
}: {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  children: React.ReactNode;
  defaultIdentifier?: string;
  mode?: "login" | "register";
}) {
  const inputClassName =
    "h-10 rounded-lg border-border/50 bg-muted/50 text-sm transition-colors focus:border-foreground/20 focus:bg-muted";

  return (
    <Form action={action} className="flex flex-col gap-4">
      {mode === "register" ? (
        <>
          <div className="flex flex-col gap-2">
            <Label
              className="font-normal text-muted-foreground"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              autoComplete="email"
              autoFocus
              className={inputClassName}
              defaultValue={defaultIdentifier}
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label
              className="font-normal text-muted-foreground"
              htmlFor="phone"
            >
              Mobile number
            </Label>
            <Input
              autoComplete="tel"
              className={inputClassName}
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              required
              type="tel"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <Label
            className="font-normal text-muted-foreground"
            htmlFor="identifier"
          >
            Email or mobile number
          </Label>
          <Input
            autoComplete="username"
            autoFocus
            className={inputClassName}
            defaultValue={defaultIdentifier}
            id="identifier"
            name="identifier"
            placeholder="Email or +91 98765 43210"
            required
            type="text"
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Label className="font-normal text-muted-foreground" htmlFor="password">
          Password
        </Label>
        <Input
          className={inputClassName}
          id="password"
          minLength={mode === "register" ? 8 : 6}
          name="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          required
          type="password"
        />
      </div>

      {children}
    </Form>
  );
}
