import { Outlet } from "react-router-dom"
import MainNavigation from "@/components/common/MainNavigation.tsx"
import { useModalState } from "@/hooks/useModalState"
import MyCart from "@/components/modals/MyCart"

export default function Root () {
    const { isCartModalOpen } = useModalState()
    return (
        <div>

            <MainNavigation />
  
            <main>
                <Outlet />
                {
                    isCartModalOpen && <MyCart />
                }
            </main>
            
        </div>
    )
}