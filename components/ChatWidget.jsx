'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://liveavatar-web-sdk-demo-ten.vercel.app/', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Chat bubble tooltip */}
      {isHovered && (
        <div
          className="absolute bottom-20 right-0 bg-[#0E2253] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium animate-fadeIn"
          style={{
            animation: 'fadeIn 0.2s ease-in-out',
          }}
        >
          Chat with us!
          <div className="absolute bottom-0 right-4 w-2 h-2 bg-[#0E2253] transform rotate-45 translate-y-1"></div>
        </div>
      )}

      {/* Main widget button */}
      <button
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
          isHovered
            ? 'bg-[#0E2253] shadow-2xl'
            : 'bg-[#0E2253] hover:shadow-xl'
        }`}
        aria-label="Open chat"
        onClick={handleClick}
      >
        {/* Chat icon */}
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </button>

      {/* Floating animation effect */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
