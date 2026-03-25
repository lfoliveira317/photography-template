import { FiClock, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

const contactItems = [
  {
    icon: FiPhoneCall,
    label: 'Phone',
    value: '(204) 555-0188',
    href: 'tel:+12045550188',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'hello@northlightstudio.ca',
    href: 'mailto:hello@northlightstudio.ca',
  },
  {
    icon: FiMapPin,
    label: 'Studio',
    value: 'Exchange District, Winnipeg, MB',
    href: 'https://maps.google.com/?q=Exchange+District+Winnipeg+MB',
  },
  {
    icon: FiClock,
    label: 'Hours',
    value: 'Mon - Sat, 9:00 AM - 6:00 PM',
    href: '#contact',
  },
]

const ContactSection = () => {
  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2>Let’s plan a session with clear direction and room for spontaneity.</h2>
            <p>
              Reach out for collections, availability, or a tailored quote. Most
              replies go out within one business day.
            </p>

            <div className="contact-list">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a className="contact-item" href={href} key={label}>
                  <span className="contact-item__icon">
                    <Icon />
                  </span>
                  <span>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="map-card">
            <iframe
              title="Northlight Studio location map"
              src="https://www.google.com/maps?q=Exchange+District+Winnipeg+MB&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection