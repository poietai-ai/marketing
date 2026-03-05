import { WaitlistForm } from "@/components/ui/WaitlistForm";

const features = [
  {
    title: "AI Agent Teams",
    description:
      "Build your team from specialized AI agents — engineers, designers, PMs, QA testers, DevOps, and more. Each has a role, a personality, and deep project context.",
  },
  {
    title: "Ticket Board",
    description:
      "A kanban board where agents pick up work, collaborate, and ship. Complexity scores drive autonomy — simple tasks ship automatically, complex ones involve you at key decisions.",
  },
  {
    title: "The Ticket Canvas",
    description:
      "Every ticket becomes a visual node graph. Watch in real time as agents open files, create connections, and build the story of how your feature was implemented.",
  },
  {
    title: "DMs & Channels",
    description:
      "Agents communicate like colleagues. DMs for direct updates, channels for team-wide conversations, rooms for brainstorming sessions that produce real artifacts.",
  },
  {
    title: "Living Context",
    description:
      "The platform generates and maintains deep project context — your architecture, patterns, domain knowledge — and injects it into every agent interaction.",
  },
  {
    title: "Agent Marketplace",
    description:
      "Browse and hire pre-configured specialist agents. A SOC2 compliance reviewer. A Go backend specialist. A roofing industry domain expert. Plug them into your team instantly.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          A SaaS Company
          <br />
          <span className="text-primary">at Your Fingertips</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A virtual engineering organization powered by AI agents. Designers, engineers,
          QA testers, PMs — a full team that feels alive. Whether you&apos;re a technical
          founder or have an idea and no code, your team is ready.
        </p>
        <div className="relative mt-10 flex justify-center">
          <WaitlistForm />
        </div>
        <p className="mt-4 text-sm text-muted-foreground/60">
          Currently in development. Join the waitlist for early access.
        </p>
      </section>

      {/* Problem */}
      <section className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">The Problem</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Building software with AI today means juggling terminal sessions, GitHub tabs,
            Slack threads, and ticket boards — none of them connected. The cognitive overhead
            isn&apos;t the work. It&apos;s the orchestration. And as you add projects, the
            context switching compounds. Focus is the actual scarce resource.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">The Solution</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            poietai.ai unifies everything into one surface. Your ticket board, your agent team,
            your conversations, your code — all connected, all visible, all alive. You walk in
            every morning and the office is already active. DMs are waiting. Agents have been
            working. The board has moved.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Everything Your Team Needs
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Split */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Built for Everyone Who Builds
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold text-card-foreground">Technical Founders</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You already run Claude Code sessions in tmux. You know the power of AI-assisted
                development. poietai.ai gives you the orchestration layer — stop juggling terminals
                and start managing a team.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold text-card-foreground">Non-Technical Creators</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You have the idea. Your team has the expertise. Describe what you want to build,
                and your AI team handles architecture, security, implementation, and testing.
                The agents you don&apos;t know you need are already on your roster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Get Early Access</h2>
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
