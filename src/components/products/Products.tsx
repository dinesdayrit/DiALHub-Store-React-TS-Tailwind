import DUMMY_PRODUCTS from "@/DummyProducts";
import AddToCartButton from "../shared/AddtoCartButton";

const Products = () => {
  return (
    <div className="flex flex-col items-center p-8 gap-4">
      <h1 className="font-bold text-4xl">PRODUCTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-4 border rounded-md shadow-md">
        {DUMMY_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg flex flex-col items-center shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[25rem] object-cover rounded-t-lg flex-shrink-0"
            />
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
  );
};

export default Products;
