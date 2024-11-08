import Image from "next/image";
import { motion } from "framer-motion";

import { Finlandica, Baloo_Bhai_2 } from "next/font/google";
import { examples } from "@/examples/examples.json";

const finlandica = Finlandica({ subsets: ["latin"] });
const balooBhai = Baloo_Bhai_2({ subsets: ["latin"], weight: ["800"] });

export default function About() {
  const { entries } = examples;

  return (
    <>
      <div className="flex justify-center gap-10 px-12 flex-col md:flex-row items-center">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="py-20 px-12 text-left bg-[#FFFFFF22] border-[#6797E622] border-[3px] rounded-xl"
        >
          <h1
            className={`${balooBhai.className} text-5xl md:text-6xl text-[#6797E6] relative`}
          >
            <span className="absolute text-[#6763D5] outline-text">
              What is this about?
            </span>
            <span className="relative text-[#6797F6]">What is this about?</span>
          </h1>

          <p
            className={`py-16 text-ms md:text-2xl w-4/5 ${finlandica.className}`}
          >
            Make a CSS animation! Using CSS only make an animation in{" "}
            <a href="https://codepen.io/" className="text-[#4D6CBF]">
              Codepen!
            </a>{" "}
            <br />
            In return we’ll ship you either Art supplies or Goodnotes Premium
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image src={"/stickers.png"} alt="" width="400" height="100" />
        </motion.div>
      </div>

      <div className="-rotate-[5deg] -mt-[10vh]">
        <article className="wrapper w-[100vw]">
          <div className="marquee">
            <div className="marquee__group">
              {entries.map((e, index) => (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href={e.link}
                  key={index}
                  className="p-2 bg-[#FFFFFF44] rounded"
                >
                  <div className="p-4">
                    <img
                      src={`${e.link}/image/large.png`}
                      alt={`${e.author}'s demo image`}
                      className="w-[20vw] rounded"
                    />
                  </div>
                  <p
                    className={`pt-2 p-4 text-xs md:text-ms ${finlandica.className}`}
                  >
                    Created by: {e.author}
                  </p>
                </motion.a>
              ))}
            </div>

            <div aria-hidden="true" className="marquee__group">
              {entries.map((e, index) => (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href={e.link}
                  key={index}
                  className="p-2 bg-[#FFFFFF44] rounded"
                >
                  <div className="p-4">
                    <img
                      src={`${e.link}/image/large.png`}
                      alt={`${e.author}'s demo image`}
                      className="w-[20vw] rounded"
                    />
                  </div>
                  <p className={`pt-2 p-4 text-ms ${finlandica.className}`}>
                    Created by: {e.author}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
