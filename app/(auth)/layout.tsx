import { MessageCircle, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center bg-[#f5f7fa] p-4 sm:p-8">
      <div className="grid min-h-[min(720px,calc(100dvh-4rem))] w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_48px_-28px_rgba(15,23,42,0.25)] lg:grid-cols-[1fr_0.9fr]">
        <section className="flex flex-col p-6 sm:p-10 lg:p-12">
          <Link
            className="mb-8 flex w-fit items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
            href="/"
          >
            <MoveLeft className="size-4" />
            Back to ChatYantra
          </Link>
          <div className="mx-auto flex w-full max-w-[390px] flex-1 flex-col justify-center">
            <div className="mb-10 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                <MessageCircle className="size-5" strokeWidth={1.8} />
              </span>
              <span className="text-[17px] font-semibold tracking-tight text-slate-900">
                ChatYantra
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {children}
              <p className="pt-3 text-center text-xs leading-5 text-slate-500">
                Use the email or mobile number linked to your ChatYantra account.
              </p>
            </div>
          </div>
        </section>

        <aside className="relative hidden flex-col justify-between border-l border-slate-200 bg-[#f8fafc] p-12 lg:flex">
          <div className="max-w-sm pt-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Your workspace
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-slate-900">
              A little more room for the ideas you’re working through.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-600">
              Pick up a conversation, explore a question, or make progress on a
              project in one calm place.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Private conversations, saved to your account
          </div>
          <div className="pointer-events-none absolute bottom-24 right-12 h-40 w-40 rounded-full border border-slate-200/70" />
          <div className="pointer-events-none absolute bottom-32 right-20 h-24 w-24 rounded-full border border-slate-200/70" />
        </aside>
      </div>
    </main>
  );
}
