"use client";

import { motion } from "framer-motion";
import { Finlandica, Baloo_Bhai_2 } from "next/font/google";

import Mouse from "@/components/mouse";
import Hero from "@/components/hero";
import About from "@/components/about";
import Steps from "@/components/steps";
import "./globals.css";

const finlandica = Finlandica({ subsets: ["latin"] });
const balooBhai = Baloo_Bhai_2({ subsets: ["latin"], weight: ["800"] });

export default function Home() {
  return (
    <div>
      {/* <div className="">
        <Image
          src={"/bg.svg"}
          alt=""
          width="0"
          height="0"
          className="absolute sm:scale-y-[1] scale-y-[10] w-[100vw] z-[-1]"
        />
      </div> */}

      <Mouse />
      <Hero />
      <About />
      <Steps />

      <motion.div
        whileHover={{ scale: 1.03, rotate: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="py-20 md:-mt-[10vh] px-12 mx-24 text-left bg-[#FFFFFF22] border-[#6797E622] border-[3px] rounded-xl"
      >
        <h1
          className={`${balooBhai.className} text-5xl md:text-6xl text-[#6797E6] relative`}
        >
          <span className="absolute text-[#6763D5] outline-text">Criteria</span>
          <span className="relative text-[#6797F6]">Criteria</span>
        </h1>

        <p
          className={`pt-16 pb-4 text-ms md:text-2xl w-4/5 md:leading-[3rem] leading-[2rem] ${finlandica.className} font-light`}
        >
          <span className="border-b-2 border-[#000] hover:border-[#4D6CBF] hover:text-[#4D6CBF] ease-in-out duration-300 font-medium">
            Creativity
          </span>
          : How creative the animation is.
          <br />
          <span className="border-b-2 border-[#000] hover:border-[#4D6CBF] hover:text-[#4D6CBF] ease-in-out duration-300 font-medium">
            Visual Appeal
          </span>
          : The animation should look good.
          <br />
          <span className="border-b-2 border-[#000] hover:border-[#4D6CBF] hover:text-[#4D6CBF] ease-in-out duration-300 font-medium">
            Elements
          </span>
          : Must use 2+ elements like text, shapes, and colors.
          <br />
          <span className="border-b-2 border-[#000] hover:border-[#4D6CBF] hover:text-[#4D6CBF] ease-in-out duration-300 font-medium">
            Uniqueness
          </span>
          : Must be unique. (Cannot do a project similar to someone else's).
          <br />
        </p>
      </motion.div>

      <div
        className={`p-24 text-center ${finlandica.className} text-3xl rotate-[1deg] leading-[3rem]`}
      >
        Got questions? Check out
        <a
          href="https://hackclub.slack.com/archives/C07QA8HD48N"
          className="underline decoration-2 underline-offset-[0.5rem] decoration-wavy hover:text-[#4D6CBF] ease-in-out duration-300 px-2"
        >
          #cascade-ysws
        </a>
        or our
        <a
          href="https://hackclub.slack.com/docs/T0266FRGM/F07UZPYHNT1"
          className="underline decoration-2 underline-offset-[0.5rem] decoration-wavy hover:text-[#4D6CBF] ease-in-out duration-300 px-2"
        >
          FAQ
        </a>
      </div>
    </div>
  );
}
