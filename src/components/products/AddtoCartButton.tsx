import { FC } from "react";
import { useCartStore } from "@/hooks/useCartStore";

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

  return (
    <button
      onClick={handleAddToCart}
      className="bg-green-500 hover:bg-green-500/90 p-3 rounded-lg text-white hover:font-medium"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
