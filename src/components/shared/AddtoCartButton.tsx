import { FC, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { useModalState } from "@/hooks/useModalState";

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
  const { toast } = useToast();
  const { openCartModal } = useModalState();

  const handleAddToCart = () => {
    setIsClicked(true);
    addToCart({ ...product, quantity: 1 });
    setTimeout(() => setIsClicked(false), 300);

    toast({
      title: "Item Added to Cart",
      description: `${product.name} has been added to your cart.`,
      action: <Button onClick={openCartModal}>View Cart</Button>,
    });
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: isClicked ? 1.1 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <Button variant="addtoCart" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </motion.div>
  );
};

export default AddToCartButton;
