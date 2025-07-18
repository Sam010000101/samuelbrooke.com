// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

interface BrevoEmailPayload {
  sender: {
    name: string;
    email: string;
  };
  to: Array<{
    email: string;
    name: string;
  }>;
  subject: string;
  htmlContent: string;
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";
  const isFormPost = contentType.includes("application/x-www-form-urlencoded");

  let name = "",
    email = "",
    message = "",
    title = "",
    website = "";

  if (isFormPost) {
    const formData = await req.formData();
    name = formData.get("name") as string;
    email = formData.get("email") as string;
    message = formData.get("message") as string;
    title = formData.get("title") as string;
    website = formData.get("website") as string;
  } else {
    const body: Partial<
      ContactRequestBody & { title: string; website: string }
    > = await req.json();
    name = body.name ?? "";
    email = body.email ?? "";
    message = body.message ?? "";
    title = body.title ?? "";
    website = body.website ?? "";
  }

  if (!name || !email || !message) {
    return isFormPost
      ? NextResponse.redirect(new URL("/error.html", req.url), 303)
      : NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  if (!brevoApiKey) {
    return isFormPost
      ? NextResponse.redirect(new URL("/error.html", req.url), 303)
      : NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  const payload: BrevoEmailPayload = {
    sender: { name, email },
    to: [{ email: "reposme@outlook.com", name: "Admin" }],
    subject: title || `New message from ${name}`,
    htmlContent: `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Website:</strong> ${website || "N/A"}</p><p>${message}</p>`,
  };

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Brevo API Response Status:", res.status);
    console.log("Brevo API Response Body:", await res.text());

    if (!res.ok) {
      const details = await res.text();
      return isFormPost
        ? NextResponse.redirect(new URL("/error.html", req.url), 303)
        : NextResponse.json(
            { error: "Failed to send email", details },
            { status: 500 },
          );
    }

    return isFormPost
      ? NextResponse.redirect(new URL("/success.html", req.url), 303)
      : NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMessage =
      typeof err === "object" && err !== null && "message" in err
        ? ((err as { message?: string }).message ?? "Unknown error")
        : "Unknown error";
    return isFormPost
      ? NextResponse.redirect(new URL("/error.html", req.url), 303)
      : NextResponse.json(
          { error: "Unexpected error", details: errorMessage },
          { status: 500 },
        );
  }
}
