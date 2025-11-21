"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setErrorMessage("Email and password are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to login.");
      }

      router.push("/admin/enquiries");
    } catch (error) {
      setErrorMessage(error.message || "Unable to login right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="d-flex align-items-center justify-content-center min-vh-100 px-3 py-5">
      <div className="card border-0 shadow-lg" style={{ maxWidth: 430, width: "100%" }}>
        <div className="card-body p-4 p-lg-5">
          <div className="text-center mb-4">
            <h2 className="mb-1">Admin Login</h2>
            <p className="text-muted mb-0">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-4">
              <label htmlFor="adminEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="adminEmail"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="adminPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="adminPassword"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <button type="submit" className="theme-btn w-100" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
              <i className="fa-regular fa-arrow-right" />
            </button>
            {errorMessage && (
              <p className="text-center text-danger mt-3 mb-0">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

