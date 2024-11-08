import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Mouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const scaleControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const divAndATags = document.querySelectorAll("div, a");
    divAndATags.forEach((el) => {
      const handleMouseEnter = () => scaleControls.start({ scale: 2 });
      const handleMouseLeave = () => scaleControls.start({ scale: 1 });

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [scaleControls]);

  return (
    <motion.div
      className="fixed w-12 h-12 bg-[#FFFFFF00] rounded-full rounded-full pointer-events-none"
      animate={{
        x: position.x - 25,
        y: position.y - 25,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      <motion.div
        className="w-full h-full bg-[#4D6CBF22] border-[#4D6CBF] border-2 rounded-full"
        animate={scaleControls}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </motion.div>
  );
}

