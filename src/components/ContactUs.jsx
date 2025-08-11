import React from "react";
import "../componentscss/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subheading">
        We’d love to hear from you! Fill out the form below or reach us through the following details.
      </p>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>
            <strong>Address:</strong> No. 42, 2nd Floor, Tech Park Road, Bengaluru, Karnataka, India
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Email:</strong> contact@saggraha.com
          </p>
          <p>
            <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
          </p>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.480054237581!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e1d9c6a7%3A0x4c1fef8dcbe2e6a7!2sBengaluru!5e0!3m2!1sen!2sin!4v1622029455175!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
