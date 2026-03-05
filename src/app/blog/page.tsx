import type { Metadata } from "next";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Building poietai.ai in public — updates, insights, and behind-the-scenes of creating a virtual engineering organization.",
};

export default function BlogPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Building in public. Updates, insights, and the story of creating poietai.ai.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-lg rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-xl font-semibold">First post coming soon</p>
          <p className="mt-4 text-gray-600">
            Join the waitlist to get notified when we start publishing.
          </p>
          <div className="relative mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}
