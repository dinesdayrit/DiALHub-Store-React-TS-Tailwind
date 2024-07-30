import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(herobg.jpg)" }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold font-serif text-slate-100 text-3xl md:text-7xl">
            The DiAL Hub
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
