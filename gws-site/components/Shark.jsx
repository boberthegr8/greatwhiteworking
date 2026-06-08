export default function Shark({ className = "shark-svg" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      role="img"
      aria-label="Great white shark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gwsBody" x1="0" y1="0.05" x2="0" y2="1">
          <stop offset="0%" stopColor="#13386b" />
          <stop offset="42%" stopColor="#1d4f86" />
          <stop offset="63%" stopColor="#5b8fc4" />
          <stop offset="83%" stopColor="#cfe6ff" />
          <stop offset="100%" stopColor="#f2f9ff" />
        </linearGradient>
        <linearGradient id="gwsFin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2c57" />
          <stop offset="100%" stopColor="#2f6aa8" />
        </linearGradient>
        <linearGradient id="gwsTail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10305c" />
          <stop offset="100%" stopColor="#3f79bd" />
        </linearGradient>
        <radialGradient id="gwsGlow" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="rgba(56,214,255,0.30)" />
          <stop offset="100%" stopColor="rgba(56,214,255,0)" />
        </radialGradient>
        <filter id="gwsSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#020912" floodOpacity="0.55" />
        </filter>
      </defs>

      <circle cx="300" cy="300" r="270" fill="url(#gwsGlow)" />

      <g filter="url(#gwsSoft)">
        {/* caudal (tail) fin */}
        <path
          d="M468 276
             C 506 246 538 220 560 196
             C 552 244 556 282 547 300
             C 556 320 552 360 561 404
             C 539 380 508 352 468 324
             C 480 312 480 290 468 276 Z"
          fill="url(#gwsTail)"
        />

        {/* dorsal fin */}
        <path
          d="M286 236
             C 296 178 330 144 358 146
             C 348 182 360 214 374 244
             C 345 236 312 234 286 236 Z"
          fill="url(#gwsFin)"
        />

        {/* pectoral fin */}
        <path
          d="M214 350
             C 196 398 172 420 142 436
             C 182 420 216 396 250 360
             C 238 356 226 353 214 350 Z"
          fill="url(#gwsFin)"
        />

        {/* lower pelvic fin (small) */}
        <path
          d="M348 358
             C 350 392 362 408 380 420
             C 380 392 376 372 366 356
             C 360 357 354 357 348 358 Z"
          fill="url(#gwsFin)"
          opacity="0.92"
        />

        {/* body */}
        <path
          d="M70 302
             C 118 250 200 230 300 234
             C 382 237 442 254 470 278
             L 470 322
             C 442 346 382 363 300 366
             C 196 369 120 350 70 302 Z"
          fill="url(#gwsBody)"
        />

        {/* belly highlight */}
        <path
          d="M96 322
             C 150 352 220 364 300 366
             C 382 363 440 348 470 324
             L 470 322
             C 442 346 382 363 300 366
             C 210 368 140 354 96 322 Z"
          fill="#f2f9ff"
          opacity="0.5"
        />

        {/* gill slits */}
        <g stroke="#0c2748" strokeWidth="3.4" strokeLinecap="round" opacity="0.7" fill="none">
          <path d="M150 286 q -7 20 0 44" />
          <path d="M164 284 q -7 21 0 47" />
          <path d="M178 283 q -7 22 0 49" />
          <path d="M192 283 q -7 22 0 50" />
        </g>

        {/* mouth */}
        <path
          d="M72 318 C 104 338 140 346 182 344"
          fill="none"
          stroke="#08203c"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* teeth */}
        <path
          d="M86 330 l6 12 6 -10 6 12 6 -10 6 12 6 -10 6 11 6 -9 6 10"
          fill="none"
          stroke="#eaf4ff"
          strokeWidth="2.2"
          strokeLinejoin="round"
          opacity="0.9"
        />

        {/* eye */}
        <circle cx="126" cy="288" r="8.5" fill="#04101f" />
        <circle cx="123" cy="285" r="2.6" fill="#7fdcff" />
      </g>
    </svg>
  );
}
