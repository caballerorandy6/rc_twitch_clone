"use client";

import { motion } from "framer-motion";

type Props = {
  size?: "small" | "medium" | "large";
};

const sizeClasses = {
  small: "h-4 w-4",
  medium: "h-8 w-8",
  large: "h-12 w-12",
};

export function LoadingSpinner({ size = "medium" }: Props) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} rounded-full border-2 border-[#199AFC] border-t-transparent`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
