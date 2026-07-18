import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './contact.css';

// Easy to update contact data
const contactInfo = [
  {
    id: 1,
    type: "Email",
    value: "trmanoguhan@gmail.com",
    link: "mailto:trmanoguhan@gmail.com",
    icon: <FaEnvelope />,
    color: "#ff1493" // Theme pink
  },
  {
    id: 2,
    type: "Phone",
    value: "+91 6379791441",
    link: "tel:+916379791441",
    icon: <FaPhoneAlt />,
    color: "#ffd700" // Theme gold
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "Guhan T",
    link: "https://www.linkedin.com/in/guhan-t-554726314",
    icon: <FaLinkedin />,
    color: "#ffd700" // Theme gold
  },
  {
    id: 4,
    type: "GitHub",
    value: "GUHAN0205",
    link: "https://github.com/GUHAN0205",
    icon: <FaGithub />,
    color: "#ff1493" // Theme pink
  }
];

const ContactSection = () => {
  return (
    <section className="contact-container">
      <div className="contact-content">
        
        <h2 className="contact-title">Get In Touch</h2>
        
        <p className="contact-text">
          I'm always open to connecting with professionals, recruiters, and fellow developers. Whether it's an internship opportunity, placement, collaboration, or a discussion about technology, feel free to reach out through any of the platforms above.
        </p>

        {/* Contact Cards Grid */}
        <div className="contact-cards-grid">
          {contactInfo.map((info, index) => (
            <a 
              key={info.id} 
              href={info.link} 
              target={info.type !== "Email" && info.type !== "Phone" ? "_blank" : undefined}
              rel={info.type !== "Email" && info.type !== "Phone" ? "noopener noreferrer" : undefined}
              className="contact-card blast-effect"
              style={{ 
                animationDelay: `${0.4 + index * 0.15}s`,
                '--accent-color': info.color 
              }}
            >
              <div className="contact-icon-frame">
                <div className="contact-icon" style={{ color: info.color }}>
                  {info.icon}
                </div>
              </div>
              <div className="contact-info-text">
                <span className="contact-type">{info.type}</span>
                <span className="contact-value">{info.value}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;