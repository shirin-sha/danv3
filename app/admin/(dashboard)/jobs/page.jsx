import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/models/Job";
import Link from "next/link";

const statusBadgeClass = {
  Active: "bg-success bg-opacity-10 text-success border border-success border-opacity-25",
  Inactive: "bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25",
  Closed: "bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25",
};

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

export default async function JobsPage() {
  await connectToDatabase();
  const jobs = await Job.find().sort({ createdAt: -1 }).lean();
  
  const activeJobs = jobs.filter(j => j.status === 'Active').length;
  const featuredJobs = jobs.filter(j => j.featured).length;

  return (
    <div>
   

      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <h4 className="mb-1 fw-bold">Job Openings</h4>
          <p className="text-muted mb-0 small">Manage your job listings and recruitment</p>
        </div>
        <div className="d-flex gap-2">
          <Link href="/admin/jobs/new" className="btn btn-primary d-flex align-items-center gap-2 px-4 shadow-sm">
            <i className="fa-solid fa-plus"></i>
            <span>Add New Job</span>
          </Link>
        </div>
      </div>

      <div className="card border-0 shadow-sm overflow-hidden">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Job Title</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Department</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Type</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Experience</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Status</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Posted Date</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {jobs.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-5 text-muted">
                      <div className="mb-3">
                         <i className="fa-solid fa-briefcase fa-2x text-muted opacity-50"></i>
                      </div>
                      <p className="mb-3">No jobs posted yet.</p>
                      <Link href="/admin/jobs/new" className="btn btn-primary btn-sm">
                        Create First Job
                      </Link>
                    </td>
                  </tr>
                )}
                {jobs.map((job) => (
                  <tr key={job._id.toString()}>
                    <td className="px-4">
                      <div className="d-flex align-items-center gap-2">
                         <span className="fw-semibold text-dark">{job.title}</span>
                         {job.featured && (
                          <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 ms-1" style={{ fontSize: 10 }}>
                            <i className="fa-solid fa-star me-1"></i>Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 text-muted">{job.department}</td>
                    <td className="px-4">
                      <span className="badge bg-light text-dark border fw-normal px-2 py-1">
                        {job.type}
                      </span>
                    </td>
                    <td className="px-4 text-muted">{job.experience}</td>
                    <td className="px-4">
                      <span
                        className={`badge px-2 py-1 fw-medium ${
                          statusBadgeClass[job.status] || "bg-secondary"
                        }`}
                      >
                        <span className={`d-inline-block rounded-circle me-1`} style={{width: 6, height: 6, backgroundColor: 'currentColor'}}></span>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-4 text-muted small">{formatDate(job.posted)}</td>
                    <td className="px-4 text-end">
                      <div className="d-flex align-items-center justify-content-end gap-2">
                        <Link
                          href={`/admin/jobs/edit/${job._id.toString()}`}
                          className="btn btn-white btn-sm border text-muted hover-shadow-sm"
                          title="Edit"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <button className="btn btn-white btn-sm border text-danger hover-shadow-sm" title="Delete">
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
