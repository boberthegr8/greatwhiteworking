export default function FinLogo({ className = "fin" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="finGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38d6ff" />
          <stop offset="100%" stopColor="#2f7bff" />
        </linearGradient>
      </defs>
      {/* dorsal fin breaking the surface */}
      <path
        d="M14 44 C 26 40 40 26 50 10 C 50 28 46 40 40 44 Z"
        fill="url(#finGrad)"
      />
      {/* water ripples */}
      <path
        d="M6 50 q 8 -6 16 0 t 16 0 t 16 0"
        fill="none"
        stroke="#2f7bff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M10 57 q 7 -5 14 0 t 14 0 t 14 0"
        fill="none"
        stroke="#38d6ff"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
