import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import JobApplication from "@/models/JobApplication";

export async function POST(request) {
  try {
    const { jobId, jobTitle, fullName, email, phone, experience, coverLetter, resumeUrl, resumeFilename } = await request.json();

    if (!jobId || !jobTitle || !fullName || !email || !phone || !experience) {
      return NextResponse.json(
        { message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const application = await JobApplication.create({
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      experience,
      coverLetter: coverLetter || "",
      resumeUrl: resumeUrl || "",
      resumeFilename: resumeFilename || "",
    });

    return NextResponse.json(
      {
        message: "Application submitted successfully! We'll contact you soon.",
        application: {
          id: application._id.toString(),
          jobTitle: application.jobTitle,
          fullName: application.fullName,
          email: application.email,
          status: application.status,
          createdAt: application.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to submit application:", error);
    return NextResponse.json(
      { 
        message: "Unable to submit application right now. Please try again.",
        error: error.message || String(error),
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const applications = await JobApplication.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json(
      applications.map((app) => ({
        id: app._id.toString(),
        jobId: app.jobId,
        jobTitle: app.jobTitle,
        fullName: app.fullName,
        email: app.email,
        phone: app.phone,
        experience: app.experience,
        coverLetter: app.coverLetter,
        resumeUrl: app.resumeUrl,
        resumeFilename: app.resumeFilename,
        status: app.status,
        createdAt: app.createdAt?.toISOString(),
      }))
    );
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    return NextResponse.json(
      { message: "Unable to fetch applications." },
      { status: 500 }
    );
  }
}

