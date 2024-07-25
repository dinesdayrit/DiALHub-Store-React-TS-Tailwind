import { FC } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { Button } from "../ui/button";

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

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return <Button onClick={handleAddToCart}>Add to cart</Button>;
};

export default AddToCartButton;
