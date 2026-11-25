import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  FileText,
  Fingerprint,
  Image,
  LockKeyhole,
  MessageCircle,
  PanelsTopLeft,
  Sparkles,
  TimerReset,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MessageCircle,
    title: "Think out loud",
    description:
      "Ask the small question, untangle the big one, or keep a useful conversation going.",
  },
  {
    icon: Braces,
    title: "Build with confidence",
    description:
      "Draft code, understand an error, and explore a better way to solve the problem.",
  },
  {
    icon: FileText,
    title: "Bring your own context",
    description:
      "Upload documents and images to get help grounded in the material you are working with.",
  },
  {
    icon: Image,
    title: "Make complex ideas clearer",
    description:
      "Work through explanations, outlines, and next steps without losing your train of thought.",
  },
  {
    icon: PanelsTopLeft,
    title: "Keep work in one place",
    description:
      "Return to your saved conversations and pick up where you left off after signing in.",
  },
  {
    icon: Zap,
    title: "Powered by Gemini",
    description:
      "ChatYantra uses Gemini 2.5 Flash through Vercel AI Gateway for responsive everyday help.",
  },
];

const steps = [
  ["01", "Bring a thought", "Start with a question, a rough idea, or a file you want to understand."],
  ["02", "Work it through", "Ask follow-ups, refine the answer, and shape the result together."],
  ["03", "Keep moving", "Your conversations stay connected to your account, ready for next time."],
];

const faqs = [
  ["What is ChatYantra AI?", "A private AI workspace for everyday questions, writing, coding, and working with your files. It uses Gemini 2.5 Flash through Vercel AI Gateway."],
  ["How do I create an account?", "Register with your email address, mobile number, and password, or use Google sign-in when it is enabled for the deployment."],
  ["Are my conversations saved?", "Signed-in conversations are stored with your account so you can return to them later. Your chats are not public."],
  ["Is there a usage limit?", "Yes. Chat requests are limited to 10 messages per hour per account. An additional IP-based hourly limit helps protect the service from abuse."],
  ["Can I use my own Gemini API key?", "This build routes Gemini through the app's Vercel AI Gateway configuration; visitors do not need to paste an API key."],
];

const privacyFeatures = [
  { icon: Fingerprint, title: "Sign in your way", description: "Use email or mobile with your password, or continue with Google when configured." },
  { icon: TimerReset, title: "Clear hourly limits", description: "The app enforces account and IP request limits to help prevent abuse." },
  { icon: LockKeyhole, title: "Separate account data", description: "Your conversations are associated with your signed-in account." },
];

