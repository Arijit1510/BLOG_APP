import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div style={{ width: width }}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Application Logo"
      >
        {/* You can replace this with your own SVG path or image */}
        <g>
          {/* Example Shape 1: A circle */}
          <circle cx="50" cy="50" r="45" fill="#61DAFB" />

          {/* Example Shape 2: A simple abstract shape */}
          <path
            d="M 30 30 L 70 30 L 50 70 Z"
            fill="#FFFFFF"
            stroke="#20232A"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

export default Logo;