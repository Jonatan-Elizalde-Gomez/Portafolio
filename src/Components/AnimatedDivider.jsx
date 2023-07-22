import React, { useEffect, useState } from "react";

const AnimatedDivider = ({ scrollPositionOffset, speedMultiplier }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate the percentage of the SVG that should be drawn
  const svgTotalLength = 15000; // Update this value with the total length of the SVG path
  let svgDrawnPercentage =
    ((scrollPosition - scrollPositionOffset) /
      (document.body.clientHeight -
        window.innerHeight -
        scrollPositionOffset)) *
    100 *
    speedMultiplier;
  let svgStrokeDashOffset =
    svgTotalLength - (svgTotalLength * svgDrawnPercentage) / 100;

  // Ensure that the SVG doesn't continue drawing once it's complete
  if (svgDrawnPercentage >= 100) {
    svgStrokeDashOffset = 0;
  }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 30 1300 200">
        <g
          transform="translate(0.000000,430.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M6354 3698 c-93 -66 -129 -208 -84 -334 20 -59 67 -128 109 -159 l24
            -19 53 56 c129 139 124 364 -11 456 -39 28 -53 27 -91 0z m90 -19 c14 -11 38
            -42 54 -67 24 -41 27 -57 27 -132 0 -72 -4 -93 -27 -140 -15 -30 -43 -71 -63
            -90 l-35 -34 -35 34 c-20 19 -48 60 -63 90 -23 47 -27 68 -27 140 0 75 3 91
            27 132 31 51 71 88 98 88 10 0 29 -9 44 -21z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M4939 3411 c-113 -22 -229 -116 -282 -229 -30 -62 -32 -75 -32 -172
            0 -92 3 -112 26 -160 36 -77 71 -115 137 -147 49 -24 69 -28 142 -28 107 0
            164 21 218 79 67 73 79 158 36 245 -36 71 -86 104 -168 109 -49 3 -70 -1 -106
            -20 -53 -27 -84 -74 -74 -113 l7 -26 28 34 c36 44 108 63 172 46 110 -30 152
            -177 74 -265 -49 -57 -100 -78 -188 -78 -67 -1 -81 3 -125 29 -91 57 -141 181
            -132 327 14 208 205 360 411 327 127 -21 230 -71 426 -208 207 -145 349 -220
            531 -279 269 -88 452 -88 720 0 183 60 325 135 531 279 196 137 299 187 426
            208 206 33 397 -119 411 -327 9 -146 -41 -270 -132 -327 -44 -26 -58 -30 -125
            -29 -88 0 -139 21 -188 78 -78 88 -36 235 74 265 64 17 136 -2 172 -46 l28
            -34 7 26 c10 39 -21 86 -74 113 -36 19 -57 23 -106 20 -82 -5 -132 -38 -168
            -109 -43 -87 -31 -172 36 -245 54 -58 111 -79 218 -79 140 0 221 51 279 175
            23 48 26 68 26 160 0 97 -2 110 -32 172 -40 86 -110 156 -194 196 -176 84
            -376 33 -646 -165 -277 -203 -488 -305 -738 -358 -202 -42 -425 -2 -690 124
            -135 65 -208 110 -378 234 -226 165 -403 228 -558 198z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M5801 3369 c-24 -5 -45 -10 -47 -12 -2 -2 20 -20 50 -41 63 -43 125
            -108 214 -223 107 -138 219 -196 382 -196 170 0 272 56 399 217 86 110 143
            167 211 212 41 27 41 28 18 37 -40 15 -181 20 -242 8 -78 -14 -124 -38 -221
            -112 -44 -33 -99 -70 -122 -82 l-43 -21 -42 21 c-24 12 -79 49 -123 82 -44 34
            -98 70 -120 81 -77 37 -210 50 -314 29z m162 -9 c87 -14 152 -49 251 -134 49
            -43 111 -88 137 -102 l49 -24 49 24 c26 14 88 59 137 102 99 85 164 120 251
            135 52 8 156 4 176 -8 5 -3 -15 -21 -45 -41 -29 -19 -109 -93 -178 -163 -69
            -69 -143 -136 -165 -147 -143 -72 -307 -72 -450 0 -22 11 -96 78 -165 147 -69
            70 -149 144 -179 164 -56 37 -56 42 4 50 55 7 70 7 128 -3z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M4444 3070 c-49 -20 -66 -77 -39 -129 29 -56 125 -58 154 -3 42 79
            -33 165 -115 132z m66 -48 c18 -14 21 -25 16 -45 -8 -35 -49 -46 -76 -22 -25
            23 -25 40 0 65 25 25 32 25 60 2z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M8262 3055 c-54 -45 -42 -124 23 -151 62 -26 125 20 125 90 0 36 -39
            76 -81 82 -28 5 -41 1 -67 -21z m88 -35 c25 -25 25 -42 0 -65 -27 -24 -68 -13
            -76 22 -5 20 -2 31 16 45 28 23 35 23 60 -2z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M16 3017 c-24 -18 -17 -48 14 -64 20 -10 453 -12 2148 -10 2089 2
            2124 2 2138 21 18 25 18 31 -2 50 -14 14 -223 16 -2148 16 -1747 0 -2135 -2
            -2150 -13z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M8486 3014 c-20 -19 -20 -25 -2 -50 14 -19 49 -19 2138 -21 2246 -3
            2168 -4 2176 42 10 47 103 45 -2164 45 -1925 0 -2134 -2 -2148 -16z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M5492 2948 c-52 -19 -142 -93 -142 -116 0 -6 11 -24 24 -39 23 -27
            28 -28 113 -27 75 0 107 7 218 42 72 23 155 45 185 48 88 10 91 18 19 52 -137
            65 -310 82 -417 40z m368 -43 l55 -18 -80 -12 c-44 -7 -127 -24 -185 -40 -111
            -28 -213 -36 -232 -17 -22 22 39 69 127 99 55 18 243 11 315 -12z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M7004 2951 c-34 -10 -88 -30 -119 -46 -65 -31 -61 -39 25 -49 30 -3
            114 -25 185 -48 111 -35 143 -42 218 -42 85 -1 90 0 113 27 13 15 24 33 24 39
            0 24 -90 97 -144 117 -72 27 -212 28 -302 2z m293 -50 c62 -28 102 -66 85 -83
            -20 -20 -122 -11 -248 21 -66 17 -149 34 -183 37 -43 5 -58 10 -48 16 77 43
            305 48 394 9z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />
        </g>
      </svg>
    </>
  );
};

export default AnimatedDivider;
