import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-muted-text text-sm uppercase tracking-wider mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-surface border border-primary-text/10 rounded-luxury py-3 px-4 text-primary-text focus:border-accent focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-muted-text text-sm uppercase tracking-wider mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-surface border border-primary-text/10 rounded-luxury py-3 px-4 text-primary-text focus:border-accent focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-muted-text text-sm uppercase tracking-wider mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-surface border border-primary-text/10 rounded-luxury py-3 px-4 text-primary-text focus:border-accent focus:outline-none transition-colors"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-muted-text text-sm uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full bg-surface border border-primary-text/10 rounded-luxury py-3 px-4 text-primary-text focus:border-accent focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-accent text-background font-space font-medium tracking-wider uppercase hover:bg-primary-text transition-colors rounded-luxury"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
