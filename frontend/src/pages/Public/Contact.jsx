import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { siteSettings } from "../../data/siteData";

const FORMSUBMIT_EMAIL = "adityasolar2112@gmail.com";

const Contact = () => {
  const settings = siteSettings;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Solar Rooftop Installation Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          _subject: `Contact Form: ${form.subject}`,
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", subject: "Solar Rooftop Installation Inquiry", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      // Fallback: open mailto
      const body = encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${FORMSUBMIT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Contact Our Engineering Desks</h1>
        <p className="text-sm md:text-base text-bodyText">
          Get in touch with Aditya Solar sales, technical, and subsidy approvals support. We schedule site checkups within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-borderLight rounded-3xl p-6 shadow-subtle space-y-4">
            <h3 className="text-lg font-bold text-heading">Corporate Office Details</h3>
            <div className="space-y-4 text-sm leading-relaxed">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                <span>{settings.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-secondary mr-3 shrink-0" />
                <a href={`tel:${settings.phone}`} className="hover:text-primary font-semibold">
                  {settings.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-accent mr-3 shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-primary font-semibold">
                  {settings.email}
                </a>
              </div>
              <div className="flex items-start border-t border-borderLight/60 pt-4">
                <Clock className="w-4 h-4 text-bodyText/50 mr-3 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-heading block">Business Hours</span>
                  <span className="text-bodyText">{settings.office_hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-secondary to-accent text-white rounded-3xl p-6 shadow-premium space-y-2">
            <h4 className="font-bold text-base">✓ Quick WhatsApp Connect</h4>
            <p className="text-xs text-white/90">
              Need immediate answers? Click the chat button in the bottom-right screen to connect directly with an active sales representative.
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 bg-white border border-borderLight rounded-3xl p-6 md:p-8 shadow-card">
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-bold text-heading">Send Us a Direct Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-heading">Your Name</label>
                  <input name="name" type="text" required value={form.name} onChange={handleInputChange}
                    placeholder="Rajesh Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-heading">Phone Number</label>
                  <input name="phone" type="tel" required value={form.phone} onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-heading">Email Address</label>
                <input name="email" type="email" required value={form.email} onChange={handleInputChange}
                  placeholder="rajesh@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-heading">Subject</label>
                <input name="subject" type="text" required value={form.subject} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-heading">Detailed Message</label>
                <textarea name="message" required rows={4} value={form.message} onChange={handleInputChange}
                  placeholder="Please specify your rooftop dimensions, average monthly bill, grid configuration requirement..."
                  className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary resize-none" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3.5 cta-gradient text-white font-extrabold rounded-xl text-sm transition-premium flex items-center justify-center">
                {loading ? "Sending Message..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          ) : (
            <div className="py-16 text-center space-y-4 animate-fade-in">
              <CheckCircle className="w-12 h-12 text-secondary mx-auto" />
              <h3 className="text-xl font-bold text-secondary">Message Sent Successfully!</h3>
              <p className="text-xs text-bodyText max-w-md mx-auto leading-relaxed">
                Thank you for contacting Aditya Solar Kota. Your inquiry has been routed to our Kota office, and a team lead will call you shortly.
              </p>
              <button onClick={() => setSuccess(false)}
                className="px-6 py-2 border border-borderLight rounded-xl text-xs font-bold hover:bg-bgLight text-heading transition-premium">
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Google Maps */}
      {settings.google_map_embed && (
        <section className="bg-white border border-borderLight rounded-3xl overflow-hidden shadow-card h-96">
          <iframe title="Google Map Office Location" src={settings.google_map_embed}
            className="w-full h-full border-none" allowFullScreen="" loading="lazy" />
        </section>
      )}
    </div>
  );
};

export default Contact;
