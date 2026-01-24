import { NextResponse } from "next/server";
import EmailLead from "@/lib/models/EmailLead";
import dbConnect from "@/lib/db";

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

    await dbConnect();
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
    console.error("SUBSCRIBE API ERROR:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
