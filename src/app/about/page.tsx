import type { Metadata } from "next";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind poietai.ai — born from a real workflow of a solo CTO running AI agents to build production software.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About</h1>

        <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            poietai.ai was born from a real workflow — not a pitch deck.
          </p>

          <p>
            A solo CTO running a rapidly growing SaaS used Claude Code to build production
            features and CI-integrated Claude to review every pull request. The agents were
            domain-specific and precise. The PRs shipped. The reviews caught real issues —
            not just lint warnings, but architectural concerns, missing edge cases, security
            gaps.
          </p>

          <p>
            The loop worked. What didn&apos;t exist was an interface for it.
          </p>

          <p>
            Multiple terminal sessions. GitHub tabs. Slack threads. Linear boards. None of
            them connected. The cognitive overhead wasn&apos;t the work — it was the
            orchestration. Tracking which agent was doing what, what decisions were made,
            where things stood. And as the project count grew, the context switching
            compounded.
          </p>

          <p>
            poietai.ai is the answer to that problem. A desktop application that makes
            running AI engineering teams feel like managing a live, bustling company. You
            walk in every morning and the office is already active. DMs are waiting. Agents
            have been working overnight. The ticket board has moved.
          </p>

          <p>
            The name comes from the Greek word <em className="text-foreground">poiesis</em> — the act of bringing
            something into being that did not exist before. That&apos;s what this tool
            enables: creation at a scale and pace that wasn&apos;t possible for a solo
            founder or a small team.
          </p>

          <p>
            The moat isn&apos;t the AI. Anyone can call an API. The moat is context —
            the dense, project-specific knowledge that transforms a generic model into a
            team member who knows your codebase. poietai.ai generates, maintains, and
            operationalizes that context. Everything else is the interface built around
            that core.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/10 to-[var(--gradient-to)]/10" />
        <div className="relative mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Join the Journey</h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re building this in the open. Get on the waitlist for updates and
            early access.
          </p>
          <div className="relative mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}
