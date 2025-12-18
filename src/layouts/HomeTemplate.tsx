import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Suspense để hiện Loading khi chuyển trang (do dùng lazy load) */}
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
