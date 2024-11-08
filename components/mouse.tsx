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
    const divAndATags = document.querySelectorAll("a");
    divAndATags.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        scaleControls.start({ scale: 2 });
      });
      el.addEventListener("mouseleave", () => {
        scaleControls.start({ scale: 1 });
      });
    });
  }, [scaleControls]);

  return (
    <motion.div
      className="fixed z-[-1] bg-[#FFFFFF00] border-none w-12 h-12 border-2 rounded-full pointer-events-none"
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
        className="fixed z-[-1] w-12 h-12 bg-[#4D6CBF22] border-[#4D6CBF] border-2 rounded-full pointer-events-none "
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

//fixed z-[-1] w-12 h-12 bg-[#4D6CBF22] border-[#4D6CBF] border-2 rounded-full pointer-events-none
