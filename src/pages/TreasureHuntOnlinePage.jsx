
import React, { useState } from "react";
import { CheckCircle, XCircle } from 'lucide-react';

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/BXDkDaiZ8pIIY6ajPsPQqC";
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby3N178Mzk-xxQ5vK7ARKlp-0jWJm3oWC81ohZZUAl3s9MRZi-vBnjeZgKY2IkRzzY0/exec';

function TreasureHuntOnlinePage() {
  const [form, setForm] = useState({ name: "", college: "", phone: "" });
  const [error, setError] = useState("");
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: '', message: '' }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.college || !form.phone) {
      showToast('error', 'Please fill all fields.');
      return;
    }
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          sheetName: 'TreasureHuntOnline',
          timestamp: new Date().toISOString()
        })
      });
      window.location.href = WHATSAPP_GROUP_LINK;
    } catch (err) {
      showToast('error', 'Registration failed. Please try again later.');
    }
  };

  return (
    <section className="section">
      {/* Toast Notification */}
      <div className={`toast ${toast.show ? 'toast-show' : ''} toast-${toast.type}`}
        style={{ maxWidth: 400, margin: '0 auto' }}>
        {toast.type === 'success' ? <CheckCircle size={20} /> : toast.type === 'error' ? <XCircle size={20} /> : null}
        <span>{toast.message}</span>
      </div>
      <div className="contact-form" style={{ maxWidth: 400, margin: "40px auto", padding: 24, borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
        <h2 className="section-title">Online Treasure Hunt Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="College Name"
              name="college"
              value={form.college}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="cta-button submit-btn" style={{ width: '100%' }}>
            Register & Join WhatsApp Group
          </button>
        </form>
      </div>
    </section>
  );
}

export default TreasureHuntOnlinePage;
