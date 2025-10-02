"use client";

import { useState, FormEvent } from "react";
import { track } from "@/lib/analytics";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    track("waitlist_submit", { source: "ipad_beta" });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus("success");
        setMessage("You're on the list—thank you!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="waitlist" className="py-24 sm:py-32 bg-blue-600">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          iPad Beta Waitlist
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Be first to try DrawEvolve. We'll invite testers in waves and send occasional progress notes. No spam.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={status === "submitting"}
            className="flex-1 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === "submitting" ? "Joining..." : "Join Beta"}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-sm ${
              status === "success" ? "text-blue-100" : "text-red-200"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
