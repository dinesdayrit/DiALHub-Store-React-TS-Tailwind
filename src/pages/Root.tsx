import { Outlet } from "react-router-dom"
import MainNavigation from "../components/common/MainNavigation"

export default function Root () {
    return (
        <div>

            <MainNavigation />
  
            <main className="bg-stone-200 z-0">
                <Outlet />
            </main>
            
        </div>
    )
}