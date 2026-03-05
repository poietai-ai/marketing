import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What's new in poietai.ai — shipped features and updates.",
};

export default function ChangelogPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Changelog</h1>
        <p className="mt-6 text-lg text-gray-600">
          What we&apos;ve shipped. Updated as we build.
        </p>

        <div className="mt-16 space-y-12">
          <article className="border-l-2 border-blue-600 pl-6">
            <time className="text-sm font-medium text-gray-400">March 2026</time>
            <h2 className="mt-2 text-xl font-semibold">Project Kickoff</h2>
            <p className="mt-2 text-gray-600">
              poietai.ai development begins. Desktop app foundation with Tauri 2,
              agent execution system, ticket board, DM channels, and the ticket canvas
              with real-time node graph visualization.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
