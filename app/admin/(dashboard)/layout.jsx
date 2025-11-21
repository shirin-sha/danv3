"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const userSubmittedNav = [
  { label: "Enquiries", href: "/admin/enquiries", icon: "fa-regular fa-envelope" },
  { label: "Applications", href: "/admin/applications", icon: "fa-regular fa-file-lines" },
];

const adminManagementNav = [
  { label: "Job Openings", href: "/admin/jobs", icon: "fa-regular fa-briefcase" },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const isActiveRoute = (href) => {
    return pathname.startsWith(href);
  };

  return (
    <div className="admin-dashboard d-flex min-vh-100 bg-light font-sans">
      <aside className="admin-sidebar bg-white border-end d-flex flex-column shadow-sm" style={{ width: 260, flexShrink: 0, zIndex: 100 }}>
        <div className="px-4 py-4 border-bottom">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-primary rounded-2 d-flex align-items-center justify-content-center shadow-sm" style={{width: 32, height: 32}}>
              <i className="fa-solid fa-layer-group text-white"></i>
            </div>
            <div>
              <h5 className="mb-0 fw-bold text-dark" style={{ letterSpacing: -0.5 }}>Admin Panel</h5>
              <span className="text-muted small" style={{fontSize: 11}}>Management Console</span>
            </div>
          </div>
        </div>

        <nav className="px-3 py-4 flex-grow-1">
          <p className="text-uppercase text-muted fw-bold small px-3 mb-3" style={{fontSize: 11, letterSpacing: 0.5}}>Inbox</p>
          <ul className="list-unstyled mb-4">
            {userSubmittedNav.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <li key={item.href} className="mb-1">
                  <Link
                    href={item.href}
                    className={`d-flex align-items-center gap-3 px-3 py-2 rounded-3 transition-all ${
                      isActive 
                        ? "bg-primary bg-opacity-10 text-primary fw-semibold" 
                        : "text-secondary hover-bg-light"
                    }`}
                    style={{ transition: "all 0.2s" }}
                  >
                    <i className={`${item.icon} ${isActive ? "text-primary" : "text-muted"}`} style={{width: 20}} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="text-uppercase text-muted fw-bold small px-3 mb-3" style={{fontSize: 11, letterSpacing: 0.5}}>Management</p>
          <ul className="list-unstyled">
            {adminManagementNav.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <li key={item.href} className="mb-1">
                  <Link
                    href={item.href}
                    className={`d-flex align-items-center gap-3 px-3 py-2 rounded-3 transition-all ${
                      isActive 
                        ? "bg-primary bg-opacity-10 text-primary fw-semibold" 
                        : "text-secondary hover-bg-light"
                    }`}
                    style={{ transition: "all 0.2s" }}
                  >
                    <i className={`${item.icon} ${isActive ? "text-primary" : "text-muted"}`} style={{width: 20}} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-3 border-top bg-light bg-opacity-50">
          <div className="d-flex align-items-center gap-3 px-3 py-2">
            <div className="bg-white border rounded-circle d-flex align-items-center justify-content-center text-primary shadow-sm" style={{width: 36, height: 36}}>
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="overflow-hidden">
              <p className="mb-0 fw-semibold text-dark text-truncate" style={{fontSize: 14}}>Admin User</p>
              <p className="mb-0 text-muted small text-truncate" style={{fontSize: 12}}>admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <header className="admin-header bg-white border-bottom px-4 py-3 d-flex align-items-center justify-content-between shadow-sm z-1">
          <div className="d-flex align-items-center text-muted">
             <span className="small fw-medium"><i className="fa-regular fa-calendar me-2"></i>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="d-flex gap-3">
            <Link href="/" target="_blank" className="btn btn-light border-0 btn-sm d-flex align-items-center gap-2 text-muted hover-shadow-sm">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span>View Site</span>
            </Link>
            <button className="btn btn-white border text-danger btn-sm d-flex align-items-center gap-2 hover-shadow-sm">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          </div>
        </header>
        <main className="flex-grow-1 p-4 overflow-auto bg-light">
          <div className="container-fluid px-0" style={{ maxWidth: 1400 }}>
            {children}
          </div>
        </main>
      </div>
      
      <style jsx global>{`
        .hover-bg-light:hover {
          background-color: #f8f9fa;
          color: #212529 !important;
        }
        .hover-shadow-sm:hover {
          box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
          background-color: #fff;
        }
        .transition-all {
          transition: all 0.2s ease;
        }
        .admin-sidebar {
          box-shadow: 4px 0 24px rgba(0,0,0,0.02) !important;
        }
      `}</style>
    </div>
  );
}
