import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const h1textVariants: Variants = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  const pVariants: Variants = {
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };

  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(herobg.jpg)" }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
        <div className="flex flex-col items-center">
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={h1textVariants}
            className="font-semibold font-serif text-[#F4E7FB] text-4xl md:text-7xl"
          >
            The DiAL Hub
          </motion.h1>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={pVariants}
            className="text-[#06D6A0] text-3xl md:text-5xl font-bold font-moontime"
          >
            Smart Shop
          </motion.p>
          <p className="mt-4 text-slate-100 text-center px-8">
            Experience the Ultimate Shopping Destination, Where Innovation Meets
            Style for Unmatched Convenience and Quality! <br />
            <span className="text-xl mt-2 uppercase">Happy Shopping</span>
          </p>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="mt-4"
          >
            <Button>
              SHOP NOW <ArrowUpRight />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
