import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import DUMMY_PRODUCTS from "@/DummyProducts";
import AddToCartButton from "../shared/AddtoCartButton";
import Sorting from "./Sorting";

import { useState } from "react";

export default function Products() {
  const [sortOrder, setSortOrder] = useState<string>("low-to-high");

  const sortedProducts = [...DUMMY_PRODUCTS].sort((a, b) => {
    return sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col p-8 gap-4 max-w-7xl">
        <h1 className="font-bold text-4xl text-center">PRODUCTS</h1>
        <div className="w-full">
          <Sorting sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-4 border rounded-md shadow-md">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="max-w-sm flex flex-col justify-between h-full"
            >
              <div className="h-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow justify-between p-4">
                <Link to={`/products/${product.id}`}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </Link>
                <div className="mb-5 mt-2.5 flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <AddToCartButton
                    product={{ ...product, id: Number(product.id) }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
