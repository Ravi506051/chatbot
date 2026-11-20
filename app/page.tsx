import { ArrowRight, Braces, FileUp, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MessageCircle,
    title: "Think out loud",
    description: "Ask a quick question or work through a bigger idea in a natural conversation.",
  },
  {
    icon: Braces,
    title: "Make and improve",
    description: "Draft, explain, and refine code or writing with a little help along the way.",
  },
  {
    icon: FileUp,
    title: "Bring your files",
    description: "Use documents and images as context when you want to work from your own material.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#f7f8f5] text-[#17211c]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="flex h-[76px] items-center justify-between border-b border-[#17211c]/10">
          <Link className="text-[15px] font-semibold tracking-tight" href="/">
            ChatYantra
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-5">
            <Link className="hidden text-sm text-[#64716a] transition hover:text-[#17211c] sm:block" href="#features">
              Explore
            </Link>
            <Link className="rounded-full px-3 py-2 text-sm text-[#64716a] transition hover:text-[#17211c]" href="/login">
              Sign in
            </Link>
            <Link className="rounded-full bg-[#17211c] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#294238]" href="/chatbot">
              Open chatbot
            </Link>
          </nav>
        </header>

        <section className="relative grid min-h-[590px] items-center gap-12 py-16 md:grid-cols-[1.02fr_0.98fr] md:py-24">
          <div className="pointer-events-none absolute -left-40 top-16 size-80 rounded-full bg-[#cce6d8]/50 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c8d7ce] bg-white/70 px-3 py-1.5 text-xs font-medium tracking-wide text-[#435c4e]">
              <Sparkles className="size-3.5" />
              A quieter place to think
            </div>
            <h1 className="max-w-[680px] text-[clamp(3.2rem,8vw,6.1rem)] leading-[0.98] font-medium tracking-[-0.07em]">
              Your ideas, <span className="font-serif italic text-[#63806e]">in motion.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#64716a] sm:text-lg sm:leading-8">
              A thoughtful AI workspace for questions, writing, code, and the ideas you are still figuring out.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#17211c] px-6 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#294238]" href="/chatbot">
                Start a conversation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link className="inline-flex h-12 items-center rounded-full border border-[#cbd4ce] bg-white/60 px-6 text-sm font-medium text-[#35453b] transition hover:bg-white" href="#features">
                See what it can do
              </Link>
            </div>
            <div className="mt-9 flex items-center gap-2 text-xs text-[#748079]">
              <ShieldCheck className="size-4 text-[#66836f]" />
              Your own workspace, ready when you are
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px] md:ml-auto">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#dcece2] via-[#f2efe5] to-[#d9e6e0] blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/85 p-4 shadow-[0_32px_90px_-48px_rgba(30,58,43,0.38)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-[#17211c]/8 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-xl bg-[#e8f1eb] text-[#537561]">
                    <Sparkles className="size-4" />
                  </span>
                  <span className="text-sm font-semibold">A new conversation</span>
                </div>
                <span className="rounded-full bg-[#eff4ef] px-2.5 py-1 text-[10px] text-[#63796a]">READY</span>
              </div>
              <div className="flex min-h-[310px] flex-col justify-end gap-5 py-6">
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-[#eff3ef] px-4 py-3 text-sm leading-6 text-[#38483e]">
                  Help me shape a small idea into a clear plan.
                </div>
                <div className="flex max-w-[92%] items-start gap-3">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-[#dfece3] text-[#587664]">
                    <Sparkles className="size-4" />
                  </span>
                  <div className="rounded-2xl rounded-tl-md border border-[#e7ebe7] bg-white px-4 py-3 text-sm leading-6 text-[#44534a]">
                    Of course. Tell me what you have in mind, and we can work through it one step at a time.
                  </div>
                </div>
              </div>
              <Link className="group flex min-h-12 items-center justify-between rounded-2xl border border-[#dfe5e0] bg-[#fbfcfa] px-4 text-sm text-[#849088] transition hover:border-[#bccbc0]" href="/chatbot">
                <span>Message ChatYantra...</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 text-xs text-[#52655a] shadow-lg sm:block">
              <span className="mr-2 inline-block size-2 rounded-full bg-[#7eb391]" />
              A little more room to think
            </div>
          </div>
        </section>

        <section className="border-t border-[#17211c]/10 py-16 sm:py-20" id="features">
          <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#748079] uppercase">Made for your flow</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">From first thought to finished work.</h2>
            </div>
            <Link className="inline-flex items-center gap-2 text-sm font-medium text-[#526b5b] hover:text-[#17211c]" href="/chatbot">
              Open the chatbot <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {features.map(({ description, icon: Icon, title }, index) => (
              <article className="group rounded-[22px] border border-[#dfe5e0] bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c5d5ca] hover:bg-white hover:shadow-[0_20px_50px_-35px_rgba(29,64,43,0.35)]" key={title}>
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl bg-[#edf3ee] text-[#5e7b68] transition group-hover:bg-[#e1eee5]">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs text-[#9ca69f]">0{index + 1}</span>
                </div>
                <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#758078]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#17211c]/10 py-6 text-xs text-[#849088] sm:flex-row sm:items-center sm:justify-between">
          <span>ChatYantra AI</span>
          <div className="flex items-center gap-5">
            <Link className="hover:text-[#17211c]" href="/login">Sign in</Link>
            <Link className="hover:text-[#17211c]" href="/chatbot">Chatbot</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
