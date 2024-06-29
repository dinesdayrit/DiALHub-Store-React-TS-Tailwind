import { useModalState } from "@/hooks/useModalState"
import { Button } from "../ui/button"

export default function MyCart() {
   const { closeCartModal} = useModalState()
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
    <div className="relative flex flex-col items-center justify-center rounded-lg bg-white p-5 shadow-xl">
    <div className="absolute top-0 right-0 p-2 cursor-pointer" onClick={closeCartModal}>X</div>
    <h1>My Cart</h1>
    <div className="p-12">
        <p>Item 1</p>
        <p>Item 2</p>
        <Button>Proceed to checkout</Button>
       
    </div>
    </div>
    </div>
  )
}
