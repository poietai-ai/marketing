import type { Metadata } from "next";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore poietai.ai's features — AI agent teams, the ticket canvas, real-time collaboration, and the context layer that makes it all work.",
};

const sections = [
  {
    title: "AI Agent System",
    subtitle: "Your team, configured exactly how you need it",
    description:
      "Every agent has a role (PM, Engineer, Designer, QA, DevOps), a personality (pragmatic, perfectionist, ambitious, conservative), and deep project context. They're persistent team members, not chat sessions. They remember past decisions and have working relationships with other agents.",
    details: [
      "Choose from specialized roles: Frontend, Backend, Fullstack, Staff Engineer, Designer, QA, DevOps, Security, Technical Writer, PM",
      "Tune personalities to match your working style",
      "Agents carry project context across every task",
      "Team templates for common setups: Solo SaaS, API-First, Agency, Enterprise",
    ],
  },
  {
    title: "Ticket Board",
    subtitle: "Kanban that drives agent autonomy",
    description:
      "A ticket board where complexity scores determine how much autonomy agents have. Simple bug fixes ship automatically. Complex features involve you at key decision points. You set the thresholds.",
    details: [
      "Complexity scores from 1-10 drive agent autonomy levels",
      "Low complexity: agents implement, review, and merge autonomously",
      "High complexity: brainstorm sessions before any code is written",
      "Conversations and brainstorming naturally produce tickets",
    ],
  },
  {
    title: "The Ticket Canvas",
    subtitle: "Watch your team work in real time",
    description:
      "Every ticket becomes a visual node graph — the detective's corkboard. Files are evidence. Connections are the red string. Structural wires show code relationships. Touch wires show the story of how the change unfolded.",
    details: [
      "File nodes with minimap previews and comment pins",
      "Structural wires from static analysis (imports, calls, type usage)",
      "Touch wires that build as agents work (the story of the change)",
      "Agent presence — see which agent is working on which file",
      "Figma-style comment bubbles at file, section, and line level",
    ],
  },
  {
    title: "DMs & Channels",
    subtitle: "Communication that feels like a real company",
    description:
      "Agents don't send system notifications — they DM you. Channels for team-wide conversation. Rooms for structured sessions (brainstorms, design reviews, standups, war rooms) that produce real artifacts: decisions, action items, tickets.",
    details: [
      "Direct messages for 1:1 updates from any agent",
      "Team channels: #general, #incidents, #new-hires, custom",
      "Structured rooms: Brainstorm, Design Review, Standup, War Room",
      "Rooms produce artifacts — nothing gets lost",
      "Group messages for ad-hoc multi-agent threads",
    ],
  },
  {
    title: "The Context Layer",
    subtitle: "The real moat — deep project understanding",
    description:
      "Every workspace has a living context document — your architecture, coding patterns, deployment pipeline, domain knowledge. poietai.ai generates it from your codebase, maintains it as agents work, and injects it into every interaction. This is what turns generic AI into your team.",
    details: [
      "Auto-generated from your codebase on first open",
      "Continuously maintained as agents establish new patterns",
      "Injected into every agent's context on every task",
      "Stack decisions, file structure, conventions, domain knowledge",
    ],
  },
  {
    title: "Agent Marketplace",
    subtitle: "Hire specialists instantly",
    description:
      "Browse pre-configured agents built by the community. A SOC2 compliance reviewer. A Go backend specialist. A roofing industry domain expert. Hire them into your project — they introduce themselves in #new-hires and your existing team welcomes them.",
    details: [
      "Community-built specialist agents",
      "Role, personality, and specialization previews",
      "Sample outputs so you can evaluate before hiring",
      "Customize any hired agent for your specific project",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Features</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Everything you need to run a virtual engineering organization.
        </p>
      </section>

      {sections.map((section, i) => (
        <section
          key={section.title}
          className={`px-6 py-20 ${i % 2 === 0 ? "bg-gray-50" : ""}`}
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>
            <p className="mt-2 text-lg font-medium text-blue-600">{section.subtitle}</p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {section.description}
            </p>
            <ul className="mt-8 space-y-3">
              {section.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="border-t border-gray-100 bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Get Early Access</h2>
          <p className="mt-4 text-gray-600">
            Join the waitlist and be first to meet your team.
          </p>
          <div className="relative mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}
