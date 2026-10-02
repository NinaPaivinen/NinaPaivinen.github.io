// src/components/Pre.jsx

import './CSS/main.css';

function Pre() {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <span className="preloader-logo">
          ✦
        </span>

        <p>Loading...</p>

        <div className="preloader-line" />
      </div>
    </div>
  );
}

export default Pre;