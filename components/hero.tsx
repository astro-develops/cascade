import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <span className="flex flex-col justify-center items-center p-24">
        <motion.div
          initial={{ scale: 3 }}
          whileHover={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image src="/cascade.svg" alt="" width={500} height={0} />
        </motion.div>
        <span className="flex flex-row gap-10 mt-6 -mb-20">
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: -5, background: "#EFB9785a" }}
            className="border-[#EFB978] border-2 px-4 py-2 rounded text-sm text-center text-[#000]"
            href="https://cascade.hackclub.com/"
          >
            Actual Site
          </motion.a>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5, background: "#CBB8E55a" }}
            className="bg-[#CBB8E5] border-[#CBB8E5] border-2 px-4 py-2 whitespace-nowrap text-center rounded text-sm text-[#000]"
            href="https://forms.hackclub.com/cascade"
          >
            Submit your Application!
          </motion.a>
        </span>
      </span>

      <motion.svg
        preserveAspectRatio="xMidYMid slice"
        width="100vw"
        height="110vh"
        viewBox="0 0 1440 721"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 0,
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          strokeLinecap="round"
          className="stroke-[#9D9BFF] stroke-[40px]  md:translate-x-0 -translate-x-32"
          d="M1 651C79.9293 592.512 155.286 548.641 237.652 496.147C335.085 434.051 422.239 378.518 522.874 323.295C592.39 285.148 664.098 254.991 738.225 227.432C808.689 201.235 882.478 173.979 957.156 162.693C969.348 160.851 1002.35 154.527 1015.42 165.682C1042.44 188.74 990.278 243.006 979.444 257.689C976.611 261.528 951.957 291.088 948.669 301.894C943.453 319.036 978.819 317.261 983.115 317.059C1058.94 313.495 1135.06 272.311 1199 234.701C1274.6 190.233 1371.71 100.142 1440 45.5"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: 0,
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          strokeLinecap="round"
          className="stroke-[#9EBB81] stroke-[10px] md:translate-x-0 -translate-x-32"
          d="M1 611C79.9293 552.512 155.286 508.641 237.652 456.147C335.085 394.051 422.239 338.518 522.874 283.295C592.39 245.148 664.098 214.991 738.225 187.432C808.689 161.235 882.478 133.979 957.156 122.693C969.348 120.851 1002.35 114.527 1015.42 125.682C1042.44 148.74 990.278 203.006 979.444 217.689C976.611 221.528 951.957 251.088 948.669 261.894C943.453 279.036 978.819 277.261 983.115 277.059C1058.94 273.495 1135.06 232.311 1199 194.701C1274.6 150.233 1371.71 60.1415 1440 5.5"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: 0,
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          strokeLinecap="round"
          className="stroke-[#DB99B7] stroke-[20px] md:translate-x-0 -translate-x-32"
          d="M1 711C79.9293 652.512 155.286 608.641 237.652 556.147C335.085 494.051 422.239 438.518 522.874 383.295C592.39 345.148 664.098 314.991 738.225 287.432C808.689 261.235 882.478 233.979 957.156 222.693C969.348 220.851 1002.35 214.527 1015.42 225.682C1042.44 248.74 990.278 303.006 979.444 317.689C976.611 321.528 951.957 351.088 948.669 361.894C943.453 379.036 978.819 377.261 983.115 377.059C1058.94 373.495 1135.06 332.311 1199 294.701C1274.6 250.233 1371.71 160.142 1440 105.5"
        />
      </motion.svg>
    </>
  );
}
