import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

const statusBadgeClass = {
  New: "bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25",
  "In Review": "bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25",
  Closed: "bg-success bg-opacity-10 text-success border border-success border-opacity-25",
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

export default async function EnquiriesPage() {
  await connectToDatabase();
  const records = await Enquiry.find().sort({ createdAt: -1 }).lean();
  
  const newEnquiries = records.filter(r => r.status === 'New').length;
  const closedEnquiries = records.filter(r => r.status === 'Closed').length;

  return (
    <div>
      {/* Stats Row */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3 p-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                <i className="fa-regular fa-envelope text-primary fa-lg"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1 small text-uppercase fw-bold">Total Enquiries</h6>
                <h3 className="mb-0 fw-bold">{records.length}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3 p-4">
              <div className="bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                <i className="fa-regular fa-bell text-info fa-lg"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1 small text-uppercase fw-bold">New Messages</h6>
                <h3 className="mb-0 fw-bold">{newEnquiries}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3 p-4">
              <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                <i className="fa-solid fa-check-double text-success fa-lg"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1 small text-uppercase fw-bold">Resolved</h6>
                <h3 className="mb-0 fw-bold">{closedEnquiries}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <h4 className="mb-1 fw-bold">Enquiries</h4>
   
        </div>
     
      </div>

      <div className="card border-0 shadow-sm overflow-hidden">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Sender</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Contact</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Message Preview</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Status</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted">Received</th>
                  <th className="py-3 px-4 text-uppercase small fw-bold text-muted text-end">Action</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {records.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-5">
                      <div className="text-muted mb-2">
                         <i className="fa-regular fa-envelope-open fa-2x"></i>
                      </div>
                      <p className="text-muted mb-0">No enquiries received yet.</p>
                    </td>
                  </tr>
                )}
                {records.map((item) => (
                  <tr key={item._id.toString()}>
                    <td className="px-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width: 36, height: 36, fontSize: 14}}>
                          {item.firstName.charAt(0).toUpperCase()}
                        </div>
                        <span className="fw-semibold text-dark">
                          {item.firstName} {item.lastName}
                        </span>
                      </div>
                    </td>
                    <td className="px-4">
                      <div className="d-flex flex-column small">
                        <a href={`mailto:${item.email}`} className="text-dark text-decoration-none mb-1">
                          {item.email}
                        </a>
                        <a href={`tel:${item.phone}`} className="text-muted text-decoration-none">
                          {item.phone}
                        </a>
                      </div>
                    </td>
                    <td className="px-4" style={{ maxWidth: 300 }}>
                      <div className="text-truncate text-muted" title={item.message}>
                        {item.message}
                      </div>
                    </td>
                    <td className="px-4">
                      <span className={`badge px-2 py-1 fw-medium ${statusBadgeClass[item.status] || "bg-secondary"}`}>
                        <span className={`d-inline-block rounded-circle me-1`} style={{width: 6, height: 6, backgroundColor: 'currentColor'}}></span>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 text-muted small">{formatDate(item.createdAt)}</td>
                    <td className="px-4 text-end">
                      <button className="btn btn-white btn-sm border hover-shadow-sm text-primary fw-medium">
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
    </div>
  );
}
