import { companyInfo, socialLinks } from '../data/content';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary-text/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-3xl text-accent mb-4">Suraj Timber</h3>
            <p className="text-muted-text font-space text-sm tracking-wider uppercase mb-6">
              {companyInfo.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-text hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-space text-sm tracking-wider uppercase text-accent mb-4">Contact</h4>
            <div className="space-y-3 text-primary-text/80">
              <p className="text-sm whitespace-pre-line">{companyInfo.address}</p>
              <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-accent transition-colors block">
                {companyInfo.phone}
              </a>
              <a href={`tel:${companyInfo.landline}`} className="text-sm hover:text-accent transition-colors block">
                {companyInfo.landline}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-accent transition-colors block">
                {companyInfo.email}
              </a>
              <p className="text-sm">{companyInfo.hours}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space text-sm tracking-wider uppercase text-accent mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#hero" className="block text-primary-text/80 text-sm hover:text-accent transition-colors">
                Home
              </a>
              <a href="#about" className="block text-primary-text/80 text-sm hover:text-accent transition-colors">
                About
              </a>
              <a href="#products" className="block text-primary-text/80 text-sm hover:text-accent transition-colors">
                Products
              </a>
              <a href="#brands" className="block text-primary-text/80 text-sm hover:text-accent transition-colors">
                Brands
              </a>
              <a href="#gallery" className="block text-primary-text/80 text-sm hover:text-accent transition-colors">
                Gallery
              </a>
              <a href="#contact" className="block text-primary-text/80 text-sm hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-text/10 pt-8 text-center">
          <p className="text-primary-text/40 text-sm font-space">
            © {new Date().getFullYear()} Suraj Timber & Plywood Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
