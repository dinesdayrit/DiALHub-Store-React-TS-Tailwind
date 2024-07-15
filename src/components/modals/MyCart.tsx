import { useModalState } from "@/hooks/useModalState";
import { Button } from "../ui/button";

export default function MyCart() {
  const { closeCartModal } = useModalState();
  const cartItems = [
    {
      id: 1,
      name: "NuPhy Air75",
      price: 3000.0,
      image: "/nuphyAir.png",
      color: "Space Gray",
      status: "In Stock",
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shipping = 16.0;
  const vat = subtotal * 0.2;
  const total = subtotal + shipping + vat;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-slide-up-fade-in">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl">
        <div
          className="absolute top-3 right-3 p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={closeCartModal}
        >
          &times;
        </div>
        <h1 className="mb-4 text-2xl font-semibold text-gray-800">
          Shopping Cart
        </h1>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b border-gray-200 py-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 rounded"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.color}</p>
              <p className="text-sm text-green-500">{item.status}</p>
              <div className="mt-2 flex items-center space-x-2">
                <button className="p-1 text-gray-600 hover:text-gray-800">
                  Remove
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <button className="h-8 w-8 border border-gray-200 text-gray-600">
                -
              </button>
              <span className="mx-2">1</span>
              <button className="h-8 w-8 border border-gray-200 text-gray-600">
                +
              </button>
            </div>
            <p className="ml-4 text-lg font-medium text-gray-800">
              ${item.price.toFixed(2)}
            </p>
          </div>
        ))}
        <div className="mt-4 space-y-2 text-right">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>VAT (20%)</span>
            <span>${vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-semibold text-gray-800">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button className="mt-6 w-full">Proceed to Checkout</Button>
      </div>
    </div>
  );
}
