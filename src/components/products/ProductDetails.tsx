import { useParams } from "react-router-dom";
import DUMMY_PRODUCTS from "@/DummyProducts";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  console.log("okay pero dili");
  // Find product by ID
  const product = DUMMY_PRODUCTS.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[30rem] object-cover rounded-lg"
      />
      <p className="text-lg text-gray-600 mt-4">{product.description}</p>
      <p className="text-2xl font-bold mt-4">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
