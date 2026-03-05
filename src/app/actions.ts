"use server";

import { Resend } from "resend";

export async function joinWaitlist(email: string): Promise<{ success: boolean; error?: string }> {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error("Resend is not configured (missing RESEND_API_KEY or RESEND_AUDIENCE_ID)");
    return { success: false, error: "Waitlist is not configured yet. Please try again later." };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.contacts.create({
      email,
      audienceId,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to add to waitlist:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
