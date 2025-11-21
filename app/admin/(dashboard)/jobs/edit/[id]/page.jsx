"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditJobPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    type: "Full-time",
    experience: "",
    description: "",
    posted: "",
    featured: false,
    status: "Active",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            title: data.title || "",
            department: data.department || "",
            type: data.type || "Full-time",
            experience: data.experience || "",
            description: data.description || "",
            posted: data.posted || "",
            featured: data.featured || false,
            status: data.status || "Active",
          });
        } else {
          setMessage({ type: "error", text: "Job not found." });
        }
      } catch (error) {
        setMessage({ type: "error", text: "Failed to fetch job." });
      } finally {
        setFetching(false);
      }
    };

    fetchJob();
  }, [params.id]);

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
      const response = await fetch(`/api/jobs/${params.id}`, {
        method: "PUT",
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
        setMessage({ type: "error", text: data.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to update job." });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this job?")) return;

    try {
      const response = await fetch(`/api/jobs/${params.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/admin/jobs");
      } else {
        setMessage({ type: "error", text: "Failed to delete job." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to delete job." });
    }
  };

  if (fetching) {
    return (
      <div className="text-center py-5">
        <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
        <p className="mt-3 text-muted">Loading job details...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <div>
          <p className="text-muted mb-1" style={{ fontSize: 13 }}>
            Career Management
          </p>
          <h2 className="mb-0">Edit Job</h2>
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
                        Updating...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-check me-2"></i>
                        Update Job
                      </>
                    )}
                  </button>
                  <Link href="/admin/jobs" className="btn btn-outline-secondary">
                    Cancel
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline-danger ms-auto"
                    onClick={handleDelete}
                  >
                    <i className="fa-solid fa-trash me-2"></i>
                    Delete Job
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