export default function LandingPage() {
  return (
    <main className="min-h-dvh overflow-x-clip bg-[#f7f8f5] text-[#17211c] selection:bg-[#cfe2d4]">
      <header className="sticky top-0 z-50 border-b border-[#17211c]/8 bg-[#f7f8f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight" href="/" aria-label="ChatYantra AI home">
            <span className="grid size-8 place-items-center rounded-xl bg-[#17211c] text-white"><Sparkles className="size-4" /></span>
            ChatYantra <span className="-ml-2 text-[#718077]">AI</span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm text-[#66736b] md:flex">
            <Link className="transition hover:text-[#17211c]" href="#features">Features</Link>
            <Link className="transition hover:text-[#17211c]" href="#how-it-works">How it works</Link>
            <Link className="transition hover:text-[#17211c]" href="#privacy">Privacy</Link>
            <Link className="transition hover:text-[#17211c]" href="#faq">FAQ</Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link className="rounded-full px-3 py-2 text-sm text-[#59675e] transition hover:text-[#17211c]" href="/login">Sign in</Link>
            <Link className="inline-flex items-center gap-2 rounded-full bg-[#17211c] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#294238]" href="/register">Get started <ArrowRight className="size-3.5" /></Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <section className="relative grid min-h-[660px] items-center gap-14 py-20 md:grid-cols-[1fr_0.92fr] md:py-24">
          <div className="pointer-events-none absolute -left-44 top-14 size-[440px] rounded-full bg-[#cce6d8]/50 blur-[90px]" />
          <div className="pointer-events-none absolute right-6 top-20 size-72 rounded-full bg-[#e8e4d2]/60 blur-[85px]" />
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c8d7ce] bg-white/75 px-3.5 py-2 text-xs font-medium tracking-wide text-[#435c4e] shadow-sm">
              <span className="size-1.5 rounded-full bg-[#6da780]" /> YOUR SPACE TO THINK CLEARLY
            </div>
            <h1 className="max-w-[680px] text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.94] font-medium tracking-[-0.075em]">
              Make room for your <span className="font-serif font-normal italic text-[#63806e]">next idea.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#64716a] sm:text-lg">
              A thoughtful AI workspace for the questions, plans, writing, and code you are working through. Start anywhere. Keep going at your pace.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#17211c] px-6 text-sm font-medium text-white shadow-lg shadow-[#17211c]/10 transition hover:-translate-y-0.5 hover:bg-[#294238]" href="/register">
                Create your workspace <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link className="inline-flex h-12 items-center gap-2 rounded-full border border-[#cbd4ce] bg-white/60 px-5 text-sm font-medium text-[#35453b] transition hover:bg-white" href="#features">
                Explore ChatYantra <ArrowDown className="size-3.5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#748079]">
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#66836f]" /> Gemini 2.5 Flash</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#66836f]" /> Sign in to save chats</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#66836f]" /> File-aware conversations</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px] md:ml-auto">
            <div className="absolute -inset-7 rounded-[38px] bg-gradient-to-br from-[#dcece2] via-[#f2efe5] to-[#d9e6e0] blur-2xl" />
            <div className="relative rotate-[1deg] overflow-hidden rounded-[28px] border border-white/90 bg-white/90 p-4 shadow-[0_35px_100px_-48px_rgba(30,58,43,0.48)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-[#17211c]/8 pb-4">
                <div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-xl bg-[#e8f1eb] text-[#537561]"><Sparkles className="size-4" /></span><span className="text-sm font-semibold">A new conversation</span></div>
                <span className="rounded-full bg-[#eff4ef] px-2.5 py-1 text-[10px] font-medium tracking-wider text-[#63796a]">READY</span>
              </div>
              <div className="flex min-h-[310px] flex-col justify-end gap-5 py-6">
                <div className="ml-auto max-w-[84%] rounded-2xl rounded-br-md bg-[#eff3ef] px-4 py-3 text-sm leading-6 text-[#38483e]">I have a rough idea for a small project. Can you help me turn it into a plan?</div>
                <div className="flex max-w-[94%] items-start gap-3">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-[#dfece3] text-[#587664]"><Sparkles className="size-4" /></span>
                  <div className="rounded-2xl rounded-tl-md border border-[#e7ebe7] bg-white px-4 py-3 text-sm leading-6 text-[#44534a]">Absolutely. Let’s make it feel manageable. What would you like the project to do first?</div>
                </div>
                <div className="ml-auto flex items-center gap-2 rounded-xl border border-[#e5e9e5] bg-[#fbfcfa] px-3 py-2 text-xs text-[#748079]"><FileText className="size-3.5" /> project-notes.pdf <span className="text-[#8fa18f]">Ready to use</span></div>
              </div>
              <div className="flex min-h-12 items-center justify-between rounded-2xl border border-[#dfe5e0] bg-[#fbfcfa] px-4 text-sm text-[#849088]"><span>Message ChatYantra...</span><span className="grid size-7 place-items-center rounded-lg bg-[#17211c] text-white"><ArrowRight className="size-3.5" /></span></div>
            </div>
            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white bg-white/95 px-4 py-3 text-xs text-[#52655a] shadow-lg sm:block"><span className="mr-2 inline-block size-2 rounded-full bg-[#7eb391]" /> A little more room to think</div>
          </div>
        </section>

        <section className="border-y border-[#17211c]/10 py-7" aria-label="ChatYantra highlights">
          <div className="grid gap-5 text-center sm:grid-cols-3 sm:gap-2">
            <p className="text-sm text-[#67736b]"><span className="font-semibold text-[#26372d]">One capable model</span><span className="mx-2 text-[#b9c1bb]">/</span>Gemini 2.5 Flash</p>
            <p className="text-sm text-[#67736b]"><span className="font-semibold text-[#26372d]">Your conversations</span><span className="mx-2 text-[#b9c1bb]">/</span>Saved to your account</p>
            <p className="text-sm text-[#67736b]"><span className="font-semibold text-[#26372d]">A little protection</span><span className="mx-2 text-[#b9c1bb]">/</span>Hourly usage limits</p>
          </div>
        </section>

        <section className="py-24 sm:py-32" id="features">
          <div className="mb-11 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div><p className="text-xs font-semibold tracking-[0.18em] text-[#748079] uppercase">Made for your flow</p><h2 className="mt-4 max-w-2xl text-4xl leading-[1.08] font-medium tracking-[-0.055em] sm:text-5xl">From first thought to finished work.</h2></div>
            <p className="max-w-md text-sm leading-7 text-[#748079] md:justify-self-end">Some days you need a quick answer. Some days you need a patient thought partner. ChatYantra is ready for both.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ description, icon: Icon, title }, index) => (
              <article className="group min-h-[225px] rounded-[24px] border border-[#dfe5e0] bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c5d5ca] hover:bg-white hover:shadow-[0_20px_50px_-35px_rgba(29,64,43,0.35)] sm:p-7" key={title}>
                <div className="mb-9 flex items-center justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-[#edf3ee] text-[#5e7b68] transition group-hover:bg-[#e1eee5]"><Icon className="size-5" /></span><span className="text-xs text-[#a0aaa3]">0{index + 1}</span></div>
                <h3 className="text-base font-semibold tracking-tight">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[#758078]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 rounded-[32px] bg-[#e9eee8] px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center" id="how-it-works">
          <div><p className="text-xs font-semibold tracking-[0.18em] text-[#748079] uppercase">A simple rhythm</p><h2 className="mt-4 max-w-md text-4xl leading-[1.08] font-medium tracking-[-0.055em] sm:text-5xl">A good place to start is right here.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#6c786f]">You do not need the perfect prompt. Start with what you know, and take the next step together.</p><Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#405b49] transition hover:gap-3" href="/register">Start your first conversation <ArrowRight className="size-4" /></Link></div>
          <div className="space-y-3">
            {steps.map(([number, title, description]) => <article className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-white/80 bg-white/65 p-5 sm:grid-cols-[52px_1fr] sm:gap-5 sm:p-6" key={number}><span className="grid size-10 place-items-center rounded-full bg-[#dce9de] text-xs font-semibold text-[#54715e]">{number}</span><div><h3 className="font-semibold tracking-tight">{title}</h3><p className="mt-1.5 text-sm leading-6 text-[#748079]">{description}</p></div></article>)}
          </div>
        </section>

        <section className="grid gap-10 py-24 sm:py-32 md:grid-cols-2 md:items-center" id="privacy">
          <div className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-[#17211c] p-7 text-white sm:min-h-[360px] sm:p-10">
            <div className="absolute -right-20 -top-24 size-72 rounded-full border border-white/10"/><div className="absolute -right-5 -top-9 size-44 rounded-full border border-white/10"/>
            <div className="relative flex h-full min-h-[250px] flex-col justify-between"><div className="flex size-12 items-center justify-center rounded-2xl bg-white/10"><LockKeyhole className="size-5 text-[#c8e0ce]" /></div><div><p className="text-xs font-medium tracking-[0.18em] text-[#a7c6ae] uppercase">Your space stays yours</p><h2 className="mt-4 max-w-sm text-3xl leading-tight font-medium tracking-[-0.045em] sm:text-4xl">Private conversations, connected to your account.</h2></div><div className="flex flex-wrap gap-2 text-xs text-white/75"><span className="rounded-full border border-white/15 px-3 py-1.5">Account-based history</span><span className="rounded-full border border-white/15 px-3 py-1.5">Protected chat access</span></div></div>
          </div>
          <div className="md:pl-8"><p className="text-xs font-semibold tracking-[0.18em] text-[#748079] uppercase">Built for a little peace of mind</p><h2 className="mt-4 max-w-lg text-4xl leading-[1.08] font-medium tracking-[-0.055em] sm:text-5xl">Thoughtful help should feel safe to use.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#748079]">Sign in before chatting, keep your history tied to your account, and let hourly limits help protect the service for everyone.</p><div className="mt-7 space-y-4">{privacyFeatures.map(({ description, icon: Icon, title }) => <div className="flex gap-3" key={title}><span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-white text-[#66836f]"><Icon className="size-4" /></span><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-[#7c877f]">{description}</p></div></div>)}</div></div>
        </section>

        <section className="border-y border-[#17211c]/10 py-20 sm:py-24" id="faq">
          <div className="mx-auto max-w-3xl"><div className="text-center"><p className="text-xs font-semibold tracking-[0.18em] text-[#748079] uppercase">Good to know</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] sm:text-5xl">A few quick answers.</h2></div><div className="mt-10 divide-y divide-[#17211c]/10">{faqs.map(([question, answer]) => <details className="group py-5" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold marker:hidden sm:text-base"><span>{question}</span><span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#dfe5e0] text-[#63796a] transition group-open:rotate-45"><span className="text-lg leading-none">+</span></span></summary><p className="max-w-2xl pt-3 pr-10 text-sm leading-7 text-[#748079]">{answer}</p></details>)}</div></div>
        </section>

        <section className="relative overflow-hidden py-24 text-center sm:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dcece2]/80 blur-[95px]" />
          <div className="relative mx-auto max-w-2xl"><span className="mx-auto grid size-12 place-items-center rounded-2xl bg-white text-[#63806e] shadow-sm"><Sparkles className="size-5" /></span><p className="mt-6 text-xs font-semibold tracking-[0.18em] text-[#748079] uppercase">A quiet place to think</p><h2 className="mt-4 text-4xl leading-[1.05] font-medium tracking-[-0.06em] sm:text-6xl">Make room for your <span className="font-serif font-normal italic text-[#63806e]">next good idea.</span></h2><p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#748079]">Open your workspace and see where the conversation takes you.</p><Link className="group mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-[#17211c] px-6 text-sm font-medium text-white shadow-lg shadow-[#17211c]/10 transition hover:-translate-y-0.5 hover:bg-[#294238]" href="/register">Get started with ChatYantra <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></Link></div>
        </section>

        <footer className="flex flex-col gap-5 border-t border-[#17211c]/10 py-7 text-xs text-[#849088] sm:flex-row sm:items-center sm:justify-between">
          <Link className="font-semibold tracking-tight text-[#34483a]" href="/">ChatYantra AI</Link><span>A thoughtful space for whatever is next.</span><div className="flex items-center gap-5"><Link className="hover:text-[#17211c]" href="#features">Features</Link><Link className="hover:text-[#17211c]" href="#faq">FAQ</Link><Link className="hover:text-[#17211c]" href="/login">Sign in</Link></div>
        </footer>
      </div>
    </main>
  );
}
