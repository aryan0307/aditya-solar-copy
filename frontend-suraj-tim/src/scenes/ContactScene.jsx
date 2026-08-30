import { companyInfo, whyChooseUs } from '../data/content';
import RevealText from '../components/RevealText';
import ContactForm from '../components/ContactForm';

const ContactScene = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <RevealText>
            <h2 className="font-playfair text-heading text-accent mb-4">
              Get In Touch
            </h2>
          </RevealText>
          <p className="text-muted-text font-space text-sm tracking-widest uppercase">
              Transform Your Space
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-playfair text-2xl text-primary-text mb-6">Why Choose Us</h3>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="border-l-2 border-accent pl-6">
                    <h4 className="font-playfair text-xl text-accent mb-2">{item.title}</h4>
                    <p className="text-muted-text">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-primary-text mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-text text-sm font-space uppercase tracking-wider mb-1">Address</p>
                  <p className="text-primary-text whitespace-pre-line">{companyInfo.address}</p>
                </div>
                <div>
                  <p className="text-muted-text text-sm font-space uppercase tracking-wider mb-1">Phone</p>
                  <div className="space-y-1">
                    <a href={`tel:${companyInfo.phone}`} className="text-primary-text hover:text-accent transition-colors block">
                      {companyInfo.phone}
                    </a>
                    <a href={`tel:${companyInfo.landline}`} className="text-primary-text hover:text-accent transition-colors block">
                      {companyInfo.landline}
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-muted-text text-sm font-space uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${companyInfo.email}`} className="text-primary-text hover:text-accent transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-muted-text text-sm font-space uppercase tracking-wider mb-1">Contact Persons</p>
                  <div className="space-y-1">
                    {companyInfo.contactPersons.map((person, i) => (
                      <a key={i} href={`tel:${person.mobile}`} className="text-primary-text hover:text-accent transition-colors block">
                        {person.name} – {person.mobile}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactScene;
