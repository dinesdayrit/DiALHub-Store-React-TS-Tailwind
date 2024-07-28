import { FC, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    color?: string;
    status?: string;
  };
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    setIsClicked(true);
    addToCart({ ...product, quantity: 1 });
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: isClicked ? 1.1 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <Button onClick={handleAddToCart}>Add to cart</Button>
    </motion.div>
  );
};

export default AddToCartButton;
