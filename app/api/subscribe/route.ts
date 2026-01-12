import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EmailLead from "@/lib/models/EmailLead";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }
    await connectDB();

    // Prevent duplicates
    const exists = await EmailLead.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 409 }
      );
    }

    await EmailLead.create({ email });

    return NextResponse.json(
      { message: "Email submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
