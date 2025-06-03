// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} <strong>DA Tech</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
