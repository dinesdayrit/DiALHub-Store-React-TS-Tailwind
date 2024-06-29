import { useModalState } from "@/hooks/useModalState";
import { Button } from "../ui/button";

export default function MyCart() {
  const { closeCartModal } = useModalState();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col items-center justify-center w-full max-w-lg rounded-lg bg-white p-8 shadow-xl">
        <div
          className="absolute top-3 right-3 p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={closeCartModal}
        >
          &times;
        </div>
        <h1 className="mb-4 text-2xl font-semibold text-gray-800">My Cart</h1>
        <div className="w-full border-t border-gray-200 p-4">
          <p className="mb-2 text-gray-700">Item 1</p>
          <p className="mb-2 text-gray-700">Item 2</p>
        </div>
        <Button className="mt-6 w-full">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
