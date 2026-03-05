import Link from "next/link";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { InteractiveDotGrid } from "@/components/ui/InteractiveDotGrid";
import { GradientTextReveal } from "@/components/ui/GradientTextReveal";

const features = [
  {
    title: "AI Agent Teams",
    description:
      "Specialized AI agents — engineers, designers, PMs, QA testers, DevOps. Each has a role, a personality, and deep project context.",
  },
  {
    title: "Ticket Board",
    description:
      "A kanban board where agents pick up work, collaborate, and ship. Complexity scores drive autonomy — simple tasks ship automatically, complex ones involve you.",
  },
  {
    title: "The Ticket Canvas",
    description:
      "Every ticket becomes a visual node graph. Watch in real time as agents open files, create connections, and build the story of your feature.",
  },
  {
    title: "DMs & Channels",
    description:
      "Agents communicate like colleagues. DMs for direct updates, channels for team-wide conversations, rooms for brainstorming that produce real artifacts.",
  },
  {
    title: "Living Context",
    description:
      "The platform generates and maintains deep project context — your architecture, patterns, domain knowledge — and injects it into every agent interaction.",
  },
  {
    title: "Agent Marketplace",
    description:
      "Browse and hire pre-configured specialist agents. A SOC2 reviewer. A Go specialist. A domain expert. Plug them into your team instantly.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-32 pt-24 text-center">
        <InteractiveDotGrid />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            Makers direct. Doers ship.
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style={{ perspective: "800px" }}>
            Your Team of{" "}
            <GradientTextReveal
              greekWord="ποιηταί"
              englishWord="Doers"
              className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent"
            />
            .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A virtual engineering organization powered by AI agents. Designers, engineers,
            QA testers, PMs — a full team that feels alive. Whether you&apos;re a technical
            founder or have an idea and no code, your team is ready.
          </p>
          <div className="relative mt-10 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Problem → Solution (merged) */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            The orchestration problem
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Building software with AI today means juggling terminal sessions, GitHub tabs,
            Slack threads, and ticket boards — none of them connected. The cognitive overhead
            isn&apos;t the work. It&apos;s the orchestration.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            poietai.ai unifies everything into one surface. Your ticket board, your agent team,
            your conversations, your code — all connected, all visible, all alive. You walk in
            every morning and the office is already active.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground">
            Everything Your Team Needs
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/pricing" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              See pricing &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Why Poietai */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            ποιηταί
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Why Poietai?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            From the Greek <em className="text-foreground">poietes</em> — doers, makers,
            creators, poets. Those who bring into being what did not exist before. That&apos;s
            what this tool enables: creation at a scale and pace that wasn&apos;t possible
            for a solo founder or a small team.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/10 to-[var(--gradient-to)]/10" />
        <div className="relative mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Get Early Access</h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re building poietai.ai right now. Join the waitlist and be first to
            meet your team.
          </p>
          <div className="relative mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}
