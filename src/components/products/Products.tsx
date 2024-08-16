import { Link } from "react-router-dom";
import DUMMY_PRODUCTS from "@/DummyProducts";
import AddToCartButton from "../shared/AddtoCartButton";
import Sorting from "./Sorting";
import { useState } from "react";

const ProductsPage = () => {
  const [sortOrder, setSortOrder] = useState<string>("low-to-high");

  const sortedProducts = [...DUMMY_PRODUCTS].sort((a, b) => {
    return sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  p-8 gap-4 max-w-7xl">
        <h1 className="font-bold text-4xl text-center">PRODUCTS</h1>

        <div className="w-full">
          <Sorting sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-4 border rounded-md shadow-md">
          {sortedProducts.map((product) => (
            <div className="border rounded-lg flex flex-col items-center shadow-lg">
              <Link to={`/products/${product.id}`} key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[25rem] object-cover rounded-t-lg flex-shrink-0"
                />
              </Link>
              <div className="flex flex-col items-center justify-center w-10/12 h-40">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>

                <AddToCartButton
                  product={{ ...product, id: Number(product.id) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
