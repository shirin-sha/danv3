"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewJobPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    type: "Full-time",
    experience: "",
    description: "",
    posted: new Date().toISOString().split("T")[0],
    featured: false,
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message });
        setTimeout(() => {
          router.push("/admin/jobs");
        }, 1500);
      } else {
        const errorMsg = data.error 
          ? `${data.message} - ${data.error}` 
          : data.message || "Failed to create job";
        setMessage({ type: "error", text: errorMsg });
        console.error("Error creating job:", data);
      }
    } catch (error) {
      setMessage({ type: "error", text: `Failed to create job: ${error.message}` });
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <div>
          <p className="text-muted mb-1" style={{ fontSize: 13 }}>
            Career Management
          </p>
          <h2 className="mb-0">Add New Job</h2>
        </div>
        <div className="ms-auto">
          <Link href="/admin/jobs" className="btn btn-outline-secondary">
            <i className="fa-solid fa-arrow-left me-2"></i>
            Back to Jobs
          </Link>
        </div>
      </div>

      {message.text && (
        <div
          className={`alert ${
            message.type === "success" ? "alert-success" : "alert-danger"
          } mb-4`}
        >
          {message.text}
        </div>
      )}

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-8">
                <label className="form-label">
                  Job Title <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="e.g. Senior Software Engineer"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">
                  Status <span className="text-danger">*</span>
                </label>
                <select
                  name="status"
                  className="form-select"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Department <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  placeholder="e.g. Engineering"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Job Type <span className="text-danger">*</span>
                </label>
                <select
                  name="type"
                  className="form-select"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">
                  Experience Required <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  className="form-control"
                  placeholder="e.g. 3-5 years"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">
                  Posted Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  name="posted"
                  className="form-control"
                  value={formData.posted}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">
                  Job Description <span className="text-danger">*</span>
                </label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="4"
                  placeholder="Write a brief description of the job role..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="featured"
                    className="form-check-input"
                    id="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="featured">
                    Mark as Featured Job
                  </label>
                </div>
              </div>

              <div className="col-12">
                <hr />
                <div className="d-flex gap-3">
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin me-2"></i>
                        Creating...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-check me-2"></i>
                        Create Job
                      </>
                    )}
                  </button>
                  <Link href="/admin/jobs" className="btn btn-outline-secondary">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

