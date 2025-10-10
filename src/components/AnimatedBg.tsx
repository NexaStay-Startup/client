import { motion } from "motion/react";
import svgPaths from "../svgs/Background/BackSvg";

function Group1() {
  return (
    <div className="absolute inset-[13.07%_22.64%_13.17%_23.77%]">
      <div className="absolute inset-[-56.49%_-42.98%_-43.29%_-51.83%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1504 1415">
          <g id="Group 1">
            <g filter="url(#filter0_f_2_78)" id="Rectangle 1">
              <motion.rect
                fill="var(--fill-0, #001AFF)"
                height="243.237"
                transform="matrix(0.861705 0.507409 -0.493 0.87003 519.916 400)"
                width="240.914"
                animate={{
                  x: [0, 80, -60, 0],
                  y: [0, -50, 30, 0],
                  rotate: [0, 8, -6, 0],
                  scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transform: "translateZ(0)",
                }}
              />
            </g>
            <g filter="url(#filter1_f_2_78)" id="Ellipse 1">
              <motion.ellipse
                cx="933.552"
                cy="615.411"
                fill="var(--fill-0, #00C2FF)"
                rx="169.883"
                ry="173.178"
                animate={{
                  cx: [933.552, 983.552, 883.552, 933.552],
                  cy: [615.411, 665.411, 565.411, 615.411],
                  scale: [1, 1.15, 0.9, 1],
                  opacity: [0.8, 1, 0.7, 0.8],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{
                  transform: "translateZ(0)",
                }}
              />
            </g>
            <g filter="url(#filter2_f_2_78)" id="Star 1">
              <motion.path
                d={svgPaths.p6021f80}
                fill="var(--fill-0, #DB00FF)"
                animate={{
                  x: [0, -60, 45, 0],
                  y: [0, 40, -30, 0],
                  rotate: [0, 25, -20, 0],
                  scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                style={{
                  transform: "translateZ(0)",
                }}
              />
            </g>
            <g filter="url(#filter3_f_2_78)" id="Polygon 1">
              <motion.path
                d={svgPaths.p129ad580}
                fill="var(--fill-0, #00FFA3)"
                animate={{
                  x: [0, 70, -50, 0],
                  y: [0, -45, 35, 0],
                  rotate: [0, -15, 18, 0],
                  scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                style={{
                  transform: "translateZ(0)",
                }}
              />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1133.87" id="filter0_f_2_78" width="1127.51" x="3.22901e-06" y="-4.57764e-05">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_2_78" stdDeviation="200" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1146.36" id="filter1_f_2_78" width="1139.77" x="363.669" y="42.233">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_2_78" stdDeviation="200" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1254.76" id="filter2_f_2_78" width="1269.07" x="20.7974" y="108.41">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_2_78" stdDeviation="200" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1127.71" id="filter3_f_2_78" width="1085.5" x="329.578" y="286.921">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_2_78" stdDeviation="200" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function AnimatedBg() {
  return (
    <div className="bg-white overflow-clip rounded-[14px] size-full z-0 fixed inset-0">
      <Group1 />
      <div className="absolute bg-gradient-to-b bottom-[76.28%] from-[#ffffff] left-0 right-0 to-[rgba(255,255,255,0)] top-0" />
    </div>
  );
}
