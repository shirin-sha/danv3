"use client";
import { useState, useEffect } from "react";

function formatDate(value) {
  try {
    const date = new Date(value);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  } catch {
    return "-";
  }
}

export default function ApplicationsPage() {
  const [allApplications, setAllApplications] = useState([]);
  const [applications, setApplications] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [selectedJobFilter, setSelectedJobFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterApplications();
  }, [selectedJobFilter, allApplications]);

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/job-applications");
      if (response.ok) {
        const data = await response.json();
        // Sort applications by date (latest first)
        const sorted = [...data].sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
        setAllApplications(sorted);
        
        // Get unique job titles
        const uniqueJobTitles = [...new Set(sorted.map(app => app.jobTitle))].sort();
        setJobTitles(uniqueJobTitles);
        setApplications(sorted);
      }
    } catch (error) {
      console.error("Failed to fetch applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterApplications = () => {
    if (selectedJobFilter === "all") {
      setApplications(allApplications);
    } else {
      const filtered = allApplications.filter(app => app.jobTitle === selectedJobFilter);
      setApplications(filtered);
    }
  };

  const handleViewClick = (app) => {
    setSelectedApplication(app);
  };

  const closeModal = () => {
    setSelectedApplication(null);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <i className="fa-solid fa-spinner fa-spin fa-2x text-primary"></i>
        <p className="mt-3 text-muted">Loading applications...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Stats Row */}
   

      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <h4 className="mb-1 fw-bold">Job Applications</h4>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 ps-3">
              <i className="fa-solid fa-filter text-muted small"></i>
            </span>
            <select
              className="form-select border-start-0 ps-0"
              style={{ minWidth: "220px", maxWidth: "300px" }}
              value={selectedJobFilter}
              onChange={(e) => setSelectedJobFilter(e.target.value)}
            >
              <option value="all">All Jobs</option>
              {jobTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm overflow-hidden">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Candidate</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Role Applied</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Experience</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Contact</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Resume</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Applied Date</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted text-end">Action</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {applications.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-5">
                      <div className="text-muted mb-2">
                        <i className="fa-regular fa-folder-open fa-2x"></i>
                      </div>
                      <p className="mb-0 text-muted">No applications found matching your filter.</p>
                    </td>
                  </tr>
                )}
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td className="px-4">
                      <div className="d-flex align-items-center gap-3">
                        <span className="fw-semibold text-dark">{app.fullName}</span>
                      </div>
                    </td>
                    <td className="px-4">
                      <span className="badge bg-light text-dark border fw-normal px-2 py-1">
                        {app.jobTitle}
                      </span>
                    </td>
                    <td className="px-4 text-muted">{app.experience}</td>
                    <td className="px-4">
                      <div className="d-flex flex-column small">
                        <a href={`mailto:${app.email}`} className="text-decoration-none text-dark mb-1">
                          <i className="fa-regular fa-envelope me-1 text-muted"></i> {app.email}
                        </a>
                        <a href={`tel:${app.phone}`} className="text-decoration-none text-muted">
                          <i className="fa-solid fa-phone me-1 text-muted"></i> {app.phone}
                        </a>
                      </div>
                    </td>
                    <td className="px-4">
                      {app.resumeUrl ? (
                        <a
                          href={app.resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light btn-sm border text-muted d-inline-flex align-items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-file-pdf text-danger"></i>
                          <span>PDF</span>
                        </a>
                      ) : (
                        <span className="text-muted small italic">No resume</span>
                      )}
                    </td>
                    <td className="px-4 text-muted small">{formatDate(app.createdAt)}</td>
                    <td className="px-4 text-end">
                      <button
                        className="btn btn-white btn-sm border hover-shadow-sm text-primary fw-medium"
                        onClick={() => handleViewClick(app)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Viewing Application Details */}
      {selectedApplication && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-bottom px-4 py-3">
                <h5 className="modal-title fw-bold">Application Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div>
                        <h4 className="mb-1 fw-bold">{selectedApplication.fullName}</h4>
                        <p className="text-muted mb-0">Applied for <span className="fw-semibold text-primary">{selectedApplication.jobTitle}</span> on {formatDate(selectedApplication.createdAt)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 h-100">
                      <label className="small text-uppercase text-muted fw-bold mb-2">Contact Information</label>
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex align-items-center gap-2">
                          <i className="fa-regular fa-envelope text-primary"></i>
                          <a href={`mailto:${selectedApplication.email}`} className="text-dark text-decoration-none fw-medium">{selectedApplication.email}</a>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-phone text-primary"></i>
                          <a href={`tel:${selectedApplication.phone}`} className="text-dark text-decoration-none fw-medium">{selectedApplication.phone}</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 h-100">
                      <label className="small text-uppercase text-muted fw-bold mb-2">Professional Details</label>
                      <div className="d-flex flex-column gap-2">
                         <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                           <span className="text-muted">Experience</span>
                           <span className="fw-bold">{selectedApplication.experience}</span>
                         </div>
                         <div className="d-flex justify-content-between align-items-center pt-1">
                           <span className="text-muted">Resume</span>
                           {selectedApplication.resumeUrl ? (
                            <a
                              href={selectedApplication.resumeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline-primary d-flex align-items-center gap-2"
                            >
                              <i className="fa-solid fa-download"></i> Download
                            </a>
                          ) : (
                            <span className="text-muted small">Not uploaded</span>
                          )}
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="small text-uppercase text-muted fw-bold mb-2">Cover Letter</label>
                    <div className="p-3 bg-light rounded-3 text-dark" style={{ minHeight: "120px" }}>
                      {selectedApplication.coverLetter ? (
                        <p className="mb-0" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{selectedApplication.coverLetter}</p>
                      ) : (
                        <p className="text-muted mb-0 italic">No cover letter provided with this application.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-top px-4 py-3 bg-light rounded-bottom">
                <button
                  type="button"
                  className="btn btn-secondary px-4"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
