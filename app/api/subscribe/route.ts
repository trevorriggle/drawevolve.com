import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Supabase environment variables exist
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      // If Supabase is configured, insert into database
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/subscribers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": supabaseKey,
            "Authorization": `Bearer ${supabaseKey}`,
            "Prefer": "return=minimal",
          },
          body: JSON.stringify({
            email: trimmedEmail,
            source: "landing",
            created_at: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          console.error("Supabase insert failed:", await response.text());
          return NextResponse.json(
            { ok: false, error: "Failed to subscribe" },
            { status: 500 }
          );
        }

        return NextResponse.json({ ok: true });
      } catch (error) {
        console.error("Supabase error:", error);
        return NextResponse.json(
          { ok: false, error: "Database error" },
          { status: 500 }
        );
      }
    } else {
      // If Supabase is not configured, just log and return success
      console.warn(
        "[subscribe] Supabase not configured. Would have stored:",
        trimmedEmail
      );
      console.info(`Email subscription: ${trimmedEmail} (source: landing)`);

      // Return 202 Accepted to indicate received but not fully processed
      return NextResponse.json({ ok: true }, { status: 202 });
    }
  } catch (error) {
    console.error("Subscribe route error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
