import { Outlet } from "react-router-dom"
import MainNavigation from "@/components/common/MainNavigation.tsx"

export default function Root () {
    return (
        <div>

            <MainNavigation />
  
            <main>
                <Outlet />
            </main>
            
        </div>
    )
}