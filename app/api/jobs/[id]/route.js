import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/models/Job";

// GET single job by ID
export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const job = await Job.findById(params.id).lean();

    if (!job) {
      return NextResponse.json(
        { message: "Job not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
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
    });
  } catch (error) {
    console.error("Failed to fetch job:", error);
    return NextResponse.json(
      { message: "Unable to fetch job." },
      { status: 500 }
    );
  }
}

// PUT update job
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    await connectToDatabase();

    const job = await Job.findByIdAndUpdate(
      params.id,
      { ...data },
      { new: true, runValidators: true }
    );

    if (!job) {
      return NextResponse.json(
        { message: "Job not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Job updated successfully.",
      job: {
        id: job._id.toString(),
        title: job.title,
        department: job.department,
        status: job.status,
      },
    });
  } catch (error) {
    console.error("Failed to update job:", error);
    return NextResponse.json(
      { message: "Unable to update job." },
      { status: 500 }
    );
  }
}

// DELETE job
export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();

    const job = await Job.findByIdAndDelete(params.id);

    if (!job) {
      return NextResponse.json(
        { message: "Job not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Job deleted successfully.",
    });
  } catch (error) {
    console.error("Failed to delete job:", error);
    return NextResponse.json(
      { message: "Unable to delete job." },
      { status: 500 }
    );
  }
}

