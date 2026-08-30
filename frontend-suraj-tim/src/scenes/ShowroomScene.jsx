import { companyInfo } from '../data/content';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

const ShowroomScene = () => {
  const handleGetDirections = () => {
    window.open(companyInfo.googleMapsUrl, '_blank');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${companyInfo.phone}`, '_self');
  };

  return (
    <section className="min-h-screen py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <RevealText>
            <h2 className="font-playfair text-heading text-accent mb-4">
              Visit Our Showroom
            </h2>
          </RevealText>
          <p className="text-muted-text font-space text-sm tracking-widest uppercase">
            Experience Our Collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="h-[400px] md:h-[500px] rounded-luxury-xl overflow-hidden border border-primary-text/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0!2d75.8!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suraj Timber Showroom Location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-playfair text-2xl text-primary-text mb-4">Address</h3>
              <p className="text-muted-text text-lg whitespace-pre-line">{companyInfo.address}</p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-primary-text mb-4">Contact Persons</h3>
              <div className="space-y-2">
                {companyInfo.contactPersons.map((person, i) => (
                  <p key={i} className="text-muted-text text-lg">{person.name}: <a href={`tel:${person.mobile}`} className="text-accent hover:text-primary-text transition-colors">{person.mobile}</a></p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-primary-text mb-4">Landline</h3>
              <p className="text-muted-text text-lg"><a href={`tel:${companyInfo.landline}`} className="text-accent hover:text-primary-text transition-colors">{companyInfo.landline}</a></p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-primary-text mb-4">Business Hours</h3>
              <p className="text-muted-text text-lg">{companyInfo.hours}</p>
            </div>

            <div className="space-y-4">
              <MagneticButton onClick={handleGetDirections} className="w-full">
                Get Directions
              </MagneticButton>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="py-4 bg-green-600 text-background font-space font-medium tracking-wider uppercase hover:bg-green-500 transition-colors rounded-luxury"
                >
                  WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="py-4 border border-accent text-accent font-space font-medium tracking-wider uppercase hover:bg-accent hover:text-background transition-colors rounded-luxury"
                >
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomScene;
