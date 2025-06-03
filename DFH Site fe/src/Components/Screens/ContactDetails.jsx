// src/components/ContactDetails.js
import React from 'react';

function ContactDetails() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{marginTop:100}}>Contact Information</h2>
      <div className="row g-4 justify-content-center">
        {/* Address */}
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm bg-white h-100 text-center">
            <h5><i className="bi bi-geo-alt-fill me-2"></i>Address</h5>
            <p className="text-muted mb-0">‘Desperate for Him’ Team,</p>
            <p className="text-muted mb-0">1137, 14th Ave East,</p>
            <p className="text-muted mb-0">Owen Sound N4K 0A1 ,</p>
            <p className="text-muted mb-0">ON, Canada</p>

          </div>
        </div>

        {/* Phone */}
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm bg-white h-100 text-center">
            <h5><i className="bi bi-telephone-fill me-2"></i>Phone</h5>
            <p className="text-muted">+1 519 377 7466</p>
            {/* <p className="text-muted">+1 (987) 654-3210</p> */}
          </div>
        </div>

        {/* Email */}
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm bg-white h-100 text-center">
            <h5><i className="bi bi-envelope-fill me-2"></i>Email</h5>
            <p className="text-muted">desperateforhimcanada@gmail.com</p>
            {/* <p className="text-muted">support@yourcompany.com</p> */}
          </div>
        </div>
      </div>

      {/* Optional: Google Maps Embed */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="ratio ratio-16x9 shadow-sm rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2197605369724!2d-122.4194151846815!3d37.77492977975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0df94b97%3A0x42a3d233b7f9b4c4!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1611099122971!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
