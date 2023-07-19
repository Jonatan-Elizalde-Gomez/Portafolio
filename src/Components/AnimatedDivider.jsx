import React, { useEffect, useState } from "react";

const AnimatedDivider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ajusta este valor para determinar cuánto scroll debe ocurrir antes de que la animación comience
  const scrollPositionOffset = 160; // Valor mayor para empezar más abajo, valor menor para empezar más arriba

  const speedMultiplier = 5; // Valor mayor para dibujar más rápido, valor menor para dibujar más lento

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
    console.log(svgDrawnPercentage);
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
            d="M320 3736 c-152 -44 -257 -143 -300 -284 -66 -213 50 -459 264 -562
              110 -52 177 -64 343 -57 292 10 523 102 964 382 80 51 181 111 225 133 115 57
              373 166 525 221 l131 48 -50 7 c-123 16 -353 -48 -658 -184 -153 -68 -184 -85
              -454 -240 -169 -98 -347 -181 -440 -205 -149 -39 -384 -9 -497 64 -109 70
              -195 191 -209 292 -18 129 107 238 284 247 77 4 87 2 146 -27 76 -37 155 -112
              187 -178 18 -35 25 -70 27 -130 2 -46 7 -83 11 -83 15 0 81 126 92 178 34 150
              -71 294 -263 362 -78 28 -258 37 -328 16z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M12200 3734 c-232 -61 -359 -227 -306 -397 15 -50 75 -157 87 -157 4
              0 9 37 11 83 2 60 9 95 27 130 32 66 111 141 187 178 59 29 69 31 146 27 103
              -6 173 -34 227 -93 22 -24 45 -61 52 -84 33 -110 -72 -286 -222 -374 -105 -62
              -343 -88 -478 -53 -97 26 -257 100 -429 199 -289 166 -312 178 -466 247 -305
              136 -535 200 -658 184 l-50 -7 131 -48 c152 -55 410 -164 525 -221 44 -22 145
              -82 225 -133 437 -277 672 -371 957 -382 165 -7 245 6 350 57 213 103 329 351
              264 562 -44 143 -151 243 -305 284 -65 18 -205 17 -275 -2z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M9332 3679 c-425 -24 -966 -121 -1427 -255 -66 -19 -230 -70 -365
              -114 -742 -238 -1039 -298 -1432 -288 -92 2 -166 3 -165 2 2 -2 59 -11 127
              -21 176 -25 646 -24 850 0 448 55 827 144 1357 318 269 88 388 116 643 153
              414 60 832 50 1060 -25 184 -60 300 -160 300 -257 0 -40 -5 -50 -43 -86 -65
              -63 -137 -81 -312 -81 -124 0 -147 3 -200 24 -84 34 -154 107 -207 216 -46 96
              -51 96 -83 -3 -47 -143 34 -278 220 -367 119 -57 195 -76 340 -82 193 -9 316
              31 424 136 153 150 121 344 -86 509 -161 130 -362 203 -605 222 -137 11 -201
              11 -396 -1z"
            style={{
              fill: "none",
              stroke: "#FCEBC1",
              strokeWidth: 40,
              strokeDasharray: svgTotalLength,
              strokeDashoffset: svgStrokeDashOffset,
            }}
          />

          <path
            d="M2504 3520 c-123 -13 -216 -53 -296 -128 -73 -68 -102 -130 -103
              -217 0 -61 5 -78 34 -133 39 -72 148 -180 233 -230 85 -50 205 -100 315 -129
              96 -26 105 -27 393 -28 329 0 466 12 820 71 411 69 683 137 1155 290 536 174
              799 242 1085 279 128 17 412 24 510 12 43 -5 47 -4 20 3 -85 21 -331 40 -533
              40 -548 0 -1066 -98 -1802 -340 -260 -85 -438 -126 -705 -162 -137 -18 -214
              -22 -450 -23 -260 0 -295 2 -400 23 -136 28 -235 64 -313 116 -221 147 -158
              311 132 346 183 23 335 -20 422 -118 39 -44 109 -172 109 -199 0 -29 19 -10
              40 40 31 69 32 155 3 219 -79 174 -387 297 -669 268z"
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
