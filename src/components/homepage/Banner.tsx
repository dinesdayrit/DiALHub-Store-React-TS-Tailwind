import { motion, Variants } from "framer-motion";

export default function Banner() {
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
    <div>
      <div className="relative">
        <img
          src="/banner-bg.png"
          className="max-h-[43rem]  w-full animate-slide-up-fade-in"
        />
        <div></div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariants}
          src="/dial-logo.png"
          className=" w-[5rem] lg:w-[20rem] z-1 absolute  lg:top-10 top-5"
        />
      </div>
    </div>
  );
}
