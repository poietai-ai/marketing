import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the poietai.ai team.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact</h1>
        <p className="mt-6 text-lg text-gray-600">
          Have a question, want to partner, or just want to say hi?
        </p>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-lg font-semibold">General Inquiries</h2>
            <p className="mt-2 text-gray-600">
              Email us at{" "}
              <a
                href="mailto:hello@poietai.ai"
                className="text-blue-600 underline hover:text-blue-700"
              >
                hello@poietai.ai
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">GitHub</h2>
            <p className="mt-2 text-gray-600">
              Follow our development at{" "}
              <a
                href="https://github.com/poietai-ai"
                className="text-blue-600 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/poietai-ai
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
