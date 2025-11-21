"use client";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Link from "next/link";

function ApplyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams.get("jobId");
  const [job, setJob] = useState(null);
  const [jobLoading, setJobLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
  });
  
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) {
        setJobLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (response.ok) {
          const data = await response.json();
          setJob(data);
        }
      } catch (error) {
        console.error("Failed to fetch job:", error);
      } finally {
        setJobLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const compressPDF = async (file) => {
    // For PDFs, we'll upload and let server handle compression
    // Just return the file for now - server will compress if needed
    return file;
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        setMessage({ type: "error", text: "Please upload a PDF or Word document" });
        e.target.value = "";
        return;
      }
      
      // Check file size - allow up to 10MB, compress if over 5MB
      const maxSize = 10 * 1024 * 1024; // 10MB
      const compressThreshold = 5 * 1024 * 1024; // 5MB
      
      if (file.size > maxSize) {
        setMessage({ 
          type: "error", 
          text: `File is too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Maximum size is 10MB.` 
        });
        e.target.value = "";
        return;
      }
      
      if (file.size > compressThreshold) {
        // File is large but within limits - will be compressed on server
        const fileSizeMB = (file.size / 1024 / 1024).toFixed(2);
        setResumeFile(file);
        setMessage({ 
          type: "info", 
          text: `Large file detected (${fileSizeMB}MB). It will be automatically compressed during upload.` 
        });
      } else {
        // File is within normal size
        setResumeFile(file);
        setMessage({ type: "", text: "" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      let resumeUrl = "";
      let resumeFilename = "";

      // Upload resume file if provided
      if (resumeFile) {
        setUploadingFile(true);
        const fileFormData = new FormData();
        fileFormData.append("file", resumeFile);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: fileFormData,
        });

        if (!uploadResponse.ok) {
          const uploadError = await uploadResponse.json();
          setMessage({ type: "error", text: uploadError.message || "Failed to upload resume" });
          setLoading(false);
          setUploadingFile(false);
          return;
        }

        const uploadData = await uploadResponse.json();
        resumeUrl = uploadData.fileUrl;
        resumeFilename = uploadData.filename;
        setUploadingFile(false);
      }

      // Check if job exists
      if (!job || !job.title) {
        setMessage({ type: "error", text: "Job information not found. Please try again." });
        setLoading(false);
        return;
      }

      // Submit application
      const response = await fetch("/api/job-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: jobId,
          jobTitle: job.title,
          ...formData,
          resumeUrl,
          resumeFilename,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          coverLetter: "",
        });
        setResumeFile(null);
        
        // Redirect to careers page after 2 seconds
        setTimeout(() => {
          router.push("/careers");
        }, 2000);
      } else {
        const errorMsg = data.error 
          ? `${data.message} - ${data.error}` 
          : data.message || "Failed to submit application";
        setMessage({ type: "error", text: errorMsg });
        console.error("Error submitting application:", data);
      }
    } catch (error) {
      setMessage({ type: "error", text: `Failed to submit application: ${error.message}` });
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setUploadingFile(false);
    }
  };

  if (jobLoading) {
    return (
      <>
        <Header2 />
        <div className="container section-padding text-center">
          <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
          <p className="mt-3 text-muted">Loading job details...</p>
        </div>
        <Footer1 />
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Header2 />
        <div className="container section-padding text-center">
          <h2>Job not found</h2>
          <Link href="/careers" className="theme-btn mt-4">
            Back to Careers
          </Link>
        </div>
        <Footer1 />
      </>
    );
  }

  return (
    <>
      <Header2 />
      
      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/pagetitle1.jpg")' }}
      >
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Apply
                </h1>
              </div>
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>
                  <Link href={`/careers`}>Careers</Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>Apply</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Job Details Card */}
              <div className="items-bg mb-4" style={{ padding: 24 }}>
                <h3 className="mb-3">{job.title}</h3>
                <div className="d-flex flex-wrap gap-3 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-building" style={{ color: '#0198F1' }}></i>
                    <span>{job.department}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-briefcase" style={{ color: '#0198F1' }}></i>
                    <span>{job.experience}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-clock" style={{ color: '#0198F1' }}></i>
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="mb-0">{job.description}</p>
              </div>

              {/* Application Form */}
              <div className="items-bg" style={{ padding: 32 }}>
                <h4 className="mb-4">Submit Your Application</h4>
                
                {message.text && (
                  <div
                    className={`alert ${
                      message.type === "success" ? "alert-success" : "alert-danger"
                    }`}
                    role="alert"
                  >
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-12">
                      <label className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Years of Experience <span className="text-danger">*</span>
                      </label>
                      <select
                        name="experience"
                        className="form-select"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select experience</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="2-3 years">2-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Upload Resume (Optional)
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <small className="text-muted">
                        Accepted formats: PDF, DOC, DOCX 
                      </small>
                      {resumeFile && (
                        <div className="mt-2 text-success">
                          <i className="fa-solid fa-check-circle me-2"></i>
                          {resumeFile.name}
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Cover Letter (Optional)
                      </label>
                      <textarea
                        name="coverLetter"
                        className="form-control"
                        rows="5"
                        placeholder="Tell us why you're a great fit for this role..."
                        value={formData.coverLetter}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="theme-btn w-100"
                        disabled={loading}
                        style={{ padding: '16px' }}
                      >
                        {uploadingFile ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin me-2"></i>
                            Uploading Resume...
                          </>
                        ) : loading ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin me-2"></i>
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="col-12 text-center">
                      <Link href="/careers" className="link-btn">
                        <i className="fa-solid fa-arrow-left me-2"></i>
                        Back to All Jobs
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <>
        <Header2 />
        <div className="container section-padding text-center">
          <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
          <p className="mt-3 text-muted">Loading...</p>
        </div>
        <Footer1 />
      </>
    }>
      <ApplyContent />
    </Suspense>
  );
}

