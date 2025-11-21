import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const enquiry = await Enquiry.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    return NextResponse.json(
      {
        message: "Enquiry submitted successfully.",
        enquiry: {
          id: enquiry._id.toString(),
          firstName: enquiry.firstName,
          lastName: enquiry.lastName,
          email: enquiry.email,
          phone: enquiry.phone,
          message: enquiry.message,
          status: enquiry.status,
          createdAt: enquiry.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to save enquiry:", error);
    return NextResponse.json(
      { message: "Unable to submit enquiry right now." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();

return NextResponse.json(
  enquiries.map((enquiry) => ({
    id: enquiry._id.toString(),
    firstName: enquiry.firstName,
    lastName: enquiry.lastName,
    email: enquiry.email,
    phone: enquiry.phone,
    message: enquiry.message,
    status: enquiry.status,
    createdAt: enquiry.createdAt?.toISOString(),
  }))
);
  } catch (error) {
    console.error("Failed to fetch enquiries:", error);
    return NextResponse.json(
      { message: "Unable to fetch enquiries." },
      { status: 500 }
    );
  }
}

