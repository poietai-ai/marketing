import type { Metadata } from "next";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "poietai.ai pricing — currently in development. Join the waitlist for early access and pricing announcements.",
};

export default function PricingPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Pricing</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          We&apos;re still building poietai.ai. Pricing will be announced when we&apos;re
          closer to launch.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-lg rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-2xl font-semibold">Coming Soon</p>
          <p className="mt-4 text-gray-600">
            Join the waitlist to be the first to know when pricing is available —
            and to get early access when we launch.
          </p>
          <div className="relative mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}
