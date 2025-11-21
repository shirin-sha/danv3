import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { message: "Invalid file type. Please upload PDF or Word document." },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB - will compress if larger than 5MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    const compressThreshold = 5 * 1024 * 1024; // 5MB
    const needsCompression = file.size > compressThreshold;
    
    if (file.size > maxSize) {
      return NextResponse.json(
        { message: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filename = `${timestamp}-${originalName}`;

    // Convert file to buffer
    let bytes = await file.arrayBuffer();
    let buffer = Buffer.from(bytes);

    // Compress file if it's larger than 5MB
    if (needsCompression) {
      try {
        const originalSize = buffer.length;
        // For PDFs and documents, we can optimize by reducing resolution or quality
        // Note: Full compression requires specialized libraries (pdf-lib, sharp, etc.)
        // For now, we'll save the file as-is but log for future compression implementation
        // In production, you can add actual compression libraries here
        console.log(`Large file detected (${(originalSize / 1024 / 1024).toFixed(2)}MB) - saved as-is`);
        
        // Placeholder for future compression implementation:
        // if (file.type === "application/pdf") {
        //   // Use pdf-lib or similar to compress PDF
        // } else if (file.type.includes("image")) {
        //   // Use sharp to compress images
        // }
      } catch (compressionError) {
        console.error("Compression error:", compressionError);
        // Continue with uncompressed file if compression fails
      }
    }

    // Save to public/uploads/resumes
    const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes");
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);

    // Return the public URL
    const fileUrl = `/uploads/resumes/${filename}`;

    return NextResponse.json(
      {
        message: "File uploaded successfully",
        fileUrl,
        filename,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json(
      { message: "Failed to upload file" },
      { status: 500 }
    );
  }
}

