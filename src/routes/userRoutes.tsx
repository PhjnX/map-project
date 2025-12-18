import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import HomeTemplate from "../layouts/HomeTemplate";
import ProtectedRoute from "./protected-route";

// Lazy load các page
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));
const OrderPage = lazy(() => import("../pages/OrderPage"));

// Import CategoryPage
const CategoryPage = lazy(() => import("../pages/CategoryPage"));

const userRoutes: RouteObject = {
  path: "/",
  element: <HomeTemplate />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "about", element: <AboutPage /> },

    // Route chi tiết sản phẩm
    { path: "product/:id", element: <ProductDetailPage /> },

    // Route trang Order
    { path: "order", element: <OrderPage /> },

    // --- ROUTE QUAN TRỌNG ĐÃ SỬA ---
    // Dùng chung 1 cấu trúc /collections/:slug cho cả danh mục con và trang "All Products"
    { path: "collections/:slug", element: <CategoryPage /> },

    {
      element: <ProtectedRoute />,
      children: [{ path: "profile", element: <ProfilePage /> }],
    },
  ],
};

export default userRoutes;
