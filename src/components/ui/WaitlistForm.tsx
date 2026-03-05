"use client";

import { useState } from "react";
import { joinWaitlist } from "@/app/actions";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const result = await joinWaitlist(email);

    if (result.success) {
      setStatus("success");
      setMessage("You're on the list. We'll keep you posted as we build.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} id="waitlist" className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading" || status === "success"}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : status === "success" ? "Joined!" : "Join Waitlist"}
      </button>
      {message && (
        <p className={`text-sm sm:absolute sm:mt-14 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
