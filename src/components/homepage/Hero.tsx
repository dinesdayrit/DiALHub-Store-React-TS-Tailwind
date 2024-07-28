import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const imageVariants: Variants = {
    hidden: { rotateY: 120 },
    visible: {
      rotateY: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(herobg.jpg)" }}
      >
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariants}
          src="/dial-logo.png"
          className="absolute w-[5rem] md:w-[10rem] 2xl:w-[20rem] z-30 py-8 px-4"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold font-serif text-slate-100 text-3xl md:text-7xl">
            DiAL Hub Shop!
          </h1>
          <p className="text-slate-200 text-xl">Smart Shop</p>
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
              Shop now <ArrowUpRight />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
