"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundCode = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div className={cn("relative min-h-screen bg-white text-black", className)}>
      <AnimatedCodeBackground svgOptions={svgOptions} />
      {children}
    </div>
  );
};

const codeSnippets = [
  "const add = (a, b) => a + b;",
  "const multiply = (a, b) => a * b;",
  "function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); }",
  "const fetchData = async (url) => { const res = await fetch(url); return res.json(); };",
  "class User { constructor(name, age) { this.name = name; this.age = age; } }",
  "const isEven = (num) => num % 2 === 0;",
  "const colors = ['red', 'blue', 'green', 'yellow'];",
  "const greet = (name) => `Hello, ${name}!`;",
  "const debounce = (func, delay) => { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => func(...args), delay); }; };",
];

const colors = [
  "#FF5733", // Red-Orange
  "#33FF57", // Green
  "#5733FF", // Blue
  "#FFD700", // Gold
  "#00CED1", // DarkTurquoise
  "#FF69B4", // HotPink
  "#7FFF00", // Chartreuse
  "#DC143C", // Crimson
  "#1E90FF", // DodgerBlue
];

const AnimatedCodeBackground = ({ svgOptions }: { svgOptions?: { duration?: number } }) => {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.18 }} // Slightly more visible but still subtle
      transition={{ duration: 1 }}
    >
      {codeSnippets.map((code, idx) => (
        <motion.div
          key={idx}
          className="absolute text-xs md:text-sm font-mono opacity-90"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            color: colors[idx % colors.length],
          }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: -120 }}
          transition={{
            duration: svgOptions?.duration || 3, // Faster animation speed
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2, // More frequent appearances
          }}
        >
          {code}
        </motion.div>
      ))}
    </motion.div>
  );
};
