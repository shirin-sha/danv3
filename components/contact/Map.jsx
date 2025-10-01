import React from "react";

export default function Map() {
  return (
    <div className="office-google-map-wrapper">
      <iframe
        src="https://www.google.com/maps?q=Al%20Mutawa%20Building%2C%20Al-Sharq%2C%20Kuwait&output=embed"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div style={{ marginTop: 12 }}>
        <a
          href="https://maps.app.goo.gl/psPQBTbm4hmrizFNA"
          target="_blank"
          rel="noopener noreferrer"
          className="theme-btn"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
