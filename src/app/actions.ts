"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";

export async function joinWaitlist(email: string): Promise<{ success: boolean; error?: string }> {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!AUDIENCE_ID) {
    console.error("RESEND_AUDIENCE_ID is not configured");
    return { success: false, error: "Waitlist is not configured yet. Please try again later." };
  }

  try {
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to add to waitlist:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
