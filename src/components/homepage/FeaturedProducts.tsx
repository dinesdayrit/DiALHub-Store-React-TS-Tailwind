import { FC } from "react";
import { Link } from "react-router-dom";
import DUMMY_PRODUCTS from "@/DummyProducts";
import AddToCartButton from "../shared/AddtoCartButton";
import { motion, Variants } from "framer-motion";

const FeaturedProducts: FC = () => {
  // Get the first three products
  const featuredProducts = DUMMY_PRODUCTS.slice(0, 3);

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="flex flex-col items-center mt-16 mb-16 justify-center">
      <h1 className="mb-4 text-3xl md:text-5xl">Featured Products...</h1>

      <div className="flex flex-col justify-center items-center mt-16">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
          variants={cardVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6"
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={product.image}
                alt={product.name}
                width={300}
                className="h-1/2 w-10/12 rounded-lg mb-4"
              />

              <div className="flex flex-col items-center justify-center w-10/12 h-40">
                <h2 className="text-center font-bold">{product.name}</h2>
                <p className="text-center">{product.description}</p>
                <p className="text-center">
                  Price: ${product.price.toFixed(2)}
                </p>
                <AddToCartButton
                  product={{ ...product, id: Number(product.id) }}
                />
              </div>
            </div>
          ))}
        </motion.div>
        <Link className="hover:text-green-500 hover:font-medium" to="products">
          More Products &gt;&gt;
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
