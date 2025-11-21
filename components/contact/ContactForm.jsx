"use client";
import React, { useState } from "react";
import AnimatedText from "../common/AnimatedText";

const initialFormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setFormData(initialFormState);
      setStatusMessage({ type: "success", text: "Message sent successfully! We will get back to you soon." });
    } catch (error) {
      setStatusMessage({ type: "error", text: error.message || "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="contact-section-22">
      <div className="container">
        <div className="contact-form-items">
          <div className="title text-center">
            <h2 className="splt-txt wow">
              <AnimatedText text="Get In Touch" />
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <div className="icon">
                    <i className="fa-regular fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <div className="icon">
                    <i className="fa-regular fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <div className="icon">
                    <i className="fa-regular fa-phone" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="icon">
                    <i className="fa-regular fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="What’s on your mind"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <div className="icon">
                    <i className="fa-sharp fa-light fa-pencil" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                {statusMessage.text && (
                  <div className={`alert ${statusMessage.type === "success" ? "alert-success" : "alert-danger"} mb-4`}>
                    {statusMessage.text}
                  </div>
                )}
                <button type="submit" className="theme-btn w-100" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "SEND MESSAGE NOW"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
