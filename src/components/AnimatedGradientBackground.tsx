import React from "react";
import { motion } from "framer-motion";

export default function AnimatedGradientBackground() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.95, 1],
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="fixed inset-0 z-0 w-full h-full bg-[linear-gradient(120deg,_#fde9d9,_#cffaf3,_#cfd8ff,_#d9c7fd)] bg-[length:200%_200%] animate-gradient-blur"
    />
  );
}
