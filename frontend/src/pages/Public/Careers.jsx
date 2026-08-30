import React, { useState } from "react";
import { Briefcase, Upload, CheckCircle } from "lucide-react";

const FORMSUBMIT_EMAIL = "adityasolar2112@gmail.com";

const Careers = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    position: "Solar Design Engineer",
    experience: "1-3 Years", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const openRoles = [
    {
      title: "Solar Design Engineer",
      dept: "Engineering & Layouts",
      loc: "Kota, Rajasthan", exp: "2-4 Years",
      desc: "Develop shadow analysis blueprints and electrical design drafts (ACDB/DCDB layouts, string selections, single-line diagrams). Proficiency in PVsyst and AutoCAD required.",
    },
    {
      title: "Subsidy Approval Coordinator",
      dept: "Administration & Government Relations",
      loc: "Kota, Rajasthan", exp: "1-3 Years",
      desc: "Compile applicant files for the PM Surya Ghar Muft Bijli Yojana portal. Connect with state discom engineers to speed up approvals and net-meter integrations.",
    },
    {
      title: "Site Installation Supervisor",
      dept: "On-Site Operations",
      loc: "Kota (Field Operations)", exp: "2+ Years",
      desc: "Supervise solar panel mounting structures anchoring, inverter installations, and safety checking. Certified electrical license preferred.",
    },
  ];

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          position: form.position, experience: form.experience,
          message: form.message || "No additional message provided.",
          _subject: `Career Application: ${form.position}`,
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        throw new Error("Failed");
      }
    } catch {
      // Fallback mailto
      const body = encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPosition: ${form.position}\nExperience: ${form.experience}\n\n${form.message}`
      );
      window.location.href = `mailto:${FORMSUBMIT_EMAIL}?subject=Career+Application:+${encodeURIComponent(form.position)}&body=${body}`;
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Join the Aditya Solar Kota Team</h1>
        <p className="text-sm md:text-base text-bodyText">
          Build a clean energy career. We hire certified structural draftsmen, site engineers, and government subsidy coordinators.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-xl font-extrabold text-heading border-l-4 border-primary pl-3">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {openRoles.map((role, idx) => (
            <div key={idx} className="bg-white border border-borderLight rounded-3xl p-6 shadow-subtle flex flex-col justify-between hover-lift">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-primary uppercase">
                  <Briefcase className="w-4 h-4" /><span>{role.dept}</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-heading">{role.title}</h3>
                  <span className="block text-[10px] text-bodyText mt-0.5">Location: {role.loc} | Exp: {role.exp}</span>
                </div>
                <p className="text-xs text-bodyText leading-relaxed">{role.desc}</p>
              </div>
              <button onClick={() => {
                setForm({ ...form, position: role.title });
                document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
              }}
                className="w-full text-center py-2 bg-bgLight hover:bg-primary hover:text-white rounded-xl text-xs font-bold mt-6 border border-borderLight transition-premium">
                Apply for this Role
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="apply-form" className="max-w-3xl mx-auto bg-white border border-borderLight rounded-3xl p-6 md:p-8 shadow-card">
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-lg font-bold text-heading">Submit Your Application</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-heading">Full Name</label>
                <input name="name" type="text" required value={form.name} onChange={handleInputChange}
                  placeholder="Aarav Mehta"
                  className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-heading">Phone Number</label>
                <input name="phone" type="tel" required value={form.phone} onChange={handleInputChange}
                  placeholder="+91 99999 88888"
                  className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-heading">Email Address</label>
                <input name="email" type="email" required value={form.email} onChange={handleInputChange}
                  placeholder="aarav@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-heading">Position Applying For</label>
                <select name="position" value={form.position} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary">
                  <option>Solar Design Engineer</option>
                  <option>Subsidy Approval Coordinator</option>
                  <option>Site Installation Supervisor</option>
                  <option>Other / General Application</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-heading">Total Experience</label>
              <input name="experience" type="text" required value={form.experience} onChange={handleInputChange}
                placeholder="e.g. 2.5 Years"
                className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-heading">Message / Intro (Optional)</label>
              <textarea name="message" rows={3} value={form.message} onChange={handleInputChange}
                placeholder="Briefly state your qualifications and notice period..."
                className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary resize-none" />
            </div>
            <p className="text-xs text-bodyText">
              Please email your resume to <a href={`mailto:${FORMSUBMIT_EMAIL}`} className="text-primary font-semibold">{FORMSUBMIT_EMAIL}</a> along with your application.
            </p>
            <button type="submit" disabled={loading}
              className="w-full py-3 cta-gradient text-white font-extrabold rounded-xl text-sm transition-premium flex items-center justify-center shadow-premium">
              {loading ? "Submitting..." : "Submit Application"} <Upload className="w-4 h-4 ml-2" />
            </button>
          </form>
        ) : (
          <div className="py-16 text-center space-y-4 animate-fade-in">
            <CheckCircle className="w-12 h-12 text-secondary mx-auto" />
            <h3 className="text-xl font-bold text-secondary">Application Submitted!</h3>
            <p className="text-xs text-bodyText max-w-md mx-auto leading-relaxed">
              Thank you for applying to Aditya Solar Kota. Our HR Desk will contact you if your skills match our open criteria. Please also email your resume to <strong>{FORMSUBMIT_EMAIL}</strong>.
            </p>
            <button onClick={() => setSuccess(false)}
              className="px-6 py-2 border border-borderLight rounded-xl text-xs font-bold hover:bg-bgLight text-heading transition-premium">
              Apply for another position
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Careers;
