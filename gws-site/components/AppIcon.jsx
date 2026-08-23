export default function AppIcon({ size = 42, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 108 108"
      role="img"
      aria-label="Great White Streams TV"
      className={className}
      style={{ borderRadius: "16%", flex: "0 0 auto" }}
    >
      <rect width="108" height="108" rx="16" fill="#06111f" />
      <rect x="13" y="16" width="82" height="61" rx="6" fill="#071725" stroke="#35e2d1" strokeWidth="5" />
      <path d="M43 83h22" stroke="#35e2d1" strokeWidth="5" strokeLinecap="round" />
      <path d="M54 77v7" stroke="#35e2d1" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M27 55c10-11 24-15 40-12 8 1 14 4 19 8-5 7-12 12-22 14-15 3-28 0-37-10Z"
        fill="#f4fbff"
      />
      <path d="M51 43c3-8 8-13 14-17-1 8 1 14 5 19Z" fill="#35e2d1" />
      <path d="M82 50c6-5 10-9 13-14-1 7 0 12-2 16 2 4 1 9 2 15-4-4-8-8-13-12Z" fill="#35e2d1" />
      <path d="M45 64c-4 7-9 11-15 13 5-4 9-9 12-14Z" fill="#35e2d1" />
      <circle cx="37" cy="51" r="2.2" fill="#071725" />
      <path d="M28 59c5 3 11 4 17 4" fill="none" stroke="#071725" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
