import { Outlet } from "react-router-dom";
import MainNavigation from "@/components/common/MainNavigation.tsx";
import { useModalState } from "@/hooks/useModalState";
import MyCart from "@/components/modals/MyCart";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import Spinner from "@/components/shared/Spinner";

export default function Root() {
  const { isCartModalOpen } = useModalState();
  return (
    <div>
      <MainNavigation />

      <main>
        <Suspense fallback={<Spinner type="lazyLoad" />}>
          <Outlet />
        </Suspense>

        {isCartModalOpen && <MyCart />}
      </main>
      <footer className="bg-slate-800">
        <Footer />
      </footer>
    </div>
  );
}
