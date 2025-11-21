import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/models/Job";

// GET all jobs
export async function GET() {
  try {
    await connectToDatabase();
    const jobs = await Job.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json(
      jobs.map((job) => ({
        id: job._id.toString(),
        title: job.title,
        department: job.department,
        type: job.type,
        experience: job.experience,
        description: job.description,
        requirements: job.requirements || [],
        responsibilities: job.responsibilities || [],
        posted: job.posted,
        featured: job.featured,
        status: job.status,
        createdAt: job.createdAt?.toISOString(),
      }))
    );
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return NextResponse.json(
      { message: "Unable to fetch jobs." },
      { status: 500 }
    );
  }
}

// POST new job
export async function POST(request) {
  try {
    const data = await request.json();
    const {
      title,
      department,
      type,
      experience,
      description,
      requirements,
      responsibilities,
      posted,
      featured,
      status,
    } = data;

    if (!title || !department || !type || !experience || !description || !posted) {
      return NextResponse.json(
        { message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const job = await Job.create({
      title,
      department,
      type,
      experience,
      description,
      requirements: requirements || [],
      responsibilities: responsibilities || [],
      posted,
      featured: featured || false,
      status: status || "Active",
    });

    return NextResponse.json(
      {
        message: "Job created successfully.",
        job: {
          id: job._id.toString(),
          title: job.title,
          department: job.department,
          status: job.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create job:", error);
    return NextResponse.json(
      { 
        message: "Unable to create job.",
        error: error.message || String(error),
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

