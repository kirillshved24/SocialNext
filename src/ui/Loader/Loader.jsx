// components/Loader/Loader.jsx
import React from 'react';

// Ваш SVG спиннер
export const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ animation: 'spin 0.75s linear infinite' }}
    >
      <style>
        {`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <path
        className="spinner_0XTQ"
        d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
      />
    </svg>
  </div>
);