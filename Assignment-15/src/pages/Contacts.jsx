import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

  
    console.log(formData);

    setSuccess(true);

 
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

   
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <div className="container my-5">

     
      <div
        className="text-white p-4 rounded mb-4"
        style={{
          background: "linear-gradient(135deg, #28a745, #198754)",
        }}
      >
        <h2 className="fw-bold">Contact Us</h2>
        <p>We'd love to hear from you. Get in touch with our team.</p>
      </div>

      <div className="row g-4">

      
        <div className="col-md-4">
          <div className="border p-3 rounded mb-3 shadow-sm">
            <h5>📞 Phone</h5>
            <p>+1 (800) 123-4567</p>
            <small className="text-muted">Mon-Fri 8am to 6pm</small>
          </div>

          <div className="border p-3 rounded mb-3 shadow-sm">
            <h5>📧 Email</h5>
            <p>support@freshcart.com</p>
            <small className="text-muted">We reply within 24h</small>
          </div>

          <div className="border p-3 rounded mb-3 shadow-sm">
            <h5>📍 Office</h5>
            <p>
              123 Commerce Street
              <br />
              New York, NY
            </p>
          </div>

          <div className="border p-3 rounded shadow-sm">
            <h5>⏰ Business Hours</h5>
            <p className="mb-0">Monday - Friday: 8am - 6pm</p>
            <p className="mb-0">Saturday: 9am - 4pm</p>
            <p className="mb-0">Sunday: Closed</p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="border p-4 rounded shadow-sm">
            <h4 className="mb-3">Send us a Message</h4>

            {success && (
              <div className="alert alert-success">
                ✅ Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

         
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Shipping Question</option>
                  <option>Returns & Refunds</option>
                  <option>Product Information</option>
                  <option>Feedback & Suggestions</option>
                  <option>Other</option>
                </select>
              </div>

           
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button className="btn btn-success px-4">
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}