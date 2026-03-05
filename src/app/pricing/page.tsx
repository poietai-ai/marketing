import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { InteractiveDotGrid } from "@/components/ui/InteractiveDotGrid";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "poietai.ai pricing — a virtual engineering team for every stage. Free tier, Starter, Pro, and Scale plans with ticket-based credits.",
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Try the full experience with your own API key.",
    cta: "Get Started",
    highlight: false,
    features: [
      "1 project",
      "3 agents",
      "5 ticket credits / month",
      "Complexity 1–5",
      "All built-in agent roles",
      "Context layer generation",
      "Community support",
    ],
    footnote: "BYOK (Bring Your Own Key) required",
  },
  {
    name: "Starter",
    price: "$39",
    period: "/mo",
    description: "For makers shipping their first product.",
    cta: "Get Early Access",
    highlight: false,
    features: [
      "3 projects",
      "6 agents",
      "30 ticket credits / month",
      "Complexity 1–7",
      "Managed API keys included",
      "Auto-refill & spending caps",
      "DMs, channels & rooms",
      "Email support",
    ],
    footnote: null,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    description: "Your full team, running day and night.",
    cta: "Get Early Access",
    highlight: true,
    features: [
      "10 projects",
      "Unlimited agents",
      "100 ticket credits / month",
      "Full complexity (1–10)",
      "Overnight autonomous runs",
      "Fan-out parallel builds",
      "Agent marketplace access",
      "BYOK option for unlimited runs",
      "Priority support",
    ],
    footnote: null,
  },
  {
    name: "Scale",
    price: "$249",
    period: "/mo",
    description: "For power users and growing teams.",
    cta: "Get Early Access",
    highlight: false,
    features: [
      "Unlimited projects",
      "Unlimited agents",
      "250 ticket credits / month",
      "Custom agent pipelines",
      "Multi-repo orchestration",
      "Private agent marketplace",
      "Team seats (coming soon)",
      "BYOK option",
      "Dedicated support",
    ],
    footnote: null,
  },
];

const creditWeights = [
  { complexity: "1–3", credits: "1 credit", cost: "$1.50", description: "Simple fixes, small features" },
  { complexity: "4–6", credits: "2 credits", cost: "$3.00", description: "Medium features, refactors" },
  { complexity: "7–8", credits: "4 credits", cost: "$6.00", description: "Complex features, multi-file changes" },
  { complexity: "9–10", credits: "8 credits", cost: "$12.00", description: "Architecture changes, full rewrites" },
];

const faqs = [
  {
    q: "What is a ticket credit?",
    a: "One ticket credit covers one agent-driven ticket through its pipeline. Higher complexity tickets use more credits because they involve more agent work — more phases, more collaboration, deeper review. You can buy additional credits anytime at $1.50 each, or set up auto-refill so you never run dry.",
  },
  {
    q: "Who decides the complexity score?",
    a: "The system does. When you create a ticket, poietai.ai assesses the scope — files affected, system boundaries crossed, phases required — and assigns a complexity score automatically. This ensures accurate credit pricing and proper agent autonomy levels. You can request a reassessment but cannot manually override it.",
  },
  {
    q: "What happens when I run out of credits?",
    a: "Your agents switch to human-approval mode — every action requires your sign-off instead of running autonomously. Work doesn't stop, it just slows down. You can purchase more credits anytime via auto-refill.",
  },
  {
    q: "What is BYOK?",
    a: "Bring Your Own Key. You use your own Anthropic API key and pay Anthropic directly for token usage. poietai.ai charges only the platform fee. This gives power users full cost control and unlimited runs.",
  },
  {
    q: "Can I set a spending cap?",
    a: "Yes. Every tier has a configurable monthly spending cap. When you hit your cap, agents shift to approval mode. You can also configure auto-refill thresholds and refill amounts — just like a prepaid system.",
  },
  {
    q: "What if an agent produces bad output?",
    a: "Credits for failed agent runs are automatically refunded. If an agent loops, hallucinates, or you reject the output, you don't pay for it.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Included tier credits reset monthly. Purchased credits (via auto-refill) roll over for one billing cycle.",
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Header + Tier Cards */}
      <section className="relative overflow-hidden px-6 pb-20 pt-20">
        <InteractiveDotGrid />
        <div className="relative mx-auto max-w-6xl pb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Your team scales with you. Start free, upgrade when you&apos;re ready.
          </p>
        </div>
        <div className="relative">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border p-8 ${
                tier.highlight
                  ? "border-primary bg-card shadow-[0_0_30px_var(--gradient-from)/10%]"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-card-foreground">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.footnote && (
                <p className="mt-6 text-xs text-muted-foreground/60">{tier.footnote}</p>
              )}

              <Link
                href="/#waitlist"
                className={`mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  tier.highlight
                    ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Credit System Explanation */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground">
            How Ticket Credits Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Credits scale with complexity. Simple tickets cost less. Complex, multi-phase
            work costs more — because your agents do more. Need more? Buy credits
            anytime at <span className="text-foreground font-medium">$1.50 / credit</span>.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {creditWeights.map((cw) => (
              <div key={cw.complexity} className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-sm font-medium text-muted-foreground">Complexity {cw.complexity}</p>
                <p className="mt-2 text-2xl font-bold text-foreground">{cw.credits}</p>
                <p className="mt-1 text-sm font-medium text-primary">{cw.cost}</p>
                <p className="mt-2 text-xs text-muted-foreground/70">{cw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spending Controls */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            You Control the Spend
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No surprise bills. Ever. Configure exactly how your credits work.
          </p>

          <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Auto-Refill</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Set a threshold — when credits drop below it, we top you up automatically.
                Choose your refill amount.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Monthly Cap</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Hard spending limit. When you hit it, agents shift to approval mode — work
                doesn&apos;t stop, it just needs your sign-off.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Cost Preview</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Before any ticket kicks off, see the estimated credit cost. Approve it or
                adjust the scope. No surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/10 to-[var(--gradient-to)]/10" />
        <div className="relative mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Ready to Meet Your Team?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join the waitlist for early access and founding member pricing.
          </p>
          <div className="relative mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}
