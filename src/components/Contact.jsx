import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your material enquiry';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Frontend only success simulation
    setSubmitted(true);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      company: '',
      message: ''
    });

    // Auto reset notification banner after 8 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">CONNECT WITH US</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Need material specifications, bulk quotes, or supply scheduling? Reach our procurement advisory team.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Company Information */}
          <div className="contact-info-panel">
            <div className="contact-info-header">
              <h3>DSR Infra Mart Private Limited</h3>
              <p>Corporate Headquarters & Central Materials Distribution</p>
            </div>

            <div className="contact-details-list">
              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-meta">
                  <h4>Head Office Address</h4>
                  <p>DSR Corporate Park, Sector 44, Golf Course Extension Road, Gurugram, Haryana 122003, India</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-meta">
                  <h4>Phone Support</h4>
                  <p>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-meta">
                  <h4>Email Enquiry</h4>
                  <p>
                    <a href="mailto:info@dsrinframart.com">info@dsrinframart.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-office-hours">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Clock size={16} color="#F4512A" />
                <strong>Business Hours:</strong>
              </div>
              <p>Monday – Saturday: 9:00 AM – 7:00 PM IST (Closed Sundays)</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            {submitted && (
              <div className="form-success-banner" role="alert">
                <CheckCircle2 size={24} color="#10B981" />
                <div>
                  <strong>Enquiry Received!</strong>
                  <div>Thank you! Your enquiry has been submitted. Our commercial sales team will connect with you shortly.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group-grid">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <span className="form-field-error">{errors.fullName}</span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="form-field-error">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-group-grid">
                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="rajesh@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="form-field-error">{errors.email}</span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="company">Company / Firm (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    placeholder="Apex Builders Ltd."
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Project Requirements / Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your required product categories, estimated volumes, site location, or target dispatch dates..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <span className="form-field-error">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={16} />
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
