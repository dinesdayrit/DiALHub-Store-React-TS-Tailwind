import { useModalState } from "@/hooks/useModalState"

export default function MyCart() {
   const { closeCartModal} = useModalState()
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
    <div className="relative flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-xl">
    <h1>My Cart</h1>
    <div className="p-12">
        <p>Item 1</p>
        <p>Item 2</p>
        <button>Checkout</button>
        <button onClick={closeCartModal}>Close</button>
    </div>
    </div>
    </div>
  )
}
