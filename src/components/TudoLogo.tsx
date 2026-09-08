import React from 'react';

interface TudoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightMode?: boolean;
}

export const TudoLogo: React.FC<TudoLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
  lightMode = false,
}) => {
  const sizeClasses = {
    sm: 'w-14 h-18',
    md: 'w-24 h-32',
    lg: 'w-36 h-48',
    xl: 'w-52 h-68',
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 500 650"
        className={`${sizeClasses} drop-shadow-md transition-transform duration-300`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="logoGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFD700" floodOpacity="0.4" />
          </filter>
          <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="30%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#E5A812" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="logoBadgeDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1C1A18" />
            <stop offset="100%" stopColor="#0E0D0C" />
          </linearGradient>
          <path id="svgTudoArch" d="M 60,135 Q 250,50 440,135" fill="none" />
          <path id="svgBottomArch" d="M 40,535 Q 250,640 460,535" fill="none" />
        </defs>

        {/* Top Curved "T U D O" text */}
        <text
          fontFamily="'Montserrat', 'Poppins', sans-serif"
          fontSize="66"
          fontWeight="900"
          fill={lightMode ? '#FFFFFF' : '#1A1A1A'}
          letterSpacing="12"
        >
          <textPath href="#svgTudoArch" startOffset="50%" textAnchor="middle">
            TUDO
          </textPath>
        </text>

        {/* Registered Trademark (R) symbol */}
        <g transform="translate(425, 95)">
          <circle cx="14" cy="14" r="13" stroke={lightMode ? '#FFFFFF' : '#1A1A1A'} strokeWidth="3" fill="none" />
          <text
            x="14"
            y="19"
            fontFamily="'Montserrat', sans-serif"
            fontSize="15"
            fontWeight="900"
            fill={lightMode ? '#FFFFFF' : '#1A1A1A'}
            textAnchor="middle"
          >
            R
          </text>
        </g>

        {/* Stars flanking top badge */}
        <path
          d="M 85,235 L 90,248 L 103,248 L 93,256 L 97,269 L 85,260 L 73,269 L 77,256 L 67,248 L 80,248 Z"
          fill={lightMode ? '#FFD700' : '#1A1A1A'}
          transform="scale(1.2) translate(-15, -35)"
        />
        <path
          d="M 335,235 L 340,248 L 353,248 L 343,256 L 347,269 L 335,260 L 323,269 L 327,256 L 317,248 L 330,248 Z"
          fill={lightMode ? '#FFD700' : '#1A1A1A'}
          transform="scale(1.2) translate(-35, -35)"
        />

        {/* Side Ribbon Flags */}
        <g>
          <path
            d="M 20,270 L 130,270 L 130,370 L 20,370 L 60,320 Z"
            fill="url(#logoBadgeDark)"
            stroke="url(#logoGoldGrad)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M 85,320 L 89,331 L 101,331 L 91,339 L 95,350 L 85,342 L 75,350 L 79,339 L 69,331 L 81,331 Z"
            fill="#FFD700"
            transform="translate(-5, -15)"
          />
        </g>

        <g>
          <path
            d="M 480,270 L 370,270 L 370,370 L 480,370 L 440,320 Z"
            fill="url(#logoBadgeDark)"
            stroke="url(#logoGoldGrad)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M 415,320 L 419,331 L 431,331 L 421,339 L 425,350 L 415,342 L 405,350 L 409,339 L 399,331 L 411,331 Z"
            fill="#FFD700"
            transform="translate(0, -15)"
          />
        </g>

        {/* Central Scalloped Oval Badge */}
        <path
          d="
            M 250,150
            C 310,150 350,175 365,220
            C 375,250 365,275 385,320
            C 405,365 375,410 365,435
            C 345,480 310,530 250,530
            C 190,530 155,480 135,435
            C 125,410 95,365 115,320
            C 135,275 125,250 135,220
            C 150,175 190,150 250,150 Z"
          fill="url(#logoBadgeDark)"
          stroke="url(#logoGoldGrad)"
          strokeWidth="12"
          filter="url(#logoGoldGlow)"
        />

        {/* Inner Badge Gold Contour */}
        <path
          d="
            M 250,166
            C 302,166 338,188 351,228
            C 360,255 351,277 369,320
            C 387,360 360,400 351,422
            C 333,463 302,514 250,514
            C 198,514 167,463 149,422
            C 140,400 113,360 131,320
            C 149,277 140,255 149,228
            C 162,188 198,166 250,166 Z"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3.5"
          opacity="0.8"
        />

        {/* Center Motif: Ice Cream Cone and Scoops */}
        <circle cx="250" cy="255" r="42" fill="none" stroke="url(#logoGoldGrad)" strokeWidth="7" />
        <circle cx="222" cy="300" r="40" fill="none" stroke="url(#logoGoldGrad)" strokeWidth="7" />
        <circle cx="278" cy="300" r="40" fill="none" stroke="url(#logoGoldGrad)" strokeWidth="7" />

        {/* Cone Collar */}
        <rect
          x="178"
          y="325"
          width="144"
          height="24"
          rx="4"
          fill="url(#logoBadgeDark)"
          stroke="url(#logoGoldGrad)"
          strokeWidth="7"
        />

        {/* Waffle Cone Body */}
        <path
          d="M 194,352 L 306,352 L 250,490 Z"
          fill="url(#logoBadgeDark)"
          stroke="url(#logoGoldGrad)"
          strokeWidth="7"
          strokeLinejoin="round"
        />

        {/* Waffle Grid Texture */}
        <line x1="208" y1="354" x2="260" y2="466" stroke="#FFD700" strokeWidth="4" />
        <line x1="228" y1="354" x2="274" y2="430" stroke="#FFD700" strokeWidth="4" />
        <line x1="248" y1="354" x2="288" y2="395" stroke="#FFD700" strokeWidth="4" />
        <line x1="268" y1="354" x2="298" y2="372" stroke="#FFD700" strokeWidth="4" />
        <line x1="198" y1="380" x2="252" y2="486" stroke="#FFD700" strokeWidth="4" />
        <line x1="208" y1="418" x2="251" y2="488" stroke="#FFD700" strokeWidth="4" />

        <line x1="292" y1="354" x2="240" y2="466" stroke="#FFD700" strokeWidth="4" />
        <line x1="272" y1="354" x2="226" y2="430" stroke="#FFD700" strokeWidth="4" />
        <line x1="252" y1="354" x2="212" y2="395" stroke="#FFD700" strokeWidth="4" />
        <line x1="232" y1="354" x2="202" y2="372" stroke="#FFD700" strokeWidth="4" />
        <line x1="302" y1="380" x2="248" y2="486" stroke="#FFD700" strokeWidth="4" />
        <line x1="292" y1="418" x2="249" y2="488" stroke="#FFD700" strokeWidth="4" />

        {/* "Since 1981" inside badge */}
        <text
          x="250"
          y="505"
          fontFamily="'Montserrat', 'Poppins', sans-serif"
          fontSize="21"
          fontWeight="700"
          fill="#FFD700"
          textAnchor="middle"
          letterSpacing="2.5"
        >
          Since 1981
        </text>

        {/* Bottom Arch "Babadan Oğula" without stars above it */}
        <text
          fontFamily="'Montserrat', 'Poppins', sans-serif"
          fontSize="31"
          fontWeight="800"
          fill={lightMode ? '#FFFFFF' : '#E5A812'}
          letterSpacing="3"
        >
          <textPath href="#svgBottomArch" startOffset="50%" textAnchor="middle">
            Babadan Oğula
          </textPath>
        </text>
      </svg>
      {showSubtitle && (
        <span className="mt-1 text-xs font-bold uppercase tracking-widest text-[#E5A812]">
          Maraş Dondurma
        </span>
      )}
    </div>
  );
};
